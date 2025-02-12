import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axiosInstance from "../../helper/AxiosInstance";
import "./AuthLogin.css";

export default function AuthLoginUser() {
  const [showPassword, setShowPassword] = useState(false);
  const outletContext = useOutletContext();
  const [highContrast, setHighContrast] = useState(outletContext.highContrast);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avisoLogin] = useState(false);
  const [msgErro, setMsgErro] = useState([]);

  useEffect(() => {
    setHighContrast(outletContext.highContrast);
  }, [outletContext.highContrast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await axiosInstance.post("auth/login", data);
      if (response.data.success) {
        await localStorage.setItem("token", response.data.data.token);
        alert(localStorage.getItem("token"));
      }
    } catch (error) {
      console.log(error);
      if (error.name === "AxiosError") {
        return alert("Erro, provavelmente o back está off");
      }
      if (error.response?.data?.error) {
        return setMsgErro(error.response.data.error.details);
      }
      if (error.response?.data?.errors) {
        return setMsgErro(error.response.data.errors);
      }
    }
  };

  return (
    <div className="Container-Form">
      <form
        onSubmit={handleSubmit}
        className="Login-Form"
        style={{
          backgroundColor: highContrast ? "#000000" : "#4e6e5f",
          border: highContrast ? "3px solid white" : "2px solid #476758",
        }}
      >
        <h2>Login</h2>
        <span>
          Ainda não tem login? <Link to="/auth/register">Faça o cadastro</Link>
        </span>

        <div className="input">
  <label htmlFor="email" style={{ fontWeight: "bold" }}>
    E-mail:
  </label>
  <input
    type="email"
    id="email"
    name="email"
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    placeholder="user@email.com"
    style={{
      backgroundColor: highContrast ? "black" : "#8cc79f",
      color: highContrast ? "white" : "white",
      border: highContrast ? "3px solid white" : "none",
    }}
  />
</div>

<div className="input">
  <label htmlFor="campoSenha" style={{ fontWeight: "bold" }}>
    Senha:
  </label>
  <div className="password-container" style={{ backgroundColor: highContrast ? "black" : "#8cc79f", border: highContrast ? "3px solid white" : "none" }}>
    <input
      type={showPassword ? "text" : "password"}
      id="campoSenha"
      name="campoSenha"
      placeholder="******"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      style={{
        backgroundColor: "transparent", // para não sobrepor a cor de fundo do container
        color: highContrast ? "white" : "white",
        border: "none",
        paddingLeft: "10px", // Ajuste de padding para ficar alinhado
        width: "90%", // Ajustando a largura para o input não sobrepor
      }}
    />
    <div className="password-toggle" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", color: highContrast ? "white" : "black" }}>
      {showPassword ? <LuEyeOff size={24} /> : <LuEye size={24} />}
    </div>
  </div>
  <a>Esqueci minha senha</a>
</div>

<button type="submit" className="submit-button" style={{
  backgroundColor: highContrast ? "black" : "#2e3f37",
  color: highContrast ? "white" : "white",
  border: highContrast ? "3px solid white" : "none",
  width: "100%",
  borderRadius: "30px",
  fontSize: "20px",
  padding: "15px",
  marginTop: "40px",
}}>
  Próximo
</button>

{msgErro.map((item, index) => (
  <p key={index} className="error-message">{item.message}</p>
))}

      </form>
      {avisoLogin && <p>{avisoLogin}</p>}
    </div>
  );
}
