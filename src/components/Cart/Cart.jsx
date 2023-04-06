import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            Cart here ....{cart.length}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)} className='ml-1 px-2 rounded border py-0'>x</button> </p>)
            }
        </div>
    );
};

export default Cart;