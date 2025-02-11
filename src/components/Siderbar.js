// src/components/Sidebar.js
import React, { useState } from 'react';
import '../assets/css/Sidebar.css';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item) =>{
        setSelectedItem(item);
    };
  
    return (
    <div className="sidebar">
        <ul>
            <cointainer className='perfil'>
            <img src='./images/logo192.png' />
            <div>
            <h2>Samanta</h2>
            <span>000.000.-00</span>
            </div> 
            </cointainer>

            {['Dashboard', 'Acervo', 'Eventos', 'Usuários','Notificações', 'Configurações'].map((item) =>(
                <li
            key={item}
            className={selectedItem === item ? 'selected' : ''}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;