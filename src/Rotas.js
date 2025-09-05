import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
//import Home from './pages/Home';
import App from './App';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Rotas;