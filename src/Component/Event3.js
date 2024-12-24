import React from 'react';
import Header from '../Images/Header.jpeg';
import '../CSS/Event3.css';

const Event3=()=>{
return(
    <>
        <div className='first-Section3'>
            <div className='content3'>
            <div className='Heading3'><h2>MATLAB X CAD WORKSHOP </h2></div>
            <p>It was a collaboration event of IE-MECH & IE-ENE. It was a two day event with both Fusion 360 and Simulink being taught to the participants. It was hosted at AB5 classrooms. It was an illuminating workshop with the dynamic fusion of MATLAB and CAD, empowering engineers to optimize their design and analysis workflows. Through insightful demonstrations and hands on exercises, participants learnt how to seamlessly integrate MATLAB’s computational capabilities with CAD’s design functionality. </p>
            </div>
            <div className='imgContainer'>
            <img src={Header} alt='Header'/>
            </div>

        </div>
    
    </>
)
}
export default Event3;