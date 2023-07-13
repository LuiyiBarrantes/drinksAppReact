import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL



export const filterDrinksService = async (ingredient,category) => {
    try {
        const url = `${apiURL}filter.php?i=${ingredient}&c=${category}`
        const {data} = await axios.get(url)
        //const {drinks} = data

        //console.log(drinks);

        return data.drinks || []

    } catch (error) {
        throw new Error('hubo un error al obtener la bebida')
    }
}

export const getRecipeService = async (drinkId) => {
    try {
    const url = `${apiURL}lookup.php?i=${drinkId}`
    const {data} = await axios.get(url)
    //const {drinks} = data

    //console.log(drinks);

    return data.drinks[0] || []
} catch (error) {
    throw new Error('Hubo un error al obtener la receta')
}}