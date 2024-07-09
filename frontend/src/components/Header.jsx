import "../assets/styles/Header.scss";

import { PiSignOutBold } from "react-icons/pi";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import useAuth from "../hooks/useAuth";
import { useState, useEffect, useRef } from "react"; 7

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
                  <button className="btn-logout" onClick={() => logout()}>
                    <span className="spanBtnlogout">
                      Sair&nbsp;
                      <PiSignOutBold alt="Botão de logout" className="btn-logout" />
                    </span>
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
