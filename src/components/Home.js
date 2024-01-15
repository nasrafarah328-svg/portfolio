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
              Junior Designer{" "}
            </span>
            <span className="selection-text-wrapper-four">/</span>
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
            <div className="contact-resume-buttons">
              {" "}
              <p className="contact-button">
                <Link to="#" onClick={handleContactClick}>
                   Contact Me
                </Link>
              </p>
              <p className="resume-button">
                <a href ="https://drive.google.com/file/d/17Nc4CZXim2RXNW95WvYfHyIouhaGRWWk/view?usp=drive_link">
                 
                  Resume
                </a>
              </p>
            </div>
          </p>
        </div>
        <img
          className="selection-home-image"
          alt={"homeimage"}
          src={"nasra-image.svg"}
        />
      </div>

      <div className="selection-bottom-screen">
        <div className="selection-row-header-container">
          <h1 className="selection-row-header">My Skills</h1>
        </div>
        <div className="selection-main-home-rows">
          <div className="selection-row">
            <img src="ux.png" alt="UX/UI Design" />
            <div className="selection-row-text">
              <h2 className="selection-row-sub-header">UX / UI Design</h2>
              <p className="selection-row-paragraph">
                Experienced in creating intuitive and visually engaging user
                experiences through wireframing, prototyping, user research, and
                a strong grasp of design principles and design tools such as
                Adobe Creative Suite and Figma.
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
