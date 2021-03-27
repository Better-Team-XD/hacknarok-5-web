import React from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/form.css';

const RegistrationForm = () => {
  const handleRegistration = async (event) => {
    event.preventDefault();

    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    };

    event.target.username.value = '';
    event.target.email.value = '';
    event.target.password.value = '';

    console.log(newUser);    
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h3>register</h3>
        <hr></hr>
        <Form onSubmit={handleRegistration}>
          <Form.Group>
            <Form.Label>username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="enter username"
            />
            <br></br>
            <Form.Label>email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="enter email"
            />
            <br></br>
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="enter password"
            />
            <br></br>
          </Form.Group>
          <Button variant="primary" type="submit" size="sm" block>
          register
          </Button>
          <br></br>
        </Form>
        <div>
          <p>already have an account? &nbsp;<Link to='/login'>log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;