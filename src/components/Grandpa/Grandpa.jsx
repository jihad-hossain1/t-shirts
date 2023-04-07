import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa md:object-fill text-center px-5 py-4'>
            <h2>Grandpa here</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden Ring'>
                <section className='flex justify-center items-center'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Unty ring={ring}></Unty>
                </section>
            </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. create context and export 
 * 2. create a provider and pass a value
 * 3. use useContext to receive the value
*/