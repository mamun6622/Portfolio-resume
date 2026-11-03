import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Smartphone, 
  Search, 
  Check, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Expert' | 'Advanced'>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-500" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getLevelColor = (level: 'Expert' | 'Advanced' | 'Intermediate') => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'text-cyan-400 border-cyan-500/30';
      case 'Intermediate':
        return 'text-zinc-400 border-zinc-700';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-2">
              Technical Proficiencies
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Skills & Engineering Stack
            </h2>
            <p className={`mt-2 text-base max-w-xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Spanning high-level reactive client architectures, backend REST services, and low-level embedded hardware.
            </p>
          </div>

          {/* Search filter input */}
          <div className="flex items-center gap-3">
            <div className={`relative flex items-center rounded-xl border px-3 py-1.5 ${
              darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'
            }`}>
              <Search className="w-4 h-4 text-zinc-500 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. React, C++, ESP32)..."
                className={`bg-transparent text-xs outline-none w-48 sm:w-64 ${
                  darkMode ? 'text-zinc-200 placeholder-zinc-500' : 'text-zinc-800 placeholder-zinc-400'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-zinc-500 hover:text-zinc-300 ml-1"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const filteredSkills = category.skills.filter(s => {
              const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.experience.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesLevel = selectedLevel === 'All' || s.level === selectedLevel;
              return matchesSearch && matchesLevel;
            });

            if (filteredSkills.length === 0 && searchQuery) {
              return null;
            }

            return (
              <div
                key={category.title}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-white border-zinc-200 shadow-xs'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-800/40">
                  <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                      {category.title}
                    </h3>
                    <div className="text-xs text-zinc-500 font-mono">
                      {filteredSkills.length} competencies listed
                    </div>
                  </div>
                </div>

                {/* Skills list - Clean unboxed text layout */}
                <div className="space-y-3">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        darkMode ? 'bg-zinc-950/60 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
                      }`}
                    >
                      <div>
                        <div className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-0.5">
                          {skill.experience}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`font-mono text-[11px] font-medium ${
                          skill.level === 'Expert' 
                            ? 'text-emerald-500' 
                            : skill.level === 'Advanced'
                            ? 'text-cyan-500'
                            : 'text-zinc-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
