import { Project, SkillCategory, ExperienceItem, GitHubRepo, GitHubUser } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Md Mamun Mia',
  preferredName: 'Mamun',
  title: 'Software Engineer & IoT / Full-Stack Builder',
  tagline: 'Engineering robust web platforms, cross-platform mobile apps, and embedded voice AI hardware.',
  bio: `I am a software engineer studying and building at Tongmyong University in Busan, South Korea. My work bridges full-stack modern web engineering (TypeScript, React, Node.js), mobile development (Flutter, Kotlin), and embedded AI systems (ESP32-S3, C++, FastAPI, Whisper ASR). I love crafting end-to-end systems from low-level audio hardware pipelines to responsive cloud-deployed web applications.`,
  location: 'Busan, South Korea',
  institution: 'Tongmyong University',
  email: 'mamun.green213@gmail.com',
  github: 'https://github.com/mamun6622',
  githubUsername: 'mamun6622',
  linkedin: 'https://www.linkedin.com/in/md-mamun-mia-70a84b406/',
  avatarUrl: 'https://avatars.githubusercontent.com/u/240487190?v=4',
  availability: 'Available for Software Engineering, Full-Stack, and Systems Roles',
  timezone: 'KST (UTC+9)',
};

export const PROJECTS: Project[] = [
  {
    id: 'claro-v1',
    title: 'CLARO V1 – Campus Companion & AI Voice Assistant',
    tagline: 'Lightweight on-device speech AI robot built on ESP32-S3 and FastAPI.',
    category: 'Embedded & AI',
    role: 'Lead Developer & Systems Architect',
    institutionOrContext: 'Tongmyong University, Busan, South Korea',
    featured: true,
    description:
      'An embedded voice-interactive companion robot designed for campus navigation and student assistance. Developed as a student-led project at Tongmyong University, CLARO captures audio via an INMP441 I2S microphone, streams 16kHz WAV data over Wi-Fi to a FastAPI backend running Faster-Whisper ASR, searches a local knowledge database, and streams synthesized speech back to an on-board MAX98357A I2S amplifier and speaker.',
    highlights: [
      'Designed end-to-end hardware-software pipeline on ESP32-S3 with low-latency Wi-Fi audio transmission.',
      'Implemented on-premise local speech transcription with Faster-Whisper (zero cloud API fees or external latency).',
      'Engineered local JSON-indexed search engine for instant answers to campus admissions, buildings, and courses.',
      'Streamed synthesized speech back to hardware via MAX98357A I2S amplifier with FFmpeg audio conversion.'
    ],
    technologies: ['C++', 'Arduino', 'ESP32-S3', 'Python', 'FastAPI', 'Faster-Whisper', 'pyttsx3', 'FFmpeg', 'I2S Audio'],
    githubUrl: 'https://github.com/mamun6622/claro-v1',
    architecture: {
      steps: [
        'INMP441 I2S Mic records 16kHz audio',
        'ESP32-S3 streams WAV payload via HTTP POST',
        'FastAPI backend normalizes audio with FFmpeg',
        'Faster-Whisper (tiny) transcribes speech locally',
        'Keyword extraction queries local campus knowledge DB',
        'pyttsx3 synthesizes audio response file',
        'ESP32 downloads and streams audio to MAX98357A speaker'
      ],
      hardware: [
        'ESP32-S3 Development Board (Wi-Fi + BLE)',
        'INMP441 Omnidirectional I2S Digital Microphone',
        'MAX98357A I2S 3W Class D Audio Amplifier',
        '4Ω / 3W High-Sensitivity Dynamic Speaker',
        'Local PC / Edge Server running FastAPI'
      ]
    }
  },
  {
    id: 'peak-pulse',
    title: 'Peak Pulse – Mountain Exploration & Fitness Tracker',
    tagline: 'Modern outdoor activity & trail runner dashboard deployed on Vercel.',
    category: 'Web & Full-Stack',
    role: 'Creator & Full-Stack Engineer',
    institutionOrContext: 'Web Application & Cloud Deployment',
    featured: true,
    description:
      'Peak Pulse is a high-performance web platform designed to empower hikers and runners to discover mountain trails, monitor performance metrics, track elevation changes, and stay accountable to personalized fitness milestones. Built with React 19, TypeScript, Vite, Tailwind CSS, Motion animations, and backend API integration.',
    highlights: [
      'Responsive interactive dashboard showcasing trail statistics, pace analytics, and running logs.',
      'Smooth client-side micro-interactions and transitions engineered with Motion (Framer Motion).',
      'Automated continuous deployment and production asset optimization on Vercel.',
      'Designed clean modular architecture with TypeScript and reusable component design systems.'
    ],
    technologies: ['TypeScript', 'React 19', 'Vite', 'Tailwind CSS', 'Motion', 'Express', 'Firebase', 'Vercel'],
    githubUrl: 'https://github.com/mamun6622/peak-pulse',
    liveUrl: 'https://peak-pulse-six.vercel.app'
  },
  {
    id: 'novabnk',
    title: 'NovaBnk – Digital Banking & Fintech Mobile App',
    tagline: 'Modern mobile banking experience featuring instant transfers and wallet insights.',
    category: 'Mobile',
    role: 'Mobile Software Engineer',
    institutionOrContext: 'Fintech Mobile Application',
    featured: true,
    description:
      'A sleek, secure mobile banking application built to streamline personal financial management. Features real-time multi-currency wallet views, biometric transaction confirmation styling, categorization of expenses, and frictionless peer-to-peer money transfers.',
    highlights: [
      'Engineered reactive mobile user interface with smooth transitions and financial visualizations.',
      'Designed transactional state flows with strict input validation and balance reconciliation logic.',
      'Built multi-tier wallet dashboard supporting expense breakdown and instant contact transfers.',
      'Optimized for Android and cross-platform mobile runtimes with high rendering performance.'
    ],
    technologies: ['Dart', 'Flutter', 'Kotlin', 'Mobile UI/UX', 'State Management', 'REST APIs'],
    githubUrl: 'https://github.com/mamun6622/novabnk'
  },
  {
    id: 'shop62',
    title: 'Shop62 – Cross-Platform E-Commerce Mobile App',
    tagline: 'Fast, clean mobile shopping experience with real-time cart state management.',
    category: 'Mobile',
    role: 'Mobile Developer',
    institutionOrContext: 'E-Commerce Mobile Application',
    featured: false,
    description:
      'A cross-platform mobile shopping application built with Flutter and Dart. Offers catalog browsing, instant product filtering, detailed product galleries, quantity management in cart, and a streamlined multi-step checkout workflow.',
    highlights: [
      'Separation of concerns using clean architecture: Presentation, Domain, and Data repository layers.',
      'Instantaneous cart updates and order summary calculations with responsive state management.',
      'Mobile-first responsive design supporting multiple screen aspect ratios.'
    ],
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'State Management', 'Mobile UI'],
    githubUrl: 'https://github.com/mamun6622/shop62'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core',
    iconName: 'Code2',
    skills: [
      { name: 'TypeScript', level: 'Advanced', experience: 'Web & Full-Stack Apps' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', experience: 'Frontend & Node.js' },
      { name: 'Python', level: 'Advanced', experience: 'FastAPI, Whisper, AI APIs' },
      { name: 'C / C++', level: 'Advanced', experience: 'ESP32, Microcontrollers, Audio' },
      { name: 'Dart / Flutter', level: 'Advanced', experience: 'Cross-Platform Mobile' },
      { name: 'Kotlin', level: 'Intermediate', experience: 'Android Mobile Apps' },
      { name: 'SQL / Databases', level: 'Intermediate', experience: 'Relational & Document DBs' },
      { name: 'HTML5 & CSS3', level: 'Expert', experience: 'Modern Semantic Responsive UI' }
    ]
  },
  {
    title: 'Web & Full-Stack',
    iconName: 'Globe',
    skills: [
      { name: 'React 19 / React', level: 'Advanced', experience: 'Hooks, SPA, State, Performance' },
      { name: 'Vite & Build Tooling', level: 'Advanced', experience: 'Modern Bundling & DX' },
      { name: 'Node.js & Express', level: 'Advanced', experience: 'REST APIs & Server Middleware' },
      { name: 'FastAPI (Python)', level: 'Advanced', experience: 'Async Endpoints & Audio APIs' },
      { name: 'Tailwind CSS', level: 'Expert', experience: 'Tailwind v3 & v4, Responsive Design' },
      { name: 'Motion (Framer)', level: 'Advanced', experience: 'Declarative Animations & Gestures' },
      { name: 'RESTful API Design', level: 'Advanced', experience: 'CRUD, Auth, Payload Architecture' }
    ]
  },
  {
    title: 'Embedded, AI & IoT',
    iconName: 'Cpu',
    skills: [
      { name: 'ESP32-S3 & ESP8266', level: 'Advanced', experience: 'Firmware, Wi-Fi, Pin I/O' },
      { name: 'I2S Audio Pipeline', level: 'Advanced', experience: 'INMP441 Mic & MAX98357A Amp' },
      { name: 'Faster-Whisper (ASR)', level: 'Advanced', experience: 'On-device Speech-to-Text' },
      { name: 'pyttsx3 & FFmpeg', level: 'Advanced', experience: 'TTS Synthesis & Audio Transcoding' },
      { name: 'Arduino IDE & C++', level: 'Advanced', experience: 'Embedded Hardware Prototyping' },
      { name: 'Sensor & Actuator Control', level: 'Advanced', experience: 'Robotics & Campus Companion' }
    ]
  },
  {
    title: 'Mobile & Cloud Tooling',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter Mobile', level: 'Advanced', experience: 'NovaBnk & Shop62 Apps' },
      { name: 'Android / Kotlin', level: 'Intermediate', experience: 'Mobile Architecture' },
      { name: 'Git & GitHub', level: 'Advanced', experience: 'Version Control, CI/CD' },
      { name: 'Vercel Deployment', level: 'Advanced', experience: 'Cloud Hosting & Edge Edge' },
      { name: 'Firebase & Firestore', level: 'Intermediate', experience: 'Auth & NoSQL Database' },
      { name: 'Linux & Bash Scripting', level: 'Advanced', experience: 'Terminal & Server Administration' }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Systems Developer & IoT Architect (CLARO Project)',
    organization: 'Tongmyong University Campus Tech Initiative',
    location: 'Busan, South Korea',
    period: '2025 – Present',
    current: true,
    type: 'Research',
    description:
      'Spearheading the engineering of CLARO V1, an intelligent voice-interactive campus companion robot that serves students and visitors on campus.',
    bulletPoints: [
      'Designed and assembled hardware circuitry with ESP32-S3, INMP441 I2S microphone, and MAX98357A amplifier.',
      'Built a low-latency Python FastAPI backend integrating local Faster-Whisper ASR and pyttsx3 speech synthesis.',
      'Structured a lightweight JSON campus directory and query matching algorithm that eliminates cloud AI API expenses.',
      'Presented functional prototype to university peers and faculty with real-time interactive voice testing.'
    ],
    skills: ['C++', 'ESP32-S3', 'FastAPI', 'Faster-Whisper', 'FFmpeg', 'Hardware Prototyping']
  },
  {
    id: 'exp-2',
    role: 'Software Engineer & Full-Stack Web Developer',
    organization: 'Independent Open-Source & Client Projects',
    location: 'Busan, South Korea / Remote',
    period: '2024 – Present',
    current: true,
    type: 'Engineering',
    description:
      'Architecting and deploying end-to-end web applications and modern mobile solutions for fitness, e-commerce, and fintech.',
    bulletPoints: [
      'Engineered Peak Pulse (live on Vercel), a mountain discovery and runner workout tracker built with React 19 and Tailwind CSS.',
      'Developed NovaBnk, a digital banking application with wallet state management and clean fintech workflows.',
      'Engineered Shop62, an e-commerce mobile client in Flutter with shopping cart persistence and product filtering.',
      'Applied modern software design patterns, TypeScript safety, and automated deployment pipelines.'
    ],
    skills: ['TypeScript', 'React', 'Flutter', 'Tailwind CSS', 'Vercel', 'REST APIs']
  },
  {
    id: 'edu-1',
    role: 'Undergraduate Degree Program',
    organization: 'Tongmyong University (동명대학교)',
    location: 'Busan, South Korea',
    period: '2024 – Present',
    current: true,
    type: 'Education',
    description:
      'Academic studies focusing on Computer Science, Embedded Artificial Intelligence, Robotics, and Software Engineering.',
    bulletPoints: [
      'Active leadership in campus technical engineering projects and robotics prototypes.',
      'Coursework spanning Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, and Embedded Systems.',
      'Collaborative international student community in Busan, South Korea.'
    ],
    skills: ['Algorithms', 'Data Structures', 'C++', 'Embedded AI', 'Robotics', 'Computer Science']
  }
];

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'claro-v1',
    description: 'CLARO V1 – Intelligent Campus Companion on ESP32-S3, Faster-Whisper & FastAPI.',
    html_url: 'https://github.com/mamun6622/claro-v1',
    homepage: null,
    language: 'C++',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-11-03T02:30:00Z'
  },
  {
    id: 2,
    name: 'peak-pulse',
    description: 'Mountain trail exploration and fitness runner tracking platform.',
    html_url: 'https://github.com/mamun6622/peak-pulse',
    homepage: 'https://peak-pulse-six.vercel.app',
    language: 'TypeScript',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: '2026-11-03T02:56:00Z'
  },
  {
    id: 3,
    name: 'novabnk',
    description: 'Modern digital banking and multi-wallet mobile application.',
    html_url: 'https://github.com/mamun6622/novabnk',
    homepage: null,
    language: 'Kotlin',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-11-03T02:44:00Z'
  },
  {
    id: 4,
    name: 'shop62',
    description: 'Cross-platform mobile e-commerce client with Flutter and Dart.',
    html_url: 'https://github.com/mamun6622/shop62',
    homepage: null,
    language: 'Dart',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-11-03T03:05:00Z'
  }
];

export const FALLBACK_GITHUB_USER: GitHubUser = {
  login: 'mamun6622',
  name: 'Mia Md Mamun',
  avatar_url: 'https://avatars.githubusercontent.com/u/240487190?v=4',
  public_repos: 4,
  followers: 3,
  following: 2,
  created_at: '2025-10-27T12:13:28Z',
  updated_at: '2026-11-03T05:02:28Z',
  html_url: 'https://github.com/mamun6622'
};
