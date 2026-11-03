import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ArrowUpRight 
} from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ExperienceEducationProps {
  darkMode: boolean;
}

export const ExperienceEducation: React.FC<ExperienceEducationProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Education' | 'Engineering' | 'Research'>('All');

  const filteredItems = activeTab === 'All' 
    ? EXPERIENCE_ITEMS 
    : EXPERIENCE_ITEMS.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-2">
              Career & Academia
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Education & Experience
            </h2>
            <p className={`mt-2 text-base max-w-xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Academic foundation at Tongmyong University, hands-on hardware leadership, and web engineering.
            </p>
          </div>

          {/* Segmented Filter */}
          <div className={`inline-flex p-1 rounded-xl border self-start md:self-auto ${
            darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'
          }`}>
            {(['All', 'Engineering', 'Research', 'Education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === tab
                    ? darkMode
                      ? 'bg-zinc-800 text-emerald-400 shadow-sm'
                      : 'bg-white text-emerald-600 shadow-xs'
                    : darkMode
                      ? 'text-zinc-400 hover:text-zinc-200'
                      : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-800/80 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-zinc-950 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
              </div>

              {/* Item Card */}
              <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                darkMode ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-white border-zinc-200 shadow-xs'
              }`}>
                
                {/* Meta Header - Zero-pill clean text separator */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 mb-2">
                  <div className="flex items-center gap-2">
                    {item.type === 'Education' ? (
                      <GraduationCap className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-emerald-500" />
                    )}
                    <span className="font-semibold text-zinc-400">{item.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {item.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 font-mono text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className={`text-xl font-bold tracking-tight mb-3 ${
                  darkMode ? 'text-zinc-100' : 'text-zinc-900'
                }`}>
                  {item.role}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}>
                  {item.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {item.bulletPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="pt-4 border-t border-zinc-800/40 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                        darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
