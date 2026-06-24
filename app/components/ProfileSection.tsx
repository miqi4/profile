'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import CurtainDrag from './CurtainDrag';

export default function ProfileSection() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex items-center justify-center px-8 md:px-16 xl:px-24 py-20">
      <CurtainDrag />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1 z-10">
          <div className="fade-up opacity-0 translate-y-5 transition-all duration-700">
            <span className="inline-block bg-surface-variant text-primary px-3 py-1 rounded-full text-sm tracking-wider font-medium border border-white/10 mb-2">
              Backend Developer
            </span>
          </div>
          
          <h1 className="fade-up opacity-0 translate-y-5 transition-all duration-700 delay-100 text-[28px] md:text-[64px] leading-[1.3] md:leading-[1.1] tracking-tight md:tracking-[-0.02em] font-bold text-on-surface font-[family-name:var(--font-family-display)]">
            Mohammad Iqbal <span className="text-primary">(Iqbaal)</span>
          </h1>
          
          <p className="fade-up opacity-0 translate-y-5 transition-all duration-700 delay-200 text-lg leading-relaxed text-on-surface-variant max-w-2xl">
            Engineering robust, scalable backend systems with precision. Currently expanding my technical foundation in Semester 4 of Teknik Informatika at Politeknik Negeri Malang.
          </p>
          
          <div className="fade-up opacity-0 translate-y-5 transition-all duration-700 delay-300 flex flex-wrap gap-6 mt-4">
            <a 
              href="/projects" 
              className="bg-primary hover:bg-primary-container text-on-primary text-sm tracking-wider font-medium py-3 px-6 rounded transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <a 
              href="#" 
              className="border border-outline-variant hover:border-primary text-primary text-sm tracking-wider font-medium py-3 px-6 rounded transition-all duration-200 hover:bg-surface-variant/50 inline-flex items-center gap-2"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          <div className="fade-up opacity-0 translate-y-5 transition-all duration-700 delay-300 flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
            <span className="text-sm tracking-wider text-on-surface-variant uppercase">Connect</span>
            <div className="w-8 h-px bg-white/10"></div>
            <a 
              href="#" 
              aria-label="GitHub" 
              className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end fade-up opacity-0 translate-y-5 transition-all duration-700 delay-200">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] aspect-square rounded-xl overflow-hidden border border-white/10 bg-surface-container-low group">
            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-surface-variant opacity-50 z-0"></div>
            <Image 
              alt="Mohammad Iqbal Profile" 
              src="/profil.jpg"
              width={800}
              height={800}
              className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background/90 to-transparent z-20 flex justify-between items-end">
              <div className="font-mono text-sm text-primary opacity-80">
                {`{ status: "building" }`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-up.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
