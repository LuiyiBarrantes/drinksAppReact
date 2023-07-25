import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

export const ProtectedRouteLogin = () => {
    const {user} = useAuth();
  return !user ? (<Outlet/>) : (<Navigate to={'/user/profile'} replace/>)
}