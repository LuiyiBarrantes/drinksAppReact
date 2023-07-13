 import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import useDrinks from '../hooks/useDrinks';
 
 const CartContext = createContext(null);
 
 const CartProvider = ({children}) => {
     // Initial Provider State
     const [cart, setCart] = useState([])

     const {drinks} = useDrinks()

     const addCart = (idDrink) => { 
        const drinkItemCart = drinks.find(drink => drink.idDrink === idDrink)

        setCart([...cart, drinkItemCart])

      }

     const contextValues = {
        cart,
        addCart 
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