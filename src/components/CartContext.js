import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [currentUser,setCurrentUser] = useState('');
    const [totalAmount,setTotalAmount] = useState(0);
    const baseUrl = 'https://crudcrud.com/api/e05e892a926b488b9e7ab9800e54228f';
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
        updateCartInApi();
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

    const currentUserHandler = (email) => {
        setCurrentUser(email);
    }

    const updateCartInApi = () => {
        const cartData = {
            cartItems,
            Email:currentUser
        }
        fetch(`${baseUrl}/cart${currentUser.replace('@','').replace('.','')}`, {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(cartData)
        })
        .then(() => {
            console.log('updated');
        })
    }

    const getCartFromApi = () => {
        if(!currentUser) return;
        fetch(`${baseUrl}/cart${currentUser.replace('@','').replace('.','')}`)
        .then((res) => {
           return res.json();
        }).then((res)=> {
            if(!res) return;
            const items = res.find(x => x.cartItems.length > 0);
            setCartItems(items);
        })
    }

    
        getCartFromApi();
  
      
    const cart = {
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        decreaseItemQuantity,
        updateTotalAmount,
        currentUserHandler,
        totalAmount
    };
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );

};