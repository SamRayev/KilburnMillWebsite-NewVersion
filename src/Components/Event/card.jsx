import React from 'react';
import { NavLink } from 'react-router-dom'

const Card = ({ image, description, date, url }) => {
  return (
    <div className="card item">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
        <NavLink to={url} className='hero-btn'>{url}</NavLink>
      </div>
    </div>
  );
};

export default Card;