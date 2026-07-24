import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import locationAiImg from '../assets/location_ai.png';
import portfolioImg from '../assets/portfolio_screenshot.png';

const categories = ['All', 'Full-Stack', 'AI & Python', 'Data Analytics'];

const projectsData = [
  {
    title: 'Location AI',
    category: 'AI & Python',
    image: locationAiImg,
    description: 'An intelligent location-based AI assistant dashboard that integrates AI workflows with modern mapping and location intelligence APIs.',
    tech: ['JavaScript', 'React', 'Node.js', 'Vercel'],
    github: 'https://github.com/veer7352/location-ai',
    live: 'https://ai-assistant-ecru-mu.vercel.app'
  },
  {
    title: '3D Cyber Portfolio',
    category: 'Full-Stack',
    image: portfolioImg,
    description: 'A premium, state-of-the-art developer portfolio website built with React, Three.js, GSAP, and TailwindCSS.',
    tech: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS', 'GSAP'],
    github: 'https://github.com/veer7352/portfolio',
    live: 'https://portfolio-beige-theta-79.vercel.app'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">05. Creations</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Featured <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Projects</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border font-mono ${
              activeCategory === category 
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple border-transparent text-white shadow-glow-purple'
                : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:border-white/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.title}
              className="glass-card flex flex-col overflow-hidden group border-white/5 hover:border-neon-cyan/20"
            >
              {/* Card Image Cover / Fallback Gradient */}
              <div className="h-48 overflow-hidden relative bg-black/40">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 via-dark-card to-neon-cyan/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0,transparent_60%)]"></div>
                    <span className="text-neon-cyan text-xs font-mono tracking-widest border border-neon-cyan/20 px-4 py-2 rounded bg-black/50 backdrop-blur-md uppercase">
                      {project.title}
                    </span>
                  </div>
                )}
                {/* Floating Category tag */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-neon-cyan text-[10px] font-mono tracking-widest px-3 py-1 rounded-full uppercase">
                  {project.category}
                </span>
              </div>

              {/* Detail Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-xs text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-neon-blue transition-colors duration-300 font-mono"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 text-xs text-neon-cyan hover:underline transition-all duration-300 font-mono"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
