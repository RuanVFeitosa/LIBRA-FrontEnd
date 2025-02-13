import React from 'react';
import './Notifi.css'; //importação do CSS
import Sidebar from '../../components/SiderBar/Siderbar'
import { AiOutlineExclamationCircle } from "react-icons/ai";

const notifications = [
    {
        type: "Solicitação de livro",
        title: "Harry Potter e as Relíquias da Morte",
        author: "J.K. ROWLING",
        urgency: null,
    },
    {
        type: "Solicitação de Auxílio em evento",
        requestedBy: "Richard Augusto",
        event: "Sarau Cultural",
        specialNeed: "Deficiência visual",
        date: "18/10/2025",
        urgency: "urgent",
    },
    {
        type: "Solicitação de Auxílio em evento",
        requestedBy: "Caique Soares",
        event: "Sessão teatro",
        specialNeed: "Deficiência física (Pessoa com cadeira de rodas)",
        date: "20/12/2025",
        urgency: "moderate",
    },
    {
        type: "Solicitação de Auxílio em evento",
        requestedBy: "Sandra Castilho",
        event: "Sessão cinema",
        specialNeed: "Deficiência auditiva (Surdez total)",
        date: "10/01/2026",
        urgency: "low",
    }
];

const urgencyIcons = {
    urgent: <AiOutlineExclamationCircle className="icon urgent" />,
    moderate: <AiOutlineExclamationCircle className="icon moderate" />,
    low: <AiOutlineExclamationCircle className="icon low" />
};

function Notif() {

    return (
        <div className="lateral">
            <Sidebar />
            <container className="background">

                <div className='container-pai'>

                    <div className='navBar'>

                        <h2>Bom dia, <b>Samantha!</b></h2>
                        <p>Voce tem 1 <a href='#' style={{ color: '#00bf15', }} >notificação</a></p>
                        <p>icone de saida</p>

                    </div>
                    <hr style={{ width: '100%', margin: '0px auto', }} />
                    <div id="titulo">
                        <h1>Notificações<hr style={{ width: '200%', margin: '0px auto', }} /></h1>
                    </div>

                    <div className='notif-container'>
                        <div className="notifc-content">
                            <h2>Solicitação de livro</h2>
                            <p>Título: Harry Potter e as reliquidas da morte</p>
                            <p>Autor(a): J.K ROWLING</p>
                        </div>
                    </div>

                    <div className="notifications">
                        {notifications.map((notification, index) => (
                            <div key={index} className='notif-container'>
                                <div className="notifc-content">
                                    <h2>{notification.type}</h2>
                                    {notification.title && <p>Título: {notification.title}</p>}
                                    {notification.author && <p>Autor(a): {notification.author}</p>}
                                    {notification.requestedBy && <p>Solicitado por: {notification.requestedBy}</p>}
                                    {notification.event && <p>Evento: {notification.event}</p>}
                                    {notification.specialNeed && <p>Necessidade especial: {notification.specialNeed}</p>}
                                    {notification.date && <p>Data: {notification.date}</p>}
                                </div>

                                {notification.urgency && (
                                    <div className="notif-nivel">
                                        {urgencyIcons[notification.urgency]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="nivel">
                        <p> <AiOutlineExclamationCircle id='ExU' /> Urgente (Prazo expira em menos de 15 dias)</p>
                        <p> <AiOutlineExclamationCircle id='ExA' /> Atenção moderada (Prazo expira em um mês)</p>
                        <p><AiOutlineExclamationCircle id='ExS' /> Sem urgência (prazo expira em um mês e meio ou mais)</p>
                    </div>

                </div>

            </container>
        </div>
    );
}

export default Notif;