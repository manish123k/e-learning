import React from 'react'
import './otpVerifyForm.css'
function otpverifyForm(){
    return(
        <div>
        <div className="otpVerifyForm">
        <div className="container">
            <div className="col rounded shadow1">
                <h2 className="text-center" style={{ fontSize: "18px" }}>
                Please enter the Otp sent to your email deepakjyoti5556@gmail.com?
                </h2>
                <div>
                    <input required type="text" placeholder="Enter OTP" className="tb"></input>
                    <label className='lb1'>1:00</label>
                    <br />
                    <div id="confPass"></div>
                    
                    <button className="btn">Verify</button>
                    <button className="btn">Cancel</button><br/><br/>
                    <a className='lb' href=''>Resend OTP?</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default otpverifyForm;