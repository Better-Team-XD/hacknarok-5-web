import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import Place from './Place';
import { Form, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('http://207.154.230.197/api/v1/places')
      .then(response => {
        console.log(response.data.data.content);
        setPlaces(response.data.data.content);
        console.log(places);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDeafult();
  };

  return (
    <div className="container">
      <div className="filter">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>distance</Form.Label>
            <Form.Control
              type="number"
              name="distance"
              placeholder="enter distance"
            />
            <br></br>
          </Form.Group>
          <Button variant="primary" type="submit" size="sm" block>
          filter
          </Button>
          <br></br>
        </Form>
      </div>
      <div className="places">
        {
          places.map(place => 
            <Place key={place.id} place={place} />
          )
        }
      </div>
    </div>
  );
};

export default Dashboard;