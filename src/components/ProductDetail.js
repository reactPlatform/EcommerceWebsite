import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetail = () => {
    const location  = useLocation();
    const item = location.state;
   
    console.log(item.id)
    
  return (
    <div>ProductDetail
        <p>{item.id}</p>
    </div>
  )
}

export default ProductDetail