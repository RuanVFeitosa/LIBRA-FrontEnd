import React from 'react';
import './Notifi.css'; //importação do CSS
import Sidebar from '../../components/SiderBar/Siderbar'
import { AiOutlineExclamationCircle } from "react-icons/ai";

function Notif() {

    return (
        <div className="lateral">
            <Sidebar />
            <container className="background">

                <div className='container-pai'>

                <div className='navBar'>
                
                <h2>Bom dia, <b>Samantha!</b></h2>
                <p>Voce tem 1 <a href='#' style={{color:'green', textDecoration: 'none',}} >notificação</a></p>
                <p>icone de saida</p>
                
                </div>
                <hr style={{width:'1600px', margin: '0px auto',}}/>
                <div id="titulo">
                <h1>Notificações<hr style={{width:'1600px', margin: '0px auto',}}/></h1>

                </div>
                    
                <div className='notif-container'>
                <h2>Solicitação de livro</h2>
                <p>Título: Harry Potter e as reliquidas da morte</p>
                <p>Autor(a): J.K ROWLING</p>
                </div>

                <div className='notif-container'>
                <h2>Solicitação de Auxilo em evento</h2>
                <p>Solicitado por: Richard Augusto</p>
                <p>Evento: Sarau Cultural</p>
                <p>Necessidade especial: Deficiência visual</p>
                <p>Data: 18/10/2025</p>
                </div>

                

                <div className="nivel">
                 <p> <AiOutlineExclamationCircle id='ExU' /> Urgente (Prazo expira em menos de 15 dias)</p>
                <p> <AiOutlineExclamationCircle id='ExA'/> Atenção moderada (Prazo expira me um mês)</p>
                <p><AiOutlineExclamationCircle id='ExS'/> Sem urgência (prazo expira em um mês e meio ou mais)</p>
                </div>   

                </div>
                
                
                
                
            </container>
        </div>
    );
}

export default Notif;