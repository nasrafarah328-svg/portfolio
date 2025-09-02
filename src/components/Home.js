import { Link } from "react-router-dom";
import React from "react";
import "./home.css";
import { motion } from "framer-motion";

function Home() {
  const handleContactClick = () => {
    window.location.href = "mailto:nasrafarah328@gmail.com";
  };

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
            <span className="selection-text-wrapper-three">
              {" "}
              IT Technician{" "}
            </span>
            <span className="selection-text-wrapper-four">/</span>
            <span className="selection-text-wrapper-three">
              {" "}
              Designer - Front End Developer
            </span>
          </p>

          <p className="selection-paragraph">
          I provide IT support within the federal government, 
      with experience in troubleshooting, digital evidence handling, and data management. 
      Alongside my IT work, I enjoy creating visually engaging, user-friendly digital 
      applications through front-end development and design. 
            <br></br>
            <br></br>
            <div className="contact-resume-buttons">
              {" "}
              <p className="contact-button">
                <Link to="#" onClick={handleContactClick}>
                   Contact Me
                </Link>
              </p>
              <p className="resume-button">
              
                <a target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/1U1PWXV_l6msuaMV5QuoZdDbAHi-1DdII/view?usp=sharing">
          
                  Resume
                </a>
              </p>
            </div>
          </p>
        </div>
        <img
          className="selection-home-image"
          alt={"homeimage"}
          src={"nasra-2025.svg"}
        />
      </div>
      <div className="colored-line">
      <br />
    </div>
      <div className="selection-bottom-screen">
        <div className="selection-row-header-container">
          <h1 className="selection-row-header">My Skills</h1>
        </div>
        <div className="selection-main-home-rows">
          <div className="selection-row">
            <img src="ux.png" alt="UX/UI Design" />
            <div className="selection-row-text">
              <h2 className="selection-row-sub-header">IT Support</h2>
              <p className="selection-row-paragraph">
    Experienced IT Technician providing technical support in a federal government environment. 
    Skilled in troubleshooting hardware and software issues, resolving user access problems, managing ticketing systems, 
    and collaborating with multidisciplinary teams to ensure smooth IT operations. Adept at analyzing technical problems, implementing solutions, 
    and maintaining accurate technical documentation.
  </p>
            </div>
          </div>

          <div className="selection-row">
            <img src="mobile.png" alt="Mobile Development" />
            <div className="selection-row-text">
              {" "}
              <h2 className="selection-row-sub-header">
                Mobile / Web Development & Design
              </h2>
              <p className="selection-row-paragraph">
                I specialize in HTML, CSS, JavaScript, React, Node.js,
                Express.js, Next.js, API integration, and ensuring accessibility
                with WCAG standards. And obtained knowledge in React Native,
                Swift, Flutter, and Java for mobile app development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
