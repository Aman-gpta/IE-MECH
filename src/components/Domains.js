import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery">
        <div className='row-1'>
            <h1>DOMAINS</h1>
        </div>
        <div className='row-2'>
      <div className="col-1">
            <div className="domain__img1">
              <h1>TECHNICAL</h1>
              <img src="/img1/domains_tech.png" alt="Pizza" ></img>
            </div>
        </div>
        <div className="col-2">
            <div className="domain__img1">
            <h1>GRAPHICS</h1>
              <img src="/img1/domain_graphics.png" alt="Pizza" />
            </div>
        </div>
        <div className="col-3">
            <div className="domain__img1">
            <h1>SOCIAL MEDIA</h1>
              <img src="/img1/domains_social.png" alt="Pizza" />
            </div>
        </div>
        <div className="col-4">
            <div className="domain__img1">
            <h1>HR AND PR</h1>
              <img src="/img1/domains_hr.png" alt="Pizza" />
            </div>
        </div>
        </div>
    </section>
  );
};

export default Gallery;
