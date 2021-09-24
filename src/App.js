import React, { useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import PhotoLayout from "./components/PhotoLayout/PhotoLayout.component";
import Footer from "./components/Footer/Footer.component";

import useWindowSize from "./hooks/useWindowSize";

function App() {
  const size = useWindowSize();

  const app = useRef();
  const scrollContainer = useRef();

  const scrollConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    scrollContainer.current.children[1].onload =
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
  }, [size.height]);

  const smoothScrolling = () => {
    scrollConfigs.current = window.scrollY;
    scrollConfigs.previous +=
      (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease;
    scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;

    // const difference = scrollConfigs.current - scrollConfigs.rounded;
    // const acceleration = difference / size.width;
    // const velocity = +acceleration;
    // const scale = velocity * 7.5;

    scrollContainer.current.style.transform = `translate3d(0,-${scrollConfigs.rounded}px,0) 
    `;
    // skewY(${scale}deg)

    requestAnimationFrame(() => smoothScrolling());
  };

  useEffect(() => {
    // console.log("raf!");
    requestAnimationFrame(() => smoothScrolling());
  });

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        <Navbar />
        <PhotoLayout />
        <Footer />
      </div>
    </div>
  );
}

export default App;
