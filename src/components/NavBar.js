import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState("");

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

  useEffect(() => {
    setCurrentURL(location.pathname);
  }, [location]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const isActive = (url) => {
    return url === currentURL ? "active" : "";
  };

  useEffect(() => {
    setIsOpen(false);
    setCurrentURL(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="nav">
      <div className="nav-left" style={{ display: isSmallScreen ? "none" : "flex" }}>
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/about" className={isActive("/about")}>
          About
        </Link>
        <Link to="/work" className={isActive("/work")}>
          Work
        </Link>
      </div>
      <div className="nav-right">
        <a href="https://www.linkedin.com/in/nasra-farah-7033991aa/" rel="noreferrer" target="_blank">
          <img className="selection-github" src={"Link.svg"} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Fara0197" rel="noreferrer" target="_blank">
          <img src={"Github.svg"} alt="GitHub" />
        </a>
      </div>

      <div className="nav-right" style={{ display: isSmallScreen ? "flex" : "none" }}>
        {isOpen && (
          <div className="mobile-dropdown">
            <button className="exit-button" onClick={closeDropdown}>
            <IoClose />
            </button>
            <Link to="/" onClick={closeDropdown}>
              Home
            </Link>
            <Link to="/about" onClick={closeDropdown}>
              About
            </Link>
            <Link to="/work" onClick={closeDropdown}>
              Work
            </Link>
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
