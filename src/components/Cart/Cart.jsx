import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p className='tomato text-center rounded-lg my-2 py-1'>Please add some products</p>
    } else {
        message = <div>
            <h4>boroloxx</h4>
        <p><small>thanks for giving money</small></p>
        </div>
    }
    return (
        <div>
           <h3 className={cart.length >= 5 ? 'bg-red-700' : ''}>Total add Pts: <span className='border px-1 rounded-lg'>{cart.length}</span></h3>
            {cart.length > 2 ? <span className='orange rounded px-2'>Aro kina</span> : <span className='green rounded py-1 px-2'>fokira</span>}
            {message}
            <p className={ `text-center font-semibold ${cart.length === 3 ? 'text-amber-200' : 'text-red-300'}`}>Please Do Something</p>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)} className='ml-1 px-2 rounded border py-0'>x</button> </p>)
            }
            {
                cart.length === 2 && <p className='text-green-300'>more t-shirt</p>
            }
            {
                cart.length === 3 || <h3>Tin ta to hylo na</h3>
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONL RENDARING:
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'for false'
 * 3. logical && : (if the condition is true then the next thing will be displayed)
 * 4. logical || (if the condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS CLASS:
 * 1. use ternary
 * 2. ternary inside template string
 * 3. 
 */
