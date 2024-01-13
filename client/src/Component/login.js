import React from "react";
import './SignUp.css'
import Signup from '../Component/SignUp'
function SignUp() {
    return (
        <div className="login" >
            <div className="container">
                <div className="col rounded shadow1">
                    <h2 className="text-center" style={{ fontSize: "25px" }}>
                        Login
                    </h2>
                    <div>
                        <input required type="text" placeholder="Email" className="tb"></input><br /><br/>
                        <input required type="password" placeholder="Password" className="tb"></input><br /><br/>
                        <button className="btn">Login</button><br/><br/>
                        <label className="lb">Don't have an account?</label>
                        <a href="/Signup" >Signup</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;