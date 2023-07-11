import React from 'react'
import { SearchForm } from '../../components/searchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'

export const Home = () => {

  const {user, logout} = useUser()

  return (
    <div>
      <h1>Estas en el Home</h1>
      
      <hr />
      <SearchForm></SearchForm>
      {
        user ? <>
        <h2>Hola! {user}</h2> 
        <button onClick={() => logout()}>Cerrar sesion</button>
        </> : <Link to={'/login'}>Inicia sesion</Link>
      }
      
      <h2><Link to={'/ejemplo'}>Ancla de prueba</Link>
      </h2>
    </div>
  )
}
