import React from 'react'
import cartImg from '../assets/images/trolley-cart.png';
import '../assets/cart.css';
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    
     
    <div className='cartContainer'>
        
        <NavLink to='/cartitems'><img src={cartImg} alt='cartImg' className='cartImg'/></NavLink>
        <span className='cartCount'>{cartItems.length}</span>
        
    </div>
    
  )
}

export default Cart