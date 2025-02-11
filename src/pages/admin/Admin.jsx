import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
// import "../assets/css/Login.css";



function Admin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const ToggleSwitch = ({ isChecked, onChange }) => (
    <label className="areaC"
      style={{
        backgroundColor: highContrast ? "white" : "#3b5147",
        border: highContrast ? "3px solid white" : "3px solid #3b5147",
      }}
    >
      <input
        className="buttonContraste"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <span className="bolinha" style={{
        backgroundColor: highContrast ? "black" : "white",
        left: highContrast ? "55%" : "5%",
      }}></span>
    </label>
  );

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const navigate = useNavigate();


  return (
    <div
      style={{
        backgroundImage: highContrast
          ? 'url("/images/loginContraste.png")'
          : 'url("/images/fundo.png")',
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: highContrast ? "white" : "white",
        position: "relative",
      }}
    >
      <div className="header">
        <div>
          <ToggleSwitch
            checked={highContrast}
            onChange={handleToggleChange && toggleContrast}
          />
        </div>

        <a href="" style={{ fontSize: '13px' }}>
          Auto contraste
        </a>
      </div>

      <div className="Container-Form">
        <form className="Login-Form"
          style={{
            backgroundColor: highContrast ? "#000000" : "#4e6e5f",
            border: highContrast ? '3px solid white' : "2px solid #476758",
          }}
        >
          <h2>Login in to admin panel</h2>

          <div className="input">
            <label htmlFor="email" style={{ fontWeight: "bold" }}>NIF:</label>
            <input
              type="text"
              id="text"
              name="email"
              placeholder="000.000.-00"
              style={{
                backgroundColor: highContrast ? "black" : "#8cc79f",
                color: highContrast ? "white" : "white",
                border: highContrast ? "3px solid white" : "none",
              }}
            />
          </div>

          <div className="input">
            <label htmlFor="campoSenha" style={{ fontWeight: "bold", }}>Senha:</label>
            <div className="password-container"
              style={{
                position: "relative",
                backgroundColor: highContrast ? "black" : "",
                border: highContrast ? "1px solid white" : "",
                color: highContrast ? "white" : "white",
              }}>
              <input
                type={showPassword ? "text" : "password"}
                id="campoSenha"
                name="campoSenha"
                placeholder="******"
                style={{
                  backgroundColor: highContrast ? "black" : "#8cc79f",
                  color: highContrast ? "white" : "white",
                  border: highContrast ? "3px solid white" : "none",
                  width: "100%",
                }}
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
                {showPassword ? <LuEyeOff size={24} color="white" /> : <LuEye size={24} />}
              </div>
            </div>

            <a href="#" >Esqueci minha senha</a>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: highContrast ? "black" : "#2e3f37",
              color: highContrast ? "white" : "white",
              border: highContrast ? "3px solid white" : "none",
              padding: "15px",
              cursor: "pointer",
            }}
          >
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;