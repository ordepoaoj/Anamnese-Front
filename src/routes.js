import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Home'; // Importe o componente principal da aplicação
import AnamneseLogin from './pages/login/login';

const AppRoutes = () => {
    console.log('AppRoutes');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<AnamneseLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;