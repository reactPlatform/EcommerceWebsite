import './App.css';
import EcomBody from './components/EcomBody';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import { useState , useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartItems from './components/CartItems';
import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/store" element={<EcomBody />} />
          <Route path="/cartitems" element={<CartItems />} />
          <Route path="/store/cartitems" element={<CartItems />} />
        </Routes>
    
      <Footer />
    </CartProvider>
  );
}

export default App;
