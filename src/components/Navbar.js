// import React from "react";
import { Link } from "react-router-dom"; // Importing Link for internal navigation

// Navbar functional component
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navbar text container */}
      <div className="navbar__text">
        {/* Logo section */}
        <div className="logo">
          {/* Logo image */}
          <img src="/img1/IEMECH_logo.png" alt="IEMECH Logo" />
        </div>

        {/* Navigation links */}
        <ul className="navbar__ul">
          {/* Home link, uses React Router's Link for internal routing */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Domains section link, navigates to a specific section on the page */}
          <li>
            <a href="#domains">Domains</a>
          </li>
          {/* Team section link, navigates to the Team section */}
          <li>
            <a href="#board">Team</a>
          </li>
          {/* Events page link, uses React Router's Link for internal routing */}
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/alumnipage">Alumni</Link>
          </li>
          {/* Contact section link, navigates to the footer */}
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
