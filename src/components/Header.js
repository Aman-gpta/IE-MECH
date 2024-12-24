import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar/>
      <div className="banner__content">
        <div className="container_header">
          <div className="banner__text">
            {/* <h3>Innovate. Engineer. Mechanicalize.</h3> */}
            <h1>Innovate. Engineer. Mechanicalize.</h1>
            <p>
            "IE-Mechanical: Pioneering Excellence since 1961. 
            A legacy of innovation and expertise at MIT Manipal's forefront in mechanical engineering."
            </p>
            <div className="banner__btn">
              <a href="#about" className="btn btn-smart">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;