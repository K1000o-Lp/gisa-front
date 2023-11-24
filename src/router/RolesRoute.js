import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../components/personal/HomeScreen';

export const RolesRoute = () => {
  return (
    <>
      <Routes>
        <Route path='home' Component={<HomeScreen />} />
      </Routes>
    </>
  )
}
