'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const getActiveSection = () => {
    if (pathname === '/') return 'profile';
    if (pathname === '/skills') return 'skills';
    if (pathname === '/projects') return 'projects';
    return 'profile';
  };

  const activeSection = getActiveSection();

  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 w-full flex-shrink-0">
      <div className="flex justify-between items-center w-full px-8 py-4 mx-auto">
        <Link 
          href="/"
          className="text-[32px] leading-[1.3] font-semibold text-primary font-[family-name:var(--font-family-display)] hover:opacity-80 transition-opacity"
        >
          Iqbaal
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link 
            href="/"
            className={`text-sm tracking-wider font-medium relative transition-colors duration-200 ${
              activeSection === 'profile' 
                ? 'text-primary font-bold' 
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Profile
            {activeSection === 'profile' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </Link>
          <Link 
            href="/skills"
            className={`text-sm tracking-wider font-medium relative transition-colors duration-200 ${
              activeSection === 'skills' 
                ? 'text-primary font-bold' 
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Skills
            {activeSection === 'skills' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </Link>
          <Link 
            href="/projects"
            className={`text-sm tracking-wider font-medium relative transition-colors duration-200 ${
              activeSection === 'projects' 
                ? 'text-primary font-bold' 
                : 'text-on-surface-variant hover:text-secondary'
            }`}
          >
            Projects
            {activeSection === 'projects' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </Link>
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
