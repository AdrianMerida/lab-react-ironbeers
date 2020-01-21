import React from "react";

import { Link } from "react-router-dom";

const HomeComponent = props => {
  return (
  <Link to={`/${props.path}`}>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="imagen"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}.</p>
        </div>
    </div>
  </Link>
)}

export default HomeComponent;
