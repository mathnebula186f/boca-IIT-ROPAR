import React, { useEffect, useState } from "react";
import "./Carousel.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMiddle, setIsMiddle] = useState(false);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 5000);

    return () => {
      clearInterval(slideshowTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.querySelector(".carousel-container");
      const rect = carousel.getBoundingClientRect();
      const middle = window.innerHeight / 2;

      if (rect.top <= middle && rect.bottom >= middle) {
        setIsMiddle(true);
      } else {
        setIsMiddle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logo =
    "https://drive.google.com/uc?export=view&id=14SBYHgnDvgggcRYMLdES97Rx8qNxr7eY";

  return (
    <div className={`carousel-container ${isMiddle ? "middle" : ""}`}>
      <div
        className={`carousel-image slide-${currentSlide} ${
          isMiddle ? "middle" : ""
        }`}
        style={{
          backgroundImage: `url(${getImageBySlideNumber(currentSlide)})`,
        }}
      ></div>
      <div className={`carousel-content ${isMiddle ? "middle" : ""}`}>
        <div className={`content-text ${isMiddle ? "middle" : ""}`}>
          <div className={`content-welcome ${isMiddle ? "middle" : ""}`}>
            Welcome!
          </div>
          <br />
          <div className={`content-down ${isMiddle ? "middle" : ""}`}>
            <span className="content-board">BOARD OF CULTURAL ACTIVITIES</span>
            <br />
            <img src={logo} alt="Logo" className="content-logo" />
          </div>
        </div>
        <div className={`hover-block ${isMiddle ? "middle" : ""}`}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div className="hover-item" key={index}>
              <img
                src={logo}
                alt={`Club Logo ${index}`}
                className="hover-club-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getImageBySlideNumber = (slideNumber) => {
  switch (slideNumber) {
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    default:
      return image1;
  }
};

export default Carousel;
