import React from 'react';

const Cart = (props) => {
    const carts = props.carts;
    let totalPrice = 0;
    for(let i=0; i<carts.length; i++){
      const plant = carts[i];
      const price = plant.price;
      totalPrice = totalPrice + price;
    }
    return (
        <div>
            <h3>Total Plant:{carts.length}</h3>
            <h3>Price:{totalPrice}</h3>
            {
                carts.map( plant=> <p>{plant.name}</p>)
            }
        </div>
    );
};

export default Cart;