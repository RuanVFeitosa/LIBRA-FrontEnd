import "./Login.css";
import fundo from './assets/fundo.png';
import React, { useState } from "react";
import PasswordInput from "./PasswordInput";

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
              <input type="password" placeholder="******" ></input>
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

export default Login;