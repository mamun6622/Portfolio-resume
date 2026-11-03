import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Trigger direct mailto with user's content
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-2">
            Get in Touch
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-zinc-50' : 'text-zinc-900'
          }`}>
            Let's Build Something Exceptional
          </h2>
          <p className={`mt-3 text-base ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Open to software engineering opportunities, full-stack development roles, and robotics/embedded AI collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card */}
            <div className={`p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className={`text-sm sm:text-base font-bold font-mono hover:text-emerald-500 transition-colors ${
                        darkMode ? 'text-zinc-100' : 'text-zinc-900'
                      }`}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                    darkMode
                      ? 'border-zinc-700 hover:bg-zinc-800 text-zinc-300'
                      : 'border-zinc-200 hover:bg-zinc-100 text-zinc-700'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-500">
                      <Check className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Copied</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <p className="text-xs text-zinc-500">
                Preferred for job inquiries, technical discussions, and formal introductions.
              </p>
            </div>

            {/* LinkedIn Profile Card */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl border flex items-center justify-between group transition-all ${
                darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-[#0077B5]/60' : 'bg-white border-zinc-200 hover:border-[#0077B5]/60 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0077B5]/10 text-[#0077B5]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase">
                    Professional Network
                  </div>
                  <div className={`text-sm sm:text-base font-bold group-hover:text-[#0077B5] transition-colors ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    LinkedIn Profile
                  </div>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#0077B5] transition-colors" />
            </a>

            {/* GitHub Profile Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl border flex items-center justify-between group transition-all ${
                darkMode ? 'bg-zinc-900/50 border-zinc-800 hover:border-emerald-500/60' : 'bg-white border-zinc-200 hover:border-emerald-500/60 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-800 text-zinc-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-500 uppercase">
                    Open Source & Code
                  </div>
                  <div className={`text-sm sm:text-base font-bold group-hover:text-emerald-500 transition-colors ${
                    darkMode ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    github.com/{PERSONAL_INFO.githubUsername}
                  </div>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Location & Timezone Card */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-xs'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold">
                  {PERSONAL_INFO.location}
                </div>
              </div>
              <div className="text-xs text-zinc-500 space-y-1">
                <div>Affiliation: {PERSONAL_INFO.institution}</div>
                <div>Timezone: {PERSONAL_INFO.timezone} · Readily available for remote & onsite roles</div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              darkMode ? 'bg-zinc-900/70 border-zinc-800' : 'bg-white border-zinc-200 shadow-md'
            }`}>
              <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Fill out the note below to open your preferred mail client with a pre-filled drafted message directly to {PERSONAL_INFO.fullName}.
              </p>

              {submitted && (
                <div className="p-4 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Mail client opened with your message. Thank you for connecting!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-emerald-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                        darkMode
                          ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Software Engineering Role / Project Inquiry"
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                      darkMode
                        ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Mamun, I came across your portfolio and wanted to reach out regarding..."
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                      darkMode
                        ? 'bg-zinc-950 border-zinc-800 text-zinc-100 focus:border-emerald-500'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-emerald-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 active:scale-95 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
