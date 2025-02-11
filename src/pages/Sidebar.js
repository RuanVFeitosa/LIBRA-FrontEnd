import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Sidebar.css"; // Importando o CSS

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h2>Painel Admin</h2>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/usuarios">Usuários</Link>
          </li>
          <li>
            <Link to="/admin/livros">Livros</Link>
          </li>
          <li>
            <Link to="/admin/configuracoes">Configurações</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;