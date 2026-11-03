import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2 
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generatePlainTextResume = () => {
    return `=====================================================
${PERSONAL_INFO.fullName.toUpperCase()}
${PERSONAL_INFO.title}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}
=====================================================

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

EDUCATION
• Tongmyong University (Busan, South Korea) - 2024 to Present
  Degree: Computer Science, Embedded AI & Robotics
  Highlights: Lead developer of CLARO V1 speech companion; academic coursework in Algorithms, Data Structures, Operating Systems, C++, and IoT.

ENGINEERING PROJECTS & LEADERSHIP
1. CLARO V1 – Campus Companion & AI Voice Assistant (Tongmyong University)
   Technologies: C++, ESP32-S3, Python, FastAPI, Faster-Whisper, pyttsx3, FFmpeg, I2S Audio
   • Designed edge voice assistant streaming 16kHz audio from INMP441 I2S microphone to FastAPI.
   • Integrated on-premise local speech transcription with Faster-Whisper (zero cloud API fees).
   • Engineered local JSON query engine for real-time student inquiries and campus navigation.
   • GitHub: https://github.com/mamun6622/claro-v1

2. Peak Pulse – Mountain Exploration & Fitness Tracker
   Technologies: TypeScript, React 19, Vite, Tailwind CSS, Motion, Firebase, Express
   • Built high-performance outdoor fitness dashboard tracking runner elevation and activity stats.
   • Production deployment on Vercel: https://peak-pulse-six.vercel.app
   • GitHub: https://github.com/mamun6622/peak-pulse

3. NovaBnk – Digital Banking & Fintech Mobile App
   Technologies: Dart, Flutter, Kotlin, REST APIs
   • Engineered responsive digital banking client with wallet analytics and transfer flows.
   • GitHub: https://github.com/mamun6622/novabnk

4. Shop62 – Cross-Platform E-Commerce Mobile App
   Technologies: Flutter, Dart, Clean Architecture
   • Mobile catalog browsing, shopping cart state management, and streamlined checkout.
   • GitHub: https://github.com/mamun6622/shop62

TECHNICAL SKILLS
• Languages: TypeScript, JavaScript, Python, C++, Dart, Kotlin, SQL, HTML/CSS
• Frontend & Web: React 19, Next.js, Vite, Tailwind CSS, Motion/Framer
• Backend & Systems: Node.js, Express, FastAPI, Uvicorn, FFmpeg, REST APIs
• Mobile: Flutter, Dart, Android Kotlin
• Embedded & Hardware: ESP32-S3, Arduino, I2S Audio (INMP441, MAX98357A), Robotics
• Cloud & Tools: Git, GitHub, Vercel, Firebase, Linux, Bash
=====================================================`;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generatePlainTextResume());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-zinc-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full max-w-4xl max-h-[95vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-100' : 'bg-white border-zinc-200 text-zinc-900'
        }`}
      >
        {/* Top Control Bar (Hidden during Print) */}
        <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-zinc-200">
              Curriculum Vitae / Resume Viewer
            </span>
            <span className="text-xs text-emerald-500 font-mono">
              · ATS Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              title="Copy plain-text resume for job application portals"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Plaintext'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-zinc-900 print:p-0 print:m-0 print:overflow-visible">
          
          {/* Resume Document Header */}
          <header className="border-b-2 border-zinc-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-base font-semibold text-emerald-700 mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              <div className="text-xs text-zinc-600 sm:text-right font-mono space-y-0.5">
                <div>{PERSONAL_INFO.location}</div>
                <div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-900 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-700 hover:underline">
                    linkedin.com/in/md-mamun-mia
                  </a>
                </div>
                <div>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-700 hover:underline">
                    github.com/{PERSONAL_INFO.githubUsername}
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              Software engineer currently studying and building at Tongmyong University in Busan, South Korea. Passionate about architecting high-performance web applications, resilient embedded AI hardware systems, and scalable cross-platform mobile apps. Proven leadership in hardware-software integration through the CLARO V1 project and web applications like Peak Pulse.
            </p>
          </section>

          {/* Section: Education */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-zinc-900">
                    Tongmyong University (동명대학교)
                  </span>
                  <span className="font-mono text-zinc-600 text-xs">
                    Busan, South Korea · 2024 – Present
                  </span>
                </div>
                <div className="text-xs text-zinc-700 italic">
                  Undergraduate Studies in Computer Science, Embedded Artificial Intelligence & Robotics
                </div>
                <p className="text-xs text-zinc-600 mt-1">
                  Lead student engineer for campus AI initiatives. Coursework: Data Structures & Algorithms, Systems Programming, Computer Vision, Embedded Systems, and Modern Software Engineering.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Engineering Projects & Systems */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Engineering Projects & Technical Leadership
            </h2>

            <div className="space-y-4">
              
              {/* CLARO V1 */}
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-zinc-900">
                    CLARO V1 – Intelligent Campus Companion Robot
                  </span>
                  <span className="font-mono text-zinc-600 text-xs">
                    Tongmyong University · Lead Developer
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-700 mb-1">
                  ESP32-S3 · C++ · Python · FastAPI · Faster-Whisper · FFmpeg · I2S Audio Pipeline
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                  <li>
                    Architected an end-to-end voice assistant hardware platform streaming 16kHz WAV audio over Wi-Fi from an INMP441 I2S microphone to a Python FastAPI backend.
                  </li>
                  <li>
                    Deployed on-premise local speech-to-text with Faster-Whisper, eliminating external cloud API latency and recurring costs.
                  </li>
                  <li>
                    Structured a fast local JSON keyword knowledge engine for instant campus queries (admissions, facilities, schedules).
                  </li>
                  <li>
                    Implemented automated text-to-speech generation via pyttsx3 and playback via MAX98357A I2S amplifier and speaker.
                  </li>
                </ul>
              </div>

              {/* Peak Pulse */}
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-zinc-900">
                    Peak Pulse – Mountain Exploration & Fitness Tracker
                  </span>
                  <span className="font-mono text-zinc-600 text-xs">
                    Full-Stack Web Application · Live on Vercel
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-700 mb-1">
                  TypeScript · React 19 · Vite · Tailwind CSS · Motion · Firebase · Express
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                  <li>
                    Engineered an outdoor fitness tracking web application providing real-time trail discovery, running metrics, and workout logs.
                  </li>
                  <li>
                    Designed a mobile-first responsive user interface with fluid micro-interactions and smooth elevation charts using Motion.
                  </li>
                  <li>
                    Implemented automated CI/CD pipeline deployed on Vercel with near-perfect Lighthouse performance benchmarks.
                  </li>
                </ul>
              </div>

              {/* NovaBnk */}
              <div>
                <div className="flex items-baseline justify-between text-xs sm:text-sm">
                  <span className="font-bold text-zinc-900">
                    NovaBnk – Digital Banking & Mobile Wallet
                  </span>
                  <span className="font-mono text-zinc-600 text-xs">
                    Mobile Fintech Application
                  </span>
                </div>
                <div className="text-[11px] font-mono text-emerald-700 mb-1">
                  Flutter · Dart · Kotlin · State Management · REST APIs
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-zinc-700 space-y-1">
                  <li>
                    Developed cross-platform mobile banking client featuring multi-currency account management, instant peer transfers, and categorized analytics.
                  </li>
                  <li>
                    Engineered strict client-side validation logic and reactive balance updates for secure transaction flows.
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Technical Core Competencies
            </h2>
            
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div>
                <span className="font-bold text-zinc-900">Programming Languages: </span>
                TypeScript, JavaScript (ES6+), Python, C++, C, Dart, Kotlin, SQL, HTML5, CSS3.
              </div>
              <div>
                <span className="font-bold text-zinc-900">Web & Backend: </span>
                React 19, Next.js, Node.js, Express, FastAPI, RESTful APIs, Tailwind CSS, Motion/Framer.
              </div>
              <div>
                <span className="font-bold text-zinc-900">Embedded Systems & AI: </span>
                ESP32-S3, Arduino IDE, I2S Audio Protocols, INMP441 Microphone, MAX98357A Amplifier, Faster-Whisper, pyttsx3, FFmpeg.
              </div>
              <div>
                <span className="font-bold text-zinc-900">Mobile & Tools: </span>
                Flutter, Android Kotlin, Git/GitHub, Vercel, Firebase/Firestore, Linux, Bash.
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <footer className="pt-4 border-t border-zinc-300 text-center text-[11px] text-zinc-500 font-mono">
            Md Mamun Mia · Portfolio: https://github.com/mamun6622 · References and code samples available upon request.
          </footer>

        </div>
      </div>
    </div>
  );
};
