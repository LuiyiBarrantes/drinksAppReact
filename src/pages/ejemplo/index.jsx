import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Ejemplo = () => {
  return (
    <div>
      <Link to='/'>Volver al home</Link>
      
      <Container>
        <Col>
          <Row>
            Aca hay un container
            <Card>
              aca hay una card
            </Card>
            <Card>
              otra card
            </Card>
          </Row>
        </Col>
      </Container>
    
    </div>
  )
}
