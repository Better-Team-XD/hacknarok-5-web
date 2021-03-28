import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import { Form, Button } from 'react-bootstrap';
import {API} from '../API';

const Dashboard = () => {
  const [places, setPlaces] = useState([]);
  const [distance, setDistance] = useState(1);

  useEffect(() => {
    axios.get(`${API}api/v1/places`)
      .then(response => {
        console.log(response.data.data.content);
        setPlaces(response.data.data.content);
        console.log(places);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDistance(event.target.distance.value);
    axios.get(`${API}api/v1/places?distance=${distance}`)
      .then(response => {
        console.log(response.data.data.content);
        setPlaces(response.data.data.content);
        console.log(places);
      });
  };

  return (
    <div >
      <div className="filter">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>distance from your location (km)</Form.Label>
            <Form.Control
              type="number"
              name="distance"
              placeholder="enter distance"
            />
            <br/>
          </Form.Group>
          <Button variant="primary" type="submit" size="sm" block>
          filter
          </Button>
          <br></br>
        </Form>
      </div>
      <div>
        {
          places.map((place,i) => 
            <div key={i}>papiesz</div>
          )
        }
      </div>

    </div>
  );
};

export default Dashboard;
