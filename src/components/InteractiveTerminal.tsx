import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  darkMode: boolean;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  darkMode
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-zinc-300">
          <p className="text-emerald-400 font-bold">
            Mamun OS [Version 1.0.4] · Md Mamun Mia Interactive Shell
          </p>
          <p className="text-xs text-zinc-400">
            Type <span className="text-emerald-400 font-semibold">'help'</span> to see available commands or click the shortcut buttons below.
          </p>
        </div>
      )
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const commandList = ['help', 'bio', 'projects', 'skills', 'claro', 'contact', 'resume', 'clear'];

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-zinc-300">
              <div><span className="text-emerald-400 font-bold">bio</span> - Overview & academic background</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Engineering projects & live URLs</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Full technical skill matrix</div>
              <div><span className="text-emerald-400 font-bold">claro</span> - CLARO V1 ESP32 AI Companion details</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - LinkedIn, GitHub, Email, Location</div>
              <div><span className="text-emerald-400 font-bold">resume</span> - Open printable & ATS-compliant CV</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p><span className="text-emerald-400 font-bold">Name:</span> {PERSONAL_INFO.fullName}</p>
            <p><span className="text-emerald-400 font-bold">Title:</span> {PERSONAL_INFO.title}</p>
            <p><span className="text-emerald-400 font-bold">University:</span> {PERSONAL_INFO.institution} (Busan, South Korea)</p>
            <p><span className="text-emerald-400 font-bold">Focus:</span> {PERSONAL_INFO.tagline}</p>
            <p className="text-zinc-400 text-[11px] leading-relaxed">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-3 text-xs">
            <p className="text-emerald-400 font-bold">Featured Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="pl-2 border-l border-emerald-500/40 space-y-0.5">
                <div className="text-zinc-100 font-semibold">{p.title}</div>
                <div className="text-zinc-400 text-[11px]">{p.tagline}</div>
                <div className="text-zinc-500 text-[10px] font-mono">
                  Stack: {p.technologies.join(', ')}
                </div>
                {p.liveUrl && (
                  <div className="text-emerald-400 text-[10px]">Live Demo: {p.liveUrl}</div>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-emerald-400 font-bold">Core Competencies:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <span className="text-zinc-200 font-semibold">{cat.title}: </span>
                <span className="text-zinc-400">{cat.skills.map(s => s.name).join(' · ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'claro':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">CLARO V1 – Intelligent Campus Companion Robot</p>
            <p className="text-zinc-400">Location: Tongmyong University, Busan, South Korea</p>
            <p>• Hardware: ESP32-S3 microcontroller, INMP441 I2S microphone, MAX98357A I2S amplifier, 4Ω 3W speaker.</p>
            <p>• Backend: Python FastAPI, Faster-Whisper (local edge transcription), pyttsx3 speech synthesis.</p>
            <p>• Knowledge: Local JSON directory search for instant campus answers (zero cloud latency/costs).</p>
            <p className="text-emerald-400 font-mono text-[11px]">Repository: https://github.com/mamun6622/claro-v1</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Direct Coordinates:</p>
            <p>• Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 hover:underline">{PERSONAL_INFO.email}</a></p>
            <p>• LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.linkedin}</a></p>
            <p>• GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-200 hover:underline">{PERSONAL_INFO.github}</a></p>
            <p>• Location: Busan, South Korea · KST (UTC+9)</p>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        output = (
          <p className="text-xs text-emerald-400">
            Opened interactive ATS resume modal. You can review, customize, or trigger print/PDF export!
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-xs text-rose-400">
            Command not recognized: '{rawCmd}'. Type <span className="text-emerald-400 underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</span> for a list of commands.
          </div>
        );
    }

    setHistory(prev => [...prev, { command: rawCmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-3xl h-[560px] rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl flex flex-col overflow-hidden font-mono text-sm">
        
        {/* Terminal Title Bar */}
        <div className="bg-zinc-900/90 px-4 py-3 border-b border-zinc-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-semibold text-zinc-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" />
              mamun@tongmyong-busan:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Suggestions */}
        <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/80 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[10px] uppercase text-zinc-500 mr-1">Quick:</span>
          {commandList.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-zinc-800/70 hover:bg-emerald-500/20 hover:text-emerald-400 text-zinc-300 text-[11px] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Content Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command && (
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-zinc-500">~</span>
                  <span className="text-zinc-200 font-semibold">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <div className="p-3 bg-zinc-900/60 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-emerald-500 font-bold text-sm">➜</span>
          <span className="text-zinc-500 text-xs font-mono">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-xs font-mono text-zinc-100 outline-none placeholder-zinc-600"
          />
          <button
            onClick={() => handleCommand(input)}
            disabled={!input.trim()}
            className="p-1 rounded text-zinc-500 hover:text-emerald-400 disabled:opacity-30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
