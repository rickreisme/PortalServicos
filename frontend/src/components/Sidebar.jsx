/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/sidebar.scss"
import{FaTimes} from 'react-icons/fa';
import SidebarItems from "./SidebarItems";

const Sidebar = ({ showSidebar, showSidebarActive, onCloseSidebar }) => {
    return (
      <div className={`sidebar ${showSidebar ? 'show-sidebar' : ''} ${showSidebarActive ? 'active' : ''}`}>
        <div className="sidebar-content">
          <a className="close-button" onClick={onCloseSidebar}>
            <FaTimes className="closeIcon"/>
          </a>

          <SidebarItems />
        </div>
      </div>
    );
  };
  
  Sidebar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    showSidebarActive: PropTypes.bool.isRequired,
    onCloseSidebar: PropTypes.func.isRequired,
  };
  
  export default Sidebar;