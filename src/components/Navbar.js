import React from "react";
import "./Navbar.css";
import Logo from "../img/logo.svg";
import Marker from "../img/marker.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="index.html">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <ul className="navbar-nav-left">
          <li>
            <a href="index.html">Menu</a>
          </li>
          <li>
            <a href="index.html">Rewards</a>
          </li>
          <li>
            <a href="index.html">Gift Cards</a>
          </li>
        </ul>

        <ul className="navbar-nav-right">
          <li>
            <a href="index.html">
              <img src={Marker} alt="" />
              <span>Find a store</span>
            </a>
          </li>
          <li>
            <button className="btn btn-dark-outline">Sign In</button>
          </li>
          <li>
            <button className="btn btn-dark">Join Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
