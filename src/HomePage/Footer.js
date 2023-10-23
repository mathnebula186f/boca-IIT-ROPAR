import React from "react";
import "./Footer.css";
import instagramIcon from "./images/instagram_icon.jpg";
import facebookIcon from "./images/linkedin_icon.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; Board of Cultural Activities</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/yaaimgopalbansal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/gopal-bansal-a4050b229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
