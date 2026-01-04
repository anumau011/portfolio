import { ExternalLink } from 'lucide-react'; // Make sure to import ExternalLink
import { CODING_PROFILES } from '../content';
import { Github, Linkedin, Mail, Terminal as TerminalIcon } from 'lucide-react';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGithub } from "react-icons/si"
// --- CUSTOM ICONS (SVG) ---
// --- CODING PROFILES COMPONENT ---

const CodingStats = () => {
  // Mapping names to React Icons
  const getIcon = (name) => {
    const iconClass = "w-8 h-8 mb-2 transition-transform group-hover:scale-110";
    
    switch (name) {
      case "LeetCode":
        return <SiLeetcode className={`${iconClass} text-[#FFA116]`} />; // Official LeetCode Orange
      case "Codeforces":
        return <SiCodeforces className={`${iconClass} text-[#1F8ACB]`} />; // Official Codeforces Blue
      case "CodeChef":
        return <SiCodechef className={`${iconClass} text-[#5B4638]`} />; // Official CodeChef Brown
      case "GitHub":
        return <SiGithub className={`${iconClass} text-white`} />;
      default:
        return <SiGithub className={iconClass} />;
    }
  };

  return (
    <section className="py-8 bg-slate-950 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CODING_PROFILES.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-white/5 transition-all duration-300 ${profile.bg} ${profile.border}`}
            >
              {/* Render Icon Dynamically */}
              {getIcon(profile.name)}
              
              <div className="flex items-center gap-2">
                <span className={`font-bold ${profile.color}`}>{profile.name}</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
              </div>
              <span className="text-xs text-slate-500 font-mono mt-1 group-hover:text-slate-300 transition-colors">
                {profile.handle}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingStats;