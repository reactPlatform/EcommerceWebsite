import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({item}) => {
    const {imageUrl,title,price} = item;


    return (
        
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={imageUrl} className='img-fluid'/>   
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                &#8377; {price}
                </Card.Text>
                <Button variant="primary">ADD TO CART</Button>
            </Card.Body>
        </Card>
        
    )
}

export default Cards