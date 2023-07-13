import React from 'react'
import styles from './index.module.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap'


export const MainLayout = ({children}) => {
  return (
    <div className={styles.body}>
        <Header/>
        <Container className={styles.main}
        /* className='mt-3' */>
            {children}
        </Container>
        <Footer/>
    </div>
  )
}

MainLayout.protoTypes={
    children : PropTypes.node.isRequired
}
