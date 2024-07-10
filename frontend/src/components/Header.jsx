import "../assets/styles/Header.scss";

import { PiSignOutBold } from "react-icons/pi";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoReorderFour } from "react-icons/io5";

import useAuth from "../hooks/useAuth";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

// Função para gerar um nome de usuário a partir do email
const getUsernameFromEmail = (email) => {
  if (!email) return '';
  const username = email.split('@')[0];
  return username;
};

const Header = () => {
  const { user, logout, isAuthenticated, error, isLoading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(5);
  const menuRef = useRef(null);
  const usernameRef = useRef(null);
  const navigate = useNavigate();
  const namespace = import.meta.env.VITE_AUTH0_NAMESPACE;
  const roles = user && user[`${namespace}roles`];
  let operador = false;

  if (roles && roles.includes('operador')) {
    operador = true
  }


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleClickUsername = () => {
    // Alternar o estado do menu suspenso quando o nome de usuário for clicado novamente
    setMenuOpen(!menuOpen);
  };

  const handleClickNotification = () => {
    setNotifications();
  };

  const handleClickOperador = () => {
    navigate('/operador');
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="menu">
        <div className="titulo-portal">
          <div title="Página Inicial" className="pagina-inicial">
            <Link to="/" className="link-home">
              <h2 className="titulo-h2-portal">Portal de Serviços</h2>

              <div className="rrme">
                <h2>&lt;<span>rickreisme</span>/&gt;</h2>
              </div>
            </Link>
          </div>
        </div>

        {error && <p>Erro de Autenticação</p>}
        {!error && isLoading && <Spinner />}

        {isAuthenticated && user && (
          <div className="user-info">
            <div className="notification" onClick={handleClickNotification}>
              <FaBell className="notification-icon" />
              {notifications > 0 && (
                <div className="selo-notification">
                  <span>
                    <sup>{notifications}</sup>
                  </span>
                </div>
              )}
            </div>

            <div className="username">
              <span
                className="spanUsername"
                ref={usernameRef}
                onClick={handleClickUsername}
              >
                {user?.picture && <img src={user.picture} alt={user.name || getUsernameFromEmail(user?.email)} />}
                {user.name && user.name.includes('@') ? getUsernameFromEmail(user.name) : user.name || getUsernameFromEmail(user?.email)}
              </span>

              {user.node_id && (
                <span className="user-role">
                  ({user.node_id})
                </span>

              )}

              {menuOpen && (
                <div ref={menuRef} className="dropdown-menu">
                  {operador && (
                    <button className="btn-operador" onClick={handleClickOperador}>
                      Painel operador&nbsp;
                      <MdDashboardCustomize alt="Botão de painel de controle ou dashboard" className="icon-btn-operador" />
                    </button>
                  )}

                  <button className="btn-servicos" onClick="">
                    Meus serviços&nbsp;
                    <IoReorderFour  alt="Botão de lista" className="icon-btn-servicos" />
                  </button>

                  <button className="btn-logout" onClick={() => logout()}>
                    Sair&nbsp;
                    <PiSignOutBold alt="Botão de logout" className="icon-btn-logout" />
                  </button>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
