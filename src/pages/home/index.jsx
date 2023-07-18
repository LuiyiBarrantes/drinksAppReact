import React from 'react'
import { SearchForm } from '../../components/searchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'
import styles from "./index.module.css";
import { DrinksList } from '../../components/drinksList'
import DrinkModalDetail from '../../components/drinkModalDetail'

export const Home = () => {

  const {user, logout} = useUser()

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
        {/* <h2>Hola! {user}</h2> 
        <h2>Bienvenido</h2> */}
        
        <Button 
        onClick={() => logout()}
        variant='danger'>Cerrar sesion</Button>
        </> : <Link to={'/login'}>Inicia sesion</Link>
      }
      
      <h2 className='mt-5'><Link to={'/ejemplo'}>Ancla de prueba</Link>
      </h2>
      </Col>
      </Row>
      
      
      
    </div>
  )
}
