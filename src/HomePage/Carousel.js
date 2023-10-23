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
  const logo1 =
    "https://drive.google.com/uc?export=view&id=1tF7lLYbLWT3BIKIoUuUr6hh6hb4TgCWK";
  const logo2 =
    "https://drive.google.com/uc?export=view&id=1wgu2Dd-awuF5ySYSyROqEV5y2r9iKh8W";
  const logo3 =
    "https://drive.google.com/uc?export=view&id=1pXP-G0wGk8i20WeoCv7em1E2my1AGR9j";
  const logo4 =
    "https://drive.google.com/uc?export=view&id=1tDdtxPwhBA8c-4RzqjQjqv4xr8hLA8lj";
  const logo5 =
    "https://drive.google.com/uc?export=view&id=1pUQvKyh4i4E7F3qtYWgxjirMXGaBhu3x";
  const logo6 =
    "https://drive.google.com/uc?export=view&id=1mEjlPnZDJ6emvNukYm6vl5bgYGBhsVAn";
  const link1="/Alankar";
  const link2="/Epicure";
  const link3="/FineArts";
  const link4="/Undekha";
  const link5="/Aurturo";
  const link6="/Dance";
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
              <a href={eval("link"+index)}>
              <img
                src={eval("logo"+index)}
                alt={`Club Logo ${index}`}
                className="hover-club-logo"
              />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getImageBySlideNumber = (slideNumber) => {
  // const image1 =
  //   "https://drive.google.com/uc?export=view&id=1qacy7xYARSzpTDruNowrEeKzvrnMB17G";
  // const image2 =
  //   "https://drive.google.com/uc?export=view&id=1jBhP_ll7JbKvjR25mOUcdeEE92wcDr1g";
  // const image3 =
  //   "https://drive.google.com/uc?export=view&id=1IACi6e7gU0qXNRPtdtba27oVzHCzJ1rh";
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
