import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contraste.css"; // Certifique-se de que o nome do arquivo está correto
import { LuEye, LuEyeOff } from "react-icons/lu";

const ToggleSwitch = ({ isChecked, onChange, handleNext }) => (
  <label className="areaC">
    <input
      className="buttonContraste"
      type="checkbox"
      checked={isChecked}
      onChange={(e) => {
        onChange(e);
        handleNext();
      }}
    />
    <span className="bolinha"></span>
  </label>
);

function Contraste() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleNext = () => {
    console.log("Redirecionando para /Login");
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="Contraste-container">
      <div className="header-contraste">
        <div>
          <ToggleSwitch
            isChecked={isChecked}
            onChange={handleToggleChange}
            handleNext={handleNext}
          />
        </div>
        <button className="auto-contraste-button" onClick={handleNext}>
          auto contraste
        </button>
      </div>

      <div className="ContainerC-Form">
        <form className="Contraste-Form">
          <h2>Login</h2>
          <span>
            Ainda não tem login? <a href="#">Cadastre-se</a>
          </span>

          <div className="Cinput">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@email.com"
            />
          </div>

          <div className="Cinput">
            <label htmlFor="campoSenha">Senha:</label>
            <div className="password-container" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="campoSenha"
                name="campoSenha"
                placeholder="******"
              />
              <div
                onClick={togglePasswordVisibility}
                style={{
                  display: "inline-block",
                  fontSize: "24px",
                  cursor: "pointer",
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                role="button"
                tabIndex="0"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </div>
            </div>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="button">Próximo</button>
        </form>
      </div>
    </div>
  );
}

export default Contraste;