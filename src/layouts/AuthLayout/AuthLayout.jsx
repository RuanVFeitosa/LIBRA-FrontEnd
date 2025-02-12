import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";

function AuthLayout() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

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
      <Header highContrast={highContrast} toggleContrast={toggleContrast} />
      <Outlet context={{ highContrast }} />
    </div>
  );
}

export default AuthLayout;
