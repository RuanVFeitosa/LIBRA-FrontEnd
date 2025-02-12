import React from 'react';
import './Notifi.css'; //importação do CSS
import Sidebar from '../../components/SiderBar/Siderbar'
function Notif() {

    return (
        <div className="lateral">
            <Sidebar />
            <container className="background">
                <div className='navBar'>
                
                <h2>Bom dia, <b>Samantha!</b></h2>
                <p>Voce tem 1 notificação</p>
                <p>icone de saida</p>
                </div>
                <div className='navBar'>
                <h1>Notificações<hr/></h1>

                </div>

                <labe>Urgente</labe>
                <labe>Atenção moderada</labe>
                <labe>Sem urgência</labe>
                
            </container>
        </div>
    );
}

export default Notif;