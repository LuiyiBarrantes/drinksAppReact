import  PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { loginAuthService, profileAuthService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {    

    const [user, setUser] = useState(null)
    const [alert, setAlert] = useState(null)
    const [tokenSession, setTokenSession] = useState(null)

    const handleAlert = (error) => { 
        setAlert(error)
        setTimeout(()=>{
            setAlert(null)
        }, 1500)
     }
     //values form login
    const login = async (values) => {
        try {
            const {token} = await loginAuthService(values)

            sessionStorage.setItem('DrinksToken', token)
            const decodedToken =  token ?  jwtDecode(token) : null
            //console.log(response);
            setUser(decodedToken.user)
        } catch (error) {
            //console.log(error);
            handleAlert(error)
        }
    }

    const profile = async (token) => { 
        try {
            /* setTokenSession(sessionStorage.getItem('DrinksToken')) */
            const {user} = await profileAuthService(token)
            /* const decodedToken =  token ?  jwtDecode(token) : null */
            //console.log(response);//
            setUser(user)
        } catch (error) {
            //console.log(error);
            //handleAlert(error)
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