import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.component";
import PhotoLayout from "./components/PhotoLayout/PhotoLayout.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PhotoLayout />
      <Footer />
    </div>
  );
}

export default App;
