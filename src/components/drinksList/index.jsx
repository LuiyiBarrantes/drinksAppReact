import React from 'react'
import PropTypes from 'prop-types'
import useDrinks from '../../hooks/useDrinks'
import { Row } from 'react-bootstrap'
import { DrinkCard } from '../drinkCard'

export const DrinksList = () => {

   const {drinks} = useDrinks()
   //console.log(drinks);
  return (
    <Row>
        {
            drinks.map((drink) => 
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