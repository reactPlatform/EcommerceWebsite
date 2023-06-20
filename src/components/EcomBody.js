import React from 'react'
import Cards from './Cards';
import productsArr from '../Data';
import '../assets/ecombody.css';
import Login from './Authentication/Login';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const EcomBody = () => {
    const {currentUser} = useContext(CartContext);
    return (
        <>
        {
            !currentUser ? <Login /> : (
                <>
            <div className='text-bg-secondary p-3 text-center'>
                <h1>The Generics</h1>
            </div>
            <div className='cardstyle'>
            {
                productsArr.map((item) => <Cards item={item} key={item.id} />)
            }
            </div>
            </>
            ) 
        }    
        </>
    )
}

export default EcomBody