import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-12 border-t border-zinc-800/20 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="mb-6">
          <h2 className={`text-2xl font-bold tracking-tight ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            Contact
          </h2>
          <p className="text-xs font-mono text-zinc-500 mt-0.5">
            Get in touch directly
          </p>
        </div>

        <div className={`p-6 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
          darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
        }`}>
          
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Email
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`text-base font-semibold font-mono hover:text-emerald-500 transition-colors ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-900'
                }`}
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopy}
                className={`p-1.5 rounded-md border text-xs transition-colors ${
                  darkMode ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-300' : 'border-zinc-200 hover:bg-zinc-100 text-zinc-700'
                }`}
                title="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#0077B5] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
