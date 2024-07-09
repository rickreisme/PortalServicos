import "../assets/styles/mediaQuery/max1015px.scss"
import "../assets/styles/Home.scss"
import { Spinner } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, error } = useAuth()

  return (
    <>
      <div className="container-center">
        <div className="intro">
          <div className="intro-text">
            <h1>
              Seja bem-vindo(a) ao Portal de Serviços!
            </h1>

            <h2>
              No Portal de Serviços rickreisme, você pode solicitar e receber
              os serviços dos diversos departamentos da faculdade de forma fácil
              e simples.
            </h2>
          </div>

          <div className="login-area">
            <div className="entrar">
              {error && <p>Erro de Autenticação</p>}
              {!error && isLoading && <Spinner />}
              {!isAuthenticated && (
                <button
                  target="_blank"
                  className="btn-login"
                  onClick={() => loginWithRedirect()}
                >
                  <span>Entrar</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
