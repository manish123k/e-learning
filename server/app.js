const express = require('express');
const bodyparser=require('body-parser')
const bcrypt=require('bcrypt')
const nodemailer=require("nodemailer")
const app = express();
const { MongoClient } = require('mongodb');
const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());
const username = 'manishksbth';
const password = 'Yky9wINY9k6k5gex';
const dbName = 'e-learning';
const collectionName = 'User';
var verificationTokens = {"otp":""};
var signupInfo={"username":"","email":"","password":""};

// Replace <username> and <password> in the connection string with your actual credentials
const uri = `mongodb+srv://${username}:${password}@e-learning.0qjmvn2.mongodb.net/`;

async function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}


app.post('/signup',async(req,res)=>{
    const {username,email,password,confirmpassword}=req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to MongoDB
    try{
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db(dbName);
    const usersCollection = database.collection(collectionName);

    // Check if the username already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Generate OTP and store it
    const otp = await generateOTP();
    verificationTokens[email]=otp;

    //send mail for otp
    console.log(`Generated OTP for ${email}: ${otp} --- ${verificationTokens[email]}`);
    const verificationMessage = `Your OTP for registration is: ${otp}`;

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bikeshbikesh94@gmail.com', // Replace with your Gmail address
        pass: 'xsgfqflzihhfezwn', // Replace with your Gmail password
      },
    });

    const mailOptions = {
      from: "bikeshbikesh94@gmail.com", // Replace with your Gmail address
      to: email,
      subject: 'OTP for Registration',
      text: verificationMessage,
    };

    await transporter.sendMail(mailOptions);


    // Insert the new user
    signupInfo['username']=username;
    signupInfo['email']=email;
    signupInfo['password']=hashedPassword;
    //signupInfo={ username,email, password: hashedPassword }
    
    res.status(200).json("OTP Generated sucessfully!")
    // Close the MongoDB connection
    await client.close();
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

});

app.post('/otp_verification',async (req,res)=>{
  try{
    console.log(verificationTokens,signupInfo)
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const database = client.db(dbName);
    const usersCollection = database.collection(collectionName);
    console.log(req.body)
    const otp = req.body.otp;
    const email=signupInfo["email"];
    const storedOTP=verificationTokens[email];
    console.log(email,parseInt(otp, 10))
    if (!storedOTP || storedOTP !== parseInt(otp, 10)) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    // OTP is valid, you can proceed with user verification
    // For simplicity, let's log the verification in the console
    console.log(`User with email ${email} has been verified.`);

    // Remove the verification token from storage
    delete verificationTokens[email];

    //res.json({ success: 'OTP verification successful' });
    await usersCollection.insertOne(signupInfo);
    await client.close();
    res.status(201).json({ success: 'User registered successfully' });
    
  }
  catch(error){
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});