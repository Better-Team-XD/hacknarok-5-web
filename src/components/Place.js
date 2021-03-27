/* eslint-disable react/prop-types */
import React from 'react';
import './styles/item.css';

const Place = ({ place }) => {
  return (
    <div className="item">
      {place.name}
    </div>
  );
};

export default Place;