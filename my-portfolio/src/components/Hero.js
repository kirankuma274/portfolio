import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Kiran Kumar Cherukuri</h1>
        <p>JavaScript Full Stack Developer</p>
        <div className="hero-buttons">
          <a href="https://github.com/kirankuma274" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}
