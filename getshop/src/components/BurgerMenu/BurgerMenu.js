"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./BurgerMenu.module.css";
import Logo from "../Logo/Logo";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.burger_wrapper}>
      <button
        className={styles.hamburgerIcon}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className={isOpen ? styles.barOpen : ""}></span>
        <span className={isOpen ? styles.barOpen : ""}></span>
        <span className={isOpen ? styles.barOpen : ""}></span>
      </button>

      <nav
        ref={menuRef}
        className={`${styles.navMenu} ${isOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.logo}>
          <Logo />
        </div>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul>
          <li>
            <a href="#">Преимущества</a>
          </li>
          <li>
            <a href="#">Как мы работаем</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default BurgerMenu;
