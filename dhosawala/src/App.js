import "./App.css";
import Map from "./assets/Map.png";
import HomePage from "./componenets/HomePage/HomePage";
import AboutPage from "./componenets/AboutPage/AboutPage";
import Header from "./componenets/Header/Header";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState(true);

  const actualWidth = () => {
    if (window.innerWidth < 798) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>

      <div className="imagetag">
        <img className="map" src={Map} alt="" />
      </div>
      <Footer />
    </>
  );
}

export default App;
