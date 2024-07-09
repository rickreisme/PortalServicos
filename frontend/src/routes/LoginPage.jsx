import "../assets/styles/loginPage.scss";
import fatecLogo from "../assets/imgs/fatec-rp-br.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const {signin} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!email | !senha){
      setError("Por favor, preencha todos os campos!");
      return
    }

    const res = await signin(email, senha);

    if(res === "Usuário não cadastrado" || res === "Senha incorreta"){
      setError(res);
      return;
    }

    navigate("/portal")
  };

  return (
    <>
      <div className="div-container">
        <div className="login-box">
          <img src={fatecLogo} alt="logo Fatec Ribeirão Preto" />

          <h1>Faça login para acessar o portal</h1>
          <form action="">
            <input
              type="email"
              placeholder="Seu e-mail*"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <input
              type="password"
              placeholder="Sua senha*"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <label className="erro">{error}</label>
            <span className="obrigatorio">Campos marcados com * são obrigatórios</span>

            <button type="submit" onClick={handleLogin}>Entrar</button>

            <div id="callCadastro">
              <h3>Ainda não possui cadastro?</h3>
              <Link to="/cadastro">
                <span>Criar conta</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
