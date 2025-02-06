import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contraste from "./Contraste";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Redirecionando para /contraste"); // Verifique no console
    navigate("./Contraste");
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setChecked] = React.useState(false);
  console.log("aperto", isChecked);

  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };

  const ToggleSwitch = ({ onClick, isChecked }) => (
    <label className="areaC">
      <input
        className="buttonContraste"
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
      />
      <span className="bolinha"></span>
    </label>
  );

  return (
    <div className="login-container">
      <div className="header">
        <ToggleSwitch onClick={handleNext} />
        <button onClick={handleNext}>auto contraste</button>
        <button>{isChecked ? "apertando " : "Não apertado"} </button>
        <label onClick={handleCheck} htmlFor="">
          auto contraste
        </label>
      </div>

      <div className="Container-Form">
        <form className="Login-Form">
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
    </div>
  );
}

export default Login;
