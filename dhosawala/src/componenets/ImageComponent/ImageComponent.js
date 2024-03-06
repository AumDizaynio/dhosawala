import React from "react";
import "../ImageComponent/ImageComponent.scss";

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
          <p>
            {props.d1}
            <br /> <br />
            {props.d2}
            <br /> <br />
            {props.d3}
            <br /> <br />
            {props.d4}
          </p>
          <p className="KnowMore">{props.KnowMore}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
