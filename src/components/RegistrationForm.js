import React from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    <div>
      <h3>register</h3>
      <Form onSubmit={handleRegistration}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="enter username"
          />
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="enter email"
          />
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="enter password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="sm">
          register
        </Button>
      </Form>
      <div>
        already have an account? <Link to='/login'>log in</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;