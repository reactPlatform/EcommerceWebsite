import React from 'react'
import '../assets/navbarcomponent.css';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <div className='navContainer'>
      <ul className='ulContainer'>
        <li className='liContainer' onClick={() => navigate("/")}>HOME</li>
        <li className='liContainer' onClick={() => navigate("store")}>STORE</li>
        <li className='liContainer' onClick={() => navigate("about")}>ABOUT</li>
        <Cart />
      </ul>
      
    </div>
  )
}

export default NavbarComponent