import React from 'react';
import HomeComponent from './HomeComponent';

const HomePage = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante massa, mollis eget nunc eget, dignissim sodales purus. Phasellus sit amet massa eget nibh condimentum dapibus ac eget metus. "
    return ( 
        <div className="home-container">
            <HomeComponent 
            path="beers"
            img="./images/beers.png"
            title="All Beers"
            text={lorem}/>

            <HomeComponent 
            path="random-beer"
            img="./images/random-beer.png"
            title="Random Beer"
            text={lorem}/>

            <HomeComponent 
            path="new-beer"
            img="./images/new-beer.png"
            title="New Beer"
            text={lorem}/>
        </div>
     );
}
 
export default HomePage;