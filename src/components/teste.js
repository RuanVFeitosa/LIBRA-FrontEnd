import "./Login.css";
import fundo from './assets/fundo.png';
import React, { useState } from "react";
import PasswordInput from "./PasswordInput";

  const legenda = document.querySelector("#legenda");
  const campoSenha = document.querySelector("#campoSenha");
  const botaoMostrarSenha = document.querySelector("#botaoMostrarSenha");

    const [showPassword, setShowPassword] = useState(false);
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    

function Login() {
  return (
    <body>
      <div>
        <div className="cabesao">
          <h1>botão do contraste</h1>
        </div>

        <div className="paiForm">
          <form className="form">
            <h2>Login</h2>
            <span>
              Ainda não tem login? <a href="#">Cadastre-se</a>
            </span>

            <div className="input">
              <label>Email:</label>
              <input type="email" placeholder="user@email.com" />
            </div>

            <div className="input">
              <label>Senha:</label>
              <input type="password" id="campoSenha" name="campoSenha" placeholder="******" ></input>
              <label for="botaoMostrar" className="legenda">Mostrar</label>
              <input type="checkbox" id="botaoMostrarSenha"/>
              <div>
                <a href="#">Esqueci minha senha</a>
              </div>
            </div>

            <button>Próximo</button>
          </form>
        </div>

        <h1>Icone de libras</h1>
      </div>
    </body>
  );
}

botaoMostrarSenha.addEventListener("change", function(){
  const estadoAtualDoCampoDeSenha = campoSenha.getAttribute("type") === "password" ? "text" : "password"

  campoSenha.setAttribute("type",estadoAtualDoCampoDeSenha);


  legenda.innerHTML = estadoAtualDoCampoDeSenha === "password" ? "Mostrar" : "Ocultar";
});

export default Login;