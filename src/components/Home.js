import React from "react";
import { Link } from 'react-router-dom'
import "./home.css";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiNetlify } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiSwift } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SlPeople } from "react-icons/sl";
import {HiOutlineArrowLongRight} from "react-icons/hi2"

function Home() {
  return (
    <motion.div
      className="selection-selection-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection-main-home-banner">
        <div className="selection-text-content">
          <h1 className="selection-hi-name">
            <span className="selection-text-wrapper">Hi, I'm </span>
            <span className="selection-text-wrapper-two">Nasra</span>
          </h1>
          <p className="selection-UX-front-end-developer">
            <span className="selection-text-wrapper-three"> UX Designer </span>
            <span className="selection-text-wrapper-four">and</span>
            <span className="selection-text-wrapper-three">
              {" "}
              Front End Developer
            </span>
          </p>

          <p className="selection-paragraph">
            I am passionate about creating visually appealing, responsive, and
            user-friendly digital applications.
            <br></br>
            <br></br>
            <a
              className="contact-button"
              href="https://www.linkedin.com/in/nasra-farah-7033991aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch.
            </a>
          </p>
        </div>
        <img
          className="selection-home-image"
          alt={"homeimage"}
          src={"Home-Image.svg"}
        />
      </div>

      <div className= "selection-bottom-screen">
        {" "}
        <div className="selection-row-header-container">
          <h1 className="selection-row-header">My Skills</h1>{" "}
          <p className="selection-row-text"><Link to ="./work">view my work <HiOutlineArrowLongRight /> </Link></p>
        </div>{" "}
        <div className="selection-main-home-rows">
          <div className="selection-row">
            <img src="ux.png" alt="UX/UI Design" />
            <h2 className="selection-row-sub-header">UX / UI Design</h2>
            <p className="selection-row-paragraph">
              <FaFigma className="skills-icon" />
              <SiAdobexd className="skills-icon" />
              <SiAdobephotoshop className="skills-icon" />
            </p>
          </div>
          <div className="selection-row">
            <img src="web.png" alt="Web Development" />
            <h2 className="selection-row-sub-header">Web Development</h2>
            <p className="selection-row-paragraph">
              <FaHtml5 className="skills-icon" />
              <SiCss3 className="skills-icon" />
              <SiJavascript className="skills-icon" />
              <SiReact className="skills-icon" />
              <SiFirebase className="skills-icon" />
              <SiVisualstudio className="skills-icon" />
              <SiGit className="skills-icon" />
              <SiNetlify className="skills-icon" />
            </p>
          </div>
          <div className="selection-row">
            <img src="mobile.png" alt="Mobile Development" />
            <h2 className="selection-row-sub-header">Mobile Development</h2>
            <p className="selection-row-paragraph">
              <SiVisualstudio className="skills-icon" />
              <SiReact className="skills-icon" />
              <SiSwift className="skills-icon" />
              <SiAndroid className="skills-icon" />
            </p>
          </div>

          <div className="selection-row">
            <img src="client.png" alt="Mobile Development" />
            <h2 className="selection-row-sub-header">Client Services</h2>
            <p className="selection-row-paragraph">
              <SlPeople className="skills-icon" />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
