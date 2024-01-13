import React from "react";
import Navbar from "./nav-bar";
import Footer from "./footer";
import {Programing,Backend} from './programing';
function Home(){
    return(
        <div>
        <div><Navbar/></div>
      <h1>Programing language</h1>
      <div><Programing /></div>
      <h1>Backend language</h1>
      <div><Backend /></div>
      <Footer />
        </div>
    )
}
export default Home;