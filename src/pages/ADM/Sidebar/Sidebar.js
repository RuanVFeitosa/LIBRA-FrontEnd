import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import mulher from '../../../assets/mulher.jpg'

const Sidebar = () => {
    const navList = [
        { name: 'Dashboard', path: '/adm', icon: '▦' },
        { name: 'Acervo', path: '/adm/livros', icon: '📚' },
        { name: 'Eventos', path: '/adm/eventos', icon: '🎭' },
        { name: 'Usuários', path: '/adm/usuarios', icon: '👤' },
        { name: 'Notificações', path: '/adm/notificacoes', icon: '🔔' },
        { name: 'Configurações', path: '/adm/configuracoes', icon: '⚙️' }
    ];

    return (
        <div className="sidebar">
            <ul>
                {/* Seção do perfil */}
                <div className="perfil">
                    <img className='perfil-img' src={mulher} alt="Perfil" />
                    <div>
                        <h2>Samantha</h2>
                        <span>000.000.-00</span>
                    </div>
                </div>

                {/* Mapeamento dos itens da lista */}
                {navList.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => 
                                isActive ? "sidebar-link active" : "sidebar-link"
                            }
                        >
                            <span className="icon">{item.icon}</span>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
