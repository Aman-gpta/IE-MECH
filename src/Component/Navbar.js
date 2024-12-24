import React from "react";
import IEMECH_logo from '../Images/IEMECH_logo.png';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src={IEMECH_logo} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#domains">Domains</a>
          </li>
          <li>
            <a href="#board">Team</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;