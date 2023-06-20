import React from 'react'
import CartDisplay from './CartDisplay';
import { useState, useEffect } from 'react';
import '../assets/cart.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const CartItems = () => {
  const {totalAmount, updateTotalAmount, getCartFromApi,cartItems} = useContext(CartContext);
  
  useEffect(()=>{
    fetchItems();
    
  },[])
  async function fetchItems(){
    const data = await getCartFromApi();
    
  }
  return (
    <div className='CartItemsDisplay'>
      {
        <div>
          {
             cartItems && cartItems.map((item)=><CartDisplay item={item} key={item.id}/>)
          }
          <p>Total Price: 
            {
             totalAmount
            }</p>
        </div>
      }
      
    </div>

    
  )
}

export default CartItems