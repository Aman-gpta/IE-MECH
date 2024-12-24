import React from 'react';
import Logo from '../Images/IEMECH_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Footer.css';



const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='footer__text'>
                <p>The IE Mechanical Chapter at MIT Manipal enriches learning with workshops, competitions, and research grants, bridging theory with practice in mechanical engineering. It fosters innovation and prepares students for professional challenges.</p>
            </div>
            <div className='footer__contact'>
                <div className='footer__info'>
                    <h2>Contact Us</h2>
                    <p>Email: <a href='mailto:XYZ@gmail.com'>XYZ@gmail.com</a></p>
                </div>
                <div className='footer__social'>
                    <h3>Follow Us</h3>
                    <ul className='social-icons'>
                        <li><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
