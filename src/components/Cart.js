import React from 'react'
import cartImg from '../assets/images/trolley-cart.png';
import '../assets/cart.css';
import {useNavigate} from 'react-router-dom';
const Cart = ({itemLength}) => {
  
  const navigate = useNavigate();
  return (
    
     
    <div className='cartContainer'>
        
        <img src={cartImg} alt='cartImg' className='cartImg' onClick={() => navigate("cartitems")} />
        <span className='cartCount'>{itemLength}</span>
        
    </div>
    
  )
}

export default Cart