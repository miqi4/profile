'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TransitionOverlay() {
  const [state, setState] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const pathname = usePathname();

  useEffect(() => {
    const handleExit = () => setState('exiting');
    window.addEventListener('page-exit', handleExit);
    return () => window.removeEventListener('page-exit', handleExit);
  }, []);

  useEffect(() => {
    // When pathname changes and we are currently covering the screen (exiting)
    if (state === 'exiting') {
      // Start the reveal animation
      const initT = setTimeout(() => setState('entering'), 0);
      const t = setTimeout(() => {
        setState('idle'); // Reset back to bottom instantly (hidden)
      }, 800); // 800ms reveal animation
      return () => {
        clearTimeout(initT);
        clearTimeout(t);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Determine translation based on state
  let transform = 'translateY(100%)'; // idle: offscreen bottom
  if (state === 'exiting') transform = 'translateY(0%)'; // covering screen
  else if (state === 'entering') transform = 'translateY(-100%)'; // offscreen top

  // We only want a transition when moving to 'exiting' (slide up) or 'entering' (slide up again to reveal).
  // When resetting from 'entering' to 'idle', we want no transition so it snaps to bottom invisibly.
  const transition = state === 'idle' 
    ? 'none' 
    : 'transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--color-background)', // Matching app background
        transform,
        transition,
        pointerEvents: state === 'idle' ? 'none' : 'all',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          color: 'var(--color-on-background)',
          fontSize: '2rem',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-family-display)',
          opacity: state === 'exiting' ? 1 : 0,
          transition: 'opacity 0.4s ease',
          transitionDelay: state === 'exiting' ? '0.4s' : '0s'
        }}
      >
        Loading
      </span>
    </div>
  );
}
