import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../content';

const Skills = () => (
  <section id="skills" className="py-24 bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading>Technical Arsenal</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-950 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors group"
          >
            <div className="mb-4 bg-slate-900 w-12 h-12 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
