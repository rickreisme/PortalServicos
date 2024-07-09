import "../assets/styles/Footer.scss"
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer>
        <div className="credits">
          <div className="ano-rickreisme">
            <h3>{currentYear}</h3>

            <a href="https://rickreisme-portfolio.vercel.app" target="_blank">
              <span><h3>&lt;rickreisme/&gt;</h3></span>
            </a>
          </div>

          <h3>Desenvolvido por Rick Reis</h3>
        </div>

        <a href="" target="_blank" className="sobre-portal">
          Sobre o Portal de Serviços
        </a>
      </footer>
    </>
  );
};

export default Footer;