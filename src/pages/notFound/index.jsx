import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Container style={{backgroundColor:'red'}}>
        <Row className='d-flex justify-content-center'>
            <Col  md={6}>
                <h1 className='text-center text-white'>Error 404</h1>
                <p className='text-center text-white'>Upss.. creo que te perdiste... Pagina no encontrada...</p>
            
            <Figure className='d-flex justify-content-center'><img src="https://media.tenor.com/hiZwFajWr7IAAAAM/party-pour-drink.gif" alt="" /></Figure>

            <Link to={'/drinksAppReact'}><p className='text-center text-white'>Volver al inicio</p></Link>
            </Col>
        </Row>

    </Container>
  )
}
