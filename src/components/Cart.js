import React from 'react'
import cartImg from '../assets/images/trolley-cart.png';
import '../assets/cart.css';
const Cart = () => {
  return (
    <div className='cartContainer'>
        <img src={cartImg} alt='cartImg' className='cartImg'/>
    </div>
  )
}

export default Cart