import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa a função para navegar

import '../assets/css/Acc.css';
import circle from '../assets/g-circle.png';

function Acc() {
    const [showTextarea, setShowTextarea] = useState(false);

    const handleCheckboxChange = (event) => {
        setShowTextarea(event.target.checked);
    };

    const navigate = useNavigate(); // Hook para navegação


    const handleNext = () => {
        navigate("/tecnologia"); // Define a próxima rota
    };

    return (
        <>
            <div className="circle">
                <img src={circle} alt="circle" />
            </div>

            <div className="container-acc">
                <div className="formulario-container">
                    <div className="title">
                        <h2 className="form-acc">Formulário de acessibilidade</h2>
                        <p className="text">Você possui alguma deficiência ou condição que pode dificultar o uso de uma biblioteca digital?</p>
                        <p className="options-text">(Marque todas as opções que se aplicam) </p>
                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Deficiência visual (Baixa visão, cegueira total, daltonismo etc.).
                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Deficiência auditiva (Surdez parcial ou Surdez total).
                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Dificuldades motoras (Dificuldade em utilizar o mouse/teclado. Necessidade de dispositivos de apoio (ex.: trackball, teclados adaptados).
                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Deficiência psicológica ou cognitiva. (Dificuldade de concentração, Dislexia, Déficit de atenção (TDA ou TDAH), autismo ou TEA (Transtorno do Espectro Autista), transtorno de memória (ex.: dificuldades para reter ou recuperar informações).
                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" onChange={handleCheckboxChange} checked={showTextarea} />
                            <span className="custom-options"></span>
                        </label>
                        Outras? Descreva abaixo.
                    </div>

                    {showTextarea && (
                        <>
                            <textarea className="custom-textarea" />
                            <p className="text-acc">Lamentamos pelo transtorno se nosso site ainda não estiver totalmente adaptado para atender às suas necessidades de acessibilidade. Estamos constantemente trabalhando para melhorar a experiência de todos os usuários. Caso tenha dificuldades para navegar, entre em contato conosco para que possamos ajudar da melhor forma possível.</p>
                        </>
                    )}
                    <button className="botao-acc" onClick={handleNext}>Próximo</button>
                </div>

            </div>
        </>
    );
}

export default Acc;
