import React from 'react';
import Header from '../Images/Header.jpeg';
import '../CSS/Event5.css';

const Event5=()=>{
return(
    <>
        <div className='first-Section5'>
            <div className='content5'>
            <div className='Heading5'><h2>HIGHER STUDIES AND PLACEMENT TALK</h2></div>
            <p>IE MECH, in collaboration with MIT Manipal's Mechanical batch of 2024, hosted a webinar on April 16th, 2024, aimed at exploring placement opportunities and higher studies prospects. The virtual gathering provided a platform for students to share insights and experiences, empowering peers in their academic and professional journey. Students from the Mechanical batch of 2024 acted as esteemed guests, offering valuable perspectives and advice on securing research internships, navigating interviews, and leveraging support from MIT Manipal's Mechanical department. </p>
            </div>
            <div className='imgContainer'>
            <img src={Header} alt='Header'/>
            </div>

        </div>
    
    </>
)
}
export default Event5;