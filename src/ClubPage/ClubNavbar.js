import React, { useState } from "react";
import "./ClubNavbar.css"; // Import the CSS file for styling

const ClubNavbar = ({ clubName, clubLogo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={clubLogo} alt={clubName} className="club-logo" />
          <h1 className="club-name">{clubName}</h1>
        </div>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {/* Add your navigation links here */}
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ClubNavbar;
