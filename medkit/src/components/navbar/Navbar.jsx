import React from "react";
import "../../styles/navbar/navbar.css";
import logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="medkit__navbar">
      <div className="medkit__navbar-container">
        <div className="medkit___navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="medkit__navbar-heading">
          <h1>MEDKIT.COM</h1>
          <p>Health is wealth</p>
        </div>
      </div>

      <div className="medkit__navbar-links">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
          <li>Log In</li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
