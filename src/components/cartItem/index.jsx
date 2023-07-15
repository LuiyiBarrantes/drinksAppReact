import React from 'react'
import useCart from '../../hooks/useCart'
import { Image, ListGroup } from 'react-bootstrap'
import { IconMinus, IconShoppingCartPlus } from '@tabler/icons-react'
import { IconTrash } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'
import { types } from '../../types'

export const CartItems = () => {
   const {cart, dispatch} = useCart()

   const {addItemToCart, removeItemFromCart, removeAllItemsFromCart} =  types
    const handleAddItem = (drink) => {
        //console.log(drink);
        dispatch({
            type: addItemToCart,
            payload: drink
        })
    }

    const handleRemoveItem = (drink) => {
        //console.log(drink);
        dispatch({
            type: removeItemFromCart,
            payload: drink
        })
    }
    const handleRemoveAllItem = (drink) => {
        //console.log(drink);
        dispatch({
            type: removeAllItemsFromCart ,
            payload: drink
        })
    }
   
  return (
    cart.map((item,i)=> <ListGroup.Item 
    className='d-flex gap-2'
    key={item+i}
    >
        <Image
        src={item.strDrinkThumb}
        width={'50px'}
        height={'70px'}
        />
        <div style={{width:'60%'}}>
        <h6 className='text-center'>{item.strDrink}</h6>
        <hr />
        <h6>Price $ {item.price}</h6>
        <div className="btn-group gap-1" role="group" aria-label="Basic example">
            <button className='btn btn-sm btn-outline-danger' onClick={()=>handleRemoveItem(item)}>
            <IconMinus></IconMinus>
                </button>
            <input 
            type="text" 
            className='form-control w-20'
            disabled 
            value={item.quantity} />
            <button className='btn btn-sm btn-outline-success' onClick={()=>handleAddItem(item)}>
            <IconPlus
            ></IconPlus>
                </button>
            <button className='btn btn-sm btn-danger'
            onClick={()=>handleRemoveAllItem(item)}>
            <IconTrash></IconTrash>
                </button>

        </div>
        
        </div>
        
        <div className='d-flex flex-column'>
            <h6>Sub Total:</h6> 
            <h4>$ {item.price * item.quantity}</h4>   
        </div>
    </ListGroup.Item> )
  )
}
