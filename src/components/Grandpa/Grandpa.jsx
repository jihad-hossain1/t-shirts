import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond';

    return (
        <div className='grandpa'>
            <h2>Grandpa here</h2>
            <section className='flexx'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Unty ring={ring}></Unty>
            </section>
        </div>
    );
};

export default Grandpa;