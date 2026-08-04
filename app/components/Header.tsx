'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getActiveSection = () => {
    if (pathname === '/') return 'profile';
    if (pathname === '/skills') return 'skills';
    if (pathname.startsWith('/projects')) return 'projects';
    return 'profile';
  };

  const activeSection = getActiveSection();

  return (
    <header className="bg-canvas sticky top-0 z-50 border-b border-ink w-full flex-shrink-0">
      <div className="flex justify-between items-center w-full px-5 sm:px-8 py-4 mx-auto">
        <Link
          href="/"
          className="text-[24px] uppercase tracking-widest font-bold text-ink hover:opacity-80 transition-opacity"
        >
          Iqbaal
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className={`text-sm uppercase tracking-widest font-semibold relative transition-colors duration-200 ${
              activeSection === 'profile'
                ? 'text-ink'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Profile
            {activeSection === 'profile' && (
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-ink"></div>
            )}
          </Link>
          <Link
            href="/skills"
            className={`text-sm uppercase tracking-widest font-semibold relative transition-colors duration-200 ${
              activeSection === 'skills'
                ? 'text-ink'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Skills
            {activeSection === 'skills' && (
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-ink"></div>
            )}
          </Link>
          <Link
            href="/projects"
            className={`text-sm uppercase tracking-widest font-semibold relative transition-colors duration-200 ${
              activeSection === 'projects'
                ? 'text-ink'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Projects
            {activeSection === 'projects' && (
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-ink"></div>
            )}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <button className="bg-ink text-canvas text-sm uppercase tracking-widest font-bold px-6 py-2 border border-ink hover:bg-canvas hover:text-ink transition-colors duration-200">
            Contact Me
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4 text-ink">
          <ThemeSwitcher />
          <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-canvas border-b border-ink px-5 sm:px-8 py-6 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest font-bold ${activeSection === 'profile' ? 'text-ink' : 'text-ink-muted'}`}
          >
            Profile
          </Link>
          <Link
            href="/skills"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest font-bold ${activeSection === 'skills' ? 'text-ink' : 'text-ink-muted'}`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest font-bold ${activeSection === 'projects' ? 'text-ink' : 'text-ink-muted'}`}
          >
            Projects
          </Link>
          <button className="bg-ink text-canvas border border-ink text-sm uppercase tracking-widest font-bold px-6 py-3 hover:bg-canvas hover:text-ink transition-colors duration-200 w-full text-center mt-4">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
}
