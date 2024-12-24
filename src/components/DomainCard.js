// GalleryCard.js
import React from 'react';

const GalleryCard = ({ imageUrl, title }) => {
  return (
    <li>
      <div
        className="gallery-card has-bg-image has-after"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="card-content">
          <h3 className="h3 card-title">{title}</h3>
          <a href="#" className="btn-link">
            <span className="span">View Gallery</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </div>
    </li>
  );
};

export default GalleryCard;
