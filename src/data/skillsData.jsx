import React from 'react'

export const skillsList = [
  // Languages & Core
  {
    name: 'Java',
    category: 'Languages & Core',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'Languages & Core',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'Languages & Core',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },

  // Frontend & UI
  {
    name: 'ReactJS',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'NextJS',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Redux',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  },
  {
    name: 'shadcn/ui',
    category: 'Frontend & UI',
    icon: (
      <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor">
        <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
        <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
  },
  {
    name: 'HTML',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    category: 'Frontend & UI',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },

  // Backend & Databases
  {
    name: 'NodeJS',
    category: 'Backend & Databases',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'ExpressJS',
    category: 'Backend & Databases',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    category: 'Backend & Databases',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    category: 'Backend & Databases',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Firebase',
    category: 'Backend & Databases',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
  },

  // AI & ML (AI Forward Deployed Engineering)
  {
    name: 'LangChain',
    category: 'AI & Machine Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <rect x="2" y="8" width="8" height="8" rx="2" stroke="#10b981" strokeWidth="2" />
        <rect x="14" y="8" width="8" height="8" rx="2" stroke="#10b981" strokeWidth="2" />
        <path d="M10 12h4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'RAG',
    category: 'AI & Machine Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" stroke="#8b5cf6" strokeWidth="2" />
        <path d="M6 6h10M6 10h10M6 14h6" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'LLMs',
    category: 'AI & Machine Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <circle cx="12" cy="12" r="3" fill="#10b981" />
        <circle cx="12" cy="4" r="2" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="12" cy="20" r="2" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="4" cy="12" r="2" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="20" cy="12" r="2" stroke="#10b981" strokeWidth="1.5" />
        <path d="M12 6v3m0 6v3M6 12h3m6 0h3" stroke="#10b981" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Vector DBs',
    category: 'AI & Machine Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 22V12M12 12L3 7M12 12l9-5" stroke="#3b82f6" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Prompt Engineering',
    category: 'AI & Machine Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <path d="m4 7 5 5-5 5M12 17h8" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // DevOps & Tools
  {
    name: 'Docker',
    category: 'DevOps & Tools',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: 'Git',
    category: 'DevOps & Tools',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    category: 'DevOps & Tools',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'Postman',
    category: 'DevOps & Tools',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
]
