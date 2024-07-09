import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "../assets/styles/mediaQuery/max1015px.scss";
import "../assets/styles/Portal.scss";
import { FaSearch, FaStar } from "react-icons/fa";

const Portal = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/services"
        );

        if (!response.ok) {
          throw new Error(
            "Erro ao recuperar os serviços:",
            response.statusText
          );
        }

        const data = await response.json();

        setServices(data);
      } catch (error) {
        console.error("Erro ao recuperar os serviços:", error);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (route) => {
    navigate(route);
  };

  // Função para filtrar os serviços com base na tag selecionada e no termo de pesquisa
  const filteredServices = services.filter(
    (service) =>
      (!selectedTag || service.tagArea === selectedTag) &&
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Construção dinâmica dos cards de serviço
  const renderServiceCards = () => {
    if (!filteredServices || filteredServices.length === 0) {
      return (
        <div className="no-service">
          <p>Nenhum serviço encontrado...</p>
        </div>
      );
    }

    return filteredServices.map((service) => (
      <div className="servico-card"
        key={service.id}
        onClick={() => handleCardClick(service.route)}
      >
        <div className="img">
          <img src={service.img} />
        </div>

        <div className="bottom-box">
          <h3>{service.title}</h3>

          <div className="info">
            <h5 id="tag">{service.tagArea}</h5>
            <div className="avaliacao info-faded">
              <FaStar id="rate-icon" />
              <h5>{service.rate}</h5>
            </div>
            <h5 className="info-faded">{service.tempo}</h5>
          </div>
        </div>
      </div>
    ));
  };

  // Manipulador de evento para atualizar o termo de pesquisa
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Manipulador de evento para filtrar os serviços com base na tag selecionada
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <div className="div-container-portal">
        <div className="intro-portal">
          <div className="pesquisa">
            <span>Pesquisar pelo nome:</span>

            <div className="pesquisa-box">
              <input
                type="text"
                id="input-search"
                value={searchTerm}
                onChange={handleSearchInputChange}
                placeholder="Digite um termo"
              />

              <span id="icon-search">
                <FaSearch />
              </span>
            </div>
          </div>
          <div className="filtros">
            <span>Filtrar por área:</span>

            <button
              className="filtro-card"
              onClick={() => handleTagClick(null)}
            >
              Todas
            </button>

            <button
              className={`filtro-card ${selectedTag === null
                ? ""
                : selectedTag === "Acadêmica"
                  ? "selected"
                  : ""
                }`}
              onClick={() => handleTagClick("Acadêmica")}
            >
              Acadêmica
            </button>

            <button
              className={`filtro-card ${selectedTag === null
                ? ""
                : selectedTag === "Administrativa"
                  ? "selected"
                  : ""
                }`}
              onClick={() => handleTagClick("Administrativa")}
            >
              Administrativa
            </button>

            <button
              className={`filtro-card ${selectedTag === null
                ? ""
                : selectedTag === "Coordenadoria"
                  ? "selected"
                  : ""
                }`}
              onClick={() => handleTagClick("Coordenadoria")}
            >
              Coordenadoria
            </button>
          </div>
        </div>

        <div className="servicos">{renderServiceCards()}</div>
      </div>
    </>
  );
};

export default Portal;
