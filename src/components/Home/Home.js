import React, { useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './Home.css';
import coxbazar from '../../images/coxbazar.png';
import { Link } from 'react-router-dom';
import { places } from '../../tripDatabase/tripDatabase';

const Home = () => {
  const newPlaces = { ...places };
  const [location, setLocation] = useState(places[0]);
  const { id, name, info } = location;

  const handleCard = (placeId) => {
    setLocation(places[placeId]);
  }
  return (
    <div className="background">
      <div className="home-content">
        <div className="row">
          <div className="col-md-5">
            <div className="place-details">
              <h1>{name}</h1>
              <h5>{info}</h5>
              <Link to={`/booking/id/${location.id}`}>
                <button className="button">Booking <i class="fas fa-long-arrow-alt-right"></i></button>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <CardDeck>
              <Card onClick={() => handleCard(0)}>
                <Card.Img variant="top" src={coxbazar} />
                <Card.Body>
                  <Card.Title className="title">Cox's Bazar</Card.Title>
                </Card.Body>
              </Card>
              <Card onClick={() => handleCard(1)}>
                <Card.Img variant="top" src={places[1].cover} />
                <Card.Body>
                  <Card.Title className="title">Sreemangal</Card.Title>
                </Card.Body>
              </Card>
              <Card onClick={() => handleCard(2)}>
                <Card.Img variant="top" src={places[2].cover} />
                <Card.Body>
                  <Card.Title className="title">Sundarban</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;