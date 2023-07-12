import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home'
import { NotFound } from '../pages/notFound'
import { Ejemplo } from '../pages/ejemplo'
import { Login } from '../pages/login'

export const AppRoutes = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/ejemplo' element={<Ejemplo/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
