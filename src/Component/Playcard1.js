import React from 'react';
import Event1 from '../Images/Event1.jpeg';
import Event2 from '../Images/Event2.jpeg';
import video1 from '../Images/EVENTS.mp4';
import '../CSS/Playcard1.css';

const Gallery = () => {
  return (
    <section className="gallery">
        <div className='row-2'>
      <div className="col-1">
            <div className="domain__img1">
            <h1>YEAR <br></br> SNAP <br></br> SHOT <br></br> <span className="arrow-symbol">>>></span></h1>
            </div>
        </div>
        <div className="col-2">
            <div className="domain__img1">
            <img src={Event1} alt="Pizza" />            </div>
        </div>
        <div className="col-3">
            <div className="domain__img1">
            <img src={Event2} alt="Pizza" />
            </div>
        </div>
        <div className="col-4">
            <div className="domain__img1">
            <img src={Event1} alt="Pizza" />
            </div>
        </div>
        </div>
    </section>
  );
};

export default Gallery;
