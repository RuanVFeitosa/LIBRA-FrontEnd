import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Mude 'Switch' para 'Routes'
import Login from "./Login";
import Contraste from "./Contraste";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contraste" element={<Contraste />} />
      </Routes>
    </Router>
  );
}

export default App;