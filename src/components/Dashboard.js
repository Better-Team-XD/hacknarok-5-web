import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/dashboard.css';
import Place from './Place';

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

  return (
    <div className="container">
      <div className="filter">
        FILTRY
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