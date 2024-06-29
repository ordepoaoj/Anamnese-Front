import React from 'react';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import App from './Home'; // Importe o componente principal da aplicação
import AnamneseLogin from './pages/login/login';
import Formulario from './pages/form/form';
import Register from './pages/login/register';

const AppRoutes = () => {
    console.log('AppRoutes');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path="/login" element={<AnamneseLogin />} />
        <Route path='/form' element={< Formulario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;