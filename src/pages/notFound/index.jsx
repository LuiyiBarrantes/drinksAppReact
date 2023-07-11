import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const NotFound = () => {
  return (
    <Container style={{background:'red'}}>
        <Row>
            <Col md={6}>
                <h1 className='text-center text-white'>404</h1>
                <p className='text-center text-white'>Pagina no encontrada</p>
            </Col>
        </Row>

    </Container>
  )
}
