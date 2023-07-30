import React from 'react';

const Card = ({ image, description, date }) => {
  return (
    <div className="card item">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
      </div>
    </div>
  );
};

export default Card;