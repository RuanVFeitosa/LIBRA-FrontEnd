import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./Login.css";
import AuthLoginUser from "../../features/AuthLoginUser.jsx";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ToggleSwitch = ({ isChecked, onChange }) => (
    <label
      className="areaC"
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
      <span
        className="bolinha"
        style={{
          backgroundColor: highContrast ? "black" : "white",
          left: highContrast ? "55%" : "5%",
        }}
      ></span>
    </label>
  );

  const [avisoLogin, setAvisoLogiu] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Atualiza o estado com o valor do input
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Atualiza o estado com o valor do input
  };

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

        <a href="" style={{ fontSize: "13px" }}>
          Auto contraste
        </a>
      </div>
      <AuthLoginUser highContrast={highContrast}  />
    </div>
  );
}

export default LoginPage;
