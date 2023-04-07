import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    } else {
        message = <div>
            <h4>boroloxx</h4>
        <p><small>thanks for giving money</small></p>
        </div>
    }
    return (
        <div>
            Cart here ....{cart.length}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)} className='ml-1 px-2 rounded border py-0'>x</button> </p>)
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONL RENDARING:
 * 1. use if else to set a variable that will contain an element, components
 */

/**
 * 
 * 
 */
