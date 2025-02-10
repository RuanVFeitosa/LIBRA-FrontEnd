import react, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa a função para navegar

import "../assets/css/Cadastro.css";
import mascote from "../assets/LOOM.png";
import libras from "../assets/libra.png";
import VLibras from "@djpfs/react-vlibras";

function Cadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);  // Atualiza o estado com o valor do input
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);  // Atualiza o estado com o valor do input
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);  // Atualiza o estado com o valor do input
      };

      const handleCPasswordChange = (e) => {
        setConfirmPassword(e.target.value);  // Atualiza o estado com o valor do input
      };

     const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name: ', name);
        console.log('E-mail: ', email);
        console.log('Senha: ', password);
        console.log('Confirmar Senha: ', ConfirmPassword);
    };

    // Função para mudar de página ao clicar no botão
    const handleNext = () => {
        navigate("/outra"); // Define a próxima rota
    };

    return (
        <>
            {/* <img src={libras} alt="libras" className="libras" /> */}
            <div className="container">
                <div className="wrapper">
                    <div className='formulario'>
                        <div className="title">
                            <h2 className="cadastro">Cadastro</h2>
                            <p className="login">Já possui cadastro? <span className='login-link'>Faça login</span></p>
                        </div>

                        <div className="form">
                            <label>Nome Completo:</label>
                            <input type='text' name="name" placeholder='Insira o seu nome' value={name} onChange={handleNameChange} />

                            <label>E-mail:</label>
                            <input type='text' placeholder='user@email.com' value={email} onChange={handleEmailChange}/>

                            <label>Senha</label>
                            <input type="password" placeholder="********"  value={password} onChange={handlePasswordChange} />
                            <p className="dica-senha">Sua senha precisar ter, no mínimo, 8 caracteres</p>

                            <label>Confirme sua senha:</label>
                            <input type="password" placeholder="********" value={ConfirmPassword} onChange={handleCPasswordChange}/>

                        <button className="botao" onClick={handleSubmit}>Próximo</button>

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

export default Cadastro;