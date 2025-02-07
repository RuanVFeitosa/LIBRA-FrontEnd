import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import App from './App';
import Contraste from './Contraste';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Login/>
  </Router>
);

reportWebVitals();
