import React, { useState } from "react";
import "./Login.css";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const themeStyles = {
    backgroundImage: isDarkMode
      ? 'url("assets/loginContraste.png")'
      : 'url("assets/fundo.png")',
    backgroundSize: "cover",
    color: isDarkMode ? "white" : "black",
  };
  const ToggleSwitch = ({ onClick, isChecked }) => (
    <label className="teste">
      <input
        className="contraste"
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
      />
      <span className="botazinho"></span>
    </label>
  );

  return (
    <div className="login-container" style={themeStyles}>
      <div className="cabesao">
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <ToggleSwitch onClick={toggleTheme} isChecked={isDarkMode} />
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