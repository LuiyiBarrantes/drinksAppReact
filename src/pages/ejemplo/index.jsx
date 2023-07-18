import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Ejemplo = () => {
  return (
    <div>
      <Link to='/drinksAppReact/'>Volver al home</Link>
      
      <Container>
        <Col>
          <Row>
            Acabas de probar un anlca de enlace
            <Card>
              aca hay una card
            </Card>
            <Card>
              y aca otra card
            </Card>
          </Row>
        </Col>
      </Container>
    
    </div>
  )
}
