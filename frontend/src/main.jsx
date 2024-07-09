/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "./hooks/useAuth";
import App from "./App";
import Home from "./routes/Home";
import Portal from "./routes/Portal";
import Operador from "./routes/operador";
import Agendamento from "modulo-portal"
import "../node_modules/modulo-portal/dist/style.css"
import "./assets/styles/global.scss";
import "./assets/styles/mediaQuery/mediaQuery.scss";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const namespace = import.meta.env.VITE_AUTH0_NAMESPACE;

export const Private = ({ Item }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    // Exibir algum indicador de carregamento enquanto verificamos a autenticação
    return <div>Carregando...</div>;
  }

  return isAuthenticated ? <Item /> : null;
};

const OperadorRoute = () => {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      const roles = user && user[`${namespace}roles`];

      if (roles && !roles.includes('operador')) {
        toast.error("Acesso Negado! Você não tem perfil para acessar a página.");
      }
    }
  }, [isLoading, user]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  const roles = user && user[`${namespace}roles`];

  if (roles && roles.includes('operador')) {
    return <Operador />
  } else {
    return <Navigate to="/portal" />
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: "http://localhost:5173/portal" }}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="login" element={<LoginPage />} /> */}
            {/* <Route path="cadastro" element={<CadastroPage />} /> */}
            <Route path="portal" element={<Private Item={Portal} />} />
            <Route path="operador" element={<OperadorRoute />} />
            <Route path="/service/agendamento" element={<Agendamento />} />
          </Route>
        </Routes>
      </Router>
    </Auth0Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
