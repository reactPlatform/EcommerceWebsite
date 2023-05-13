import React from 'react'
import Cards from './Cards';
import productsArr from '../Data';
import '../assets/ecombody.css';
import Button from 'react-bootstrap/Button';
const EcomBody = () => {
    
    return (
        <>

            <div className='text-bg-secondary p-3 text-center'>
                <h1>The Generics</h1>
            </div>
            <div className='cardstyle'>
            {
                productsArr.map((item) => <Cards item={item} key={item.id}/>)
            }
            </div>
            <div className='seeCart'>
            <Button variant="secondary">See the cart</Button>
            </div>
        </>
    )
}

export default EcomBody