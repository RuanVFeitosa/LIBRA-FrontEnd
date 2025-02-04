import react, { useState } from "react";
import "../components/Cadastro.css";
import mascote from "../assets/LOOM.png";

function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name: ', name);
        console.log('E-mail: ', email);
        console.log('Senha: ', password);
        console.log('Confirmar Senha: ', ConfirmPassword);
    };

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className='formulario'>
                        <div className="title">
                            <h2 className="cadastro">Cadastro</h2>
                            <p className="login">Já possui cadastro? <span className='login-link'>Faça login</span></p>
                        </div>

                        <div className="form">
                            <label>Nome Completo:</label>
                            <input type='text' placeholder='Insira o seu nome' />

                            <label>E-mail:</label>
                            <input type='text' placeholder='user@email.com' />

                            <label>Senha</label>
                            <input type="password" placeholder="********" />
                            <p className="dica-senha">Sua senha precisar ter, no mínimo, 8 caracteres</p>

                            <label>Confirme sua senha:</label>
                            <input type="password" placeholder="********" />

                            <button className="botao">Próximo</button>
                        </div>

                    </div>


                    {/* BLOCO DE ACESSIBILIDADE */}
                    <div className="acessibilidade-caixa">
                        <div className="acessibilidade">
                            <div className='info'>
                                <span className="cmd1">
                                    <span className="cmd2">
                                        <span className='exclamacao'>!</span>
                                    </span>
                                </span>
                                <p>Olá! Eu sou <span className="mascote-nome">Loom</span>, o mascote digital da <span className="plataforma">LIBRA</span>.</p>
                                <p>Necessita de algum recurso especial? A <span className="plataforma">LIBRA</span> é uma plataforma focada na acessibilidade e inclusão. Clique no botão abaixo para responder ao nosso formulário!</p>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="acessibilidade" />
                                        <span className="custom-checkbox"></span>
                                    </label>
                                    Quero responder o formulário de acessibilidade
                                </div>
                            </div>
                            <img src={mascote} alt="Loom" className="mascote" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Cadastro