import React, { useState } from "react";
import './SignUp.css'
import Navbar from "./nav-bar";
function SignUp() {
    const [email,setEmail]=useState('')
    const [emailValid,setEmailValid]=useState(true);
    const [pass,setPass]=useState('')
    const [cnfpass,setCnfPass]=useState('')
    const setPassword=(e)=>{
        setPass(e.target.value);
    }
    const matchPassword=(e)=>{
        setCnfPass(e.target.value)
        if(pass!==e.target.value){
            document.getElementById("confPass").innerHTML="Password not match"        }
        else{
            document.getElementById("confPass").innerHTML=""
        }
    }
    const emailValidation=(e)=>{
        setEmail(e.target.value);
        const regX=/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
        setEmailValid(regX.test(email))
        console.log(emailValid)
    }
    const createUser=(e)=>{
        if(!emailValid || pass!==cnfpass){
            document.getElementById("confPass").innerHTML="Please Enter valid email/password" 
        }else{
            document.getElementById("confPass").innerHTML="perfect" 
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
                        <input required type="text" placeholder="Username" className="tb"></input><br />
                        <input required type="text" placeholder="Email" className="tb" onChange={emailValidation}></input><br />
                        <input required type="password" placeholder="Create password" className="tb" onChange={setPassword}></input><br />
                        <input required type="password" placeholder="Confirm Password" className="tb" onChange={matchPassword}></input>
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