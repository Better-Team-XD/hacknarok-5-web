import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import {Form, Button} from 'react-bootstrap';
import {API} from '../API';
import Place from './Place';

const Dashboard = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get(`${API}api/v1/places`)
      .then(response => {
        console.log(response.data.data.content);
        setPlaces(response.data.data.content);
        console.log(places);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDeafult();
  };

  const cards = places.map((place,i) => <Place key={i} place={place}/>);

  return (
    <div >
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>distance (km)</Form.Label>
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
        <br />
      </Form>
      <div className="container">
        <div className="row">
          {cards}
        </div>
      </div>



    </div>
  );
};

export default Dashboard;
