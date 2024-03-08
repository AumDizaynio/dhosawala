import React from "react";
import "./MenuCard.scss";
import Dhosa from "../../assets/Dhosa.png";
import { Swiggy, Zomato } from "../../icons";
import DhosaChef from "../../assets/DhosaChef.png";

const MenuCard = () => {
  return (
    <div className="mainMC">
      <h2>Find About</h2>
      <h1>Our Menu</h1>
      <ul className="MC-ul">
        <li>Vadai & upma</li>
        <li>Classic</li>
        <li>Premium</li>
        <li>Supreme</li>
        <li>Signature</li>
      </ul>
      <div className="divlast">
        <div className="left">
          <div className="li">
            <h6 className="H6-1">saada dosai</h6>
            <p></p>
            <h6 className="H6-2">99</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">mysuru saada dosai</h6>
            <p></p>
            <h6 className="H6-2">139</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">nilgiri saada dosai</h6>
            <p></p>
            <h6 className="H6-2">139</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">palak saada dosai</h6>
            <p></p>
            <h6 className="H6-2">139</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">online saada dosai</h6>
            <p></p>
            <h6 className="H6-2">149</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">schezwan saada dosai</h6>
            <p></p>
            <h6 className="H6-2">149</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">paper saada dosai</h6>
            <p></p>
            <h6 className="H6-2">149</h6>
          </div>
          <div className="li">
            <h6 className="H6-1">karamura saada dosai</h6>
            <p></p>
            <h6 className="H6-2">149</h6>
          </div>
        </div>
        <img className="dhosa" src={Dhosa} alt="" />
      </div>
      <div className="mobile">
        <Swiggy />
        <Zomato />
        <h1>Whoo-hoo!!</h1>
        <p>
          Now you can order a meal right from your mobile via our partner swiggi
          and zomato and enjoy south Indian cuisine at home with the best offers
          and non-touch delivery.
        </p>
        <img className="mobimage" src={DhosaChef} alt="" />
      </div>
    </div>
  );
};

export default MenuCard;
