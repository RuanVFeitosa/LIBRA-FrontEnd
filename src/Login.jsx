import React, { useState } from "react";
import "./Login.css";
import { ToggleSwitch } from "./components/ToggleSwitch";
function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const [isChecked, setChecked] = React.useState(false)

  console.log("aperto", isChecked)

  const handleCheck = () =>{
    setChecked((prevState) =>  !prevState)
  }

  return (
    <div className="login-container">

    <div className="cabesao">

        <ToggleSwitch onClick={handleCheck}/>
        <h1>{isChecked ? "apertando " : "Não apertado"}</h1>
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

interface StyleProps{
  isDarkMode: boolean
}