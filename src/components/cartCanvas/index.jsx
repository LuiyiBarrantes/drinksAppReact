import { Col, ListGroup, Offcanvas } from "react-bootstrap"
import PropTypes from 'prop-types';
import useCart from "../../hooks/useCart";
import { IconShoppingCartOff } from "@tabler/icons-react";
import { CartItems } from "../cartItem";
import { types } from "../../types";
const { cleanCart } = types

export const CartCanvas = ({handleCloseCart,showCart}) => {
    
    const {cart, dispatch} = useCart()

    const handleCleanCart = () => {
        //console.log(drink);
        dispatch({
            type: cleanCart,
            payload: cart
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
            <Offcanvas.Body>
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
                
            </Offcanvas.Body>
        </Offcanvas>
    )
}

CartCanvas.propTypes = {
    showCart: PropTypes.bool,
    handleCloseCart: PropTypes.func,
}