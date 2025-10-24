import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import CarLogo from "../CarLogo/CarLogo";

function Header({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoLeft}>
          <div className={styles.carWrapper}>
            <CarLogo />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <button onClick={() => scrollToSection(refs.homeRef)}>Home</button>
        <button onClick={() => scrollToSection(refs.aboutRef)}>About</button>
        <button onClick={() => scrollToSection(refs.servicesRef)}>
          Services
        </button>
        <button onClick={() => scrollToSection(refs.featuresRef)}>
          Features
        </button>
        <button onClick={() => scrollToSection(refs.galleryRef)}>
          Gallery
        </button>
        <button onClick={() => scrollToSection(refs.contactRef)}>
          Contact Us
        </button>
      </nav>

      {/* Mobile Menu */}
      <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <nav className={styles.mobileNav}>
          <button
            onClick={() => {
              scrollToSection(refs.homeRef);
              setIsOpen(false);
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.aboutRef);
              setIsOpen(false);
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.servicesRef);
              setIsOpen(false);
            }}
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.featuresRef);
              setIsOpen(false);
            }}
          >
            Features
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.galleryRef);
              setIsOpen(false);
            }}
          >
            Gallery
          </button>
           <button
            onClick={() => {
              scrollToSection(refs.contactRef);
              setIsOpen(false);
            }}
          >
            Contact Us
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
