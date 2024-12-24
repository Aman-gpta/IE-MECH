import React from "react";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="container_aboutus">
        {/* <div className="row"> */}
          <div className="row-img">
            <div className="col-6">
                <div className="about__img1">
                  <img src="/img1/about_us1.jpg" alt="Pizza" />
                </div>
            </div>


            <div className="col-6 img2">
                <div className="about__img2">
                  <img src="/img1/about_us2.jpeg" alt="izza" />
                </div>
            </div>
          </div>
        
          <div className="p-25">
            <h3>About Us</h3>
            <h2>WELCOME TO IE MECHANICAL</h2>
            <p >
            The Institution of Engineers (IE) Mechanical Chapter at MIT Manipal is a dynamic student organization focused on enhancing the learning of aspiring mechanical engineers. We bridge academic theory and practical application through workshops, competitions, and quizzes, fostering innovation, teamwork, and technical skills. Our events cover Computer-Aided Design (CAD), Finite Element Analysis (FEA), 3D printing, and composite materials, keeping members updated with the latest technologies. Additionally, we support research by offering grants for promising projects, encouraging exploration and innovation. Through collaborative learning and resource provision, IE Mechanical prepares students for professional challenges, contributing to the advancement of mechanical engineering.
            </p>
          </div>
        </div>
      </div>
      // </div>
  );
};


export default AboutUs;