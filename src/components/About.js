import React from "react";
import { motion } from "framer-motion";
import "./about.css";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="selection-main-about-banner">
        <div className="selection-text-content">
          <p className="selection-UX-front-end-developer">
            <span className="selection-text-wrapper-three">About Me</span>
          </p>
          <p className="selection-paragraph">
            Hi there! my name is Nasra Farah. I am a mobile and web designer & developer
            based in Ottawa, Ontario. I am a recent graduate from Algonquin
            College's{" "}
            <span className="selection-text-wrapper-five">
              {" "}
              <a
                href="https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobile Application Design and Development program.
              </a>
            </span>{" "}
            <br></br>
            <br></br> My passion lies in creating stunning and seamless user
            interfaces. My proficiency in various programming languages,
            including Javascript and React, allows me to develop robust and
            dynamic web and mobile applications. Additionally, I have experience
            using Figma, a popular design tool, to create wireframes,
            prototypes, and high-fidelity designs. For more details on my skills
            and experience, please see my{" "}
            <span className="selection-text-wrapper-five">
              {" "}
              <a
                href="https://drive.google.com/file/d/1EaEutey4NPwl92M7OZsCerBC6HfUaWNZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume.
              </a>
            </span>{" "}
            <br></br>
            <br></br>Beyond my design and development work, I'm also an avid
            writer and published author. My experience in writing and
            storytelling has helped me develop strong communication skills.
            You can find some of my work  <span className="selection-text-wrapper-five">
              {" "}
              <a
                href="https://www.amazon.ca/Nasra-Farah/e/B07SN51TTN/ref=aufs_dp_mata_dsk"
                target="_blank"
                rel="noopener noreferrer"
              >
               here.
              </a>
            </span>{" "}
            <br></br>
            <br></br>
            Please feel free to  <span className="selection-text-wrapper-five">
              {" "}
              <a
                href="https://www.linkedin.com/in/nasra-farah-7033991aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
               contact me.
              </a>
            </span>{" "}if you're interested in discussing
            potential employment opportunities. Thanks for visiting my
            portfolio!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
