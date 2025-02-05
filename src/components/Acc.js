import React from "react";
import '../assets/css/Acc.css'

function Acc() {
    return (
        <>
            <div className="container">
                <div className="wrapped">
                    <div className="formulario">
                        <div className="title">
                            <h2 className="form-acc">Formulário de acessibilidade</h2>
                            <p className="text">Você possui alguma deficiência ou condição que pode dificultar o uso de uma biblioteca digital?</p>
                            <p className="options-text">(Marque todas as opções que se aplicam) </p>
                        </div>

                        <div className="form">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" id="acessibilidade" />
                                    <span className="custom-checkbox"></span>
                                </label>
                                Deficiência visual (Baixa visão, cegueira total, daltonismo etc.).

                            </div>



                        </div>
                    </div>


                </div>
            </div>

        </>



    )
}

export default Acc;