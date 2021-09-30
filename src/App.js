import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import PhotoLayout from "./components/PhotoLayout/PhotoLayout.component";
import Footer from "./components/Footer/Footer.component";

import useWindowSize from "./hooks/useWindowSize";
import OnImagesLoaded from "react-on-images-loaded";
import {
  resizeWindow,
  isMobile,
  smoothScrollingWithConfigs,
} from "./helperFunctions";

function App() {
  const [debounceTimer, setDebounceTimer] = useState();
  const size = useWindowSize();

  const scrollContainer = useRef();
  const [smoothScrolling, scrollConfigs] = smoothScrollingWithConfigs();

  const handleImagesLoaded = () => resizeWindow(scrollContainer);

  //window resize handling, smooth scroll necessity
  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    const timerId = setTimeout(() => {
      resizeWindow(scrollContainer);
    }, 100);
    setDebounceTimer(timerId);
    // eslint-disable-next-line
  }, [size.height, size.width]);

  //turning smooth scroll on, mobile is off
  useEffect(() => {
    if (isMobile()) {
      return;
    }
    requestAnimationFrame(() =>
      smoothScrolling(scrollContainer, scrollConfigs)
    );
    // eslint-disable-next-line
  }, []);

  return (
    <OnImagesLoaded onLoaded={handleImagesLoaded}>
      <div className="App">
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
