import React from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={LoginForm} />
      </Switch>
    </Router>
  );
};

export default App;
