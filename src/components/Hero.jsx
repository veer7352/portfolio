import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeCanvas from './ThreeCanvas';

const roles = ['Python Full Stack Developer', 'Web Developer', 'AI Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6 max-w-7xl mx-auto"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-neon-blue/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-neon-purple/10 blur-[120px] rounded-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-10">
        
        {/* Left Intro Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full mb-6 w-fit backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan font-bold">Open to Work / Opportunities</span>
          </div>

          <h2 className="text-xl md:text-2xl font-medium text-gray-400 tracking-wide mb-2 font-mono">
            Hello, World! I am
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 leading-none">
            Dharamveer <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan text-transparent bg-clip-text text-glow-purple">Kumar</span>
          </h1>

          <div className="h-10 md:h-12 flex items-center mb-6">
            <p className="text-lg md:text-2xl font-mono text-neon-cyan font-semibold">
              I'm a <span className="text-white border-r-2 border-neon-blue pr-1 animate-pulse">{currentText}</span>
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            MCA student and developer specializing in scalable Python stacks, robust web architectures, and artificial intelligence solutions. Passionate about turning complex algorithms into interactive digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a 
              href="#contact" 
              className="btn-neon text-center flex items-center justify-center font-mono text-sm tracking-wider"
            >
              Hire Me
            </a>
            <a 
              href="/resume.pdf" 
              download="Dharamveer_Kumar_Resume.pdf"
              className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-mono text-sm tracking-wider text-center flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right 3D Visualizer Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <ThreeCanvas />
        </motion.div>
      </div>
    </section>
  );
}
