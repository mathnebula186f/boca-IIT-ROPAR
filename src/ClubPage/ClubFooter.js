import React from "react";
import "./ClubFooter.css";
// import instagramIcon from "../images/instagram_icon.jpg";
// import facebookIcon from "../images/linkedin_icon.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; Board of Cultural Activities</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={instagramIcon} alt="Instagram" /> */}
          </a>
          <a
            href="https://www.facebook.com/your_facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img src={facebookIcon} alt="Facebook" /> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
