import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast  from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts);
    const [cart,setCart] = useState([]);
    const handleAddtocart = tshirt =>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('You have already added t-Shirt');
        }
        else{
            const newCart = [...cart,tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = id =>{
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
            {
               tshirts.map(tshirt => 
               <Tshirt
               key={tshirt._id}
               tshirt={tshirt}
               handleAddtocart={handleAddtocart}
               ></Tshirt>) 
            }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}
               handleRemoveFromCart={handleRemoveFromCart}>
               </Cart>
            </div>
        </div>
    );
};

export default Home;