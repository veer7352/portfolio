import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiZoomIn, FiX, FiAward } from 'react-icons/fi';
import certMockup from '../assets/cert_mockup.jpg';

const certificatesData = [
  {
    title: 'Python Full Stack Developer Certification',
    issuer: 'Tech Academy & Dev Circle',
    date: 'Dec 2024',
    image: certMockup,
    description: 'Comprehensive evaluation of Django backends, database schema designs, and advanced JavaScript integrations.'
  },
  {
    title: 'Machine Learning & Deep Learning Neural Networks',
    issuer: 'AI Research Institute',
    date: 'Oct 2025',
    image: certMockup,
    description: 'Validation of neural network architectures, custom regression pipelines, and deployment of predictive modeling weights.'
  },
  {
    title: 'Advanced Data Analysis & Business Intelligence',
    issuer: 'Cognitive analytics Hub',
    date: 'Jul 2025',
    image: certMockup,
    description: 'Mastery of Power BI interactive dashboard structures, statistical analysis methods, and data cleansing scripts.'
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">06. Recognition</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Certificates & <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Credentials</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Certificate Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div 
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group overflow-hidden border-white/5 hover:border-neon-purple/20 cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            {/* Image hover zoom wrapper */}
            <div className="relative h-56 overflow-hidden bg-black/50">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px]"
              />
              {/* Zoom overlay indicator */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-neon-purple/25 border border-neon-purple text-neon-cyan scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FiZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Cert Meta */}
            <div className="p-6 text-left">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 line-clamp-1">
                  {cert.title}
                </h4>
              </div>
              <p className="text-xs text-gray-500 font-mono font-semibold mb-3 flex items-center space-x-1">
                <FiAward className="w-3.5 h-3.5 text-neon-cyan" />
                <span>{cert.issuer} • {cert.date}</span>
              </p>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              onClick={() => setSelectedCert(null)}
              aria-label="Close Lightbox"
            >
              <FiX className="w-6 h-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="max-w-3xl w-full glass-card p-4 border-white/15 bg-black/60 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg border border-white/5 mb-4"
              />
              
              <div className="text-left px-2">
                <h4 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h4>
                <p className="text-xs text-neon-cyan font-mono mb-2">{selectedCert.issuer} • {selectedCert.date}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{selectedCert.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
