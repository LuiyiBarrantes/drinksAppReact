import React from 'react'
import useCart from '../../hooks/useCart'
import { Image, ListGroup } from 'react-bootstrap'
import { IconMinus, IconShoppingCartPlus } from '@tabler/icons-react'
import { IconTrash } from '@tabler/icons-react'
import { IconPlus } from '@tabler/icons-react'

export const CartItems = () => {
   const {cart} = useCart()
  return (
    cart.map((item,i)=> <ListGroup.Item 
    className='d-flex gap-2'
    key={item+i}
    >
        <Image
        src={item.strDrinkThumb}
        width={'80px'}
        />
        <div style={{width:'100%'}}>
        <h6>{item.strDrink}</h6>
        <hr />
        <h5>$ {item.price}</h5>
        <div class="btn-group gap-1" role="group" aria-label="Basic example">
            <button className='btn btn-sm btn-outline-danger'>
            <IconMinus></IconMinus>
                </button>
            <input 
            type="text" 
            className='form-control w-25' 
            value={item.quantity} />
            <button className='btn btn-sm btn-outline-success'>
            <IconPlus></IconPlus>
                </button>
            <button className='btn btn-sm btn-danger'>
            <IconTrash></IconTrash>
                </button>

        </div>
        </div>
        
    </ListGroup.Item> )
  )
}
