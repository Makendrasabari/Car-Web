import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const location = useLocation();

  // Listen for scroll to change styling and track progress
  useEffect(() => {
    const handleScroll = () => {
      // Toggle header scrolled state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percentage = (window.scrollY / totalHeight) * 100;
        setScrollPercentage(percentage);
      } else {
        setScrollPercentage(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <Link to="/" className="nav-brand">
        Fortune<span>.</span>
      </Link>

      <button
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-link ${isActive("/")}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive("/about")}`}>About</Link>
        <Link to="/services" className={`nav-link ${isActive("/services")}`}>Services</Link>
        <Link to="/cars" className={`nav-link ${isActive("/cars")}`}>Showroom</Link>
        <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>Contact</Link>
      </div>

      {/* Decorative Neon Highway and Driving Car Scroll Progress Indicator */}
      <div className="scroll-road">
        <div className="scroll-line" style={{ width: `${scrollPercentage}%` }}></div>
        <div 
          className="scroll-car" 
          style={{ left: `calc(${scrollPercentage}% - 16px)` }}
        >
          <svg className="car-svg" viewBox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
            {/* Aerodynamic Sports Car Body */}
            <path d="M2,22 C8,22 12,14 20,10 C28,6 40,6 46,12 C52,14 58,16 62,22 C64,23 60,26 56,26 L6,26 C4,26 2,24 2,22 Z" fill="var(--accent-gold)" />
            {/* Glowing neon pink underglow */}
            <path d="M12,26 L48,26" stroke="var(--accent-pink)" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
            {/* Electric cyan Headlight beam */}
            <path d="M56,22 L62,22" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
            {/* Windshield Glass */}
            <path d="M26,11 C30,7 38,7 42,12 L24,12 Z" fill="#07070a" />
            {/* Wheels */}
            <circle className="wheel" cx="16" cy="24" r="5" fill="#07070a" stroke="#fff" strokeWidth="1" />
            <circle className="wheel" cx="48" cy="24" r="5" fill="#07070a" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
