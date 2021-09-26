import React from 'react';
import './PlantDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const PlantDetails = (props) => {
    console.log(props.plant)
    const { name, price, carelevel, img, pros, lightLevel} = props.plant;
    const cartHandler = props.cartHandler;
    return (
    <div class="col">
        <div class="card h-100 plantinfo">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <h6>Care level: {carelevel}</h6>
            <h6>Light level: {lightLevel}</h6>
            <h6>Price: ${price}</h6>
            <p class="card-text">Pros: {pros}</p>
            <button onClick={()=>cartHandler(props.plant)} className='btn button'><FontAwesomeIcon icon={faSeedling} />Click</button>
        </div>
        </div>
  </div>
        
    );
};

export default PlantDetails;