import React from "react";
import "./PhotoLayout.styles.css";
import IMAGES_PARAMS from "./photoData";

const PhotoLayout = () => {
  return (
    <div className="PhotoLayout">
      {IMAGES_PARAMS.map((imageParams, idx) => (
        <div key={idx} className={`image image${idx + 1}`}>
          <img
            sizes={imageParams.sizes}
            srcSet={imageParams.srcset}
            src={imageParams.src}
            alt=""
          ></img>
        </div>
      ))}
    </div>
  );
};

export default PhotoLayout;
