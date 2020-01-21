import React from 'react';

const Detail = (props) => {
    const {image_url, name, description, contributed_by, tagline, first_brewed, attenuation_level} = props.beer
    return ( 
        <div className="container-beer">
          <img src={image_url} alt="beer" />
          <div className="beer-description-detail">
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{contributed_by}</p>
            <p>{tagline}</p>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
          </div>
        </div>
     );
}
 
export default Detail;