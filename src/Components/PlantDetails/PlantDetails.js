import React from 'react';
import './PlantDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

const PlantDetails = (props) => {
    
    const { name, price, carelevel, img, pros, lightLevel} = props.plant;
    const cartHandler = props.cartHandler;
    return (
    <div className="col">
        <div className="card h-100 plantinfo">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h6>Care level: {carelevel}</h6>
            <h6>Light level: {lightLevel}</h6>
            <h6>Price: ${price}</h6>
            <p className="card-text">Pros: {pros}</p>
            <button onClick={()=>cartHandler(props.plant)} className='btn button'><FontAwesomeIcon icon={faSeedling} />Click</button>
        </div>
        </div>
  </div>
        
    );
};

export default PlantDetails;