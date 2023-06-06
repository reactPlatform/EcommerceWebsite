import './App.css';
import EcomBody from './components/EcomBody';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import { useState , useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import CartItems from './components/CartItems';
import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import About from './components/About';
import ContactUS from './components/ContactUS';
import ProductDetail from './components/ProductDetail';
import { Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Authentication/Login';

function App() {
  return (
   
    <CartProvider>
      <NavbarComponent />
      
        <Switch>
       <Route path="/home"><Home /></Route>
       <Route path='/about'><About /></Route> 
       <Route path="/store" exact ><EcomBody /></Route> 
       <Route path="/contact" ><ContactUS /></Route> 
       <Route path="/cartitems"><CartItems /></Route>
       <Route path="/store/cartitems"><CartItems /></Route>
       <Route path='/productDetails/:productId'><ProductDetail /></Route>
       <Route path="/login"><Login /></Route>
       </Switch>
    
      <Footer />
    </CartProvider>
  );
}

export default App;
