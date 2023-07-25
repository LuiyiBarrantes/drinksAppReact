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

  useEffect(() => {
    setTokenSession(setTokenSession(sessionStorage.getItem('DrinksToken')))
  profile(tokenSession)
  
  
  }, [])

  return (
    <div className={`d-flex ${styles.body}`}>
      <Row className='justify-content-between w-100'>
        <Col  >
        <h1>Encuentra tu bebida favorita.</h1>
      
      <hr />
      <SearchForm/>
      <DrinksList/>
      <DrinkModalDetail/>
        </Col>
        <Col className='border-start' xs={2} >
        {
        user ? <>
        
        <h2>Hola {user.name}!</h2> 
        <p>Deseas ordenar algo?</p>
        
        <Button 
        onClick={() => logout()}
        variant='danger'>Cerrar sesion</Button>
        </> : <Link to={'/login'}>Inicia sesion</Link>
      }
      
      <h2 className='mt-5'><Link to={'/bebidasGratis'}>Bebebidas GRATIS</Link>
      </h2>
      </Col>
      </Row>
      
      
      
    </div>
  )
}
