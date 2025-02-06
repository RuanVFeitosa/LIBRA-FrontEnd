import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Contraste from './Contraste';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contraste" element={<Contraste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
