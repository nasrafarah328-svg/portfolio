import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
      setIsOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  const isActive = (url) => {
    return url === currentUrl ? "active" : "";
  };

  return (
    <nav className="nav">
      <div
        className="nav-left"
        style={{ display: isSmallScreen ? "none" : "flex" }}
      >
        <a href="/" className={isActive("/")}>
          Home
        </a>
        <a href="/about" className={isActive("/about")}>
          About
        </a>
        <a href="/work" className={isActive("/work")}>
          Work
        </a>
      </div>
      <a href="https://github.com/Fara0197"rel="noreferrer" target="_blank">
        <img
          className={"selection-github"}
          src={"Github.svg"}
        />
      </a>

      <div
        className="nav-right"
        style={{ display: isSmallScreen ? "flex" : "none" }}
      >
        {isOpen && (
          <div className="dropdown-menu">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/work">Work</a>
          </div>
        )}
        <button className="dropdown-button" onClick={toggleDropdown}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
