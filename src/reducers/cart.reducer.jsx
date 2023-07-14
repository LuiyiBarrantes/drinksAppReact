//const initialState = []

//el segundo parametro del reducer es el action, lo desestructuro ahi mismo
import {types} from '../types'
const {addItemToCart , removeItemFromCart } = types
export const cartReducer = (state = [], { type, payload }) => {
    switch (type) {

        case addItemToCart:
            return [ ...state, payload] 

        case removeItemFromCart :
            return state.filter(item => item.idDrink !== payload)

        default:
            return state
    }
}
