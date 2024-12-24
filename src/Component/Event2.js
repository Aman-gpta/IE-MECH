import React from 'react';
import Header from '../Images/Header.jpeg';
import '../CSS/Event2.css';

const Event2=()=>{
return(
    <>
        <div className='first-Section2'>
        <div className='imgContainer'>
            <img src={Header} alt='Header'/>
            </div>
            <div className='content2'>
            <div className='Heading2'><h2>F1 CAR MODELLING</h2></div>
            <p>Our past event offered a thrilling two-day exploration into Formula 1 engineering and Computational Fluid Dynamics (CFD) simulation. Hosted at the AB3/AB5 classroom, participants immersed

themselves in creating F1 CAD models, simulating them with AnSYS, and analyzing airflow dynamics. Hands-on experience in 3D printing rounded out the experience, with attendees receiving certificates for mastering CFD and 3D printing technologies. It was an unforgettable fusion of theory and practical application, showcasing innovation in action! </p>
            </div>
            

        </div>
    
    
    </>
)
}
export default Event2;