
// Navbar.js

import React, { useState, useEffect } from 'react';
import './navbar.css';
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` shadow2 navbar ${isSticky ? 'sticky' : ''}`}>
      {/* Your navigation bar content goes here */}
        <a href='#home'>
          <img src='client/src/images/logo.jpg' alt='logo'/>
        </a>
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="auth-buttons">
            <a className="login-btn" href='/login'>Login</a>
            <a className="signup-btn" href='/signUp'>Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
