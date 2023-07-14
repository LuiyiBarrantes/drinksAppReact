import { Col, ListGroup, Offcanvas } from "react-bootstrap"
import PropTypes from 'prop-types';
import useCart from "../../hooks/useCart";
import { IconShoppingCartOff } from "@tabler/icons-react";
import { CartItems } from "../cartItem";

export const CartCanvas = ({handleCloseCart,showCart}) => {
    
    const {cart} = useCart()

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