'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
    <header className="bg-black sticky top-0 z-50 border-b border-white w-full flex-shrink-0">
      <div className="flex justify-between items-center w-full px-5 sm:px-8 py-4 mx-auto">
        <Link
          href="/"
          className="text-[24px] uppercase tracking-widest font-bold text-white hover:opacity-80 transition-opacity"
        >
          Iqbaal
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className={`text-sm uppercase tracking-widest font-semibold relative transition-colors duration-200 ${
              activeSection === 'profile'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Profile
            {activeSection === 'profile' && (
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></div>
            )}
          </Link>
          <Link
            href="/skills"
            className={`text-sm uppercase tracking-widest font-semibold relative transition-colors duration-200 ${
              activeSection === 'skills'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Skills
            {activeSection === 'skills' && (
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></div>
            )}
          </Link>
          <Link
            href="/projects"
            className={`text-sm uppercase tracking-widest font-semibold relative transition-colors duration-200 ${
              activeSection === 'projects'
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Projects
            {activeSection === 'projects' && (
              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"></div>
            )}
          </Link>
        </nav>

        <button className="hidden md:block bg-white text-black text-sm uppercase tracking-widest font-bold px-6 py-2 border border-white hover:bg-black hover:text-white transition-colors duration-200">
          Contact Me
        </button>

        <button
          className="md:hidden text-white"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white px-5 sm:px-8 py-6 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest font-bold ${activeSection === 'profile' ? 'text-white' : 'text-gray-400'}`}
          >
            Profile
          </Link>
          <Link
            href="/skills"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest font-bold ${activeSection === 'skills' ? 'text-white' : 'text-gray-400'}`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-widest font-bold ${activeSection === 'projects' ? 'text-white' : 'text-gray-400'}`}
          >
            Projects
          </Link>
          <button className="bg-white text-black border border-white text-sm uppercase tracking-widest font-bold px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200 w-full text-center mt-4">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
}
