import { useState } from 'react'
//importamos los estilos de bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'
import { CartProvider } from './context/CartProvider'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'

function App() {


  return (
    <BrowserRouter basename="/drinksAppReact">
    
      <AuthProvider>
        <CategoriesProvider>
          <DrinksProvider>
            <CartProvider>
              <MainLayout>
                <AppRoutes />
              </MainLayout>
            </CartProvider>
          </DrinksProvider>
        </CategoriesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
