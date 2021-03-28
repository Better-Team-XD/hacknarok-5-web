/* eslint-disable react/prop-types */
import React from 'react';
import './styles/item.css';
import {Card} from 'react-bootstrap';

const Place = ({ place }) => {
  console.log(place);
  return (
    <div className="col-4 col-md-3 mt-3 card-element">
      <Card>
        <Card.Img variant="top" src={place.imageUrl} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>
            {place.location.city} {place.location.street}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{place.location.lon + place.location.lat}km from you</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Place;