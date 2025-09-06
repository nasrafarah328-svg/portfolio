import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Home() {
  const handleContactClick = () => {
    window.location.href = "mailto:nasrafarah328@gmail.com";
  };

  const skills = [
    { img: "ux.png", title: "IT Support", desc: "Experienced IT Technician providing technical support..." },
    { img: "mobile.png", title: "Mobile / Web Development & Design", desc: "I specialize in HTML, CSS, JavaScript..." },
    { img: "data.png", title: "Data Management", desc: "Hands-on experience in handling, validating, and analyzing electronic data..." },
    { img: "design.png", title: "UI/UX Design", desc: "Creating engaging, user-friendly interfaces..." },
    { img: "extra1.png", title: "Extra Skill 1", desc: "Description for extra skill 1..." },
    { img: "extra2.png", title: "Extra Skill 2", desc: "Description for extra skill 2..." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2); // default desktop view

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else setCardsPerView(2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsPerView) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - cardsPerView + skills.length) % skills.length);
  };

  return (
    <motion.div
      className="selection-selection-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Home Banner */}
      <div className="selection-main-home-banner">
        <div className="selection-text-content">
          <h1 className="selection-hi-name">
            <span className="selection-text-wrapper">Hi, I'm </span>
            <span className="selection-text-wrapper-two">Nasra</span>
          </h1>
          <p className="selection-UX-front-end-developer">
            <span className="selection-text-wrapper-three"> IT Technician </span>
            <span className="selection-text-wrapper-four">/</span>
            <span className="selection-text-wrapper-three">
              Designer - Front End Developer
            </span>
          </p>
          <p className="selection-paragraph">
            I provide IT support within the federal government...
          </p>
          <div className="contact-resume-buttons">
            <p className="contact-button">
              <Link to="#" onClick={handleContactClick}>
                Contact Me
              </Link>
            </p>
            <p className="resume-button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1U1PWXV_l6msuaMV5QuoZdDbAHi-1DdII/view?usp=sharing"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
        <div className="selection-home-image-wrapper">
          <img className="selection-home-image" alt="homeimage" src="nasra-2025.svg" />
        </div>
      </div>

      <div className="colored-line" />

      {/* Skills Carousel */}
      <div className="selection-bottom-screen">
        <h1 className="selection-row-header">My Skills</h1>
        <div className="carousel-wrapper">
          <button className="carousel-btn left" onClick={prevSlide}>
            <ChevronLeft size={30} />
          </button>

          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}>
            {skills.map((skill, index) => (
              <div key={index} className="carousel-card">
                <img src={skill.img} alt={skill.title} />
                <h2 className="selection-row-sub-header">{skill.title}</h2>
                <p className="selection-row-paragraph">{skill.desc}</p>
              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={nextSlide}>
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
