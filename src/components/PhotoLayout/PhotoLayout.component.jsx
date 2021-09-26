import React, { useEffect, useRef } from "react";
import "./PhotoLayout.styles.css";
import IMAGES_PARAMS from "./photoData";

const PhotoLayout = () => {
  // const refs = [];
  // for (let image of IMAGES_PARAMS) {
  //   refs.push(useRef());
  // }
  const photoLayout = useRef();
  // const scaleVisiblePhoto = function (entries, observer) {
  //   console.log("entry!");
  //   console.log(entries);
  //   console.log(entries[0].target.offsetTop / window.scrollY);

  //   entries[0].target.children[0].style.transform = `scale(${
  //     entries[0].target.offsetTop / window.scrollY
  //   })`;
  // };

  // const options = { threshold: 1 };

  // const observer = new IntersectionObserver(scaleVisiblePhoto, options);
  useEffect(() => {
    // console.log(photoLayout.current.children);
    const divArray = [...photoLayout.current.children];
    window.onscroll = () => {
      // console.log("scrolling");
      divArray.forEach((div) => {
        // console.log((window.scrollY - div.offsetTop) / div.offsetHeight / 2);
        div.firstChild.style.transform = `scale(${
          (window.scrollY - div.offsetTop) / div.offsetHeight + 1 > 1.5
            ? 1.5
            : (window.scrollY - div.offsetTop) / div.offsetHeight + 1 < 1
            ? 1
            : (window.scrollY - div.offsetTop) / div.offsetHeight + 1
        })`;
        // div.firstChild.style.transform = `scale(${
        //   (window.scrollY - div.offsetTop) / div.offsetHeight / 2
        // })`;
      });
    };
    // observer.observe(div)
    // observer.observe(image11.current);
  }, []);
  // console.log(image);

  return (
    <div className="PhotoLayout" ref={photoLayout}>
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
