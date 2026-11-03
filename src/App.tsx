/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('mamun_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('mamun_portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#09090b';
      document.body.style.color = '#f4f4f5';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#18181b';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-150 ${
      darkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-white text-zinc-900'
    }`}>
      {/* Minimal Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Single Page Content */}
      <main>
        <Hero darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <ResumeSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Minimal Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
