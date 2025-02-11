import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';
import Notif from './pages/admin/Notifi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Notif/>
  </Router>
);

reportWebVitals();
