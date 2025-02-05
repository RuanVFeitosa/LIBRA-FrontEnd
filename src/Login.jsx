import React, { useState } from "react";
import "./Login.css";
function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="login-container">
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
          <input
            type={showPassword ? "text" : "password"}
            id="campoSenha"
            name="campoSenha"
            placeholder="******"
          />
          <label htmlFor="botaoMostrarSenha" className="legenda">
            {showPassword ? "Ocultar" : "Mostrar"}
          </label>
          <input
            type="checkbox"
            id="botaoMostrarSenha"
            onChange={togglePasswordVisibility}
          />
          <div>
            <a href="#">Esqueci minha senha</a>
          </div>
        </div>

        <button>Próximo</button>
      </form>
    </div>

    <h1>Icone de libras</h1>
  </div>
  );
}

export default Login;