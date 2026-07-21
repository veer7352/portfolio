import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiStar } from 'react-icons/fi';

const experienceData = [
  {
    type: 'internship',
    icon: <FiBriefcase className="w-5 h-5" />,
    role: 'Python Full Stack Intern',
    company: 'Tech Solutions Inc.',
    duration: '6 Months',
    details: 'Developed backend API endpoints using Django/Flask. Integrated React frontend layers, optimized SQL database queries, and implemented user authentication workflows.',
    color: 'border-neon-blue'
  },
  {
    type: 'training',
    icon: <FiAward className="w-5 h-5" />,
    role: 'AI & Data Science Specialist',
    company: 'Cognitive Learning Labs',
    duration: '3 Months Training',
    details: 'Completed advanced neural networks training. Designed image classification and text analysis workflows. Built live models and reported insights via Power BI dashboards.',
    color: 'border-neon-purple'
  },
  {
    type: 'achievement',
    icon: <FiStar className="w-5 h-5" />,
    role: 'Hackathon Finalist & Top Contributor',
    company: 'University Developer Circle',
    duration: '2025',
    details: 'Collaborated in team projects to build AI-driven web layers. Contributed to various open source modules and templates on GitHub.',
    color: 'border-neon-cyan'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">04. Journey</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Experience & <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Timeline</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Central vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>

        <div className="space-y-12">
          {experienceData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div 
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-4 md:left-1/2 top-1.5 w-9 h-9 rounded-full bg-dark-bg border-2 border-white/20 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg text-neon-cyan group-hover:scale-115 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content Card container */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <div className={`glass-card p-6 border-l-4 ${item.color} hover:bg-white/[0.05] transition-all duration-300`}>
                    <span className="text-xs font-mono text-neon-cyan font-semibold block mb-1">
                      {item.duration}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-1">{item.role}</h4>
                    <p className="text-sm text-gray-500 font-semibold mb-3">{item.company}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.details}</p>
                  </div>
                </div>

                {/* Empty column on opposite side */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
