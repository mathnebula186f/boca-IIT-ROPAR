import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import MissionBlock from "./MissionBlock";
import GenSecVision from "./GenSecVision";
import GallerySection from "./GallerySection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
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

export default App;
