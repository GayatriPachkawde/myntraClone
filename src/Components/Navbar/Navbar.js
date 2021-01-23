import React, { useState } from "react";
import "./navbar.css";
import myntralogo from "../logo/myntralogo.png";
import "font-awesome/css/font-awesome.min.css";
import Bag from "../Bag/Bag";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [navlinkclass, setnavlinkClass] = useState("nav-right");
  const [showbag, setShowbag] = useState(false);
  const setClass = () => {
    if (navlinkclass === "nav-right") {
      setnavlinkClass("active");
    } else {
      setnavlinkClass("nav-right");
    }
  };

  const showBagComponent = () => {
    setShowbag(!showbag);
  };

  const hidebag = () => {
    setShowbag(false);
  };
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links ">
          <Link to="/">
            <li className="nav-link">
              <img className="brand-logo" src={myntralogo} />
            </li>
          </Link>
          <li className="bars" onClick={setClass}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </li>
          <div
            className={navlinkclass}
            onClick={() => setnavlinkClass("nav-right")}
          >
            <Link to="/men">
              <li className="nav-link">MEN</li>
            </Link>
            <li className="nav-link">WOMEN</li>
            <li className="nav-link">KIDS</li>
            <li className="nav-link">HOME & LIVING</li>
            <li className="nav-link">OFFERS</li>
          </div>
        </ul>
        <ul className="nav-links nav-left">
          <li className="search-btn">
            <i className="fa fa-search" aria-hidden="true"></i>
            Search
          </li>
          <li className="nav-link">
            <input
              className="nav-search"
              placeholder="Search for products, brands or more"
            />
          </li>
          <li className="nav-link">
            <i class="fa fa-user" aria-hidden="true"></i>Profile
          </li>
          <li className="nav-link">
            <i class="fa fa-bookmark-o" aria-hidden="true"></i>Wishlist
          </li>
          <li className="nav-link" onClick={showBagComponent}>
            <div className="nav-bag">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              Bag
              {props.number === 0 ? null : (
                <span className="bagged-item-count">{props.number}</span>
              )}
            </div>
          </li>
        </ul>
      </nav>
      {showbag ? (
        <Bag
          baggedItems={props.baggedItems}
          removeItems={props.removeItems}
          hidebag={hidebag}
        />
      ) : null}
    </>
  );
};

export default Navbar;
