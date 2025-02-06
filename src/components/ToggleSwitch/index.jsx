import React  from "react";
import "./style.css";
export const ToggleSwitch = ({ onClick }) =>{
    return(
        <label className="teste">
        <input className="contraste" type="checkBox" oncClick={onClick} />
        <span className="botazinho"/>
        </label>
    )
}