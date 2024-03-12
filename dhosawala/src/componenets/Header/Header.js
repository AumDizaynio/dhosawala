import React from "react";
import "../Header/Header.scss";
import { Cross, Hamburger, Logo } from "../../icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Header = () => {
  const [displaydiv, setDisplaydiv] = useState(false);

  const handleClick = () => {
    setDisplaydiv(!displaydiv);
    console.log(displaydiv);
  };

  return (
    <div className="hd">
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
            <HashLink className="link" to="/#franchise">
              Franchise
            </HashLink>
          </li>
          <li>
            <HashLink className="link" to="/#menu">
              Menu
            </HashLink>
          </li>
          <li>
            <HashLink className="link" to="/#contactus">
              Contact US
            </HashLink>
          </li>
        </ul>
        <div className="menu" onClick={handleClick}>
          {displaydiv ? <Cross /> : <Hamburger />}
        </div>
      </div>
      {displaydiv && (
        <div className="list">
          <HashLink className="listi" to="/about">
            <p>About US</p>
          </HashLink>
          <hr />
          <HashLink className="listi" to="/#franchise">
            <p>franchise</p>
          </HashLink>
          <hr />
          <HashLink className="listi" to="/#menu">
            <p>Menu</p>
          </HashLink>
          <hr />
          <HashLink className="listi" to="/#contactus">
            <p>Contact</p>
          </HashLink>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Header;
