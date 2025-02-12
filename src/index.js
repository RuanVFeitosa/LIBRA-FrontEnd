import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";

import AuthLoginUser from "./pages/AuthLoginUser/AuthLoginUser";
import AuthRegisterUser from "./pages/AuthRegisterUser/AuthRegisterUser";
import FormAcessibilidade from "./pages/FormAcessibilidade/FormAcessibilidade";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth/login",
        element: <AuthLoginUser />,
      },
      {
        path: "/auth/register",
        element: <AuthRegisterUser />,
      },
      {
        path: "/auth/acessibilidade",
        element: <FormAcessibilidade />,
      },
    ],
  },
  {
    path : "/",
    element : <Home />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
