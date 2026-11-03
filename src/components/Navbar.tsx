import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Terminal as TerminalIcon
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResume = () => {}, 
  onOpenTerminal = () => {}, 
  darkMode, 
  setDarkMode 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'CLARO AI Robot', href: '#claro-spotlight' },
    { name: 'Live Repos', href: '#github-repos' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        isScrolled
          ? darkMode
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-zinc-200/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-emerald-500 focus-visible:outline-2 rounded-lg"
          >
            <div className="relative">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.fullName}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-200"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (img.src !== PERSONAL_INFO.fallbackAvatarUrl) {
                    img.src = PERSONAL_INFO.fallbackAvatarUrl;
                  }
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-zinc-950"></span>
            </div>
            <div>
              <span className={`font-semibold tracking-tight text-sm sm:text-base ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                {PERSONAL_INFO.fullName}
              </span>
              <span className="hidden sm:block text-xs text-zinc-500 font-mono">
                AI & Computer Engineering Student
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Terminal quick launcher */}
            <button
              onClick={onOpenTerminal}
              title="Open Developer Terminal"
              className={`p-2 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                darkMode
                  ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-emerald-400'
                  : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-emerald-600'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-amber-400'
                  : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-amber-600'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 active:scale-95 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Interactive CV</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode ? 'border-zinc-800 text-zinc-300' : 'border-zinc-200 text-zinc-700'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                darkMode ? 'border-zinc-800 text-zinc-300' : 'border-zinc-200 text-zinc-700'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`mt-3 py-4 px-4 rounded-xl border md:hidden space-y-3 ${
              darkMode ? 'bg-zinc-900/95 border-zinc-800' : 'bg-white/95 border-zinc-200 shadow-lg'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors ${
                    darkMode ? 'text-zinc-200' : 'text-zinc-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-zinc-950"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className={`w-full flex items-center justify-center gap-2 py-2 text-sm font-mono rounded-lg border ${
                  darkMode ? 'border-zinc-700 text-zinc-300' : 'border-zinc-300 text-zinc-700'
                }`}
              >
                <TerminalIcon className="w-4 h-4" />
                <span>Launch Interactive Terminal</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
