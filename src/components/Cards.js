import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cards = ({item}) => {
    const {imageUrl,title,price,id} = item;
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (newItem) => {
        addToCart(newItem);
    }

    return (
        
        <Card style={{ width: '17rem' }}>
            <Link to={`/productDetails/${item.id}`} >
            <Card.Img variant="top" src={imageUrl} className='img-fluid'/></Link>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                &#8377; {price}
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>ADD TO CART</Button>
            </Card.Body>
        </Card>
        
    )
}

export default Cards