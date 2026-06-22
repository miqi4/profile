'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'skills', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 w-full">
      <div className="flex justify-between items-center w-full px-8 py-4 mx-auto">
        <button 
          onClick={() => scrollToSection('profile')}
          className="text-[32px] leading-[1.3] font-semibold text-primary font-[family-name:var(--font-family-display)]"
        >
          Iqbaal
        </button>

        <nav className="hidden md:flex gap-6 items-center">
          <button 
            onClick={() => scrollToSection('profile')}
            className={`text-sm tracking-wider font-medium ${
              activeSection === 'profile' 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-secondary'
            } transition-colors duration-200`}
          >
            Profile
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`text-sm tracking-wider font-medium ${
              activeSection === 'skills' 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-secondary'
            } transition-colors duration-200`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`text-sm tracking-wider font-medium ${
              activeSection === 'projects' 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-secondary'
            } transition-colors duration-200`}
          >
            Projects
          </button>
        </nav>

        <button className="hidden md:block bg-primary text-on-primary text-sm tracking-wider font-medium px-6 py-2 rounded-full hover:bg-primary-container transition-colors duration-200">
          Contact Me
        </button>

        <button className="md:hidden text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
