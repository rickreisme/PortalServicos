import "../assets/styles/cadastroPage.scss";
import fatecLogo from "../assets/imgs/fatec-rp-br.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const CadastroPage = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {registerUser} = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();

    if(!nome | !sobrenome | !email | !emailConf | !senha | !senhaConf){
      setError("Por favor, preencha todos os campos!");
      return;
    }else if (email !== emailConf){
      setError("Os e-mails informados não são iguais!");
      return;
    }else if (senha !== senhaConf){
      setError("As senhas informadas não coincidem!");
      return;
    }else{
      setError("Por favor, verifique os dados informados e tente novamente!");
    }

    const res = registerUser(email,senha,nome,sobrenome);

    if(res){
      setError(res);
      return
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/login")
  };

  return (
    <>
      <div className="div-container-cad">
        <div className="cadastro-box">
          <img src={fatecLogo} alt="logo Fatec Ribeirão Preto" />

          <h1>Crie sua conta para acessar o portal</h1>
          <form action="">
            <input
              type="text"
              placeholder="Nome*"
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError("")]}
            />

            <input
              type="text"
              placeholder="Sobrenome*"
              value={sobrenome}
              onChange={(e) => [setSobrenome(e.target.value), setError("")]}
            />

            <input
              type="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <input
              type="email"
              placeholder="Confirme seu e-mail*"
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />

            <input
              type="password"
              placeholder="Senha*"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />

            <input
              type="password"
              placeholder="Confirme sua senha*"
              value={senhaConf}
              onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
            />
            <label className="erro">{error}</label>
            <span className="obrigatorio">Campos marcados com * são obrigatórios</span>

            <button type="submit" onClick={handleSignup}>Criar conta</button>

            <div id="callCadastro">
              <h3>Já possui uma conta?</h3>
              <Link to="/login">
                <span>Faça login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CadastroPage;
