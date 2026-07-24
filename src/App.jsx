import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Sync dark mode class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('custom-cursor-active');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('custom-cursor-active');
    }
  }, [isDarkMode]);

  if (!isLoaded) {
    return <Loader onFinish={() => setIsLoaded(true)} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-neon-purple/35 selection:text-neon-cyan">
      {/* Background Neon Particles */}
      <ParticleBackground />

      {/* Cybernetic mouse dot + trailer */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Central viewport wrapper */}
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Glassmorphic animated footer */}
      <Footer />
    </div>
  );
}

export default App;
