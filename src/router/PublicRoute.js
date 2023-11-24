import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

  const authState = useSelector(state => state.auth);

  return !authState.logged ?
    children :
    <Navigate to='home' />
}
