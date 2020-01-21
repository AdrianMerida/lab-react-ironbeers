import React from 'react';
import { Link } from 'react-router-dom';

const Beer = (props) => {
    const {image_url, name, description, contributed_by, _id} = props.beer
    return ( 
        <Link to={`${_id}`}>
        <div className="container-beer-list">
            <img src={image_url} alt="beer" />
            <div className="beer-description">
                <h5>{name}</h5>
                <p>{description}</p>
                <p>{contributed_by}</p>
            </div>
        </div>
        </Link>
     );
}
 
export default Beer;