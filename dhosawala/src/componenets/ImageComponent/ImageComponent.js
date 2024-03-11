import React from "react";
import "./ImageComponent.scss";
import { GreaterArrow } from "../../icons";

const ImageComponent = (props) => {
  const arr = [1, 2, 3];

  return (
    <div className={props.reverse ? "mainIC-2" : "mainIC-1"} id={props.id}>
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
          <p className="para">{props.d1}</p>
          <p className="para">{props.d2}</p>
          {props.d3 ? <p className="para">{props.d3}</p> : ""}
          {props.d4 ? <p className="para">{props.d4}</p> : ""}
          <div className="KM">
            <p className="KnowMore">{props.KnowMore}</p>
            {props.KnowMore &&
              arr.map(() => {
                return <GreaterArrow />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
