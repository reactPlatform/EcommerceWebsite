import React from 'react'
import '../assets/navbarcomponent.css';
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = ({itemLength}) => {
  const navigate = useNavigate();
  return (
    <div className='navContainer'>
      <ul className='ulContainer'>
        <li className='liContainer'>HOME</li>
        <li className='liContainer' onClick={() => navigate("store")}>STORE</li>
        <li className='liContainer'>ABOUT</li>
        <Cart itemLength={itemLength} />
      </ul>
      
    </div>
  )
}

export default NavbarComponent