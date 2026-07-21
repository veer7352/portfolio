import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiTerminal, FiTrendingUp, FiCpu } from 'react-icons/fi';

const servicesData = [
  {
    icon: <FiLayout className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Building premium, high-speed full stack websites using React, Node.js, Express, and modern SQL/NoSQL databases.',
    color: 'hover:border-neon-blue/30 border-white/5',
    iconColor: 'text-neon-blue'
  },
  {
    icon: <FiTerminal className="w-8 h-8" />,
    title: 'Python Development',
    description: 'Crafting modular backends, clean API architectures, automation scripts, and custom data scraping solutions.',
    color: 'hover:border-neon-purple/30 border-white/5',
    iconColor: 'text-neon-purple'
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: 'AI Solutions',
    description: 'Integrating intelligent features, training predictive ML models, and deploying smart natural language interfaces.',
    color: 'hover:border-neon-cyan/30 border-white/5',
    iconColor: 'text-neon-cyan'
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: 'Responsive UI/UX Design',
    description: 'Designing beautiful futuristic layouts, interactive micro-animations, and fluid responsive behaviors across all devices.',
    color: 'hover:border-neon-blue/30 border-white/5',
    iconColor: 'text-neon-cyan'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">03. Offerings</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">My <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Services</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, idx) => (
          <motion.div 
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`glass-card p-8 flex flex-col items-start text-left cursor-pointer group ${service.color} hover:bg-white/[0.05] hover:-translate-y-2`}
          >
            {/* Service Icon with Glow */}
            <div className={`p-4 rounded-2xl bg-white/[0.02] border border-white/10 ${service.iconColor} mb-6 group-hover:scale-110 transition-all duration-300`}>
              {service.icon}
            </div>

            <h4 className="text-lg font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
              {service.title}
            </h4>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
