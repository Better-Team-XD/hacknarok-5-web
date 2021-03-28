/* eslint-disable react/prop-types */
import React from 'react';
import './styles/item.css';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const PlaceCard = ({ place }) => {


  console.log(place);
  return (
    <div className="col-4 col-md-3 mt-3 card-element">

      <Card>
        <Link to={`place/${place.id}`} >
          <Card.Img variant="top" src={place.imageUrl} />
          <Card.Body>
            <Card.Title>{place.name} id: {place.id}</Card.Title>
            <Card.Text>
              {place.location.city} {place.location.street}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{place.location.lon + place.location.lat}km from you</small>
          </Card.Footer>
        </Link>
      </Card>

    </div>
  );
};

export default PlaceCard;
