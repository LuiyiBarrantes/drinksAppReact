import { useState } from 'react'
//importamos los estilos de bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MainLayout } from './layouts'
import { AppRoutes } from './routes'
import { UserProvider } from './context/UserProvider'
import { CategoriesProvider } from './context/CategoriesProvider'
import { DrinksProvider } from './context/DrinksProvider'

function App() {
  const [count, setCount] = useState(0)

  return (

    <UserProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </DrinksProvider>
      </CategoriesProvider>
    </UserProvider>

  )
}

export default App
