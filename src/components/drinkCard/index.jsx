import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Swal from 'sweetalert2'
import { IconStar } from '@tabler/icons-react'

export const DrinkCard = ({ drink }) => {
    const { strDrinkThumb, strDrink, idDrink } = drink
    const { handleDrinkIdClick, handleShowModalClick } = useDrinks()
    const { dispatch } = useCart()
const {addItemToCart} =  types
    const handleAddCart = () => {
        //console.log(drink);
        dispatch({
            type: addItemToCart,
            payload: drink
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bebida agregada al carrito',
            showConfirmButton: false,
            timer: 1500,
            width:'250px'
          })
    }

    return (
        <Col md={6} lg={3} className='d-flex align-content-stretch'>
            <Card className='mb-4 position-relative'>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />
                <IconStar width={30} height={30} className='btn bg-warning shadow-lg position-absolute top-0 end-0 rounded-circle p-1 '></IconStar>
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title>
                        {strDrink}
                    </Card.Title>
                    <Button
                        variant='warning'
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleDrinkIdClick(idDrink)
                            handleShowModalClick()
                        }
                        }
                    >
                        Ver receta
                    </Button>
                    <Button
                        variant='danger'
                        className='w-100 text-uppercase mt-1'
                        onClick={ handleAddCart                      }

                    >
                        Comprar <IconShoppingCartPlus></IconShoppingCartPlus>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired
    }).isRequired
}
//PropTypes.objectOf().isRequired

