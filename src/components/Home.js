import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

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
              href="https://drive.google.com/file/d/1eEjDZM7n8CBXYo0S2v_5JuLwx6UMAPC2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my CV/Resume.
            </a>
          </p>
        </div>
        <img
          className="selection-home-image"
          alt={"homeimage"}
          src={"Home-Image.svg"}
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
                a strong grasp of design principles and design tools such as Adobe Creative Suite and
                Figma.
              </p>
            </div>
          </div>

          <div className="selection-row">
            <img src="mobile.png" alt="Mobile Development" />
            <div className="selection-row-text">
              {" "}
              <h2 className="selection-row-sub-header">
                Mobile / Web Development
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
        <div className="selection-row-header-container">
          <h1 className="selection-row-header">Recent Work</h1>{" "}
          <p className="selection-row-text">
            <Link to="./work">
              view my recent work <HiOutlineArrowLongRight />{" "}
            </Link>
          </p>
        </div>{" "}
      </div>
    </motion.div>
  );
}

export default Home;
