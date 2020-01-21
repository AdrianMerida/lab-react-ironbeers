import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeerList from './components/BeersList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/beers">
          <BeerList />
        </Route>
       </Switch>
      </div>
    );
  }
}

export default App;
