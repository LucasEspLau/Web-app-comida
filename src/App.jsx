import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginCard } from './componentes/login';
import { RegistroCard } from './componentes/register';
import { Cocineros } from './componentes/cocineros';
import { Platos } from './componentes/platos';
import { Chats } from './componentes/chats';
import './index.css';
import { Inicio } from './componentes/inicio';
import { DetalleChat } from './componentes/detalleChat';
import { Perfil } from './componentes/perfil';
import { InicioCocinero } from './componentes/inicioCocinero';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/registro" element={<RegistroCard />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cocineros" element={<Cocineros />} />
        <Route path="/platos" element={<Platos />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/detalleChat" element={<DetalleChat />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/inicioCocinero" element={<InicioCocinero />} />
      </Routes>
    </Router>
  );
}

export default App;
