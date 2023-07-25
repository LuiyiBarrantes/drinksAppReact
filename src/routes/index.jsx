import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home'
import { NotFound } from '../pages/notFound'
import { Ejemplo } from '../pages/ejemplo'
import { Login } from '../pages/login'
import { Profile } from '../pages/profile'
import { Register } from '../pages/register'
import { ProtectedRouteProfile } from './protectedRouteProfile'
import { ProtectedRouteLogin } from './protectedRouteLogin'

export const AppRoutes = () => {
  return (


    <Routes>
      <Route path='/drinksAppReact/' element={<Home />}></Route>
      <Route path='*' element={<NotFound />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<ProtectedRouteLogin />}>
        <Route path='/login' element={<Login />} />

      </Route>
      <Route path='/user' element={<ProtectedRouteProfile />}>
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='/ejemplo' element={<Ejemplo />}></Route>
    </Routes>

  )
}
