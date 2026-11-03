import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-colors no-print ${
      darkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/40">
          <div>
            <div className={`text-base font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
              {PERSONAL_INFO.fullName}
            </div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">
              Tongmyong University · Busan, South Korea · {PERSONAL_INFO.title}
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#claro-spotlight" className="hover:text-emerald-500 transition-colors">CLARO Robot</a>
            <a href="#github-repos" className="hover:text-emerald-500 transition-colors">GitHub</a>
            <button onClick={onOpenResume} className="hover:text-emerald-500 transition-colors">Resume</button>
            <button onClick={onOpenTerminal} className="font-mono hover:text-emerald-500 transition-colors">CLI Terminal</button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border text-xs transition-colors ml-2 ${
                darkMode ? 'border-zinc-800 hover:bg-zinc-900 text-zinc-300' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-700'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Engineered with React 19, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
