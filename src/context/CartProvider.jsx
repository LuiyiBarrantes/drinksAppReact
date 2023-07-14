 import PropTypes from 'prop-types';
import { createContext, useReducer, useState } from 'react';
import useDrinks from '../hooks/useDrinks';
import { cartReducer } from '../reducers/cart.reducer';
 
 const CartContext = createContext(null);
 
 const init = () => { 
    return JSON.parse(localStorage.getItem('cart')) || []
  }

 const CartProvider = ({children}) => {
     // Initial Provider State
     /* const [cart, setCart] = useState([])
     const {drinks} = useDrinks()
     const addCart = (idDrink) => { 
        const drinkItemCart = drinks.find(drink => drink.idDrink === idDrink)
        setCart([...cart, drinkItemCart])
      } */

      const [cart, dispatch] = useReducer(cartReducer, [], init)

     const contextValues = {
        cart,
        dispatch
        /* 
        addCart  */
    }
     
     // Reducer Function
    /*  const  = (state, action) => {
         
    }; */
    
    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
}
CartProvider.propTypes ={
children : PropTypes.node.isRequired
}
export { CartContext,
CartProvider}