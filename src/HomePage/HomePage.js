import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import MissionBlock from "./MissionBlock";
import GenSecVision from "./GenSecVision";
import GallerySection from "./GallerySection";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="App">
      <div style={{position:'fixed',zIndex:'99', width:'100%'}}>
        <Navbar />
      </div>
      <div className="section">
        <Carousel />
      </div>
      <div className="section">
        <MissionBlock />
      </div>
      <div className="section">
        <GenSecVision />
      </div>
      <div className="section">
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
