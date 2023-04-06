import React from "react";
import "../../styles/navbar/navbar.css";
// import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

function Navbar() {
  return (
    <nav className="navbar section__padding">
      <div className="navbar_logo-container">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar__text">
          <h1>MEDKIT.COM</h1>
          <p>Health is wealth</p>
        </div>
      </div>

      <ul className="navbar__links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICE</li>
        <li>CONTACT</li>
      </ul>
      <div className="navbar__auth">
        <p>Log In</p>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
