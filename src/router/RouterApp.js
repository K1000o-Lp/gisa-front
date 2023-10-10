import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />

        <Route path='/inicio' element={<div>Inicio</div>} />
      </Routes>
    </BrowserRouter>
  )
}