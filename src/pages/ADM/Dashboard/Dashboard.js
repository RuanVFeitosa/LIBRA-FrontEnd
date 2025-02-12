import React from "react";
import LivrosCadastrados from "./LivrosCadastrados";
import Usuarios from "./Usuarios";

const Dashboard = () => {
    return (
        <div className="container-dashboard">
            <div className='navBar'>
                <h2>Bom dia, <b>Samantha!</b></h2>
                <p>Voce tem 1 notificação</p>
                <p>icone de saida</p>
            </div>
            <h2>Acesso rápido</h2>
            <LivrosCadastrados />
            <Usuarios />
        </div>
    )
}

export default Dashboard;