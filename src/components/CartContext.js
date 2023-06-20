import { func } from "prop-types";
import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [currentUser,setCurrentUser] = useState('');
    const [totalAmount,setTotalAmount] = useState(0);
    const baseUrl = 'https://crudcrud.com/api/4412dda31fd245a6afd08eae0fe96239';
    const addToCart = (item) => {
        setTimeout(() => {
            const items = [item]
            updateCartInApi(items); 
          }, 3000);
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
        if(cartItems){
            cartItems.forEach(x => total=total+(x.price*x.itemCount))
        }
        
        setTotalAmount(total);
      }

    const currentUserHandler = (email) => {
        setCurrentUser(email);
        
    }

    async function updateCartInApi(items){
        const cartData = {
            cartItems: items,
            Email:currentUser
        }
        await fetch(`${baseUrl}/cart${currentUser.replace('@','').replace('.','')}`, {
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

    async function getCartFromApi(){
        if(!currentUser) return;
        fetch(`${baseUrl}/cart${currentUser.replace('@','').replace('.','')}`)
        .then((res) => {
           return res.json();
        }).then((res)=> {
            if(!res) return;
            const items = res.find(x => x.cartItems && x.cartItems.length > 0);
            setCartItems(items ? items : []);
            return false
        })
    }

    
        
  
      
    const cart = {
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        decreaseItemQuantity,
        updateTotalAmount,
        currentUserHandler,
        totalAmount,
        currentUser,
        getCartFromApi
    };
    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    );

};