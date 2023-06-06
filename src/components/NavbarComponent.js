import React from 'react'
import '../assets/navbarcomponent.css';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  
  return (
    <div className='navContainer'>
      <ul className='ulContainer'>
        <li className='liContainer' > <NavLink to='/home' >HOME</NavLink></li>
        <li className='liContainer' > <NavLink to='/store' >STORE</NavLink></li>
        <li className='liContainer' ><NavLink to='/about' >ABOUT</NavLink></li>
        <li className='liContainer' ><NavLink to='/contact' >CONTACT US</NavLink></li>
        <li className='liContainer' ><NavLink to='/login' >LOGIN</NavLink></li>
        <Cart />
      </ul>
      
    </div>
  )
}

export default NavbarComponent