export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web & Full-Stack' | 'Embedded & AI' | 'Mobile';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  role: string;
  institutionOrContext?: string;
  featured: boolean;
  architecture?: {
    steps: string[];
    hardware?: string[];
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate';
    experience: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  type: 'Education' | 'Engineering' | 'Research';
  description: string;
  bulletPoints: string[];
  skills: string[];
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}
