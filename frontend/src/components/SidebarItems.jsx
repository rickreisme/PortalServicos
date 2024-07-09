import React from "react";
import{FaUser, FaInfoCircle, FaList} from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import "../assets/styles/sidebar.scss"

const SidebarItems = () => {
  return (
    <ul className="sidebarItens">
      <li className="sidebarItem">
        <a href="">
            <FaUser className="icons iconUser"/>
          <span>Login</span>
        </a>
      </li>

      <li className="sidebarItem">
        <a href="">
            <FaList className="icons iconProcess"/>
          <span>Processos</span>
        </a>
      </li>

      <li className="sidebarItem">
        <a href="http://www.fatecrp.edu.br" target="_blank">
            <TbWorld className="icons iconWeb"/>
          <span>Site da Fatec</span>
        </a>
      </li>

      <li className="sidebarItem">
        <a href="">
            <FaInfoCircle className="icons iconInfo"/>
          <span>Sobre o Portal</span>
        </a>
      </li>
    </ul>
  );
};

export default SidebarItems;
