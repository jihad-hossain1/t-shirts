import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts);
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('You Alrady added this product');
        }
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
            }
            </div>
            <div className=' md:col-span-1 sm:col-span-4 px-4 py-6 bg-yellow-700 text-white '>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;