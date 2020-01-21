import React from 'react';

const Beer = (props) => {
    const {image_url, name, description, contributed_by} = props.beer
    return ( 
        <div className="container-beer-list">
            <img src={image_url} alt="beer" />
            <div className="beer-description">
                <h5>{name}</h5>
                <p>{description}</p>
                <p>{contributed_by}</p>
            </div>
        </div>
     );
}
 
export default Beer;