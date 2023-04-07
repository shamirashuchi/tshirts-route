import React from 'react';
import './Tshirt.css';
const Tshirt = ({tshirt,handleAddtocart}) => {
    const {picture,name,price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => handleAddtocart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;