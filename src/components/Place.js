/* eslint-disable react/prop-types */
import React from 'react';
import './styles/item.css';

const Place = ({ place }) => {
  console.log(place);
  return (
    <div className="item">

      {place.name}
      <div className="image-parent">
        <img src={place.imageUrl} className="img-fluid" alt="quixote" />
      </div>

    </div>
  );
};

export default Place;
