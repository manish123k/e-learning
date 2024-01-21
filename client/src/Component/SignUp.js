import React, { useState } from "react";
import './SignUp.css'
import Navbar from "./nav-bar";
function SignUp() {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [cnfpass,setCnfPass]=useState('')
    const [username,setUsername]=useState('')
    
   
    const createUser= async(e)=>{
        if(pass!==cnfpass){
            console.log(email,pass,cnfpass)
            document.getElementById("confPass").innerHTML="Password not match" 
        }else{
            try {
                // Your API endpoint for user registration
                const registrationEndpoint = 'http://localhost:5000/signup';
          
                // Make a POST request to the registration endpoint
                const response = await fetch(registrationEndpoint, {
                  method: 'POST',
                  headers: {                                                                                                                                                                        
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username,
                    email,
                    pass,
                    cnfpass,
                  }),
                });
          
                // Check if the request was successful (status code 2xx)
                if (response.ok) {
                  const result = await response.json();
                  console.log('User registered successfully:', result);
                  window.location.href="/otpVerifyForm"
                  // Redirect or show a success message
                } else {
                  // Handle registration errors
                  const errorData = await response.json();
                  console.error('Registration failed:', errorData);
                  // Display error message to the user
                }
              } catch (error) {
                console.error('Error during registration:', error);
                // Handle unexpected errors
              }
            
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="signup">
            <div className="container">
                <div className="col rounded shadow1">
                    <h2 className="text-center" style={{ fontSize: "25px" }}>
                        Signup
                    </h2>
                    <div>
                        <input required type="text" placeholder="Username*" className="tb" onChange={(e)=>{setUsername(e.target.value)}}></input><br />
                        <input required type="text" placeholder="Email*" className="tb" onChange={(e)=>{setEmail(e.target.value)}}></input><br />
                        <input required type="password" placeholder="Create password*" className="tb" onChange={(e)=>{setPass(e.target.value)}}></input><br />
                        <input required type="password" placeholder="Confirm Password*" className="tb" onChange={(e)=>{setCnfPass(e.target.value)}}></input>
                        <div id="confPass"></div>
                        
                        <button className="btn" onClick={createUser}>Signup</button><br/><br/>
                        <label className="lb">Already have an account?</label>
                        <a href="/login" >Login</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default SignUp;