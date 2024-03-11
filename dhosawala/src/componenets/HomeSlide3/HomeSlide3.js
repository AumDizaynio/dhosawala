import React from "react";
import "./HomeSlide3.scss";
import Dhosawala from "../../assets/Dhosawala.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../Slider/Slider";

const HomeSlide3 = () => {
  return (
    <div>
      <div className="mainHS3">
        <div className="top">
          <h2>discover</h2>
          <h1>Special dish</h1>
        </div>
        <div className="btm">
          <div className="ss">
            <SimpleSlider />
          </div>
          <div className="bottom2">
            <img src={Dhosawala} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide3;
