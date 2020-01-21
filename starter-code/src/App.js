import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerService from './services/BeerServices'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">

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
