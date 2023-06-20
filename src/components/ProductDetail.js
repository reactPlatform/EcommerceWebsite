import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import productsArr from '../Data';
const ProductDetail = () => {
    const params = useParams();
    const item = productsArr.find((x) => x.id === Number(params.productId))
    
    console.log(productsArr)
    
  return (
    <div>Product Detail
      <br />
        <div>{item.title}</div>
        <div>{item.desc}</div>
    </div>
  )
}

export default ProductDetail