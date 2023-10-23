import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./OurTeam.css"

const OurTeam = ({ clubName,Team }) => {
  var BgColor = "";
  if (clubName === "Alankar") {
    BgColor = "#f2f2f2";
  } else if (clubName === "Epicure") {
    BgColor = "#C8E8C7";
  } else if (clubName === "Vibgyor") {
    BgColor = "#E0EAF0";
  } else if (clubName === "Undekha") {
    BgColor = "#FADCE4";
  } else if (clubName === "Aurturo") {
    BgColor = "#D3D3D3";
  } else if (clubName === "Dcypher") {
    BgColor = "#CCCCCC";
  }
  return (
    <div className="our-team-section" style={{ backgroundColor: BgColor }}>
      <h1>Our Team</h1>
      <div className="row">
        {Team.map((member, index) => (
          <div className="col-lg-1.5 col-md-2 col-sm-3 col-4" key={index}>
            <div
              className="card team-card"
              style={{ backgroundColor: BgColor }}
            >
              <img
                src={member.ImgSrc}
                className="card-img-top"
                alt={member.Name}
              />
              <div className="card-body">
                <h5 className="card-title">{member.Name}</h5>
                <p className="card-text">{member.Post}</p>
                <div className="team-card-socials">
                  <a
                    href={member.InstaHandle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="team-card-icon" />
                  </a>
                  <a
                    href={member.LinkedInHandle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="team-card-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
