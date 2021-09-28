import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import PhotoLayout from "./components/PhotoLayout/PhotoLayout.component";
import Footer from "./components/Footer/Footer.component";

import useWindowSize from "./hooks/useWindowSize";
import OnImagesLoaded from "react-on-images-loaded";

function App() {
  const [debounceTimer, setDebounceTimer] = useState();
  const size = useWindowSize();

  const app = useRef();
  const scrollContainer = useRef();

  const scrollConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const resizeWindow = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    const timerId = setTimeout(() => {
      // console.log(scrollContainer.current.getBoundingClientRect().height);

      // console.log("init height");
      resizeWindow();
    }, 100);
    setDebounceTimer(timerId);
    // eslint-disable-next-line
  }, [size.height, size.width]);

  const smoothScrolling = () => {
    scrollConfigs.current = window.scrollY;
    scrollConfigs.previous +=
      (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease;
    scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;

    scrollContainer.current.style.transform = `translate3d(0,-${scrollConfigs.rounded}px,0) 
    `;

    requestAnimationFrame(() => smoothScrolling());
  };

  useEffect(() => {
    // console.log("raf!");
    requestAnimationFrame(() => smoothScrolling());
    // eslint-disable-next-line
  }, []);

  return (
    <OnImagesLoaded onLoaded={resizeWindow}>
      <div ref={app} className="App">
        <div ref={scrollContainer} className="scroll">
          <Navbar />
          <PhotoLayout />
          <Footer />
        </div>
      </div>
    </OnImagesLoaded>
  );
}

export default App;
