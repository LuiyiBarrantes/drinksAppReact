import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { getCategoriesService } from '../services/categories.service';
import { getIngredientsService } from '../services/ingredients.service';

const CategoriesContext = createContext(null)

const CategoriesProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([])

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesService()
 

            setCategories(categoriesData)
        } catch (error) {
            console.error;
        }
    }
    
    async function getIngredients() {
      try {
        const ingredientsData = await getIngredientsService();
      setIngredients(ingredientsData)
      } catch (error) {
        console.error;
      }
    }
    
    useEffect(() => {
      getCategories()
      getIngredients()
       }, [])
    

    const contextValue = {
        categories,
        ingredients
    }
  
    return (
        <CategoriesContext.Provider value={contextValue}>
            {children}
        </CategoriesContext.Provider>
    )

}

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {
    CategoriesProvider,
    CategoriesContext
}
