import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img  src="/img1/IEMECH_logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#domains">Domains</a>
          </li>
          <li>
            <a href="#board">Team</a>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/alumni">Alumni</Link>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
