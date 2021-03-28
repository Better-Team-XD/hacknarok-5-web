import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import {Form, Button} from 'react-bootstrap';
import {API} from '../API';
import Place from './Place';

const Dashboard = () => {
  const [places, setPlaces] = useState([]);
  const [currentPage, setPage] = useState(0);

  useEffect(() => {
    alert('asdasd');
    axios.get(`${API}api/v1/places?page=${currentPage}`)
      .then(response => {
        // console.log(response.data.data.content);

        setPlaces(places.concat(response.data.data.content));
        // console.log(places);
      });
  }, [currentPage]);

  const handleSubmit = (event) => {
    event.preventDeafult();
  };

  const handleClick = () => {
    setPage(currentPage + 1);
    console.log(currentPage);
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
      <div className="container">
        <div className="row-cols-1 mt-5">
          <Button variant="dark" onClick={handleClick}>More</Button>
        </div>
      </div>



    </div>
  );
};

export default Dashboard;
