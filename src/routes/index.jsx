import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home'
import { NotFound } from '../pages/notFound'
import { Ejemplo } from '../pages/ejemplo'
import { Login } from '../pages/login'
import { Profile } from '../pages/profile'

export const AppRoutes = () => {
  return (
    
    
        <Routes>
            <Route path='/drinksAppReact/' element={<Home/>}></Route>
            <Route path='/drinksAppReact/*' element={<NotFound/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/user' element={ <Profile/> }>

            </Route>
            <Route path='/ejemplo' element={<Ejemplo/>}></Route>
        </Routes>
    
  )
}
