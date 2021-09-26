import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import PlantDetails from '../PlantDetails/PlantDetails';
import './PlantInfo.css';

const PlantInfo = () => {
    const [plants, setPlants] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect( () => {
        fetch('./Plant.json')
          .then(res => res.json())
          .then(data => setPlants(data));
    }, [])

    const cartHandler = (plant) => {
       const totalPlant = [...carts, plant];
       setCarts (totalPlant);
    }
    return (
        <div className='body'>
            <div className='row'>
            <div  className='row col-md-8 row-cols-1 row-cols-md-3 g-4'>
                {
                    plants.map(plant => <PlantDetails
                        key={plant.id}
                        plant={plant}
                        cartHandler={cartHandler}
                        ></PlantDetails>)
                }
            </div>
            <div className="col-md-4">
                <h3>Total</h3>
                <Cart carts={carts}></Cart>
            </div>
            </div>
        </div>
    );
};

export default PlantInfo;