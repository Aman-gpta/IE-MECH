import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../Images/IEMECH_logo.png';
import IEMECH_logo from '../Images/IEMECH_logo.png';
import P1 from '../Images/P1.png';
import P2 from '../Images/P2.jpg';
import P3 from '../Images/P2.png';
import Header1 from '../Images/Header.jpg';
import Event_1 from '../Images/Event_1.jpg';
import Event_2 from '../Images/Event_2.jpeg';
import Event_3 from '../Images/Event_3.jpeg';
import Event_4 from '../Images/Event_4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../CSS/EventsPage.css';

const Home = () => {
    return (
        <>
        {/* NAVBAR */}
        <nav className="navbar-event">
      <div className="navbar-event__text">
        <div className="logo">
        <Link to="/">
            <img src={IEMECH_logo} alt="IE Mechanical Logo" />
          </Link>
        </div>
        <ul className="navbar-event__ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#domains">Domains</a>
          </li>
          <li>
            <a href="/#board">Team</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="/#footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
        {/* HEADER */}
            <div className='mainSection'>
                <img src={Header1} alt='Header'/>
                <div className='textOverlay'>
                    <h1>A <br></br>  Spectacular turn <br></br> of <br></br> events</h1>
                </div>
            </div>
        {/* Division1 */}
            <div className='main-Section1'>
            <div className='Box1'>
            <div className='Box2'>
            <div className='Box3'></div>
            </div>
            
            </div>
        </div>

        {/* Playcard1 */}
        <section className="gallery-event">
        <div className='row-2'>
      <div className="col-1">
            <div className="domain_img1">
            <h1>YEAR <br></br> SNAP <br></br> SHOT <br></br> <span className="arrow-symbol">>>></span></h1>
            </div>
        </div>
        <div className="col-2">
            <div className="domain_img1">
            <img src={P1} alt="Pizza" />            </div>
        </div>
        <div className="col-3">
            <div className="domain_img1">
            <img src={P2} alt="Pizza" />
            </div>
        </div>
        <div className="col-4">
            <div className="domain_img1">
            <img src={P3} alt="Pizza" />
            </div>
        </div>
        </div>

        {/* Event1 */}
    </section>
    <div className='first-Section2'>
        <div className='imgContainer'>
            <img src={Event_1} alt='Header'/>
            </div>
            <div className='content2'>
            <div className='Heading2'><h2>F1 CAR MODELLING</h2></div>
            <p>Our past event offered a thrilling two-day exploration into Formula 1 engineering and Computational Fluid Dynamics (CFD) simulation. Hosted at the AB3/AB5 classroom, participants immersed

themselves in creating F1 CAD models, simulating them with AnSYS, and analyzing airflow dynamics. Hands-on experience in 3D printing rounded out the experience, with attendees receiving certificates for mastering CFD and 3D printing technologies. It was an unforgettable fusion of theory and practical application, showcasing innovation in action! </p>
            </div>
            

        </div>
        {/* EVENT2 */}
        <div className='first-Section3'>
            <div className='content3'>
            <div className='Heading3'><h2>MATLAB X CAD WORKSHOP </h2></div>
            <p>It was a collaboration event of IE-MECH & IE-ENE. It was a two day event with both Fusion 360 and Simulink being taught to the participants. It was hosted at AB5 classrooms. It was an illuminating workshop with the dynamic fusion of MATLAB and CAD, empowering engineers to optimize their design and analysis workflows. Through insightful demonstrations and hands on exercises, participants learnt how to seamlessly integrate MATLAB’s computational capabilities with CAD’s design functionality. </p>
            </div>
            <div className='imgContainer'>
            <img src={Event_2} alt='Header'/>
            </div>

        </div>
        {/* EVENT4 */}
        <div className='first-Section4'>
        <div className='imgContainer'>
            <img src={Event_3} alt='Header'/>
            </div>
            <div className='content4'>
            <div className='Heading4'><h2>MECHANIZE – TechTatva Category</h2></div>
            <p>At MIT Manipal's Techtatva, the Institution of Engineers (IE) Mechanical hosted Innoframe, a competition focused on car chassis design and construction. In the first round, teams designed chassis using SolidWorks, emphasizing structural integrity and safety. The second round involved fabricating these designs with PVC pipes, turning digital models into prototypes. This immersive experience blended theory with practice, enhancing technical skills and igniting a passion for automotive engineering, preparing participants for future challenges in the field.</p>
            </div>
        </div>

        {/* Event5 */}
        <div className='first-Section5'>
            <div className='content5'>
            <div className='Heading5'><h2>HIGHER STUDIES AND PLACEMENT TALK</h2></div>
            <p>IE MECH, in collaboration with MIT Manipal's Mechanical batch of 2024, hosted a webinar on April 16th, 2024, aimed at exploring placement opportunities and higher studies prospects. The virtual gathering provided a platform for students to share insights and experiences, empowering peers in their academic and professional journey. Students from the Mechanical batch of 2024 acted as esteemed guests, offering valuable perspectives and advice on securing research internships, navigating interviews, and leveraging support from MIT Manipal's Mechanical department. </p>
            </div>
            <div className='imgContainer'>
            <img src={Event_4} alt='Header'/>
            </div>

        </div>

        {/* Footer */}
        {/* <footer className='footer'>
  <div className='footer__logo'>
    <img src={Logo} alt='Logo' />
  </div>
  <div className='footer__text'>
    <p>The IE Mechanical Chapter at MIT Manipal enriches learning with workshops, competitions, and research grants, bridging theory with practice in mechanical engineering. It fosters innovation and prepares students for professional challenges.</p>
  </div>
  <div className='footer__contact'>
    <div className='footer__info'>
      <h2>Contact Us</h2>
      <p>Email: <a href='mailto:iemechanical.mit@manipal.edu'>iemechanical.mit@manipal.edu</a></p>
    </div>
  </div>
  <div className='footer__social'>
    <div className='footer__info'>
      <h3>Follow Us</h3>
      <ul className='social-icons'>
        <li><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>
      </ul>
    </div>
  </div>
</footer> */}
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
        </>
    );
}

export default Home;
