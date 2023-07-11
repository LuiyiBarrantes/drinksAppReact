import { useState } from 'react'

import { MainLayout } from './layouts'
import { AppRoutes } from './routes'
import { UserProvider } from './context/UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <UserProvider>
      <MainLayout>
        <AppRoutes></AppRoutes>
      </MainLayout>
    </UserProvider>
    
  )
}

export default App
