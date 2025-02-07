import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./Login.css";

const ToggleSwitch = ({ isChecked, onChange}) => (
  <label className="areaC">
    <input
      className="buttonContraste"
      type="checkbox"
      checked={isChecked}
      onChange={(e) => {
        onChange(e); // Alterna o estado do checkbox
      }}
    />
    <span className="bolinha"></span>
  </label>
);

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
  };


  const navigate = useNavigate();

  const handleContrast = () => {
    navigate("/contrast"); // Navega para a versão de alto contraste
  };

  return (
    <div className="login-container">
      <div className="header">
        <div>
          <ToggleSwitch
            onClick={handleContrast}
            isChecked={isChecked}
            onChange={handleToggleChange}
          />
        </div>
        <button onClick={handleContrast} style={{ color: "white", borderBottom: '1px out-line white' }} >
          Auto contraste
        </button>
      </div>

      <div className="Container-Form">
        <form className="Login-Form">
          <h2>Login</h2>
          <span>
            Ainda não tem login? <a href="#">Cadastre-se</a>
          </span>

          <div className="input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@email.com"
            />
          </div>

          <div className="input">
            <label htmlFor="campoSenha">Senha:</label>
            <div className="password-container" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="campoSenha"
                name="campoSenha"
                placeholder="******"
              />
              <div
                className="password-toggle"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </div>
            </div>
         
         
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" style={{ cursor: "pointer" }}>
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
