import React from "react";
import "./header.css";

export default function Header({ highContrast, toggleContrast }) {
  return (
    <div className="header">
      <h1>LIBRA</h1>
      <div className="toggle-container">
        <label
          className="areaC"
          style={{
            backgroundColor: highContrast ? "white" : "#3b5147",
            border: highContrast ? "3px solid white" : "3px solid #3b5147",
          }}
        >
          <input
            className="buttonContraste"
            type="checkbox"
            checked={highContrast}
            onChange={toggleContrast}
          />
          <span
            className="bolinha"
            style={{
              backgroundColor: highContrast ? "black" : "white",
              left: highContrast ? "55%" : "5%",
            }}
          ></span>
        </label>
        <span className="contrast-text">Auto contraste</span>
        
      </div>
    </div>
  );
}
