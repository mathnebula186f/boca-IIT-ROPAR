import React, { useState } from "react";
import "./Navbar.css";
import logo from "./images/logo.jpg";



const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClubMenuOpen, setClubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleClubMenu = () => {
    setClubMenuOpen(!isClubMenuOpen);
  };

  //Images
  const alankarLogo =
    "https://drive.google.com/uc?export=view&id=1tF7lLYbLWT3BIKIoUuUr6hh6hb4TgCWK";
  const epicureLogo =
    "https://drive.google.com/uc?export=view&id=1wgu2Dd-awuF5ySYSyROqEV5y2r9iKh8W";
  const fineArtsLogo =
    "https://drive.google.com/uc?export=view&id=1pXP-G0wGk8i20WeoCv7em1E2my1AGR9j";
  const undekhaLogo =
    "https://drive.google.com/uc?export=view&id=1tDdtxPwhBA8c-4RzqjQjqv4xr8hLA8lj";
  const arturoLogo =
    "https://drive.google.com/uc?export=view&id=1pUQvKyh4i4E7F3qtYWgxjirMXGaBhu3x";
  const danceLogo =
    "https://drive.google.com/uc?export=view&id=1mEjlPnZDJ6emvNukYm6vl5bgYGBhsVAn";


  return (
    <div className="navbar">
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
                <a href="/Alankar" className="navbar-club-link">
                  <img src={alankarLogo} alt="Alankar Club" />
                  <span>Alankar Club</span>
                </a>
                <a href="/Epicure" className="navbar-club-link">
                  <img src={epicureLogo} alt="Epicure Club" />
                  <span>Epicure Club</span>
                </a>
                <a href="/FineArts" className="navbar-club-link">
                  <img src={fineArtsLogo} alt="FineArts Club" />
                  <span>FineArts Club</span>
                </a>
                <a href="/Undekha" className="navbar-club-link">
                  <img src={undekhaLogo} alt="Undekha Club" />
                  <span>Undekha Club</span>
                </a>
                <a href="/Aurturo" className="navbar-club-link">
                  <img src={arturoLogo} alt="Arturo Club" />
                  <span>Arturo Club</span>
                </a>
                <a href="/Dance" className="navbar-club-link">
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
    </div>
  );
};

export default Navbar;
