import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cadastro from './components/Cadastro';
import Acc from './components/Acc';
import VLibras from '@djpfs/react-vlibras';
import libras from "./assets/libra.png"

function App() {
  return (
    <div className="App">
      <VLibras />
      <header className='App-header'>
      </header>
      <Router>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/outra" element={<Acc />} /> {/* Ajuste conforme necessário */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;