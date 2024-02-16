import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import ante from "../../img/anteneh.png";

import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Anteneh Tilaye</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/AntenehTilayeKebede">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/anteneh-tilaye-201808258/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/_antenehtilaye/">
            <img src={Instagram} alt="" />
          </a>{" "}
        </div>
      </div>
      <div className="i-right">
        <img src={ante} className="an" alt="" />
      </div>
    </div>
  );
};

export default Intro;
