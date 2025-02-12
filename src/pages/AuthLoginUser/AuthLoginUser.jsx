// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
// import "../layout/authLayout/LoginPage.css";
import axiosInstance from "../../helper/AxiosInstance";

export default function AuthLoginUser() {
  // UseState para mostrar senha
  const [showPassword, setShowPassword] = useState(false);
  // Controlar checks
  const [isChecked, setIsChecked] = useState(false);

  // Controllar o alto contraste
  const outletContext = useOutletContext();
  const [highContrast, setHighContrast] = useState(outletContext.highContrast);

  // Mudar o contraste com base o useOutletContext vem
  useEffect(() => {
    setHighContrast(outletContext.highContrast);
  }, [outletContext.highContrast]);

  // usesStates padrão do formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [avisoLogin, setAvisoLogiu] = useState(false);

  // Controlar mensagem de erro
  const [msgErro, setMsgErro] = useState([]);

  // Alterar os inputs
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Pegando os dados que o usuario colocou no form
      const data = {
        email: email,
        password: password,
      };

      // Fazendo a req na api
      const response = await axiosInstance.post("auth/login", data);

      // Se retornou sucesso , armazenar o token
      if (response.data.success) {
        await localStorage.setItem("token", response.data.data.token);

        alert(localStorage.getItem("token"));
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      if (error.name === "AxiosError") {
        return alert("Erro, provavelmente o back esta off");
      }

      if (error.response.data.error) {
        console.log(error.response.data);
        return setMsgErro(error.response.data.error.details);
      }

      if (error.response.data.errors) {
        console.log(error.response.data.errors);
        return setMsgErro(error.response.data.errors);
      }
    }
  };

  // Controlar o contraste
  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  // Controlar a senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          Ainda não tem login?{" "}
          <Link to={"/auth/register"}>Faça o cadastro</Link>
        </span>

        <div className="input">
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
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
          <div
            className="password-container"
            style={{
              position: "relative",
              backgroundColor: highContrast ? "black" : "",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="campoSenha"
              name="campoSenha"
              placeholder="******"
              onChange={handlePasswordChange}
              value={password}
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
              {showPassword ? (
                <LuEyeOff size={24} color="white" />
              ) : (
                <LuEye size={24} />
              )}
            </div>
          </div>

          <a href="#">Esqueci minha senha</a>
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

        {msgErro.map((item) => (
          <p>{item.message}</p>
        ))}
      </form>
      {avisoLogin && <p>{avisoLogin}</p>}
    </div>
  );
}
