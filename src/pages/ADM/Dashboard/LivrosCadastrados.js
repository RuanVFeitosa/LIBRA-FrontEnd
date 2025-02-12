import React from "react";
import './LivrosCadastrados.css'

const LivrosCadastrados = () => {
  const livros = [
    {
      titulo: "Alquimista",
      fecha: "Gestão",
      categoria: "Semance",
      avaliacao: 5,
    },
    {
      titulo: "Cem anos de solidão",
      fecha: "Gestão: Minimal",
      categoria: "Semance",
      avaliacao: 5,
    },
  ];

  return (
    <div>
      <h3>Últimos livros cadastrados</h3>
      <hr></hr>
      {livros.map((livro, index) => (
        <div className="livros-cadastrados" key={index}>
          <div className="info-livros">
            <h4>{livro.titulo}</h4>
            <p>Fecha: {livro.fecha}</p>
            <p>Categoria: {livro.categoria}</p>
            <p>Avaliação: {"★".repeat(livro.avaliacao)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LivrosCadastrados;