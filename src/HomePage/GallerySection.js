import React, { useState } from "react";
import "./GallerySection.css";
import GalleryItem from "./GalleryItem";
// import "./GalleryItem.css"

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  console.log(selectedImage)
  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-row">
        <GalleryItem
          imageSrc={image1}
          onClick={() => handleImageClick(image1)}
        />
        <GalleryItem
          imageSrc={image2}
          onClick={() => handleImageClick(image2)}
        />
        <GalleryItem
          imageSrc={image3}
          onClick={() => handleImageClick(image3)}
        />
      </div>
      <div className="more-button">
        <a href="/Gallery">View More</a>
      </div>

      {selectedImage!=null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default GallerySection;
