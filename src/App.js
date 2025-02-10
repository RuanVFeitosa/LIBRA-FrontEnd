import React from "react";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom"; // Mude 'Switch' para 'Routes'
import Login from "./components/Login";
import Contraste from "./components/Contraste";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Tema normal */}
        <Route path="/contrast" element={<Contraste />} /> {/* Tema de alto contraste */}
      </Routes>
    </Router>
  );
}
export default App;
