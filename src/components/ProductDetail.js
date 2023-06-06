import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import productsArr from '../Data';
const ProductDetail = () => {
    const params = useParams();
    const item = productsArr.find((x) => x.id === Number(params.productId))
    
    console.log(productsArr)
    
  return (
    <div>ProductDetail
        <p>{item.title}</p>
        <p>{item.desc}</p>
    </div>
  )
}

export default ProductDetail