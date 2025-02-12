import React, { useState } from "react";
import Calendario from "./Calendario";
import "./Eventos.css";

const Eventos = () => {
  const [evento, setEvento] = useState({
    titulo: "",
    categoria: "",
    data: "",
    horaInicio: "",
    horaFim: "",
    descricao: "",
    capa: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento({ ...evento, [name]: value });
  };

  const handleFileChange = (e) => {
    setEvento({ ...evento, capa: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Evento cadastrado:", evento);
    alert("Evento cadastrado com sucesso!");
  };

  // Converter a string da data para um objeto Date (sem fuso horário)
  const selectedDate = evento.data
    ? new Date(
        new Date(evento.data).getFullYear(),
        new Date(evento.data).getMonth(),
        new Date(evento.data).getDate()
      )
    : new Date();

  return (
    <div className="eventos-background">
      <div className='navBar'>
        <h2>Bom dia, <b>Samantha!</b></h2>
        <p>Voce tem 1 notificação</p>
        <p>icone de saida</p>
      </div>
      <div className="eventos-container">
        <div className="calendario-section">
          <Calendario selectedDate={selectedDate} />
          <div className="eventos-dia">
            <h3>Eventos do dia</h3>
            <div className="evento">
              <img src="caminho/imagem.jpg" alt="Teatro" />
              <p><b>Sessão Teatro</b></p>
              <span>08:00 AM às 10:00 AM</span>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Informações do evento</h2>
          <form onSubmit={handleSubmit}>
            <label>Título do evento</label>
            <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} required />

            <label>Categoria</label>
            <select name="categoria" value={evento.categoria} onChange={handleChange} required>
              <option value="">Tipo de evento</option>
              <option value="Palestra">Palestra</option>
              <option value="Show">Show</option>
              <option value="Workshop">Workshop</option>
            </select>

            <h3>Data e Hora</h3>
            <label>Data</label>
            <input type="date" name="data" value={evento.data} onChange={handleChange} required />

            <label>A partir:</label>
            <input type="time" name="horaInicio" value={evento.horaInicio} onChange={handleChange} required />

            <label>Até:</label>
            <input type="time" name="horaFim" value={evento.horaFim} onChange={handleChange} required />

            <label>Descrição do evento</label>
            <textarea name="descricao" value={evento.descricao} onChange={handleChange}></textarea>

            <label>Upload de capa</label>
            <input type="file" onChange={handleFileChange} />

            <button type="submit">Cadastrar evento</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Eventos;