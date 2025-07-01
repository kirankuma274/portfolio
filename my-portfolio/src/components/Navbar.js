import React, { useContext } from 'react';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Kiran</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
