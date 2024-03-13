import React from "react";
import "./MenuCard.scss";
import Dhosa from "../../assets/Dhosa.png";
import { Swiggy, Zomato } from "../../icons";
import DhosaChef from "../../assets/DhosaChef.png";
import { useState } from "react";

const MenuCard = () => {
  const arr1 = [
    ["Ulundu Vadai", 99],
    ["Onion Uludu Vadai", 119],
    ["Rassam Ulundu Vadai", 119],
    ["Upma", 89],
  ];

  const arr2 = [
    ["Saada dosai", 99],
    ["Mysuru saada dosai", 139],
    ["Nilgiri saada dosai", 139],
    ["Palak saada dosai", 139],
    ["Onion saada dosai", 149],
    ["Schezwan saada dosai", 149],
    ["Paper saada dosai", 149],
    ["Kara mura saada dosai", 149],
  ];

  const arr3 = [
    ["Masala dosai", 139],
    ["Mysuru saada dosai", 149],
    ["Nilgiri saada dosai", 149],
    ["Palak saada dosai", 149],
    ["Onion saada dosai", 159],
    ["Schezwan Masala dosai", 159],
    ["Paper saada dosai", 149],
    ["Kara mura saada dosai", 179],
  ];

  const arr4 = [
    ["Rawa Saadaa", 129],
    ["Rawa Mysuru dosai", 139],
    ["Rawa Nilgiri dosai", 139],
    ["Rawa Achari Dosai", 139],
    ["Rawa Onion dosai", 149],
    ["Rawa Schezwan dosai", 149],
    ["Rawa Udupi dosai", 149],
  ];

  const arr5 = [
    ["Spring Dosai", 199],
    ["Corn Dosai", 199],
    ["Tiranga Dosai", 209],
    ["Special D/S Dosai", 209],
    ["Family Dosai(4 FT Long)", 600],
  ];

  const [Menu, setMenu] = useState(arr1);

  return (
    <div className="mainMC" id="menu">
      <h2>Find About</h2>
      <h1>Our Menu</h1>
      <ul className="MC-ul">
        <li
          onClick={() => {
            setMenu(arr1);
          }}
        >
          Vadai & upma
        </li>
        <li
          onClick={() => {
            setMenu(arr2);
          }}
        >
          Classic
        </li>
        <li
          onClick={() => {
            setMenu(arr3);
          }}
        >
          Premium
        </li>
        <li
          onClick={() => {
            setMenu(arr4);
          }}
        >
          Supreme
        </li>
        <li
          onClick={() => {
            setMenu(arr5);
          }}
        >
          Signature
        </li>
      </ul>
      <div className="divlast">
        <div className="left">
          {Menu.map((a) => {
            return (
              <div className="li">
                <h6 className="H6-1">{a[0]}</h6>
                <p></p>
                <h6 className="H6-2">{a[1]}</h6>
              </div>
            );
          })}
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
