import React from 'react';

const Tshirt = ({ tshirt,handleAddToCart }) => {
    // console.log(tshirt);
    const { picture, _id, name, price, index, } = tshirt;
    return (
        <div className='border rounded-md p-3 text-center'>
            <img className='w-full rounded-md' src={picture} alt="" />
            <div className='py-3'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(tshirt)} className='border rounded px-2 hover:bg-slate-400 hover:text-white'>Buy Now</button>
        </div>
    );
};

export default Tshirt;