import "../assets/styles/cadastroPageGov.scss";
import fatecLogo from "../assets/imgs/fatec-rp-br.png";
import { useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const CadastroPageGov = () => {
  const navigate = useNavigate();
  // const {signup} = useAuth();

  const handleSignup = () => {
    alert("Cadastro feito com sucesso!");
    navigate("/login");
  };

  return (
    <>
      <div className="div-container-cad">
        <div className="cadastro-box">
          <img src={fatecLogo} alt="logo Fatec Ribeirão Preto" />

          <h1>
            Concorde com os termos para criar a sua conta e acessar o portal
          </h1>

          <div className="termos">
            <p>
              Este termo visa registrar a manifestação livre, informada e
              inequívoca, pela qual o Titular concorda com o tratamento de seus
              dados pessoais para finalidade específica e nos termos definidos
              no Aviso de Privacidade do Centro Paula Souza, disponível em:{" "}
              <a href="https://www.cps.sp.gov.br/compliance/protecao-de-dados/">
                https://www.cps.sp.gov.br/compliance/protecao-de-dados/
              </a>
              , para fins de conformidade com a Lei nº 13.709/2018 – Lei Geral
              de Proteção de Dados Pessoais (LGPD). Ao manifestar sua aceitação
              para com o presente termo, o Titular consente e concorda que a
              Faculdade de Tecnologia de Ribeirão Preto, vinculada Centro
              Estadual de Educação Tecnológica Paula Souza, CNPJ nº
              62.823.257/0284-53, com sede na Av. Pio XII, 1255, Vila Virgínia,
              Ribeirão Preto/SP – CEP 14030-250, e-mail lgpd@cps.sp.gov.br,
              doravante denominada Controladora, tome decisões referentes ao
              tratamento de seus dados pessoais, para fins de inscrição em
              atividades, palestra, eventos; candidaturas, pesquisa, matrícula e
              responder demandas do cidadão e inteligência de dados e
              informações, inclusive envolvendo operações como as que se referem
              a coleta, produção, recepção, classificação, utilização, acesso,
              reprodução, transmissão, distribuição, processamento,
              arquivamento, armazenamento, eliminação, avaliação ou controle da
              informação, modificação, comunicação, transferência, difusão ou
              extração.
            </p>
          </div>

          <span className="obrigatorio">
            Ao clicar em &quot;Criar Conta&quot; você confirma que leu e
            concordou com os nossos termos.
          </span>
          <button type="submit" onClick={handleSignup}>
            Criar conta
          </button>
        </div>
      </div>
    </>
  );
};

export default CadastroPageGov;
