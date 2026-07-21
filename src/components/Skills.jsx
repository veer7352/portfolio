import React from 'react';
import { motion } from 'framer-motion';

const mainSkills = [
  { name: 'Python', level: 88, color: 'text-neon-cyan', stroke: '#00ffd8' },
  { name: 'JavaScript', level: 80, color: 'text-neon-blue', stroke: '#00f0ff' },
  { name: 'React.js', level: 82, color: 'text-neon-purple', stroke: '#bd00ff' },
  { name: 'SQL', level: 85, color: 'text-neon-cyan', stroke: '#00ffd8' },
];

const subSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'C++', level: 75 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 78 },
  { name: 'MongoDB', level: 80 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Power BI', level: 78 },
  { name: 'Excel', level: 82 },
];

export default function Skills() {
  // SVG circular properties
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">02. Capabilities</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Technical <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Skills</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Circular indicators for Main Stacks */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-card p-8 border-neon-cyan/10">
            <h4 className="text-xl font-bold text-white mb-8 text-left">Core Expertise</h4>
            <div className="grid grid-cols-2 gap-8 justify-items-center">
              {mainSkills.map((skill, idx) => {
                const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                return (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        {/* Background track circle */}
                        <circle 
                          cx="48" 
                          cy="48" 
                          r={radius} 
                          className="stroke-current text-white/5" 
                          strokeWidth="6" 
                          fill="transparent"
                        />
                        {/* Active stroke progress */}
                        <motion.circle 
                          cx="48" 
                          cy="48" 
                          r={radius} 
                          stroke={skill.stroke}
                          strokeWidth="6" 
                          fill="transparent"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.1 }}
                        />
                      </svg>
                      {/* Percent indicator absolute */}
                      <span className="absolute text-sm font-mono font-bold text-white">{skill.level}%</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-300 mt-3">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Linear sliders for supplementary tools */}
        <div className="lg:col-span-6">
          <div className="glass-card p-8 border-neon-purple/10">
            <h4 className="text-xl font-bold text-white mb-6 text-left font-sans">Supplementary Tech & Tools</h4>
            <div className="space-y-5">
              {subSkills.map((skill, idx) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-300 font-mono">{skill.name}</span>
                    <span className="text-neon-cyan font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5 relative p-[1px]">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
