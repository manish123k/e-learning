import './otpVerifyForm.css';


function otpverifyForm(){
    let otpvalue="";

  const registration = async () => {
    try {
      // Your API endpoint for user registration
      const registrationEndpoint = 'http://localhost:5000/otp_verification';

      // Make a POST request to the registration endpoint
      const otp=otpvalue;
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp,
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        const result = await response.json();
        console.log('User registered successfully:', result);
        window.location.href = "/userHome";
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
  };
    return(
        <div>
        <div className="otpVerifyForm">
        <div className="container">
            <div className="col rounded shadow1">
                <h2 className="text-center" style={{ fontSize: "18px" }}>
                Please enter the Otp sent to your email deepakjyoti5556@gmail.com?
                </h2>
                <div>
                    <input required type="text" placeholder="Enter OTP" className="tb" onChange={(e)=>{otpvalue=e.target.value}}></input>
                    <label className='lb1'>1:00</label>
                    <br />
                    <div id="confPass"></div>
                    
                    <button className="btn" onClick={registration}>Verify</button>
                    <button className="btn">Cancel</button><br/><br/>
                    <a className='lb' href='#'>Resend OTP?</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default otpverifyForm;