import { Server, Database, Code, Terminal, Shield, Cpu, Globe, Zap } from "lucide-react";

export const PROFILE = {
  name: "Anubhav Maurya",
  role: "Backend Developer · Java · Spring Boot · MERN",
  description: "I build secure backend systems, automate complex workflows, and create scalable products with performance and security in mind.",
  availability: "Available for Internship & Freelance"
};

export const SKILLS = [
  {
    category: "Backend Engineering",
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    items: ["Java", "Spring Boot", "Hibernate", "Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Security & Auth",
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    items: ["JWT Implementation", "Refresh Tokens", "RBAC (Role-Based Access)", "OAuth2", "BCrypt"]
  },
  {
    category: "Database & DevOps",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    items: ["MongoDB", "MySQL", "Redis", "Docker", "Linux Automation", "Git/GitHub"]
  },
  {
    category: "Automation & Scripting",
    icon: <Terminal className="w-6 h-6 text-cyan-400" />,
    items: ["Python Scripting", "Excel VBA", "File System APIs", "YouTube API", "Data Processing"]
  }
];

export const PROJECTS = [
  {
    title: "Secure File Sharing App",
    tag: "Security Focus",
    tech: ["Spring Boot", "React", "JWT", "RBAC"],
    desc: "A secure vault for sensitive data sharing.",
    details: "Implemented strict Role-Based Access Control and Refresh Token rotation to prevent session hijacking. Focus on encryption and secure headers."
  },
  {
    title: "College ERP System",
    tag: "Large Scale",
    tech: ["MERN Stack", "Redux", "Chart.js"],
    desc: "Comprehensive management system for educational institutions.",
    details: "Digitized student attendance, grading, and fee management. Solved the problem of manual data redundancy and slow retrieval times."
  },
  {
    title: "Teats (Native Food Discovery)",
    tag: "Product",
    tech: ["React Native", "Node.js", "Geolocation"],
    desc: "A platform connecting users to local, native food vendors.",
    details: "Built a location-based recommendation engine to solve the discoverability issue for small, unlisted food vendors."
  },
  {
    title: "YouTube Automation Suite",
    tag: "Automation",
    tech: ["Python", "YouTube API", "FFmpeg"],
    desc: "Tools to automate video metadata and analytics tracking.",
    details: "Reduced manual upload time by 70% by scripting thumbnail processing and tag generation automatically."
  },
  {
    title: "Interactive Quiz App",
    tag: "Full Stack",
    tech: ["Java Spring Boot", "MySQL", "React"],
    desc: "Real-time quiz platform with administrative dashboard.",
    details: "Optimized database queries to handle concurrent user submissions without latency."
  }
];

export const SERVICES = [
  {
    title: "Backend Development",
    desc: "Robust API design, database modeling, and server-side logic using Spring Boot or Node.js."
  },
  {
    title: "Workflow Automation",
    desc: "Custom Python scripts to automate Excel reporting, file management, and repetitive tasks."
  },
  {
    title: "Security Audits",
    desc: "Reviewing backend code for vulnerabilities, implementing JWT flows, and securing endpoints."
  }
];

// src/content/index.jsx

export const CODING_PROFILES = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/anumau011/",
    handle: "@anumau011",
    color: "text-yellow-500", // LeetCode Orange/Yellow
    bg: "hover:bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/anubhavmaurya",
    handle: "anubhavmaurya",
    color: "text-blue-500", // Codeforces Blue (or Red if you are Grandmaster!)
    bg: "hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/50"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/anumau011",
    handle: "anumau011",
    color: "text-amber-700", // CodeChef Brown/Orange
    bg: "hover:bg-amber-700/10",
    border: "group-hover:border-amber-700/50"
  },
  {
    name: "GitHub",
    url: "https://github.com/anumau011",
    handle: "anumau011",
    color: "text-slate-200", // GitHub White
    bg: "hover:bg-slate-700/30",
    border: "group-hover:border-slate-500/50"
  }
];