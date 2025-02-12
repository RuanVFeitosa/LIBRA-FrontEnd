import React from "react";
import "./Calendario.css";

const Calendario = ({ selectedDate }) => {
  // Função para obter o número de dias no mês
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  // Função para obter o primeiro dia da semana do mês
  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  // Função para comparar duas datas (ignorando o fuso horário)
  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  // Renderizar os dias do mês
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDayOfMonth = getFirstDayOfMonth(selectedDate);
    const blanks = Array(firstDayOfMonth).fill(null); // Dias vazios no início do mês
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1); // Dias do mês

    return (
      <>
        {blanks.map((_, index) => (
          <span key={`blank-${index}`} className="dia empty"></span>
        ))}
        {days.map((day) => {
          const currentDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            day
          );
          const isSelected = isSameDate(currentDate, selectedDate);

          return (
            <span
              key={day}
              className={`dia ${isSelected ? "selected" : ""}`}
            >
              {day}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div className="calendario">
      <div className="header">
        <h3>{selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}</h3>
      </div>
      <div className="dias">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
          <span key={day} className="dia-name">
            {day}
          </span>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendario;