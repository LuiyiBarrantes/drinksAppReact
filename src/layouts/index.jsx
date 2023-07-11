import React from 'react'
import styles from './index.module.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap'


export const MainLayout = ({children}) => {
  return (
    <div className={styles.main}>
        <Header/>
        <Container className='mt-5'>
            {children}
        </Container>
        <Footer/>
    </div>
  )
}

MainLayout.protoTypes={
    children : PropTypes.node.isRequired
}
