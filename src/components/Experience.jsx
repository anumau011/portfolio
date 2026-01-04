import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../content';
import { Terminal as TerminalIcon, Shield, Cpu, Globe } from 'lucide-react';

const Experience = () => (
  <section id="experience" className="py-24 bg-slate-900/30">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeading>Services & Experience</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Why Hire Me?</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="bg-violet-500/10 p-3 rounded-lg h-fit text-violet-400">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Security-First Mindset</h4>
                <p className="text-slate-400 text-sm">I don't leave security for last. My code implements JWT, proper validation, and RBAC from day one.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-lg h-fit text-cyan-400">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Performance & Automation</h4>
                <p className="text-slate-400 text-sm">I automate repetitive tasks using Python and build systems that scale efficiently without bloat.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-emerald-500/10 p-3 rounded-lg h-fit text-emerald-400">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Product Thinking</h4>
                <p className="text-slate-400 text-sm">I build with the end-user in mind, ensuring the backend supports a seamless frontend experience.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-slate-950 p-8 rounded-2xl border border-white/5 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TerminalIcon size={100} />
          </div>
          <h3 className="text-xl font-bold text-white mb-6">Freelance Services</h3>
          <div className="space-y-4">
            {SERVICES.map((s, i) => (
              <div key={i} className="border-l-2 border-cyan-500/30 pl-4 py-1 hover:border-cyan-400 transition-colors">
                <h4 className="text-slate-200 font-medium">{s.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
