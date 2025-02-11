import React, { useState } from "react";
import "./Calendario.css";

const Calendario = () => {
  const [mes, setMes] = useState("Fevereiro");
  const dias = Array.from({ length: 29 }, (_, i) => i + 1);

  return (
    <div className="calendario">
      <h3>{mes}</h3>
      <div className="dias">
        {dias.map((dia) => (
          <span key={dia} className="dia">{dia}</span>
        ))}
      </div>
    </div>
  );
};

export default Calendario;
