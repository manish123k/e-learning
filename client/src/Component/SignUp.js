import React from "react";
import './SignUp.css'
import Login from "./login";
import Navbar from "./nav-bar";
function SignUp() {
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
                        <input required type="text" placeholder="Username" className="tb"></input><br />
                        <input required type="text" placeholder="Email" className="tb"></input><br />
                        <input required type="password" placeholder="Create password" className="tb"></input><br />
                        <input required type="password" placeholder="Confirm Password" className="tb"></input><br/><br/>
                        <button className="btn">Signup</button><br/><br/>
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