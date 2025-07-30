import React from "react";
import "./Navbar.css";
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">&lt;Dev/&gt;</span>
        <span className="logo-text">RaviSankkaran I</span>
      </div>

      {/* Nav Links + Search */}
      {/* <div className="nav-center">
        <a href="#" className="active">
          Home
        </a>
        <a href="#">Blogs</a>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <FiSearch className="search-icon" />
        </div>
      </div> */}

      {/* Social Links */}
      <div className="social-icons">
        <a href="#">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="#">
          <FaDiscord />
          <span>Discord</span>
        </a>
        <a href="#">
          <FaGithub />
          <span>Github</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
