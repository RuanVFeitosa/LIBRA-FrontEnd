import React from 'react';
import './Sidebar.css'; // Importação do CSS
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    // Função para lidar com o clique nos itens
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // Lista de itens da sidebar com nome e caminho (path)
    const navList = [
        { name: 'Dashboard 😊', path: '/dashboard' },
        { name: 'Acervo', path: '/acervo' },
        { name: 'Eventos', path: '/eventos' },
        { name: 'Usuários', path: '/usuarios' },
        { name: 'Notificações', path: '/notificacoes' },
        { name: 'Configurações', path: '/configuracoes' }
    ];

    return (
        <div className="sidebar">
            <ul>
                {/* Seção do perfil */}
                <div className='perfil'>
                    <img src='./images/logo192.png' alt="Perfil" />
                    <div>
                        <h2>Samanta</h2>
                        <span>000.000.-00</span>
                    </div>
                </div>

                {/* Mapeamento dos itens da lista */}
                {navList.map((item) => (
                    <li
                        key={item.name}
                        className={selectedItem === item.name ? 'selected' : ''}
                        onClick={() => handleItemClick(item.name)}
                    >
                        <NavLink
                            to={item.path}
                            className="sidebar-link"
                        >
                            <span>{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;