import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/Login';
//import Home from './pages/Home';
import App from './App';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/*<Route path="/senha" element={<Senha />} />*/}
        <Route path="/home" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Rotas;