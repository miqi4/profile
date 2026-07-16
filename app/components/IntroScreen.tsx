'use client';

import { useState, useEffect } from 'react';

export default function IntroScreen() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if it's the first time the user visits in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setShow(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const timer2 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasVisited', 'true');
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-background)] transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 blur-md' : 'opacity-100 scale-100 blur-none'
      }`}
    >
      <div className="relative text-center mb-10 px-4">
        <h1 
          className="text-4xl md:text-6xl font-bold font-sora text-[var(--color-primary)] animate-[slideUp_1s_ease-out_forwards]"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          Welcome
        </h1>
        <p 
          className="text-[var(--color-on-surface-variant)] mt-4 text-sm md:text-base tracking-[0.3em] uppercase animate-[fadeIn_1s_ease-out_0.5s_forwards]"
          style={{ opacity: 0 }}
        >
          To My Portfolio
        </p>
      </div>
      
      {/* Loading Line */}
      <div className="w-64 h-[2px] bg-[var(--color-surface-container)] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[var(--color-secondary)] rounded-full shadow-[0_0_10px_var(--color-secondary)] animate-[progressWidth_2s_ease-in-out_forwards]"
        />
      </div>
    </div>
  );
}
