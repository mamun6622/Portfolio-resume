import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  X,
  Sparkles,
  Terminal
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  darkMode: boolean;
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<'All' | 'Web & Full-Stack' | 'Embedded & AI' | 'Mobile'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Embedded & AI':
        return <Cpu className="w-4 h-4 text-emerald-500" />;
      case 'Web & Full-Stack':
        return <Globe className="w-4 h-4 text-cyan-500" />;
      case 'Mobile':
        return <Smartphone className="w-4 h-4 text-purple-500" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-2">
              Featured Engineering
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Projects & Systems
            </h2>
            <p className={`mt-2 text-base max-w-xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              End-to-end applications designed, built, and deployed—from embedded speech hardware to cloud web apps.
            </p>
          </div>

          {/* Interactive Category Filter - Clean segmented controls */}
          <div className={`inline-flex p-1 rounded-xl border self-start md:self-auto ${
            darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
          }`}>
            {(['All', 'Embedded & AI', 'Web & Full-Stack', 'Mobile'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === category
                    ? darkMode
                      ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                      : 'bg-white text-emerald-600 shadow-xs'
                    : darkMode
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-emerald-500/50 hover:shadow-lg ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/90' : 'bg-white border-zinc-200'
              }`}
            >
              <div>
                {/* Header Metadata - Zero-pill clean text separator */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="font-medium text-zinc-400">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role}</span>
                  </div>
                  {project.institutionOrContext && (
                    <span className="font-mono text-zinc-500 text-[11px] truncate max-w-[160px]">
                      {project.institutionOrContext}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold tracking-tight mb-2 group-hover:text-emerald-500 transition-colors ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-900'
                }`}>
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className={`text-sm font-medium mb-4 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {project.tagline}
                </p>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer: Tech Tags and Action Buttons */}
              <div className="pt-6 border-t border-zinc-800/40 space-y-4">
                
                {/* Tech stack items - Clean typographic list with subtle border */}
                <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded text-[11px] ${
                        darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[11px] text-zinc-500 self-center">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Actions row */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-emerald-500 ${
                        darkMode ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                  >
                    <span>Architecture & Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl relative ${
              darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-2">
                <span>{activeModalProject.category}</span>
                <span>·</span>
                <span>{activeModalProject.role}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6 text-sm">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  System Overview
                </h4>
                <p className={`leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {activeModalProject.description}
                </p>
              </div>

              {/* Architecture Steps if available */}
              {activeModalProject.architecture && (
                <div className={`p-5 rounded-xl border ${
                  darkMode ? 'bg-zinc-950/70 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Data Flow & System Pipeline
                  </h4>
                  <ol className="space-y-2">
                    {activeModalProject.architecture.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs">
                        <span className="font-mono text-emerald-500 font-bold shrink-0">
                          0{idx + 1}.
                        </span>
                        <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>

                  {activeModalProject.architecture.hardware && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/40">
                      <div className="text-xs font-mono text-zinc-500 mb-2">
                        Hardware & Embedded Components:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                        {activeModalProject.architecture.hardware.map((hw, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-zinc-400">
                            <Cpu className="w-3 h-3 text-emerald-500 shrink-0" />
                            <span>{hw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Key Technical Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Key Technical Achievements
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                        darkMode ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Source</span>
                  </a>

                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Live Application</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 text-xs sm:text-sm"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
