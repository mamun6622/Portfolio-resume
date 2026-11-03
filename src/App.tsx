/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ClaroDeepDive } from './components/ClaroDeepDive';
import { LiveGitHubSection } from './components/LiveGitHubSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('mamun_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mamun_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#09090b';
      document.body.style.color = '#f4f4f5';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fafafa';
      document.body.style.color = '#18181b';
    }
  }, [darkMode]);

  // Global keyboard shortcuts (Ctrl+K or ` for Terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === '`' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Navigation Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Single Page Content with ALL Features */}
      <main>
        {/* Hero Section */}
        <Hero 
          darkMode={darkMode}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* 1. Projects Menu Feature */}
        <ProjectsSection darkMode={darkMode} />

        {/* 2. CLARO AI Robot Menu Feature */}
        <ClaroDeepDive darkMode={darkMode} />

        {/* 3. Live Repos Menu Feature */}
        <LiveGitHubSection darkMode={darkMode} />

        {/* 4. Skills Menu Feature */}
        <SkillsSection darkMode={darkMode} />

        {/* 5. Experience & Education Menu Feature */}
        <ExperienceEducation darkMode={darkMode} />

        {/* On-Page Resume Quick Summary & Print */}
        <ResumeSection darkMode={darkMode} />

        {/* 6. Contact Menu Feature */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer 
        darkMode={darkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Full ATS Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        darkMode={darkMode}
      />

      {/* Interactive Developer CLI Terminal */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeModalOpen(true);
        }}
        darkMode={darkMode}
      />
    </div>
  );
}
