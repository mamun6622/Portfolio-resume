import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  FileText, 
  ExternalLink,
  Sparkles,
  Terminal,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume, onOpenTerminal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          darkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
        }`}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Line - Clean unboxed text with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-emerald-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
              <span className="text-zinc-500" aria-hidden="true">·</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                Busan, South Korea
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                darkMode ? 'text-zinc-50' : 'text-zinc-900'
              }`}>
                Hi, I'm <span className="text-emerald-500">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className={`mt-3 text-lg sm:text-xl font-medium tracking-tight ${
                darkMode ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Paragraph Description */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              {PERSONAL_INFO.bio}
            </p>

            {/* Institution Highlight - Clean editorial layout */}
            <div className={`p-4 rounded-xl border flex items-center gap-4 transition-colors ${
              darkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
            }`}>
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <div className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  Tongmyong University (동명대학교)
                </div>
                <div className="text-xs text-zinc-500">
                  Busan, South Korea · AI, Computer Science & Embedded Robotics
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium text-sm hover:bg-emerald-400 transition-all active:scale-95 shadow-sm"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition-all active:scale-95 ${
                  darkMode
                    ? 'border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white'
                    : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>Interactive Resume & CV</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs sm:text-sm font-mono transition-all ${
                  darkMode
                    ? 'border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-emerald-400'
                    : 'border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-emerald-600'
                }`}
                title="Launch developer terminal"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI Mode</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-5 text-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors hover:text-emerald-500 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 font-medium transition-colors hover:text-emerald-500 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`inline-flex items-center gap-1.5 font-medium transition-colors hover:text-emerald-500 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Card / Real Profile & Architecture Preview */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-2xl border p-6 lg:p-8 backdrop-blur-sm shadow-xl transition-all ${
              darkMode ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white border-zinc-200'
            }`}>
              
              {/* Profile Avatar & Header */}
              <div className="flex items-center gap-5 pb-6 border-b border-zinc-800/40">
                <div className="relative">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.fullName}
                    className="w-20 h-20 rounded-xl object-cover ring-2 ring-emerald-500/50 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-zinc-950 p-1 rounded-full text-xs" title="Active Developer">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                    {PERSONAL_INFO.fullName}
                  </h3>
                  <div className="text-xs font-mono text-emerald-500">
                    @{PERSONAL_INFO.githubUsername}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">
                    Student & Engineer · Tongmyong University
                  </div>
                </div>
              </div>

              {/* Engineering Focus Matrix */}
              <div className="py-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  Primary Domains
                </div>

                <div className="space-y-3">
                  <div className={`p-3 rounded-lg border transition-colors ${
                    darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                        Embedded AI & Robotics
                      </span>
                      <span className="font-mono text-emerald-500">ESP32 · C++ · Whisper</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      Lead builder of CLARO V1 speech assistant with I2S audio & FastAPI backend.
                    </p>
                  </div>

                  <div className={`p-3 rounded-lg border transition-colors ${
                    darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                        Full-Stack Web Engineering
                      </span>
                      <span className="font-mono text-emerald-500">React 19 · TS · Node</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      Peak Pulse fitness tracking platform live on Vercel with responsive motion UI.
                    </p>
                  </div>

                  <div className={`p-3 rounded-lg border transition-colors ${
                    darkMode ? 'bg-zinc-950/60 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                        Cross-Platform Mobile Apps
                      </span>
                      <span className="font-mono text-emerald-500">Flutter · Dart · Kotlin</span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">
                      NovaBnk digital banking application and Shop62 mobile store.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="pt-4 border-t border-zinc-800/40 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">Direct Contact:</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-emerald-500 hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
