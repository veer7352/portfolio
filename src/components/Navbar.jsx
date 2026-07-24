import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Scroll spy logic
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].href.slice(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-dark-bg/60 backdrop-blur-xl border-b border-white/[0.05] shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 text-xl font-bold tracking-widest text-white group">
          <span className="text-neon-cyan group-hover:text-neon-blue transition-colors duration-300">&lt;</span>
          <span>DHARAM</span>
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text font-extrabold group-hover:shadow-glow-blue transition-all duration-300">VEER</span>
          <span className="text-neon-purple group-hover:text-neon-cyan transition-colors duration-300">/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium relative tracking-wider hover:text-white transition-colors duration-300 ${
                activeSection === link.href.slice(1) ? 'text-white font-semibold' : 'text-gray-400'
              }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Theme Toggle Mobile */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-300"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>

          {/* Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-dark-bg/95 border-b border-white/[0.05] backdrop-blur-2xl absolute top-full left-0 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold tracking-widest ${
                    activeSection === link.href.slice(1) 
                      ? 'text-neon-cyan' 
                      : 'text-gray-400 hover:text-white'
                  } transition-colors duration-300`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
