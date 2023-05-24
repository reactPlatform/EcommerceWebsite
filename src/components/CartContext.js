import { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    
    const addToCart = (item) => {
        let canAddItem = true;
        for (let cartItem of cartItems) {
            if (item.id === cartItem.id) {
                canAddItem = false;
            }
        }
        if (canAddItem) {
            setCartItems([...cartItems, item]);
        }
    };
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };
    const updateItemQuantity = (updateItem) => {
        let selectedItem = cartItems.find((item) => item.id === updateItem.id)
        selectedItem.itemCount += 1;
        updateTotalAmount();
        
    }
    const decreaseItemQuantity = (decreaseItem) => {
        let selectedItem = cartItems.find((item) => item.id === decreaseItem.id)
        selectedItem.itemCount -= 1;
        updateTotalAmount();
        
    }
    const updateTotalAmount = () => {
        let total = 0;
        cartItems.forEach(x => total=total+(x.price*x.itemCount))
        setTotalAmount(total);
      }
      //updateTotalAmount();
    const cart = {
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        decreaseItemQuantity,
        totalAmount
    };
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );

};