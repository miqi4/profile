'use client';

import { useState, useEffect } from 'react';

export default function IntroScreen() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setShow(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2800); // Wait longer so they can play with it

    const timer2 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasVisited', 'true');
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-[9999] flex flex-col items-center justify-center bg-canvas transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="relative z-10 text-center mb-10 px-4">
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
      <div className="relative z-10 w-64 h-[2px] bg-[var(--color-surface-container)] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[var(--color-secondary)] rounded-full shadow-[0_0_10px_var(--color-secondary)] animate-[progressWidth_2.8s_ease-in-out_forwards]"
        />
      </div>
    </div>
  );
}
