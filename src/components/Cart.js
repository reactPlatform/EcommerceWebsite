import React from 'react'
import cartImg from '../assets/images/trolley-cart.png';
import '../assets/cart.css';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    
     
    <div className='cartContainer'>
        
        <img src={cartImg} alt='cartImg' className='cartImg' onClick={() => navigate("cartitems")} />
        <span className='cartCount'>{cartItems.length}</span>
        
    </div>
    
  )
}

export default Cart