import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { RingContext } from '../Grandpa/Grandpa';

const Cusin = ({ children, hasFriend, ring }) => {
    const ringGd = useContext(RingContext)
    return (
        <div>
            <h2>Cusin here...</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ringGd}></Friend>}
        </div>
    );
};

export default Cusin;