import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mainc">
      <div className="bottom1">
        <Slider {...settings}>
          <div className="imgcontainer">
            <img src={Image1} alt="" />
            <h5>Kara Mura</h5>
            <h6>Masala dosa</h6>
          </div>
          <div className="imgcontainer">
            <img src={Image2} alt="" />
            <h5>Rava schezwan Dosa</h5>
            <h6>supreme dosai</h6>
          </div>
          <div className="imgcontainer">
            <img src={Image3} alt="" />
            <h5>Cone shape</h5>
            <h6>Special masala dosa</h6>
          </div>
        </Slider>
      </div>
    </div>
  );
}
