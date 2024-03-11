import React from "react";
import "../Header/Header.scss";
import { Hamburger, Logo } from "../../icons";
import { Link, has } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul>
        <li>
          <Link className="link" to="/about">
            About US
          </Link>
        </li>
        <li>
          <a className="link" href="#franchise">
            Franchise
          </a>
        </li>
        <li>
          <Link className="link" to="#menu">
            Menu
          </Link>
        </li>
        <li>
          <a className="link" href="#contactus">
            Contact US
          </a>
        </li>
      </ul>
      <div className="menu">
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
