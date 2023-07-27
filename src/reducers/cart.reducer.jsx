//const initialState = []

//el segundo parametro del reducer es el action, lo desestructuro ahi mismo
import { types } from '../types'
const { addItemToCart, removeItemFromCart, removeAllItemsFromCart, cleanCart } = types
export const cartReducer = (state = [], { type, payload }) => {
    const item = state.find(item => item.idDrink === payload.idDrink)


    switch (type) {

        case addItemToCart:
            //console.log(item);
            return item ?
                state.map(item => item.idDrink === payload.idDrink ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                    :
                    item)
                :
                [
                    ...state,
                    {...payload,
                    quantity : 1}
                ]
                
        case removeItemFromCart:
            return payload.quantity > 1 ?
            state.map(item => item.idDrink === payload.idDrink ? {
                ...item,
                quantity: item.quantity - 1
            }
                :
                item)
            :
            
            state.filter(item => item.idDrink !== payload.idDrink)
        case removeAllItemsFromCart:
            return state.filter(item => item.idDrink !== payload.idDrink)
        
        case cleanCart:
            return state=[]
        default:
            return state
    }
}
