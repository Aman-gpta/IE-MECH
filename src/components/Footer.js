import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../img/IEMECH_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
        <Link to="/">
            <img src={Logo} alt="IE Mechanical Logo" />
          </Link>
        </div>
        <p className="footer__description">
        The IE Mechanical Chapter at MIT Manipal enriches learning with workshops, competitions, and research grants, bridging theory with practice in mechanical engineering. It fosters innovation and prepares students for professional challenges.
        </p>
        <div className="footer__contact">
          <h4 className="footer__heading">Contact Us:</h4>
          <ul className="footer__contact-list">
            <li>
              <a href="mailto:iemechanical.mit@manipal.edu" className="footer__email">
                  iemechanical.mit@manipal.edu
              </a>
            </li>
            <li>
                <a className='instagram-icon' href='https://www.instagram.com/iemech_manipal/'><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
