import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.jpg";
import alankarLogo from "./images/Alankar-logo.jpg";
import epicureLogo from "./images/Epicure-logo.jpg";
import fineArtsLogo from "./images/FineArts-logo.jpg";
import undekhaLogo from "./images/Undekha-logo.jpg";
import arturoLogo from "./images/Aurturo-logo.jpg";
import danceLogo from "./images/DanceClub-logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClubMenuOpen, setClubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleClubMenu = () => {
    setClubMenuOpen(!isClubMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div className="navbar-logo-text">
            <p className="navbar-logo-title">BOARD OF CULTURAL ACTIVITIES</p>
            <p className="navbar-logo-subtitle">IIT ROPAR</p>
          </div>
        </div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span
            className={`navbar-toggler-icon ${isMenuOpen ? "open" : ""}`}
          ></span>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="navbar-link">
            Home
          </a>
          <div className="navbar-link" onClick={toggleClubMenu}>
            Clubs
            {isClubMenuOpen && (
              <div className="navbar-club-menu">
                <a href="/club/alankar" className="navbar-club-link">
                  <img src={alankarLogo} alt="Alankar Club" />
                  <span>Alankar Club</span>
                </a>
                <a href="/club/epicure" className="navbar-club-link">
                  <img src={epicureLogo} alt="Epicure Club" />
                  <span>Epicure Club</span>
                </a>
                <a href="/club/fine-arts" className="navbar-club-link">
                  <img src={fineArtsLogo} alt="FineArts Club" />
                  <span>FineArts Club</span>
                </a>
                <a href="/club/undekha" className="navbar-club-link">
                  <img src={undekhaLogo} alt="Undekha Club" />
                  <span>Undekha Club</span>
                </a>
                <a href="/club/arturo" className="navbar-club-link">
                  <img src={arturoLogo} alt="Arturo Club" />
                  <span>Arturo Club</span>
                </a>
                <a href="/club/dance" className="navbar-club-link">
                  <img src={danceLogo} alt="Dance Club" />
                  <span>Dance Club</span>
                </a>
              </div>
            )}
          </div>
          <a href="/" className="navbar-link">
            Gallery
          </a>
          <a href="/contact" className="navbar-link">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
