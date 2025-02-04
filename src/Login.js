import "./Login.css";
import React, { useState } from "react";
function Login() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <body>
      <div>
        <div className="cabesao">
          <h1>ICONE DO LIBRA</h1>
        </div>

        <div className="paiForm">
          <form className="form">
            <h2>Login</h2>
            <span >
              Ainda não tem login?<a href="#">Cadastre-se</a>
            </span>

            <div className="input">
              <label>Email:</label>
              <input type="email" placeholder="email"></input>
            </div>

            <div className="input">
              <label>Senha:</label>
              <input type="password" placeholder="*****"></input>
              <a href="#">Esqueci minha senha</a>
            </div>

            <button>Próximo</button>
          </form>
        </div>

        <h1>Icone de libras</h1>
      </div>
    </body>
  );
}

export default Login;
