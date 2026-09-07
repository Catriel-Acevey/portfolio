'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileDown, Menu, X } from 'lucide-react';
import { userProfile } from '@/data/portfolioData';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 font-bold tracking-tight text-zinc-100 hover:text-white transition-colors group"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-mono font-semibold text-zinc-200 group-hover:border-zinc-500 group-hover:bg-zinc-700/50 transition-all">
            CA
          </span>
          <span className="hidden sm:inline font-medium text-sm text-zinc-300 group-hover:text-zinc-100">
            {userProfile.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button: Direct CV Download */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={userProfile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all shadow-xs"
            aria-label="View CV"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span>View CV</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-zinc-100 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800/80">
            <a
              href={userProfile.cvUrl}
              download="CV_Catriel_Acevey.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
