import React from 'react'
import CartDisplay from './CartDisplay';
import '../assets/cart.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const CartItems = () => {
  const {cartItems,totalAmount} = useContext(CartContext);
  
  return (
    <div className='CartItemsDisplay'>
      {
        cartItems.length === 0 ? <img src='https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png' alt='emptyCart' width='50%' /> : 
        <div>
          {
            cartItems.map((item)=><CartDisplay item={item} key={item.id}/>)
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