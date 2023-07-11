import  PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext(null)

const UserProvider = ({children}) => {    

    const [user, setUser] = useState(null)

    const login = () => {
        setUser('Luis')
    }
    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        login,
        logout
    }

  return (
    
    <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
    
  )
}

UserProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    UserContext,
    UserProvider
}