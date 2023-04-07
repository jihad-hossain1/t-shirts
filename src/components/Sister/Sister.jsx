import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister ...</h3>
            <p>Uncle Send money to grandpa: {money}</p>
        </div>
    );
};

export default Sister;