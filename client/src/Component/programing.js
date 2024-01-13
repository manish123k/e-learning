import React from "react";
import './programing.css';
import cplus from '../images/C++.png'
function Programing(){
    const row=[]
    for(let i=0;i<6;i++){
        row.push(
            <div className="cart">
            <div>
            <img src={cplus} alt="Denim Jeans"/>
            <p>c++</p>
            <p>Some text about the jeans..</p>
            </div>
        </div>
        );
    }
    return (
        <div className="container">
            {row}
        </div>
    );
}

function Backend(){
    const row=[]
    for(let i=0;i<6;i++){
        row.push(
            <div className="cart">
            <div>
            <img src={cplus} alt="Denim Jeans"/>
            <p>c++</p>
            <p>Some text about the jeans..</p>
            </div>
        </div>
        );
    }
    return (
        <div className="container">
            {row}
        </div>
    );
}
//export default Programing;
export{Programing,Backend}