import './App.css';
import EcomBody from './components/EcomBody';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import { useState , useEffect } from 'react';
import { Route } from 'react-router-dom';
import CartItems from './components/CartItems';
import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import About from './components/About';
import ContactUS from './components/ContactUS';

function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      
        
       <Route path="/home"><Home /></Route>
       <Route path='/about'><About /></Route>
       <Route path="/store" ><EcomBody /></Route> 
       <Route path="/contact" ><ContactUS /></Route> 
       <Route path="/cartitems"><CartItems /></Route>
       <Route path="/store/cartitems"><CartItems /></Route>
        
    
      <Footer />
    </CartProvider>
  );
}

export default App;
