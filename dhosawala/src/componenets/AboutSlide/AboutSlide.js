import React from "react";
import { Download } from "../../icons";
import "./AboutSlide.scss";

const AboutSlide = () => {
  return (
    <div className="mainbox">
      <div className="Left">
        <div className="top">
          <h1>VISION</h1>
          <p>
            To formulate a memorable experience by preserving the highest
            standard of quality, hygiene, service and customer satisfaction.
          </p>
        </div>
        <div className="bottom">
          <h1>MISSION</h1>
          <p>
            To frequently offer value addition in all spheres thereby inducing
            loyalty by patrons. To obtain, recreate and replicate the brand
            experience in as many areas as possible.
          </p>
        </div>
      </div>
      <div className="Right">
        <h2>For more information</h2>
        <div className="r1">
          <Download />
          <h3>Download our menu</h3>
        </div>
        <div className="r2">
          <Download />
          <h3>Download Franchise Brochure</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;
