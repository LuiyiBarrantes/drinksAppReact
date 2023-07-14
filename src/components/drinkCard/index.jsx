import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'
import useCart from '../../hooks/useCart'
import { types } from '../../types'

export const DrinkCard = ({ drink }) => {
    const { strDrinkThumb, strDrink, idDrink } = drink
    const { handleDrinkIdClick, handleShowModalClick } = useDrinks()
    const { dispatch } = useCart()
const {addItem/* , removeItem, removeAll, cleanCart */} =  types
    const handleAddCart = () => {

        dispatch({
            type: addItemToCart,
            payload: drink
        })
    }

    return (
        <Col md={6} lg={3} className='d-flex align-content-stretch'>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />
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
                        Comprar
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

