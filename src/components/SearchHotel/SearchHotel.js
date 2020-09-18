import React from 'react';
import './SearchHotel.css';
import { hotels } from '../../tripDatabase/tripDatabase';
import Hotel from '../Hotel/Hotel';
import GoogleMap from '../GoogleMap/GoogleMap';
const SearchHotel = () => {
  const newHotels = [...hotels];
  return (
    <div className="container">
      <div className="search-hotel">
        <div className="row">
          <div className="col-md-6">
            <div className="search-result">
              {
                newHotels.map(hotel => <Hotel key={hotel.id} hotel={hotel} ></Hotel>)
              }
            </div>
          </div>
          <div className="col-md-6">
            <div className="map-container">
              <GoogleMap></GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;