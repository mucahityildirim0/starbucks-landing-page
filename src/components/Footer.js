import React from "react";
import "./Footer.css";
import instagram from "../img/social-instagram.svg";
import facebook from "../img/social-facebook.svg";
import spotify from "../img/social-spotify.svg";
import youtube from "../img/social-youtube.svg";
import pinterest from "../img/social-pinterest.svg";
import twitter from "../img/social-twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="divider"></div>
      <footer>
        <div className="footer-container">
          <div className="social">
            <a href="https://spotify.com">
              <img src={spotify} alt="" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} alt="" />
            </a>
            <a href="https://pinterest.com">
              <img src={pinterest} alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={instagram} alt="" />
            </a>
            <a href="https://youtube.com">
              <img src={youtube} alt="" />
            </a>
            <a href="https://twitter.com">
              <img src={twitter} alt="" />
            </a>
          </div>
          <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
