import React, { useState, useEffect } from "react";
import "./GenSecVision.css";

import genSec2023 from "./images/Gopal.jpg";
import genSec2022 from "./images/Gopal.jpg";
import genSec2021 from "./images/Gopal.jpg";
import instagramIcon from "./images/instagram_icon.jpg";
import linkedinIcon from "./images/linkedin_icon.jpg";

const GenSecVision = () => {
  const [selectedYear, setSelectedYear] = useState(2023); // Initially selecting 2023
  const [isInViewport, setIsInViewport] = useState(false);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("gen-sec-vision");
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const isVisible = top >= 0 && bottom <= window.innerHeight;
        setIsInViewport(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="gen-sec-vision"
      className={`general-sec-vision ${isInViewport ? "in-viewport" : ""}`}
    >
      <h2>Our General Sec. Vision</h2>
      <div className="year-buttons">
        <button
          className={`year-button ${selectedYear === 2023 ? "active" : ""}`}
          onClick={() => handleYearClick(2023)}
        >
          2023
        </button>
        <button
          className={`year-button ${selectedYear === 2022 ? "active" : ""}`}
          onClick={() => handleYearClick(2022)}
        >
          2022
        </button>
        <button
          className={`year-button ${selectedYear === 2021 ? "active" : ""}`}
          onClick={() => handleYearClick(2021)}
        >
          2021
        </button>
      </div>
      <div className="vision-block">
        <div className={`vision-info ${selectedYear === 2023 ? "active" : ""}`}>
          <h3>General Secretary Vision 2023</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="vision-profile">
            <img
              src={genSec2023}
              alt="General Secretary 2023"
              className="profile-pic"
            />
            <h2> Gopal Bansal</h2>
            <div className="social-links">
              <a
                href="https://www.instagram.com/gen_sec_2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/gen_sec_2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={`vision-info ${selectedYear === 2022 ? "active" : ""}`}>
          <h3>General Secretary Vision 2022</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="vision-profile">
            <img
              src={genSec2022}
              alt="General Secretary 2022"
              className="profile-pic"
            />
            <h2> Gopal Bansal</h2>
            <div className="social-links">
              <a
                href="https://www.instagram.com/gen_sec_2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/gen_sec_2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={`vision-info ${selectedYear === 2021 ? "active" : ""}`}>
          <h3>General Secretary Vision 2021</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="vision-profile">
            <img
              src={genSec2021}
              alt="General Secretary 2021"
              className="profile-pic"
            />
            <h2> Gopal Bansal</h2>
            <div className="social-links">
              <a
                href="https://www.instagram.com/gen_sec_2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/gen_sec_2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenSecVision;
