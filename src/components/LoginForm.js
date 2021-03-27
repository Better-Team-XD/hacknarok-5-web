import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const handleLogin = async (event) => {
    event.preventDefault();

    const user = {
      username: event.target.email.value,
      password: event.target.password.value
    };

    event.target.email.value = '';
    event.target.password.value = '';

    console.log(user);
  };


  return (
    <div>
      <h3>log in to application</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group>
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
          log in
        </Button>
      </Form>
      <div>
        dont have an account yet? <Link to='/register'>register</Link>
      </div>
    </div>
  );
};

export default LoginForm;