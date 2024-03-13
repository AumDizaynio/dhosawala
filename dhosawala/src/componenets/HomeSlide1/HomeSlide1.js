import "./HomeSlide1.scss";
import { GrayCall, GrayMail } from "../../icons";
import Cafe from "../../assets/Cafe.png";
import { useState, useEffect } from "react";
import Cafe2 from "../../assets/Cafe2.png";

const HomeSlide = () => {
  const [cafeimg, setCafeimg] = useState("cafe");

  const actualWidth = () => {
    if (window.innerWidth < 798) {
      setCafeimg("Cafe2");
    } else {
      setCafeimg("cafe");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
  });

  return (
    <div className="main" id="contactus">
      <div className="left">
        <h2>contact for</h2>
        <h1>Franchise Inquiry</h1>
        <img className="img1" src={Cafe2} alt="image" />
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat null
        </p>
        <div className="mail">
          <GrayMail />
          <p>info@dosawalaindia.com</p>
        </div>
        <div className="phone">
          <GrayCall />
          <p>9974937667</p>
        </div>
      </div>
      <div className="right">
        <img className="img2" src={Cafe} alt="image" />
        <p>
          Authentic South Indian Taste. <br />
          Introducing first time ever! Unlimited South Indian Meal
        </p>
      </div>
    </div>
  );
};

export default HomeSlide;
