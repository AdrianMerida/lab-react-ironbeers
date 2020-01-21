import React, { Component } from 'react';
import Nav from './Nav';
import BeerService from '../services/BeerServices'
import Beer from './Beer';

class BeerList extends Component {
    state ={
        beers: []
    }

 
    componentDidMount(){
        BeerService.list().then(res => this.setState({beers: res}))
    }
     
    render() { 
        return ( 
            <div>
                <Nav/>
                {this.state.beers.map(beer => <Beer key={beer._id} beer={beer} />)}
            </div>
         );
    }
}
 
export default BeerList;