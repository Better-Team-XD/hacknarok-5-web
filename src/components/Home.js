import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>
        home component
      </h1>
      <Link to='/dashboard'><Button variant='primary'>show nearest activities</Button></Link>
      <Link to='/login'><Button variant='outline-primary'>log in and discover new features</Button></Link>
    </div>
  );
};

export default Home;