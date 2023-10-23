import React, { useState } from "react";
import "./ClubNavbar.css"; // Import the CSS file for styling

const ClubNavbar = ({ clubName, clubLogoSrc }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isClubMenuOpen, setClubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleClubMenu = () => {
    setClubMenuOpen(!isClubMenuOpen);
  };

  //Images
  return (
    <nav className="Clubnavbar">
      <div className="Clubnavbar-container">
        <div className="Clubnavbar-logo-container">
          <img src={clubLogoSrc} alt="Logo" className="Clubnavbar-logo" />
          <div className="Clubnavbar-logo-text">
            <p className="Clubnavbar-logo-title">
              {clubName.toUpperCase() + " CLUB"}
            </p>
            <p className="Clubnavbar-logo-subtitle">IIT ROPAR</p>
          </div>
        </div>
        <button className="Clubnavbar-toggler" onClick={toggleMenu}>
          <span
            className={`Clubnavbar-toggler-icon ${isMenuOpen ? "open" : ""}`}
          ></span>
        </button>
        <div className={`Clubnavbar-menu ${isMenuOpen ? "open" : ""}`}>
          <a href="/" className="Clubnavbar-link">
            Home
          </a>
          <a href="/" className="Clubnavbar-link">
            Gallery
          </a>
          <a href="/contact" className="Clubnavbar-link">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ClubNavbar;
