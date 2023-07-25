import React, { useState } from 'react'
import styles from './index.module.css'
import { IconGlassFull, IconShoppingCart, IconUserCircle } from '@tabler/icons-react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { CartCanvas } from '../cartCanvas'
import { Badge } from 'react-bootstrap'
import useCart from '../../hooks/useCart'
import { IconLogin } from '@tabler/icons-react'
import { IconLogout } from '@tabler/icons-react'

export const Header = () => {
  const { user, logout } = useAuth() || {}
  const { cart, totalItems } = useCart()
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleHideCart = () => setShowCart(false)
  const handleLogout = () => { logout() }


  return (
    <header className={`position-sticky d-flex justify-content-between align-items-center py-4 ${styles.header}`}>
      <div className='d-flex align-items-center'><figure className='ms-1 ms-sm-3 ms-md-5'><Link className={styles.link} to={'/drinksAppReact/'}><IconGlassFull className='ms-1 ms-sm-3 ms-md-4 ms-lg-5' width={80} height={80}></IconGlassFull></Link></figure>
        <div className='ms-sm-1 ms-md-3 ms-lg-5  d-flex gap-md-2 gap-3 gap-sm-1'>
          <p className=' fs-6 fs-4 '>Es momento de unos</p>
          <h1 className={styles.h1}> Drinks</h1>
          
        </div>
      </div>
      <div className='d-flex me-3 me-md-5 gap-1'>
        <div>
          
          {user ? <Link className={styles.link} to={'/user/profile'}><IconUserCircle width={50} height={50} className={styles.icon}>
            </IconUserCircle>
            <p>{user.name}</p>
            </Link> : <Link className={styles.link} to={'/login'}>
            <IconLogin width={50} height={50} className={styles.icon}>
            </IconLogin>
            </Link>}
          </div>
        <div className='position-relative'>
          <IconShoppingCart
            className={styles.icon}
            width={50}
            height={50}
            onClick={handleShowCart}>
          </IconShoppingCart>
          <Badge className='position-absolute start-50' pill>{/* cart.length */ totalItems}</Badge>
        </div >
        {user && <div className='ms-5'>
          <IconLogout  onClick={handleLogout} width={30} height={50}></IconLogout>
          <p>Salir</p>
        </div> }
        <CartCanvas showCart={showCart} handleCloseCart={handleHideCart} />
      </div>
    </header>
  )
}
