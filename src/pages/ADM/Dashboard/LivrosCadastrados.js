import React from "react";
import './LivrosCadastrados.css';

const LivrosCadastrados = () => {
  const livros = [
    {
      titulo: "O Alquimista",
      autor: "Paulo Coelho",
      ficha: "Ficha Coletiva",
      categoria: "Romance",
      avaliacao: 5,
      imagem: "https://m.media-amazon.com/images/I/81slUinjTlS._AC_UF1000,1000_QL80_.jpg", // URL da imagem
    },
    {
      titulo: "Cem anos de solidão",
      autor: "Gabriel Garcia Marquez",
      ficha: "Oficial Editora Refugiada",
      categoria: "Romance",
      avaliacao: 5,
      imagem: "https://m.media-amazon.com/images/I/816Yy5v+S5L._AC_UF1000,1000_QL80_.jpg", // URL da imagem
    },
    {
      titulo: "Harry Potter e a câmara secreta",
      autor: "J.K. Rowling",
      ficha: "Aristonanda Elegião",
      categoria: "Colaboração: 6",
      avaliacao: 5,
      imagem: "https://m.media-amazon.com/images/I/81jbivNEVML._AC_UF1000,1000_QL80_.jpg", // URL da imagem
    },
  ];

  return (
    <div className="container-livros">
      <h3>Últimos livros cadastrados</h3>
      <hr />
      <div className="lista-livros">
        {livros.map((livro, index) => (
          <div className="livro" key={index}>
            <div className="conteudo-livro">
              <img src={livro.imagem} alt={livro.titulo} className="imagem-livro" />
              <div className="info-livro">
                <h4 className="livro-titulo">
                  <strong>{livro.titulo}</strong>
                </h4>
                <p className="livro-autor">{livro.autor}</p>
                <p className="livro-ficha">{livro.ficha}</p>
                <p className="livro-categoria">{livro.categoria}</p>
                <p className="livro-avaliacao">Avaliação: {livro.avaliacao} </p>
                <p
                  className="avaliacao-estrela"
                  style={{ color: livro.avaliacao >= 4 ? "#476758" : "#ccc" }}
                >
                  {"★".repeat(livro.avaliacao)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivrosCadastrados;