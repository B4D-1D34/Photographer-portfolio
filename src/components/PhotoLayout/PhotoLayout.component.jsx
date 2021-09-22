import React from "react";
import "./PhotoLayout.styles.css";
import SOURCE_LINKS from "./photoData";

const PhotoLayout = () => {
  return (
    <div className="PhotoLayout">
      {SOURCE_LINKS.map((imageUrl, idx) => (
        <div className={`image image${idx + 1}`}>
          <img src={imageUrl} alt="Photo"></img>
        </div>
      ))}
    </div>
  );
};

export default PhotoLayout;
