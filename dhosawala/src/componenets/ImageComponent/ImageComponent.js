import React from "react";
import "./ImageComponent.scss";
import { GreaterArrow } from "../../icons";

const ImageComponent = (props) => {

  return (
    <div className={props.reverse ? "main-2" : "main"}>
      <div className="container">
        <div className="image1">
          <img src={props.logoImage} alt="" />
        </div>
        <div className="text">
          <h2>{props.knowus}</h2>
          <h1>{props.title}</h1>
          <div className="image2">
            <img src={props.logoImage} alt="" />
          </div>
          <p className="para">
            {props.d1}
          </p>
          <p className="para">
            {props.d2}
          </p>
          <p className="para">
            {props.d3}
          </p>
          <p className="para">
            {props.d4}
          </p>
          <div>
            <p className="KnowMore">{props.KnowMore}</p>
            <GreaterArrow/>
            <GreaterArrow/>
            <GreaterArrow/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
