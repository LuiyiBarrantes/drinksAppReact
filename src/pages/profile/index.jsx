import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export const Profile = () => {

    const { user, login, logout, profile, tokenSession, setTokenSession} = useAuth()
    
    useEffect(() => {
      setTokenSession(setTokenSession(sessionStorage.getItem('DrinksToken')))
    profile(tokenSession)
    
    
    }, [])
    
    

    /* useEffect(() => {
      login()
    
      /* return () => {
        second
      } 
    }, [login])
    */ 

  return (
    <div><h1>Este es tu perfil</h1>
    <hr />
    
    <h2>Bienvenido {user.name}</h2>
    <Link to={'/drinksAppReact/'}>Volver al Home</Link>
    </div>
  )
}
