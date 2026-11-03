import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 border-t transition-colors no-print text-xs ${
      darkMode ? 'border-zinc-850 text-zinc-500' : 'border-zinc-200 text-zinc-500'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-emerald-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
