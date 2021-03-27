import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './styles/form.css';

const LoginForm = () => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();

    const user = {
      username: event.target.email.value,
      password: event.target.password.value
    };

    event.target.email.value = '';
    event.target.password.value = '';

    console.log(user);
    history.push('/dashboard');
  };


  return (
    <div className="container">
      <div className="wrapper">
        <h3>log in to application</h3>
        <hr></hr>
        <Form onSubmit={handleLogin}>
          <Form.Group>
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
          log in
          </Button>
          <br></br>
        </Form>
        <div>
          <p>dont have an account yet? &nbsp;<Link to='/register'>register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;