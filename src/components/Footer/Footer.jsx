import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} alt="" />
      <div className="f-content">
        <span>antenehtilayekebede@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_antenehtilaye/">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/anteneh.tilaye.35">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/AntenehTilayeKebede">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
