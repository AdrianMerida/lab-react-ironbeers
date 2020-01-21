import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeerList from './components/BeersList';
import BeerDetail from './components/BeerDetail';

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
        <Route exact path="/random-beer" component={BeerDetail}/>
        <Route exact path="/:id" component={BeerDetail}/>
       </Switch>
      </div>
    );
  }
}

export default App;
