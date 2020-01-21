import React, { Component } from "react";
import Nav from "./Nav";
import BeerService from "../services/BeerServices";
import Detail from "./Detail";

class BeerDetail extends Component {
  state = {
    beer: [],
    id: this.props.match.params.id
  };

  componentDidMount() {
    if(this.props.match.path === '/random-beer'){
        BeerService.random().then(res => this.setState({ beer: res }));

    }else{
        BeerService.detail(this.state.id).then(res => this.setState({ beer: res }));
    }
    console.log(this.state.beer);
  }

  render() {
    return (
      <div className="container-details">
        <Nav />
        <Detail beer={this.state.beer}/>
    </div>
    );
  }
}

export default BeerDetail;
