import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


import '../assets/css/Tec.css';
import circle from '../assets/g-circle.png';

function Tecnologia() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/confirmacao')
    }

    return (
        <>
            <div className="circle">
                <img src={circle} alt="circle" />
            </div>

            <div className="tec">
                <div className="tec-container">
                    <div className="title">
                        <h2 className="form-tec">Formulário de acessibilidade</h2>
                        <p className="text">Você utiliza alguma tecnologia assistiva?</p>
                        <p className="options-text"> (Marque todas as opções que se aplicam) </p>
                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Leitores de tela (ex.: NVDA, JAWS, VoiceOver).

                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Ampliadores de tela (ex.: ZoomText, lupa digital).

                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Software de reconhecimento de voz.

                    </div>

                    <div className="checkbox-options">
                        <label>
                            <input type="checkbox" />
                            <span className="custom-options"></span>
                        </label>
                        Dispositivos adaptados (ex.: mouse alternativo, teclado Braille).
                    </div>
                    <button className="botao-acc" onClick={handleNext}>Próximo</button>
                </div>

            </div>
        </>
    );
}

export default Tecnologia;
