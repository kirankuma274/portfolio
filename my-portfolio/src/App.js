import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactForm from './components/ContactForm';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${darkMode ? 'darkMode' : ''}`}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <ContactForm />
    </div>
  );
}

export default App;
