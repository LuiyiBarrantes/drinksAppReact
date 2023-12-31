import  PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { loginAuthService, profileAuthService, toggleFavoriteDrinkUser } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {    

    const [user, setUser] = useState(null)
    const [alert, setAlert] = useState(null)
    const [tokenSession, setTokenSession] = useState(null)
    const [favoriteDrinks, setFavoriteDrinks] = useState(null);
    //console.log('favoriteDrinks', favoriteDrinks)
    const handleAlert = (error) => { 
        setAlert(error)
        setTimeout(()=>{
            setAlert(null)
        }, 2000)
     }
     const handleAlertToken = (error) => { 
        setAlert(error)
        setTimeout(()=>{
            setAlert(null)
            setUser(null)
        }, 3000)
     }
     //values form login
    const login = async (values) => {
        try {
            const {token} = await loginAuthService(values)

            sessionStorage.setItem('DrinksToken', token)
            const decodedToken =  token ?  jwtDecode(token) : null
            console.log(token);//
            setUser(decodedToken.user)
            setTokenSession(token)
            console.log(tokenSession);//

        } catch (error) {
            //console.log(error);
            handleAlert(error)
        }
    }
    const toggleFavorite = async (payloadDrink) => { 
        try {
            const {data} = await toggleFavoriteDrinkUser(payloadDrink, tokenSession)
            //console.log('data.favorites', data.favorites)
            const {favorites} = data
            //console.log('payloadDrink', payloadDrink)
            //console.log('favorites', favorites)
            /*const updatedFavoriteDrinks = favorites.filter(
                (favorite) => favorite.drink.toString() !== payloadDrink.idDrink.toString()
              ); */
              
              const updatedFavoriteDrinks = [...favorites]
              //console.log('updatedFavoriteDrinks', updatedFavoriteDrinks)
             setFavoriteDrinks(updatedFavoriteDrinks /*favorites*/ )
        } catch (error) {
            console.log('error', error)
        }
     }

    const profile = async (token) => { 
        try {
            /* setTokenSession(sessionStorage.getItem('DrinksToken')) */
            const {user} = await profileAuthService(token)
            /* const decodedToken =  token ?  jwtDecode(token) : null *///
            console.log(user);//
            setUser(user)
            setFavoriteDrinks(user.favorites )
        } catch (error) {//
            console.log(error);//
            handleAlertToken(error)
        }
     }

    const logout = () => {
        //sessionStorage.setItem('DrinksToken', null)
        setUser(null)
        
    }

    const contextValue = {
        user,
        alert,
        setTokenSession,
        tokenSession,
        profile,
        login,
        toggleFavorite,
        favoriteDrinks,
        setFavoriteDrinks,
        logout
    }

  return (
    
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
    
  )
}

AuthProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    AuthContext,
    AuthProvider
}