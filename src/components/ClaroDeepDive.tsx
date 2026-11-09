import React, { useState } from 'react';
import { 
  Bot, 
  Mic, 
  Volume2, 
  Cpu, 
  Play, 
  ExternalLink,
  Github
} from 'lucide-react';

interface ClaroDeepDiveProps {
  darkMode: boolean;
}

export const ClaroDeepDive: React.FC<ClaroDeepDiveProps> = ({ darkMode }) => {
  const [activeQuery, setActiveQuery] = useState<string>('Where is BIC?');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedAnswer, setSimulatedAnswer] = useState<{
    text: string;
    transcriptionTime: string;
    searchTime: string;
    audioTime: string;
  }>({
    text: "BIC (Business Incubation Center) is located on the 3rd floor of the Student Central Building at Tongmyong University.",
    transcriptionTime: "142ms (Faster-Whisper Tiny)",
    searchTime: "12ms (JSON Keyword Index)",
    audioTime: "185ms (pyttsx3 16kHz stream)"
  });

  const queryExamples = [
    {
      q: "Where is BIC?",
      answer: "BIC (Business Incubation Center) is located on the 3rd floor of the Student Central Building at Tongmyong University."
    },
    {
      q: "Who are you?",
      answer: "Hello! I'm CLARO, your intelligent campus companion robot at Tongmyong University. How can I help you today?"
    },
    {
      q: "Tell me about admission.",
      answer: "Tongmyong University international admission applications are processed through the Global Education Center with Korean & English tracks."
    },
    {
      q: "What programs are available?",
      answer: "Programs include AI & Computer Engineering, Robotics, International Business, Media Arts, and Global Logistics."
    }
  ];

  const handleSimulate = (q: string, ans: string) => {
    setActiveQuery(q);
    setIsSimulating(true);
    setTimeout(() => {
      setSimulatedAnswer({
        text: ans,
        transcriptionTime: `${Math.floor(120 + Math.random() * 40)}ms (Faster-Whisper Tiny)`,
        searchTime: `${Math.floor(8 + Math.random() * 10)}ms (Local JSON)`,
        audioTime: `${Math.floor(160 + Math.random() * 50)}ms (pyttsx3 stream)`
      });
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section id="claro-spotlight" className="py-20 md:py-24 border-y border-zinc-800/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-2">
            <Bot className="w-4 h-4" />
            <span>Hardware & AI Systems Spotlight</span>
            <span>·</span>
            <span>Tongmyong University, Busan</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-zinc-50' : 'text-zinc-900'
          }`}>
            CLARO V1 – Intelligent Campus Companion
          </h2>
          <p className={`mt-2 text-base max-w-2xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            A zero-cloud-fee, low-latency conversational speech robot developed on the ESP32-S3 microcontroller with edge speech-to-text and local knowledge retrieval.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Architecture & Pinout Diagram */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Hardware Pipeline Breakdown */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-500 font-mono mb-4">
                Architecture Flow: From Microphone to Audio Output
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-zinc-950/70 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-emerald-500 mb-1 font-semibold">
                    <Mic className="w-4 h-4" />
                    <span>01. Edge Audio</span>
                  </div>
                  <div className="text-zinc-400 text-[11px] leading-relaxed">
                    INMP441 I2S captures 16kHz mono WAV. ESP32-S3 buffers & streams via Wi-Fi HTTP POST.
                  </div>
                </div>

                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-zinc-950/70 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-cyan-500 mb-1 font-semibold">
                    <Cpu className="w-4 h-4" />
                    <span>02. Fast ASR + Search</span>
                  </div>
                  <div className="text-zinc-400 text-[11px] leading-relaxed">
                    FastAPI + Faster-Whisper transcribes speech; local keyword search resolves campus query in &lt;15ms.
                  </div>
                </div>

                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-zinc-950/70 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
                }`}>
                  <div className="flex items-center gap-1.5 text-purple-500 mb-1 font-semibold">
                    <Volume2 className="w-4 h-4" />
                    <span>03. Speech Playback</span>
                  </div>
                  <div className="text-zinc-400 text-[11px] leading-relaxed">
                    pyttsx3 synthesizes response audio. ESP32 plays through MAX98357A I2S 3W speaker.
                  </div>
                </div>
              </div>

              {/* Hardware Wiring Specs */}
              <div className="mt-6 pt-5 border-t border-zinc-800/40">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  ESP32-S3 Hardware Pin Mapping
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className={`p-3 rounded-lg border ${
                    darkMode ? 'bg-zinc-950/50 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="font-semibold text-emerald-400 mb-1.5 flex items-center justify-between">
                      <span>INMP441 Digital Microphone</span>
                      <span className="font-mono text-[10px] text-zinc-500">I2S Input</span>
                    </div>
                    <div className="space-y-1 font-mono text-[11px] text-zinc-400">
                      <div>BCLK → <span className="text-zinc-200 font-bold">GPIO 4</span></div>
                      <div>WS (Word Select) → <span className="text-zinc-200 font-bold">GPIO 5</span></div>
                      <div>SD (Serial Data) → <span className="text-zinc-200 font-bold">GPIO 6</span></div>
                      <div>L/R & GND → <span className="text-zinc-500">GND</span> · VDD → <span className="text-zinc-500">3.3V</span></div>
                    </div>
                  </div>

                  <div className={`p-3 rounded-lg border ${
                    darkMode ? 'bg-zinc-950/50 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="font-semibold text-cyan-400 mb-1.5 flex items-center justify-between">
                      <span>MAX98357A Audio Amplifier</span>
                      <span className="font-mono text-[10px] text-zinc-500">I2S Output</span>
                    </div>
                    <div className="space-y-1 font-mono text-[11px] text-zinc-400">
                      <div>BCLK → <span className="text-zinc-200 font-bold">GPIO 4</span> (Shared clock)</div>
                      <div>LRC (Word Select) → <span className="text-zinc-200 font-bold">GPIO 5</span></div>
                      <div>DIN (Audio In) → <span className="text-zinc-200 font-bold">GPIO 18</span></div>
                      <div>VIN → <span className="text-zinc-500">5V</span> · GND → <span className="text-zinc-500">GND</span></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Engineering Philosophy Quote */}
              <div className="mt-5 p-3 rounded-lg border border-dashed border-emerald-500/30 text-xs italic text-zinc-400">
                "Build the basic system first, verify every hardware and network component, then layer intelligence. By decoupling audio streaming, ASR, and knowledge retrieval, CLARO achieves ultra-stable edge deployment."
              </div>

            </div>

          </div>

          {/* Right: Live Interactive Audio & Query Simulator */}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-7 rounded-2xl border ${
              darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-md'
            }`}>
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
                    CLARO V1 Interactive Simulator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">FastAPI Port 8001</span>
              </div>

              {/* Query selector buttons */}
              <div className="mt-4 space-y-2">
                <label className="text-xs font-mono text-zinc-500">
                  Select a simulated voice inquiry:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {queryExamples.map((item) => (
                    <button
                      key={item.q}
                      onClick={() => handleSimulate(item.q, item.answer)}
                      className={`text-left px-3.5 py-2 rounded-lg text-xs font-medium border transition-all flex items-center justify-between ${
                        activeQuery === item.q
                          ? darkMode
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                            : 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : darkMode
                            ? 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-zinc-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Mic className="w-3.5 h-3.5 text-zinc-500" />
                        "{item.q}"
                      </span>
                      <Play className="w-3 h-3 text-emerald-500 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal-style simulated output */}
              <div className="mt-5 p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
                  <span>ESP32 Wi-Fi &rarr; FastAPI Backend</span>
                  <span>status: 200 OK</span>
                </div>

                {isSimulating ? (
                  <div className="py-6 flex flex-col items-center justify-center text-center space-y-2 text-zinc-400">
                    <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs">Processing audio stream with Faster-Whisper...</span>
                  </div>
                ) : (
                  <div className="pt-3 space-y-2.5">
                    <div>
                      <span className="text-zinc-500">User Speech: </span>
                      <span className="text-zinc-200 font-semibold">"{activeQuery}"</span>
                    </div>

                    <div>
                      <span className="text-emerald-400 font-semibold">CLARO Response:</span>
                      <p className="text-zinc-300 mt-1 pl-2 border-l-2 border-emerald-500/50 text-[11px] leading-relaxed">
                        {simulatedAnswer.text}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 grid grid-cols-2 gap-2 text-[10px] text-zinc-500">
                      <div>ASR: <span className="text-zinc-400">{simulatedAnswer.transcriptionTime}</span></div>
                      <div>Search: <span className="text-zinc-400">{simulatedAnswer.searchTime}</span></div>
                      <div className="col-span-2">TTS Output: <span className="text-zinc-400">{simulatedAnswer.audioTime}</span></div>
                    </div>
                  </div>
                )}
              </div>

              {/* View GitHub Repository */}
              <div className="mt-5 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Full ESP32 & Python code:</span>
                <a
                  href="https://github.com/mamun6622/claro-v1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>mamun6622/claro-v1</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
