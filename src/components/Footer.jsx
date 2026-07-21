import React from 'react';
import { FiChevronUp } from 'react-icons/fi';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-dark-bg/60 border-t border-white/[0.05] py-12 px-6 backdrop-blur-md relative overflow-hidden z-10">
      {/* Subtle line background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo and details */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm font-bold text-white tracking-widest uppercase">
            Dharamveer <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Kumar</span>
          </p>
          <p className="text-xs text-gray-500 font-mono">
            Python Full Stack Developer & AI Enthusiast
          </p>
        </div>

        {/* Designed & Developed block */}
        <div className="text-center space-y-1">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className="text-xs font-mono text-gray-500">
            Designed & Developed by <span className="text-neon-cyan hover:text-neon-blue transition-colors duration-300">Dharamveer Kumar</span>
          </p>
        </div>

        {/* Scroll to Top */}
        <button 
          onClick={handleScrollToTop}
          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to Top"
        >
          <FiChevronUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
}
