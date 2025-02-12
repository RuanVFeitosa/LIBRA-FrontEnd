import React from "react";

const Usuarios = () => {
  const usuarios = [
    {
      nome: "Fernando Lopes na Biblioteca",
      pcd: "NÃO",
      tipoDeficiencia: "-",
      evento: "Sessão cinema",
      auxilio: "-",
      confirmado: "Em análise",
    },
    {
      nome: "Simone Monteiro na Biblioteca",
      pcd: "SIM",
      tipoDeficiencia: "Visual (Baixa visão e estigmatismo)",
      evento: "Sessão cinema",
      auxilio: "SIM",
      confirmado: "SIM",
    },
    {
      nome: "Ronan Silva na Biblioteca",
      pcd: "SIM",
      tipoDeficiencia: "Múltiplo (Audição total e deficiência no tolo)",
      evento: "Sessão cinema",
      auxilio: "SIM",
      confirmado: "SIM",
    },
    {
      nome: "Gerroul Pinheiro na Biblioteca",
      pcd: "NÃO",
      tipoDeficiencia: "-",
      evento: "Sessão cinema",
      auxilio: "-",
      confirmado: "Em análise",
    },
  ];

  return (
    <div>
      <h3>Usuário</h3>
      <table>
        <thead>
          <tr>
            <th>É PCD?</th>
            <th>Tipo de deficiência</th>
            <th>Evento</th>
            <th>Auxílio</th>
            <th>Confirmado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.pcd}</td>
              <td>{usuario.tipoDeficiencia}</td>
              <td>{usuario.evento}</td>
              <td>{usuario.auxilio}</td>
              <td>{usuario.confirmado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;