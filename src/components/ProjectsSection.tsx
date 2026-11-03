import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const getLanguageColor = (lang: string) => {
    switch (lang) {
      case 'TypeScript':
        return 'bg-blue-500';
      case 'C++':
        return 'bg-pink-500';
      case 'Kotlin':
        return 'bg-purple-500';
      case 'Dart':
        return 'bg-cyan-500';
      default:
        return 'bg-emerald-500';
    }
  };

  return (
    <section id="projects" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="mb-8">
          <h2 className={`text-2xl font-bold tracking-tight ${
            darkMode ? 'text-zinc-100' : 'text-zinc-900'
          }`}>
            Projects
          </h2>
          <p className="text-xs font-mono text-zinc-500 mt-1">
            Repositories directly from GitHub (@mamun6622)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`p-5 rounded-xl border flex flex-col justify-between transition-colors ${
                darkMode 
                  ? 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700' 
                  : 'bg-white border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className={`font-semibold text-base ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <span className={`w-2 h-2 rounded-full ${getLanguageColor(project.language)}`} />
                    <span>{project.language}</span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                        darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-zinc-800/30 dark:border-zinc-800 flex items-center justify-between text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-emerald-500 transition-colors font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
