import React, { useEffect } from 'react'
import { SearchForm } from '../../components/searchForm'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import styles from "./index.module.css";
import { DrinksList } from '../../components/drinksList'
import DrinkModalDetail from '../../components/drinkModalDetail'

export const Home = () => {

  const {user, logout, setTokenSession, tokenSession, profile} = useAuth()

  /* useEffect(() => {
    setTokenSession(setTokenSession(sessionStorage.getItem('DrinksToken')))
  profile(tokenSession)
  
  
  }, []) */

  return (
    <div className={`d-flex justify-content-between${styles.body}`}>
      
        {
        user && <Col xs={1} className='me-3'>
        
        
        <h2>Hola {user.name}!</h2> 
        <p>Deseas ordenar algo?</p>
        
      
         </Col>
      }
        
        <Col  className='ms-2 me-2'>
        <h1>Encuentra tu bebida favorita.</h1>
      
      <hr />
      <SearchForm/>
      <DrinksList/>
      <DrinkModalDetail/>
        </Col>
        <Col className='border-start' xs={2} >
        
      
      <h2 className='mt-5 p-3'><Link to={'/bebidasGratis'}>Bebidas GRATIS</Link>
      </h2>
      </Col>
            
    </div>
  )
}
