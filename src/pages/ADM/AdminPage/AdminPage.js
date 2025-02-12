import "../AdminPage/Admin.css";
import React from "react";
import { Outlet } from "react-router-dom";

import './Admin.css'

import Sidebar from "../Sidebar/Sidebar";

const AdminPage = () => {
    return (
      <div className="admin-container">
        <Sidebar />
          <div className="admin-content">
            <Outlet /> {/* Aqui será renderizado o conteúdo das páginas */}
          </div>
        </div>
      );
    };
    
export default AdminPage;