import { Button, Col, ListGroup, Offcanvas } from "react-bootstrap"
import PropTypes from 'prop-types';
import useCart from "../../hooks/useCart";
import { IconShoppingCartOff } from "@tabler/icons-react";
import { CartItems } from "../cartItem";
import { types } from "../../types";
import Swal from "sweetalert2";
const { cleanCart } = types

export const CartCanvas = ({handleCloseCart,showCart}) => {
    
    
    const {cart, dispatch, totalPrice} = useCart()
//console.log(cart);
         //guardo en local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    const handleCleanCart = () => {
        //console.log(drink);
        Swal.fire({
            title: 'Seguro?',
            text: "No podras revertir estos cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, vaciar!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch({
            type: cleanCart,
            payload: cart
        })
        Swal.fire(
                'Hecho!',
                'El carrito se a vaciado.',
                'success'
              )
            }
          })
        
    }

    

    return (
        <Offcanvas 
        show={showCart}
        onHide={handleCloseCart}
        placement="end"
        >
            <Offcanvas.Header
            closeButton>
            <Offcanvas.Title>
            Tu Carrito
            </Offcanvas.Title>
            {
                !cart.length ?
                '':
                <button className='btn btn-sm btn-outline-danger' onClick={handleCleanCart}>Vaciar
            <IconShoppingCartOff></IconShoppingCartOff>
                </button>}
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column justify-content-between">
                <ListGroup>
                    {
                        cart.length ?
                        <CartItems></CartItems>
                        :
                        <div className="d-flex flex-column align-items-center">
                        <IconShoppingCartOff/>
                        <p>Carrito Vacio</p>
                        </div>
                        
                    }
                </ListGroup>
                
                <div className="d-flex justify-content-between border-top">
                    {cart.length>0 && <><h4>Total: ${totalPrice}</h4>
                    <Button className='btn btn-warning mt-3'>
                        Confirmar Comprar
                    </Button>
                    </>  }
                    
                </div>
                
            </Offcanvas.Body>
        </Offcanvas>
    )
}

CartCanvas.propTypes = {
    showCart: PropTypes.bool,
    handleCloseCart: PropTypes.func,
}