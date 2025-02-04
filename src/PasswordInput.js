import React, { useState } from "react";

const PasswordInput = () => {
  // Estado para controlar a visibilidade da senha
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Input de senha */}
      <input
        type={showPassword ? "text" : "password"} // Alterna entre "text" e "password"
        placeholder="Digite sua senha"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />

      {/* Botão para mostrar/ocultar senha */}
      <button
        onClick={togglePasswordVisibility}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        {showPassword ? "Ocultar Senha" : "Mostrar Senha"}
      </button>
    </div>
  );
};

export default PasswordInput;