import react, { useState } from "react";
import './Cadastro.css'

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
            <div className='formulario'>
                <h2>Cadastro</h2>
                <p>Já possui cadastro? <span className='login-link'>Faça login</span></p>

                <label>Nome Completo:</label>
                <input type='text' placehoder='Insira o seu nome' />

                <label>E-mail:</label>
                <input type='text' placehoder='user@email.com' />

                <label>Senha</label>
                <input type="password" />
                <p className="dica-senha">Sua senha precisar ter, no mínimo, 8 caracteres</p>

                <label>Confirme sua senha:</label>
                <input type="password" />

                <button className="botao">Próximo</button>
            </div>

            {/* BLOCO DE ACESSIBILIDADE */}
            <div className="acessibilidade">
                <div className='info'>
                    <span className='exclamacao'>!</span>
                    <p>Olá! Eu sou <span className="mascote-nome">Loom</span>, o mascote digital da <span className="plataforma">LIBRA</span>.</p>
                    <p>Necessita de algum recurso especial? A <span className="plataforma">LIBRA</span> é uma plataforma focada na acessibilidade e inclusão. Clique no botão abaixo para responder ao nosso formulário!</p>
                </div>

                <label className='checkbox'>
                    <input type='checkbox' /> Quero responder o formulário de acessibilidade
                </label>

                {/* <img src/> */}
            </div>
        </>
    )
}

export default Cadastro