'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const HOLD_DURATION = 1200;

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [launched, setLaunched] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);
  const holdStartRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const holdingRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const initTimer = setTimeout(() => setIsVisible(true), 0);
    const timer = setTimeout(() => {
      const bars = document.querySelectorAll('.skill-bar');
      bars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        if (width) {
          setTimeout(() => {
            (bar as HTMLElement).style.width = width;
          }, index * 100);
        }
      });
    }, 200);
    return () => {
      clearTimeout(timer);
      clearTimeout(initTimer);
    };
  }, []);

  function tick() {
    if (!holdingRef.current || holdStartRef.current === null) return;
    const pct = Math.min(((performance.now() - holdStartRef.current) / HOLD_DURATION) * 100, 100);
    setProgress(pct);
    if (pct < 100) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      holdingRef.current = false;
      setLaunched(true);
      
      const section = document.getElementById('skills-section');
      if (section) {
        section.style.opacity = '0';
        section.style.transform = 'scale(0.95) translateY(20px)';
      }
      
      window.dispatchEvent(new Event('page-exit'));
      setTimeout(() => router.push('/projects'), 800);
    }
  }

  const startHold = () => {
    if (launched) return;
    holdingRef.current = true;
    holdStartRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
  };

  const endHold = () => {
    if (holdingRef.current) {
      holdingRef.current = false;
      cancelAnimationFrame(rafRef.current);
      setProgress(0);
    }
  };

  return (
    <section 
      id="skills-section"
      className="w-full px-5 sm:px-8 md:px-16 xl:px-24 py-10"
      style={{ transition: 'opacity 0.4s ease-out, transform 0.4s ease-out' }}
    >
      {/* Header with animation */}
      <div 
        className="mb-12 transform transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        <div className="max-w-3xl border-l-4 border-ink pl-6">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-tight font-bold text-ink mb-4 uppercase font-[family-name:var(--font-family-display)] animate-in fade-in slide-in-from-top-4 duration-700">
            Technical Proficiency
          </h1>
          <p className="text-lg leading-relaxed text-ink-muted font-mono animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
            A comprehensive overview of my core engineering capabilities, emphasizing robust backend architectures and modern frontend frameworks.
          </p>
        </div>
      </div>

      {/* Skill Cards Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease-out 0.3s',
        }}
      >
        {/* Next.js Card */}
        <div 
          className="skill-card bg-canvas border-2 border-ink p-6 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[8px_8px_0_0_var(--ink)] hover:-translate-y-2 hover:-translate-x-2 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(20px) rotateX(10deg)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s',
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border-2 border-ink bg-canvas flex items-center justify-center text-ink transform transition-transform duration-500 hover:rotate-90">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] font-bold text-ink uppercase font-[family-name:var(--font-family-display)]">Next.js</h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted font-mono mb-8">
              Building performant, SEO-optimized React applications with server-side rendering and static site generation.
            </p>
          </div>
          <div className="mt-auto border-t-2 border-ink/20 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm tracking-widest font-bold text-ink uppercase">Proficiency</span>
              <span className="text-sm tracking-widest font-bold text-ink bg-canvas border border-ink px-2 py-1">90%</span>
            </div>
            <div className="w-full h-4 border-2 border-ink bg-canvas overflow-hidden relative">
              <div 
                className="skill-bar h-full bg-ink w-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" 
                data-width="90%"
              ></div>
            </div>
          </div>
        </div>

        {/* Laravel Card */}
        <div 
          className="skill-card bg-canvas border-2 border-ink p-6 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-[8px_8px_0_0_var(--ink)] hover:-translate-y-2 hover:-translate-x-2 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(20px) rotateX(10deg)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border-2 border-ink bg-canvas flex items-center justify-center text-ink transform transition-transform duration-500 hover:rotate-90">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] font-bold text-ink uppercase font-[family-name:var(--font-family-display)]">Laravel + Filament</h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted font-mono mb-8">
              Architecting scalable backend systems, developing robust APIs, and rapidly constructing powerful admin panels using Filament.
            </p>
          </div>
          <div className="mt-auto border-t-2 border-ink/20 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm tracking-widest font-bold text-ink uppercase">Proficiency</span>
              <span className="text-sm tracking-widest font-bold text-ink bg-canvas border border-ink px-2 py-1">85%</span>
            </div>
            <div className="w-full h-4 border-2 border-ink bg-canvas overflow-hidden relative">
              <div 
                className="skill-bar h-full bg-ink w-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" 
                data-width="85%"
              ></div>
            </div>
          </div>
        </div>

        {/* Java Card */}
        <div 
          className="skill-card bg-canvas border-2 border-ink p-6 transition-all duration-300 flex flex-col justify-between h-full lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1 hover:shadow-[8px_8px_0_0_var(--ink)] hover:-translate-y-2 hover:-translate-x-2 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(20px) rotateX(10deg)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border-2 border-ink bg-canvas flex items-center justify-center text-ink transform transition-transform duration-500 hover:rotate-90">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] font-bold text-ink uppercase font-[family-name:var(--font-family-display)]">Java</h2>
            </div>
            <p className="text-base leading-relaxed text-ink-muted font-mono mb-8">
              Developing enterprise-grade applications, focusing on object-oriented design principles, multithreading, and Spring Boot microservices.
            </p>
          </div>
          <div className="mt-auto border-t-2 border-ink/20 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm tracking-widest font-bold text-ink uppercase">Proficiency</span>
              <span className="text-sm tracking-widest font-bold text-ink bg-canvas border border-ink px-2 py-1">80%</span>
            </div>
            <div className="w-full h-4 border-2 border-ink bg-canvas overflow-hidden relative">
              <div 
                className="skill-bar h-full bg-ink w-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" 
                data-width="80%"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Arsenal Section */}
      <div 
        className="mt-16 transform transition-all duration-1000 border-t-4 border-ink pt-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '0.6s',
        }}
      >
        <h3 className="text-[28px] sm:text-[32px] leading-[1.1] font-bold text-ink mb-8 uppercase font-[family-name:var(--font-family-display)] animate-in fade-in slide-in-from-left-4 duration-700 delay-700">
          Additional Arsenal
        </h3>
        <div className="flex flex-wrap gap-4">
          {['PostgreSQL', 'Docker', 'Tailwind CSS', 'Git', 'RESTful APIs'].map((tech, index) => (
            <span 
              key={tech}
              className="px-5 py-3 border-2 border-ink text-sm tracking-widest font-bold text-ink uppercase bg-canvas hover:bg-ink hover:text-canvas transition-colors duration-300 cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.7 + index * 0.08}s`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="mt-24 mb-10 flex items-center gap-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 1.1s',
        }}
      >
        <div className="flex-1 h-[2px] bg-ink" />
        <span className="text-xs tracking-[0.25em] font-bold text-ink uppercase select-none text-center bg-canvas px-4 border-2 border-ink">
          What I&apos;ve Built
        </span>
        <div className="flex-1 h-[2px] bg-ink" />
      </div>

      {/* ── Navigate to Projects CTA ── */}
      <div
        className="flex flex-col items-center gap-5 pb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease-out 1.2s',
        }}
      >
        <p className="text-ink-muted text-sm tracking-wide text-center uppercase font-mono">
          See how these skills translate into real-world systems
        </p>

        <button
          ref={btnRef}
          id="view-projects-btn"
          onMouseDown={startHold}
          onMouseUp={endHold}
          onMouseLeave={endHold}
          onTouchStart={startHold}
          onTouchEnd={endHold}
          aria-label="Hold to navigate to Projects page"
          className="relative overflow-hidden cursor-pointer select-none"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 32px',
            border: `2px solid var(--ink)`,
            background: 'var(--canvas)',
            transition: 'border-color 0.2s ease',
            color: 'var(--ink)',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: '0.1em'
          }}
        >
          {/* Fill bar */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--ink)',
              transformOrigin: 'left',
              transform: `scaleX(${progress / 100})`,
              transition: progress === 0 ? 'transform 0.25s ease' : 'none',
              zIndex: 0,
            }}
          />

          {/* Arrow icon */}
          <svg
            className="w-5 h-5 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              color: progress > 50 ? 'var(--canvas)' : 'var(--ink)',
              transition: 'color 0.1s ease, transform 0.3s ease',
              transform: launched ? 'translateX(4px)' : 'none',
            }}
          >
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>

          {/* Label */}
          <span
            className="relative z-10 text-sm font-bold tracking-widest min-w-[140px] text-center"
            style={{
              color: progress > 50 ? 'var(--canvas)' : 'var(--ink)',
              transition: 'color 0.1s ease',
            }}
          >
            {launched ? 'OPENING...' : progress > 0 ? `${Math.round(progress)}%` : 'HOLD TO CONTINUE'}
          </span>
        </button>
      </div>
    </section>
  );
}
