import { u } from "framer-motion/client";
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
    details: "Implemented strict Role-Based Access Control and Refresh Token rotation to prevent session hijacking. Focus on encryption and secure headers.",
    url: "https://github.com/anumau011/FileShareApp"
  },
  {
    title: "ProShop v2 E-commerce Platform",
    tag: "Large Scale",
    tech: ["MERN Stack", "Redux", "Chart.js"],
    desc: "Full-featured e-commerce site with admin dashboard.",
    details: "Designed scalable RESTful APIs and optimized database queries to handle high traffic and large product catalogs efficiently.",
    url: "https://github.com/anumau011/ProShop-v2"
  },
  {
    title: "Wallet",
    tag: "Product",
    tech: ["React Native", "Node.js", "Expo","prisma"],
    desc: "Personal finance management mobile app.",
    details: "Developed features for expense tracking, budgeting, and financial goal setting. Focused on user-friendly design and seamless data sync across devices.",
    url: "https://github.com/anumau011/wallet"
  },
  {
    title: "DevRoadmap Website",
    tag: "Automation",
    tech: ["Node.js", "Express", "Tailwindcss"],
    desc: "Automated generation of developer roadmaps.",
    details: "Built a backend service that scrapes and compiles learning paths for various developer roles, automating content updates and ensuring accuracy.",
    url: "https://github.com/anumau011/DevRoadmap"
  },
  {
    title: "AuthBasedTodo App",
    tag: "Full Stack",
    tech: ["MERN Stack", "JWT", "Bootstrap", "EJS"],
    desc: "A todo app with user authentication and personalized task management.",
    details: "Implemented secure user authentication using JWT and built RESTful APIs for task CRUD operations with proper validation and error handling.",
    url: "https://github.com/anumau011/AuthBasedTodo"
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