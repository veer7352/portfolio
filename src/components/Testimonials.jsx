import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const testimonialsData = [
  {
    quote: "Dharamveer demonstrated exceptional skill during his training, building a predictive analytics module that improved forecasting accuracy by 15%. His ability to bridge backend logic with React interfaces is outstanding.",
    author: "Aarav Mehta",
    role: "Tech Lead",
    company: "Cognitive Learning Labs",
    initials: "AM",
    color: "from-neon-blue to-neon-cyan",
    glow: "shadow-glow-blue border-neon-blue/20"
  },
  {
    quote: "Working with Dharamveer was a breeze. He quickly integrated Django backends with our main React app and optimized our database queries, reducing page load speeds significantly. Highly recommended!",
    author: "Elena Rostova",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    initials: "ER",
    color: "from-neon-purple to-neon-pink",
    glow: "shadow-glow-purple border-neon-purple/20"
  },
  {
    quote: "As a hackathon teammate, Dharamveer was the powerhouse. He engineered an entire AI chatbot assistant within 24 hours. His coding speed and collaborative spirit are pure assets.",
    author: "Rohan Sharma",
    role: "Dev Circle Lead",
    company: "University Developer Circle",
    initials: "RS",
    color: "from-neon-cyan to-neon-blue",
    glow: "shadow-glow-cyan border-neon-cyan/20"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">06. Recommendations</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Client & Peer <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Feedback</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Slider Card Container */}
        <div className="w-full relative min-h-[300px] flex items-center justify-center px-4 md:px-12">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`w-full max-w-3xl glass-card p-8 md:p-10 border ${activeTestimonial.glow} relative flex flex-col justify-between`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 p-3.5 rounded-2xl bg-dark-bg border border-white/10 text-neon-cyan shadow-glow-cyan">
                <FiMessageSquare className="w-6 h-6" />
              </div>

              {/* Quote Text */}
              <p className="text-base md:text-lg text-gray-300 italic leading-relaxed text-left mt-4 mb-8">
                "{activeTestimonial.quote}"
              </p>

              {/* Author Metadata */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6 text-left">
                {/* Initials Avatar */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeTestimonial.color} flex items-center justify-center text-dark-bg font-extrabold text-sm tracking-wider shadow-inner`}>
                  {activeTestimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono">
                    {activeTestimonial.role} &middot; <span className="text-neon-cyan">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/[0.02] border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300 z-20"
            aria-label="Previous Testimonial"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/[0.02] border border-white/10 text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300 z-20"
            aria-label="Next Testimonial"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex space-x-3 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'bg-neon-cyan w-6' 
                  : 'bg-white/10 hover:bg-white/30'
              }`}
              aria-label={`Go to Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
