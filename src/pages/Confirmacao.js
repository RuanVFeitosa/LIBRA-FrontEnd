import React from "react";
import "../assets/css/Confirmacao.css";
import mascote from "../assets/LOOM_2.png"; // Caminho da imagem do mascote

function Confirmacao() {
    return (
        <div className="confirm-caixa">
            <div className="confirm">
                <div className='info-confirm'>
                    <span className="cmd1-confirm">
                        <span className="cmd2-confirm">
                            <span className='exclamacao-confirm'>!</span>
                        </span>
                    </span>
                    <p>Sua resposta ao formulário de acessibilidade foi registrada, agora você será redirecionado(a) à página adaptada para suas necessidades! Aproveite sua leitura!</p>
                </div>
                <img src={mascote} alt="Loom" className="LOOM" />
            </div>
        </div>
    );
}

export default Confirmacao;
