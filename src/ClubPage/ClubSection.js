import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ClubSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ClubSection = ({ clubName, clubLogoSrc,InfoHeading,InfoPoints,Images,bgColor,ClubQoute}) => {
  console.log("color is =",bgColor)
  var BgColor="";
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
    <div className="club-section" style={{ backgroundColor: BgColor }}>
      <div className="row">
        <div className="col-lg-6">
          <div className="left-column">
            <div className="upper-row" style={{ backgroundColor: BgColor }}>
              <div className="club-info">
                <h2>{clubName} Club</h2>
                <img src={clubLogoSrc} alt="Club Logo" className="club-logo" />
                <p>{ClubQoute}</p>
              </div>
            </div>
            <div className="lower-row" style={{ backgroundColor: BgColor }}>
              <div className="club-achievements">
                <h3>{InfoHeading}</h3>
                <ul>
                  {InfoPoints.map((element) => (
                    <li>-{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-column" style={{ backgroundColor: BgColor }}>
            <div className="carousel-container">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
              >
                <div className="ImageDiv">
                  <img src={Images[0]} alt="Carousel Image" />
                </div>
                <div className="ImageDiv">
                  <img src={Images[1]} alt="Carousel Image" />
                </div>
                <div className="ImageDiv">
                  <img src={Images[2]} alt="Carousel Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubSection;
