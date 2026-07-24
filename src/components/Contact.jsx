import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Mock EmailJS execution. If Service/Template credentials are ready, swap them here.
    // We simulate a 1.5 second delay and success state triggering confetti.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Trigger canvas-confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#bd00ff', '#00ffd8']
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);

    /* 
    // Actual EmailJS Integration:
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          confetti({ ... });
      }, (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
      });
    */
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neon-cyan mb-3">07. Connect</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white">Contact <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Me</span></h3>
        <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-8 border-neon-cyan/10 text-left">
            <h4 className="text-xl font-bold text-white mb-6">Let's build something epic!</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              I am open to internships, remote collaborations, full stack jobs, and custom AI solution roles. Shoot me an email or get in touch through any of the channels below!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Email</p>
                  <a href="mailto:dharamveerkumar49632@gmail.com" className="text-sm font-semibold text-white hover:text-neon-cyan transition-colors duration-300">
                    dharamveerkumar49632@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Phone</p>
                  <a href="tel:+916200801686" className="text-sm font-semibold text-white hover:text-neon-cyan transition-colors duration-300">
                    +91 62008 01686
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Location</p>
                  <span className="text-sm font-semibold text-white">India</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex items-center space-x-4 mt-10 pt-8 border-t border-white/5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:shadow-glow-blue transition-all duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-gray-400 hover:text-neon-purple hover:border-neon-purple hover:shadow-glow-purple transition-all duration-300"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 border-neon-purple/10">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 font-semibold tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-[10px] font-mono text-neon-purple font-semibold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 font-semibold tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-[10px] font-mono text-neon-purple font-semibold">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 font-semibold tracking-wider">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300"
                  placeholder="Inquiry / Collaboration Opportunity"
                />
                {errors.subject && <p className="text-[10px] font-mono text-neon-purple font-semibold">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 font-semibold tracking-wider">Message</label>
                <textarea 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 focus:border-neon-cyan rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all duration-300 resize-none"
                  placeholder="Hey Dharamveer, I have an interesting full stack project..."
                />
                {errors.message && <p className="text-[10px] font-mono text-neon-purple font-semibold">{errors.message}</p>}
              </div>

              {/* Submit Status Alerts */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-mono font-semibold">
                  ✓ Message transmitted successfully! Confetti triggered.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-mono font-semibold">
                  ✗ Transmission error. Please verify and retry.
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-neon font-mono text-sm tracking-widest flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
