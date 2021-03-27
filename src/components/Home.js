import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          Pandemic activities
        </div>
        <Link to='/dashboard'><div className="button1">show nearest activities</div></Link>
        <br></br>
        <Link to='/login'><div className="button1">log in and discover new features</div></Link>
      </div>
    </div>
  );
};

export default Home;