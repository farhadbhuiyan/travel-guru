import React from 'react';
import './Hotel.css';
import star from '../../images/star_1_.png';

const Hotel = (props) => {

  const { id, title, guests, bedrooms, beds, baths, fare, rating, totalRating, cover } = props.hotel;
  console.log(props);
  return (
    <div className="card-container">
      <div>
        <img className="card-image" src={cover} alt="" />
      </div>
      <div className="card-details">
        <h5 className="title">{title}</h5>
        <p>4 guests   2 bedrooms   2 beds   2 baths</p>
        <p>Wif Air conditioning Kitchen</p>
        <p>Cancellation fexibility availiable</p>
        <br />
        <p> <img className="icon" src={star} alt=""/>{rating} ({totalRating}) &nbsp; &nbsp; &nbsp; ${fare}/night</p>
      </div>
    </div>
  );
};

export default Hotel;