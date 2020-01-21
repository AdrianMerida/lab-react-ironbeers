import React, { Component } from 'react';
import './App.css';
import BeerService from './services/BeerServices'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
       <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
       </Switch>
      </div>
    );
  }
}

export default App;
