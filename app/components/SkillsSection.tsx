'use client';

import { useEffect } from 'react';

export default function SkillsSection() {
  useEffect(() => {
    setTimeout(() => {
      const bars = document.querySelectorAll('.skill-bar');
      bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
          (bar as HTMLElement).style.width = width;
        }
      });
    }, 300);
  }, []);

  return (
    <section id="skills" className="h-screen w-full snap-start overflow-y-auto px-8 md:px-16 xl:px-24 py-12">
      <div className="mb-12">
        <div className="max-w-3xl">
          <h1 className="text-[28px] md:text-[48px] leading-[1.3] md:leading-[1.2] tracking-tight md:tracking-[-0.01em] font-semibold text-primary mb-3 font-[family-name:var(--font-family-display)]">
            Technical Proficiency
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            A comprehensive overview of my core engineering capabilities, emphasizing robust backend architectures and modern frontend frameworks.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="skill-card bg-surface-container border border-white/10 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between h-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.1)]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
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

        <div className="skill-card bg-surface-container border border-white/10 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between h-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.1)]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-error">
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

        <div className="skill-card bg-surface-container border border-white/10 rounded-lg p-6 transition-all duration-300 flex flex-col justify-between h-full lg:col-span-1 md:col-span-2 lg:col-start-auto md:col-start-1 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(192,193,255,0.1)]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-tertiary">
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

      <div className="mt-12">
        <h3 className="text-[32px] leading-[1.3] font-semibold text-primary mb-6 font-[family-name:var(--font-family-display)]">Additional Arsenal</h3>
        <div className="flex flex-wrap gap-3">
          {['PostgreSQL', 'Docker', 'Tailwind CSS', 'Git', 'RESTful APIs'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 border border-white/10 rounded-full text-sm tracking-wider font-medium text-on-surface-variant bg-surface-container-low hover:bg-surface-container transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
