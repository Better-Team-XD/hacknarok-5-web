import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import { Form, Button } from 'react-bootstrap';
import {API} from '../API';
import Place from './Place';

const Dashboard = () => {
  const [places, setPlaces] = useState([]);
  const [currentPage, setPage] = useState(0);
  const [distance, setDistance] = useState(1);
  const [isMoreWorking, setMore] = useState(true);

  useEffect(() => {
    axios.get(`${API}api/v1/places?page=${currentPage}&sortBy=id`)
      .then(response => {
        if (currentPage < response.data.data.totalPages){
          setPlaces(places.concat(response.data.data.content));
          setMore(true);
        }
        if (currentPage === response.data.data.totalPages - 1){
          setMore(false);
        }
      });
  }, [currentPage]);

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

  const handleClick = () => {
    setPage(currentPage + 1);
    console.log(currentPage);
  };

  const cards = places.map((place,i) => <Place key={i} place={place}/>);

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
          <br />
        </Form>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          {cards}
        </div>
      </div>
      <div className="container">
        <div className="row-cols-1 mt-5">
          {isMoreWorking && <Button variant="dark" onClick={handleClick}>More</Button>}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
