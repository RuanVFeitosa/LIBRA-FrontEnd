import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Header from "../../components/Header";

function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    if (location.pathname === "/auth" || location.pathname === "/auth/") {
      navigate("/auth/login", { replace: true });
    }
  }, [location.pathname, navigate]);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div
      style={{
        background: highContrast ? "black" : "linear-gradient(to right, #9daf9e, #627961)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        color: "white",
        position: "relative",
      }}
    >
      <Header highContrast={highContrast} toggleContrast={toggleContrast} />
      <Outlet context={{ highContrast }} />
    </div>
  );
}

export default AuthLayout;
