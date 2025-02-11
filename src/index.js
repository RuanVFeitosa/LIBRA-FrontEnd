import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Admin from './components/Admin';
import Notifc from './components/Notific';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Notifc/>
  </Router>
);

reportWebVitals();
