import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth trail effect
  useEffect(() => {
    let animationFrameId;
    
    const updateTrail = () => {
      setTrail((prev) => {
        // Linear interpolation to make the cursor trail follow smoothly
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Hook hover states
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Core Cursor Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out hidden lg:block"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      
      {/* Outer Cursor Trail Ring */}
      <div 
        className={`fixed top-0 left-0 border rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out hidden lg:block ${
          isHovered 
            ? 'w-12 h-12 border-neon-purple bg-neon-purple/10 scale-110 shadow-[0_0_15px_rgba(189,0,255,0.4)]' 
            : 'w-7 h-7 border-neon-blue/60 bg-transparent'
        }`}
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      ></div>
    </>
  );
}
