import React from 'react';
import Cusin from '../Cusin/Cusin';

const Unty = ({ring}) => {
    return (
        <div>
            <h3>Unty here</h3>
            <section className='flex'>
                <Cusin>Abir</Cusin>
                <Cusin hasFriend={true} ring={ring}>Nibir</Cusin>
            </section>
        </div>
    );
};

export default Unty;