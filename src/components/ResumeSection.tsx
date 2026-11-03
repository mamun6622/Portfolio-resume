import React from 'react';
import { Printer, GraduationCap, Code2, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeSectionProps {
  darkMode: boolean;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ darkMode }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-12 border-t border-zinc-800/20 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header with Print action */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className={`text-2xl font-bold tracking-tight ${
              darkMode ? 'text-zinc-100' : 'text-zinc-900'
            }`}>
              Resume
            </h2>
            <p className="text-xs font-mono text-zinc-500 mt-0.5">
              Summary of education, technical skills & projects
            </p>
          </div>

          <button
            onClick={handlePrint}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors no-print ${
              darkMode
                ? 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:border-zinc-700'
                : 'border-zinc-200 bg-white text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 shadow-2xs'
            }`}
          >
            <Printer className="w-3.5 h-3.5 text-emerald-500" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Clean Printable Resume Layout */}
        <div className={`p-6 sm:p-8 rounded-xl border space-y-8 ${
          darkMode ? 'bg-zinc-900/30 border-zinc-800' : 'bg-white border-zinc-200'
        } print:p-0 print:border-none print:bg-transparent`}>
          
          {/* Header in Print */}
          <div className="hidden print:block pb-4 border-b border-zinc-300">
            <h1 className="text-2xl font-bold text-zinc-900">{PERSONAL_INFO.fullName}</h1>
            <p className="text-sm text-zinc-600 font-medium">{PERSONAL_INFO.title} · {PERSONAL_INFO.location}</p>
            <p className="text-xs text-zinc-500 font-mono mt-1">
              Email: {PERSONAL_INFO.email} · GitHub: {PERSONAL_INFO.github} · LinkedIn: {PERSONAL_INFO.linkedin}
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-500 mb-3 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline justify-between text-sm">
                <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  Tongmyong University (동명대학교)
                </span>
                <span className="text-xs text-zinc-500 font-mono">Busan, South Korea</span>
              </div>
              <p className="text-xs text-zinc-500">
                Bachelor of Science in AI & Computer Engineering (Student, 2024 – Present)
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-500 mb-3 font-semibold">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((skillGroup) => (
                <div 
                  key={skillGroup.title}
                  className={`p-3 rounded-lg border ${
                    darkMode ? 'bg-zinc-950/40 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200/80'
                  }`}
                >
                  <div className="font-semibold text-zinc-400 mb-1 font-mono text-[11px]">
                    {skillGroup.title}
                  </div>
                  <div className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>
                    {skillGroup.skills.map(s => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-500 mb-3 font-semibold">
              <FolderGit2 className="w-4 h-4" />
              <span>Featured Projects</span>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-semibold text-sm ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      {proj.title}
                    </span>
                    <span className="text-zinc-500 font-mono text-[11px]">
                      {proj.category}
                    </span>
                  </div>
                  <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-zinc-500 pt-0.5">
                    Stack: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
