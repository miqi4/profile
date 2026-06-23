'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
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
    setIsVisible(true);
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
    return () => clearTimeout(timer);
  }, []);

  const tick = useCallback(() => {
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
        section.style.transform = 'translateY(-12px)';
      }
      
      setTimeout(() => router.push('/projects'), 300);
    }
  }, [router]);

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
      className="w-full px-8 md:px-16 xl:px-24 py-10"
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
        <div className="max-w-3xl">
          <h1 className="text-[28px] md:text-[48px] leading-[1.3] md:leading-[1.2] tracking-tight md:tracking-[-0.01em] font-semibold text-primary mb-3 font-[family-name:var(--font-family-display)] animate-in fade-in slide-in-from-top-4 duration-700">
            Technical Proficiency
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
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
          className="skill-card bg-surface-container border border-white/10 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between h-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.1)] hover:-translate-y-1 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(20px) rotateX(10deg)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary transform transition-transform duration-500 hover:rotate-12 hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-[32px] leading-[1.3] font-semibold text-on-surface font-[family-name:var(--font-family-display)]">Next.js</h2>
            </div>
            <p className="text-base leading-relaxed text-on-surface-variant mb-6">
              Building performant, SEO-optimized React applications with server-side rendering and static site generation.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm tracking-wider font-medium text-on-surface uppercase">Proficiency</span>
              <span className="text-sm tracking-wider font-medium text-secondary">90%</span>
            </div>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" 
                data-width="90%"
              ></div>
            </div>
          </div>
        </div>

        {/* Laravel Card */}
        <div 
          className="skill-card bg-surface-container border border-white/10 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between h-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.1)] hover:-translate-y-1 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(20px) rotateX(10deg)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-error transform transition-transform duration-500 hover:rotate-12 hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-[32px] leading-[1.3] font-semibold text-on-surface font-[family-name:var(--font-family-display)]">Laravel + Filament</h2>
            </div>
            <p className="text-base leading-relaxed text-on-surface-variant mb-6">
              Architecting scalable backend systems, developing robust APIs, and rapidly constructing powerful admin panels using Filament.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm tracking-wider font-medium text-on-surface uppercase">Proficiency</span>
              <span className="text-sm tracking-wider font-medium text-secondary">85%</span>
            </div>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" 
                data-width="85%"
              ></div>
            </div>
          </div>
        </div>

        {/* Java Card */}
        <div 
          className="skill-card bg-surface-container border border-white/10 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between h-full lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.1)] hover:-translate-y-1 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(20px) rotateX(10deg)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-tertiary transform transition-transform duration-500 hover:rotate-12 hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-[32px] leading-[1.3] font-semibold text-on-surface font-[family-name:var(--font-family-display)]">Java</h2>
            </div>
            <p className="text-base leading-relaxed text-on-surface-variant mb-6">
              Developing enterprise-grade applications, focusing on object-oriented design principles, multithreading, and Spring Boot microservices.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm tracking-wider font-medium text-on-surface uppercase">Proficiency</span>
              <span className="text-sm tracking-wider font-medium text-secondary">80%</span>
            </div>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" 
                data-width="80%"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Arsenal Section */}
      <div 
        className="mt-12 transform transition-all duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '0.6s',
        }}
      >
        <h3 className="text-[32px] leading-[1.3] font-semibold text-primary mb-6 font-[family-name:var(--font-family-display)] animate-in fade-in slide-in-from-left-4 duration-700 delay-700">
          Additional Arsenal
        </h3>
        <div className="flex flex-wrap gap-3">
          {['PostgreSQL', 'Docker', 'Tailwind CSS', 'Git', 'RESTful APIs'].map((tech, index) => (
            <span 
              key={tech}
              className="px-4 py-2 border border-white/10 rounded-full text-sm tracking-wider font-medium text-on-surface-variant bg-surface-container-low hover:bg-surface-container hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer"
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
        className="mt-16 mb-10 flex items-center gap-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out 1.1s',
        }}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-xs tracking-[0.25em] font-medium text-on-surface-variant/40 uppercase select-none">
          What I've Built
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
        <p className="text-on-surface-variant/50 text-sm tracking-wide text-center">
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
            padding: '12px 32px',
            borderRadius: '8px',
            border: `1px solid rgba(192,193,255,${0.15 + progress * 0.005})`,
            background: 'transparent',
            transition: 'border-color 0.2s ease',
          }}
        >
          {/* Fill bar */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(192,193,255,0.08)',
              transformOrigin: 'left',
              transform: `scaleX(${progress / 100})`,
              transition: progress === 0 ? 'transform 0.25s ease' : 'none',
            }}
          />

          {/* Arrow icon */}
          <svg
            className="w-4 h-4 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              color: progress > 0 ? '#c0c1ff' : '#908fa0',
              transition: 'color 0.3s ease, transform 0.3s ease',
              transform: launched ? 'translateX(4px)' : 'none',
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>

          {/* Label */}
          <span
            className="relative z-10 text-sm font-medium tracking-wide min-w-[120px] text-center"
            style={{
              color: progress > 0 ? '#c0c1ff' : '#908fa0',
              transition: 'color 0.2s ease',
            }}
          >
            {launched ? 'Membuka...' : progress > 0 ? `${Math.round(progress)}%` : 'Tahan untuk lanjut'}
          </span>
        </button>
      </div>
    </section>
  );
}
