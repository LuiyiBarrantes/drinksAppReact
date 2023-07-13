import { useState } from 'react'
//importamos los estilos de bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'
import { UserProvider } from './context/UserProvider'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'
import { CartProvider } from './context/CartProvider'

function App() {
  

  return (

    <UserProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <CartProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
          </CartProvider>
        </DrinksProvider>
      </CategoriesProvider>
    </UserProvider>

  )
}

export default App
