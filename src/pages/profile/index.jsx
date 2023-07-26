import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Col, Row } from 'react-bootstrap'

export const Profile = () => {

    const { user, login, logout, profile, tokenSession, alert} = useAuth()
    
    useEffect(() => {
      //setTokenSession(setTokenSession(sessionStorage.getItem('DrinksToken')))
      console.log('tokenSession', tokenSession)
    profile(tokenSession)
    
    
    }, [])

    const handleSweetAlert = (alert) => { 
      let timerInterval
      Swal.fire({
        title: alert,
        html: 'Tu sesión expiró, te estamos redirigiendo al login ',
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()          
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      }) }

  return (
    !alert 
    && 
    (<div>
      <h1 className='border-bottom mb-3'>Este es tu perfil</h1>
       
    <h2>Bienvenido {user.name}</h2>
    <Row className='border-top '>
    <Col className='border-end'>
    <h2>Tus Favoritos</h2>
    </Col>
    <Col xs={5}>
    <h2 >Tus Compras</h2>
    </Col>
    </Row>
    <Link to={'/'}>Volver al Home</Link>
    </div>) 
    || 
    alert 
    && 
    handleSweetAlert(alert)
    

  )
}
    
  

