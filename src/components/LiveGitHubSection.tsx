import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Star, 
  ExternalLink, 
  RefreshCw, 
  BookOpen
} from 'lucide-react';
import { FALLBACK_REPOS, FALLBACK_GITHUB_USER, PERSONAL_INFO } from '../data/portfolioData';
import { GitHubRepo, GitHubUser } from '../types';

interface LiveGitHubSectionProps {
  darkMode: boolean;
}

export const LiveGitHubSection: React.FC<LiveGitHubSectionProps> = ({ darkMode }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [user, setUser] = useState<GitHubUser>(FALLBACK_GITHUB_USER);
  const [loading, setLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/mamun6622'),
        fetch('https://api.github.com/users/mamun6622/repos?sort=updated')
      ]);

      if (userRes.ok && reposRes.ok) {
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        
        setUser(userData);
        if (Array.isArray(reposData) && reposData.length > 0) {
          setRepos(reposData);
        }
        setIsLive(true);
      }
    } catch {
      // Graceful fallback to verified cached repositories
      setIsLive(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const getLanguageColor = (lang: string | null) => {
    switch (lang) {
      case 'TypeScript':
        return 'bg-blue-500';
      case 'C++':
        return 'bg-pink-500';
      case 'Dart':
        return 'bg-cyan-500';
      case 'Kotlin':
        return 'bg-amber-500';
      case 'Python':
        return 'bg-emerald-500';
      default:
        return 'bg-zinc-500';
    }
  };

  return (
    <section id="github-repos" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-2">
              <Github className="w-4 h-4" />
              <span>Real-Time GitHub Activity</span>
              <span>·</span>
              <span>@{PERSONAL_INFO.githubUsername}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-zinc-50' : 'text-zinc-900'
            }`}>
              Open-Source Repositories
            </h2>
            <p className={`mt-2 text-base max-w-xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Direct synchronization with GitHub account. All repositories reflect actual public repositories.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchGitHubData}
              disabled={loading}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                darkMode
                  ? 'border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                  : 'border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-emerald-500' : ''}`} />
              <span>{loading ? 'Fetching...' : isLive ? 'Synced Live' : 'Refresh'}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Profile Stats Bar */}
        <div className={`p-4 sm:p-5 rounded-2xl border mb-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
          darkMode ? 'bg-zinc-900/40 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="flex items-center gap-4">
            <img
              src={user.avatar_url || PERSONAL_INFO.avatarUrl}
              alt={user.name || PERSONAL_INFO.fullName}
              className="w-10 h-10 rounded-full ring-2 ring-emerald-500/40 object-cover"
            />
            <div>
              <div className={`font-bold text-sm ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                {user.name || PERSONAL_INFO.fullName}
              </div>
              <div className="text-zinc-500">
                github.com/{user.login}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
            <div>
              <span className="text-zinc-500">Public Repos: </span>
              <span className="font-bold text-emerald-400">{user.public_repos || 4}</span>
            </div>
            <div>
              <span className="text-zinc-500">Followers: </span>
              <span className="font-bold text-zinc-200">{user.followers || 3}</span>
            </div>
            <div>
              <span className="text-zinc-500">Following: </span>
              <span className="font-bold text-zinc-200">{user.following || 2}</span>
            </div>
            <div>
              <span className="text-zinc-500">Primary Stack: </span>
              <span className="font-bold text-zinc-200">TS · C++ · Dart · Kotlin</span>
            </div>
          </div>
        </div>

        {/* Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:border-emerald-500/40 ${
                darkMode ? 'bg-zinc-900/50 border-zinc-800/80' : 'bg-white border-zinc-200'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-mono font-bold text-base hover:text-emerald-500 transition-colors flex items-center gap-2 ${
                      darkMode ? 'text-zinc-100' : 'text-zinc-900'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{repo.name}</span>
                  </a>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {repo.description || (
                    repo.name === 'peak-pulse' 
                      ? 'Mountain & fitness tracking website with running logs and elevation metrics.'
                      : repo.name === 'claro-v1'
                      ? 'CLARO V1 – Intelligent campus companion on ESP32-S3 with Faster-Whisper and FastAPI.'
                      : repo.name === 'novabnk'
                      ? 'Modern digital banking and multi-wallet mobile application.'
                      : repo.name === 'shop62'
                      ? 'Cross-platform mobile e-commerce client built with Flutter.'
                      : 'Repository by Md Mamun Mia'
                  )}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/40 flex items-center justify-between text-xs font-mono">
                {/* Language Indicator */}
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                  <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>
                    {repo.language || 'Multi-Language'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1 font-sans font-medium"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-200 flex items-center gap-1"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
