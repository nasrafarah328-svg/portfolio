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
            Hello, my name is Nasra. I am currently building experience as an{" "}
            <strong>IT Technician within the federal government</strong>, where
            I focus on IT support, digital evidence handling, and technical
            analysis. Alongside my IT work, I enjoy{" "}
            <strong>design and front-end development</strong>—an area I studied
            through Algonquin College’s{" "}
            <span className="selection-text-wrapper-five">
              <a
                href="https://www.algonquincollege.com/mediaanddesign/program/mobile-application-design-and-development/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobile Application Design and Development program
              </a>
            </span>
            .
            <br></br>
            <br></br>
            I am passionate about creating intuitive, responsive, and
            user-friendly digital applications. My skills include{" "}
            <strong>HTML, CSS, JavaScript, and React</strong>, as well as design
            tools like <strong>Figma</strong> for wireframing, prototyping, and
            building polished UI designs. For more details on my experience, you
            can view my{" "}
            <span className="selection-text-wrapper-five">
              <a
                href="https://drive.google.com/file/d/1U1PWXV_l6msuaMV5QuoZdDbAHi-1DdII/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>
            </span>
            .
            
            .
            <br></br>
            <br></br>
            Please feel free to{" "}
            <span className="selection-text-wrapper-five">
              <a
                href="https://www.linkedin.com/in/nasra-farah-7033991aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact me
              </a>
            </span>{" "}
            if you’d like to connect or discuss potential opportunities. Thanks
            for visiting my portfolio!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
