import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            {/* <h3>Order summery:{cart.length}</h3> */}
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Order summery:{cart.length}</h3>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => 
                <p key={tshirt._id}>
                    {tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt._id)}>x</button></p>)
            }
            {
                cart.length === 2 && <p>Bouble bonanza!</p>
            }
            {
                cart.length === 3 || <h3>Tintato hoilo na</h3>
            }
        </div>
    );
};

export default Cart;