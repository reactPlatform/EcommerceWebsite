import React from 'react'
import CartDisplay from './CartDisplay';
import '../assets/cart.css';

const CartItems = ({cartItems}) => {
  
  return (
    <div className='CartItemsDisplay'>
      {
        cartItems.map((item)=><CartDisplay item={item}/>)
      }
    </div>

    
  )
}

export default CartItems