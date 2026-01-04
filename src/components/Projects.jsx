import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../content';
import { Github } from 'lucide-react';

const Projects = () => (
  <section id="projects" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-slate-900 rounded-xl overflow-hidden border border-white/5 flex flex-col h-full"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="text-cyan-400 text-xs font-mono px-2 py-1 bg-cyan-950/30 rounded border border-cyan-500/20">
                  {project.tag}
                </div>
                <div className="flex gap-3">
                  <Github size={18} className="text-slate-400 hover:text-white cursor-pointer" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4 text-sm">{project.desc}</p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-slate-500 text-xs mb-3 italic">"{project.details}"</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-cyan-200/70">#{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
