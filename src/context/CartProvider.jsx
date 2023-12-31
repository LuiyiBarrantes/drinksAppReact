 import PropTypes from 'prop-types';
import { createContext, useReducer, useState } from 'react';
import useDrinks from '../hooks/useDrinks';
import { cartReducer } from '../reducers/cart.reducer';
 
 const CartContext = createContext(null);
 
 const init = () => { 
    return JSON.parse(localStorage.getItem('cart')) || []
  }
 const CartProvider = ({children}) => {
     

      const [cart, dispatch] = useReducer(cartReducer, [], init)
//console.log(cart);
    const totalItems = cart.reduce(
    (subTotal, item) => subTotal + item.quantity,
    0
  );
    
    const totalPrice = cart.reduce((subTotalPrice, item) => subTotalPrice + (item.price * item.quantity), 0)
  //console.log(totalItems);
     const contextValues = {
        cart,
        dispatch,
        totalItems,
        totalPrice
        /* 
        addCart  */
    }
     
    
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