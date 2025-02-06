import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contraste.css";
import Login from "./Login";
function Contraste() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/Login");
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
    <label className="butaoArea">
      <input
        className="botaoC"
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
      />
      <span className="butatao"></span>
    </label>
  );

  return (
    <div className="Contraste-container">
      <div className="header-contraste">
        <ToggleSwitch onClick={handleNext} />
        <button>{isChecked ? "apertando " : "Não apertado"} </button>
        <label onClick={handleCheck} htmlFor="">
          auto contraste
        </label>
      </div>

      <div className="ContainerC-Form">
        <form className="Contraste-Form">
          <h2>Login</h2>
          <span>
            Ainda não tem login? <a href="#">Cadastre-se</a>
          </span>

          <div className="Cinput">
            <label>Email:</label>
            <input type="email" placeholder="user@email.com" />
          </div>

          <div className="Cinput">
            <label>Senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="campoSenha"
              name="campoSenha"
              placeholder="******"
            />
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

export default Contraste;
