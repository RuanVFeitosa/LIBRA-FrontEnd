import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./LoginPage.css";
// import AuthLoginUser from "../../features/AuthLoginUser.jsx";

function AuthLayout() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ToggleSwitch = ({ isChecked, onChange }) => (
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
        checked={isChecked}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <span
        className="bolinha"
        style={{
          backgroundColor: highContrast ? "black" : "white",
          left: highContrast ? "55%" : "5%",
        }}
      ></span>
    </label>
  );

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: highContrast ? "black" : "green",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: highContrast ? "white" : "white",
        position: "relative",
      }}
    >
      <div className="header">
        <h1>LIBRA</h1>
        <div>
          <ToggleSwitch
            checked={highContrast}
            onChange={handleToggleChange && toggleContrast}
          />
          <a href="" style={{ fontSize: "13px" }}>
            Auto contraste
          </a>
        </div>
      </div>
      <Outlet context={{highContrast}} />
    </div>
  );
}

export default AuthLayout;
