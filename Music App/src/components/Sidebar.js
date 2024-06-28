import React from 'react';
import { RiCompassDiscoverLine} from "react-icons/ri";
import { BsBrowserEdge } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import '../App.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="logo-icon"><GiMusicSpell /></i>
        <span className="logo-text">Musico</span>
      </div>
      <div className="menu">
        <h3>MENU</h3>
        <div className="menu-item">
          <i className="icon discover-icon"><RiCompassDiscoverLine /></i>
          <span>Discover</span>
        </div>
        <div className="menu-item">
          <i className="icon browse-icon"><BsBrowserEdge /></i>
          <span>Browse</span>
        </div>
        <div className="menu-item">
          <i className="icon search-icon"><FaSearchengin /></i>
          <span>Search</span>
        </div>
      </div>
      <div className="library">
        <h3>LIBRARY</h3>
        <div className="menu-item">
          <i className="icon create-playlist-icon"><MdCreateNewFolder /></i>
          <span>Create Playlists</span>
        </div>
      </div>
      <div className="account">
        <h3>ACCOUNT</h3>
        <div className="menu-item">
          <i className="icon sign-up-icon"><FaUserCircle /></i>
          <span>Sign Up</span>
        </div>
        <div className="menu-item">
          <i className="icon sign-in-icon"><FaSignInAlt /></i>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
