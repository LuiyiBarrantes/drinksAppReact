import React from 'react'
import PropTypes from 'prop-types'
import useDrinks from '../../hooks/useDrinks'
import { Row } from 'react-bootstrap'
import { DrinkCard } from '../drinkCard'

export const DrinksList = () => {

   const {drinks} = useDrinks()//
   //console.log(drinks);
  return (
    <Row>
        {
            !drinks ? <h3>Intenta buscar alguna bebida, quizas encuentres algo de tu agrado.</h3> : drinks.length == 0 ? <h4> Lo siento, no hay coincidencias, intenta con otro ingrediente o categoria.</h4> : drinks.map((drink) => 
             ( <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />  )
            )
        }
    </Row>
  )
}

/* DrinksList.propTypes = {}

export default DrinksList */