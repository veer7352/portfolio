import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi';

const timelineData = [
  {
    year: '2024 - Present',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Aspiring Full Stack & AI Professional',
    description: 'Deepening knowledge in advanced software engineering, data structures, algorithms, databases, and AI methods.'
  },
  {
    year: '2020 - 2023',
    degree: 'Bachelor of Science (B.Sc.)',
    institution: 'Graduation Degree',
    description: 'Developed solid analytical thinking, core computer science principles, statistical modelling foundations, and programming basics.'
  }
];

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">01. Discovery</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">About <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Me</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Bio & Passion Pills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          variants={cardVariants}
          className="lg:col-span-7 space-y-6"
        >
          <div className="glass-card p-8 border-neon-blue/10">
            <h4 className="text-xl font-bold text-white mb-4">Who is Dharamveer?</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am an aspiring Python Full Stack Developer and AI enthusiast currently pursuing my MCA. I design and build modern web applications, scalable backends, and data-driven models. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a background in computer applications and science, I enjoy bridging the gap between core algorithms and sleek, intuitive user interfaces. I love learning new technologies, analyzing datasets, and crafting micro-architectures that perform smoothly under load.
            </p>
          </div>

          {/* Pillars of Passion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 flex items-center space-x-4 border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan">
                <FiCode className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Python Stack</h5>
                <p className="text-xs text-gray-500">Django, Flask, Pandas</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center space-x-4 border-white/5 hover:border-neon-blue/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-neon-blue/10 text-neon-blue">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Web Apps</h5>
                <p className="text-xs text-gray-500">React, Node, SQL, Mongo</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center space-x-4 border-white/5 hover:border-neon-purple/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple">
                <FiCpu className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Artificial Intelligence</h5>
                <p className="text-xs text-gray-500">Machine Learning models</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center space-x-4 border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
              <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Data Analytics</h5>
                <p className="text-xs text-gray-500">Power BI & Excel insights</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Education Timeline */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={cardVariants}
          className="lg:col-span-5"
        >
          <div className="glass-card p-8 border-neon-purple/10 relative">
            <h4 className="text-xl font-bold text-white mb-6">Education Timeline</h4>
            
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-dark-bg border border-neon-purple flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
                  </div>
                  
                  <span className="text-xs font-mono text-neon-cyan font-bold tracking-widest block mb-1">
                    {item.year}
                  </span>
                  
                  <h5 className="text-base font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                    {item.degree}
                  </h5>
                  
                  <p className="text-xs text-gray-500 font-mono mb-2">
                    {item.institution}
                  </p>
                  
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
