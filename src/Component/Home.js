import React from 'react';
import Header from '../Images/landing.png';
import '../CSS/Home.css';

const Home = () => {
    return (
        <>
            <div className='mainSection'>
                <img src={Header} alt='Header'/>
                <div className='textOverlay'>
                    <h1>A <br></br>  Spectacular turn <br></br> of <br></br> events</h1>
                </div>
            </div>
        </>
    );
}

export default Home;
