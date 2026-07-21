import React, { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState('INIT_SYSTEM');

  useEffect(() => {
    const texts = ['LOAD_COMPONENTS', 'CONNECT_AI_CORE', 'SYNC_PORTFOLIO', 'READY'];
    
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 600); // Small delay after 100%
          return 100;
        }
        
        // Randomize text glitching sometimes
        if (prev % 25 === 0 && prev > 0) {
          const idx = Math.min(Math.floor(prev / 25), texts.length - 1);
          setGlitchText(texts[idx]);
        }
        
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-dark-bg z-[9999] flex flex-col items-center justify-center font-mono">
      {/* Glow filter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/20 blur-[100px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-neon-blue/15 blur-[80px] rounded-full"></div>

      {/* Futuristic Frame */}
      <div className="border border-white/10 p-8 rounded-lg bg-black/40 backdrop-blur-md w-[90%] max-w-[400px] relative">
        <div className="absolute top-2 left-2 text-[10px] text-neon-blue/60">SYS_V2.0.26</div>
        <div className="absolute top-2 right-2 text-[10px] text-neon-cyan/60 animate-pulse">● ONLINE</div>
        
        <div className="text-center mt-4 mb-6">
          <h1 className="text-xl font-bold tracking-widest text-white relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">DHARAMVEER</span>
          </h1>
          <p className="text-[11px] text-gray-500 tracking-wider mt-1">PORTFOLIO PROTOCOL</p>
        </div>

        {/* Binary stream emulation */}
        <div className="text-[10px] text-gray-600 mb-2 truncate select-none h-4">
          {Array.from({ length: 40 }).map(() => Math.round(Math.random())).join('')}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10 relative p-[1px]">
          <div 
            className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Status text */}
        <div className="flex justify-between items-center mt-3 text-xs">
          <span className="text-neon-cyan tracking-wider animate-pulse">{glitchText}</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
