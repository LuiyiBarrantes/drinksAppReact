import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Image, Modal, Row, Spinner } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'
import useCart from '../../hooks/useCart'
import { types } from '../../types'

const DrinkModalDetail = () => {
    const { showModal, handleShowModalClick, recipe, loading } = useDrinks()

    const { strDrink, strDrinkThumb, strInstructions, idDrink } = recipe

    const showIngredients = () => {
        const ingredients = []
        for (let i = 1; i < 15; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={strDrink + i}>
                        {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
                    </li>
                )
            }

        }
        return ingredients
    }
    const { dispatch } = useCart()
    const { addItem/* , removeItem, removeAll, cleanCart */ } = types
    const handleAddCart = () => {

        dispatch({
            type: addItemToCart,
            payload: { strDrink, strDrinkThumb, idDrink }
        })
    }

    return (
        <Modal
            show={showModal}
            onHide={handleShowModalClick}
            size='lg'
        >
            <Row>
                <Col>
                    {
                        loading ? '' : <Image
                            src={strDrinkThumb}
                            alt={`Imagen de ${strDrink}`}
                            fluid
                            className='rounded-start'
                        />
                    }
                </Col>

                <Col>

                    <Modal.Header
                        closeButton
                    >
                        <Modal.Title>
                            {
                                loading ? <Spinner></Spinner> : strDrink
                            }
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            loading ? '' :
                                <>
                                    <h4>Ingredients & Measures</h4>
                                    <ul>
                                        {showIngredients()}
                                    </ul>
                                    <h4>Instructions</h4>
                                    <p>{strInstructions}</p>
                                    <Button
                                        variant='danger'
                                        className='w-100 text-uppercase mt-1'
                                        onClick={handleAddCart}

                                    >
                                        Comprar
                                    </Button>
                                </>
                        }
                    </Modal.Body>
                </Col>
            </Row>
        </Modal>
    )
}

DrinkModalDetail.propTypes = {}

export default DrinkModalDetail