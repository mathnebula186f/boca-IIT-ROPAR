import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ imageSrc, onClick }) => {
  return (
    <div className="gallery-item">
      <img src={imageSrc} alt="Gallery" onClick={onClick} />
    </div>
  );
};

export default GalleryItem;
