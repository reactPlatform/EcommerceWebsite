import './App.css';
import EcomBody from './components/EcomBody';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import { useState , useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartItems from './components/CartItems';


function App() {
  // const [itemLength, setItemLength] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    let canAddItem = true;
    for (let cartItem of cartItems) {
      if (item.id === cartItem.id) {
        canAddItem = false;
      
      }
    }
    if (canAddItem) {
      setCartItems([...cartItems, item]);
      // setItemLength(cartItems.length);
    }

  }

 
  
  return (
    <>
      <NavbarComponent itemLength={cartItems.length} />
      
        <Routes>
          <Route path="/store" element={<EcomBody handleAddToCart={handleAddToCart} />} />
          <Route path="/cartitems" element={<CartItems cartItems={cartItems}/>} />
          <Route path="/store/cartitems" element={<CartItems />} />
        </Routes>
    
      <Footer />
    </>
  );
}

export default App;
