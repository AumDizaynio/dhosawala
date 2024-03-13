import React from "react";
import dosa1 from "../../assets/dosa1.png";
import dosa2 from "../../assets/dosa2.png";
import Design from "../../assets/Design.png";
import "./Home.scss";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div>
      <div className="Homepg">
        <div className="up">
          <h1>Welcome To Authentic South Indian Taste</h1>
          <h2>Introducing first time ever! Unlimited South Indian Meal</h2>
        </div>
        <div className="down">
          <HashLink to="/#menu">
            <button>See Menu</button>
          </HashLink>
          <div className="imgs">
            <img className="design" src={Design} alt="" srcset="" />
            <img className="img1" src={dosa1} alt="" srcset="" />
            <img className="img2" src={dosa2} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Home;
