import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavBar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {

  const authState = useSelector(state => state.auth);

  const { user } = authState;

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='home' element={<div>Aquí Home</div>} />

        <Route path='newEmployee' element={<div>Aquí Nuevo Empleado</div>} />

        <Route path='updateEmployee' element={<div>Aquí Actualizar Empleado</div>} />

        <Route path='reportByEmployee' element={<div>Aquí Reporte por Mes y Empleado</div>} />

        <Route path='reportByPosition' element={<div>Aquí por Día y Cargo</div>} />

        <Route path='reportByDependency' element={<div>Aquí por Día y Dependencia</div>} />

        <Route path='adminUsers' element={<div>Aquí Panel de Administración de Usuarios</div>} />

        <Route path='/' element={<Navigate to='home' />} />

      </Routes>
    </>
  )
}
