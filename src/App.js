import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cadastro from './pages/Cadastro';
import Acc from './pages/Acc';
import Tecnologia from './pages/tecnologia';
import Confirmacao from './pages/Confirmacao';

//ADM
import AdminPage from './pages/ADM/AdminPage/AdminPage';
import Dashboard from './pages/ADM/Dashboard/Dashboard'
import Eventos from './pages/ADM/Eventos/Eventos';

import VLibras from '@djpfs/react-vlibras';
import libras from "./assets/libra.png"

function App() {
  return (
    <div className="App">
      <VLibras />
      <header className='App-header'></header>

      <Router>
        <Routes>
          {/* Páginas principais (não mexidas) */}
          <Route path="/" element={<Cadastro />} />
          <Route path="/outra" element={<Acc />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/confirmacao" element={<Confirmacao />} />

          {/* Layout de Administração */}
          <Route path='/adm' element={<AdminPage />}>
            <Route path='' element={<Dashboard />} />
            <Route path="eventos" element={<Eventos />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;