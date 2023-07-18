import React, { useState } from 'react'
import styles from './index.module.css'
import { IconGlassFull, IconShoppingCart, IconUserCircle } from '@tabler/icons-react'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { CartCanvas } from '../cartCanvas'
import { Badge } from 'react-bootstrap'
import useCart from '../../hooks/useCart'

export const Header = () => {
  const { user } = useUser() || {}
  const { cart, totalItems } = useCart()
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleHideCart = () => setShowCart(false)


  return (
    <header className={`position-sticky d-flex justify-content-between align-items-center py-4 ${styles.header}`}>
      <div className='d-flex align-items-center'><figure className='ms-1 ms-sm-3 ms-md-5'><Link className={styles.link} to={'/drinksAppReact/'}><IconGlassFull className='ms-1 ms-sm-3 ms-md-4 ms-lg-5' width={80} height={80}></IconGlassFull></Link></figure>
        <div className='ms-sm-1 ms-md-3 ms-lg-5  d-flex gap-md-2 gap-3 gap-sm-1'>
          <p className=' fs-6 fs-4 '>Es momento de unos</p>
          <h1 className={styles.h1}> Drinks</h1>
          
        </div>
      </div>
      <div className='d-flex me-3 me-md-5 gap-1'>
        <div><Link className={styles.link} to={'/user'}><IconUserCircle width={50} height={50} className={styles.icon}></IconUserCircle></Link>
          {user ? <p>Hola {user}</p> : ''}</div>
        <div className='position-relative'>
          <IconShoppingCart
            className={styles.icon}
            width={50}
            height={50}
            onClick={handleShowCart}>
          </IconShoppingCart>
          <Badge className='position-absolute start-50' pill>{/* cart.length */ totalItems}</Badge>
        </div>
        <CartCanvas showCart={showCart} handleCloseCart={handleHideCart} />
      </div>
    </header>
  )
}
