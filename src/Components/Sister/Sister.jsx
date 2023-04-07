import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>sister</h3>
            <p><small>Grandpa money:{money}</small></p>
        </div>
    );
};

export default Sister;