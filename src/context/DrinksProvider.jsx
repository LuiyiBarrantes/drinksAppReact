import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { filterDrinksService, getRecipeService } from '../services/drinks.service';

const DrinksContext = createContext(null)

const DrinksProvider = ({ children }) => {

  const [drinks, setDrinks] = useState(null)
  const [loading, setLoading] = useState(false)
  const [recipe, setRecipe] = useState({})
  const [idDrink, setIdDrink] = useState(null)
  const [showModal, setShowModal] = useState(false)


  const getDrinks = async (data) => {
    try {
      const { ingredient, category } = data

      setLoading(true)
      const drinkData = await filterDrinksService(ingredient, category)

      setDrinks(drinkData) 
      //console.log(drinkData);

    } catch (error) {
      //console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    const getRecipe = async () => {
      //console.log(drinkId);
      try {

        setLoading(true)

        const recipeData = await getRecipeService(idDrink)

        setRecipe(recipeData)
        //console.log(recipe);
      } catch (error) {
        //console.log(error);
        //console.error();
      } finally {
        setLoading(false)

      }
    };
    getRecipe()

  }, [idDrink])


  const handleDrinkIdClick = (id) => {
    setIdDrink(id)
    //console.log(id);
  }

  const handleShowModalClick = () => {
    setShowModal((show) => !show)
  }

  const ContextValue = {
    drinks,
    getDrinks,
    loading,
    handleDrinkIdClick,
    showModal,
    handleShowModalClick,
    recipe
  }

  return (
    <DrinksContext.Provider value={ContextValue}>
      {children}
    </DrinksContext.Provider>
  )
}

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export {
  DrinksContext,
  DrinksProvider
}