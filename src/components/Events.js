
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="events">
        <div className='row-event'>
      <div className="col-event1">
            <div className="event__video">
              <video src='/img1/video.mp4' autoPlay loop muted/>
            </div>
        </div>
        <div className="col-event2">
            <div className="event__text">
              <h1>EVENTS</h1>
              <p>
              IE Mechanical at MIT Manipal's Techtatva hosts a series of innovative events and workshops that integrate theoretical learning with practical application, aimed at nurturing engineering excellence. Highlights include Innoframe, a competition challenging teams to design and fabricate car chassis using SolidWorks and PVC pipes, fostering skills in structural engineering and material application. The CAD and MATLAB workshop, in collaboration with IE E&E, provides hands-on experience in Fusion 360 for 3D modeling and design, complemented by MATLAB sessions focusing on data analysis and algorithm development. These initiatives not only enhance technical proficiency but also promote interdisciplinary collaboration, preparing participants for future challenges in automotive and electrical engineering fields.
              </p></div>
              <div className="event__btn">
              <Link to="/events" className="btn btn-event">READ MORE</Link>
            </div>
            </div>
        {/* </div> */}
        </div>
    </section>
  );
};

export default Events;
