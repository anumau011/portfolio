import React from 'react';
import SectionHeading from './SectionHeading';
import { PROFILE } from '../content';

const About = () => (
  <section id="about" className="py-24 bg-slate-950">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading align="left">About Me</SectionHeading>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-slate-300 space-y-4 leading-relaxed">
          <p>
            I don’t just write code; I engineer solutions. My journey started with a curiosity for how systems work under the hood, leading me to specialize in <span className="text-cyan-400 font-semibold">Backend Engineering</span> and <span className="text-cyan-400 font-semibold">Automation</span>.
          </p>
          <p>
            Unlike many who focus solely on visuals, I obsess over what happens <i>behind</i> the click—database optimization, API security (JWT, RBAC), and scalable architecture using <strong>Java Spring Boot</strong> and the <strong>MERN stack</strong>.
          </p>
          <p>
            I also believe in the power of automation. Whether it's using Python to process complex Excel data or building tools to manage files, I look for ways to make workflows faster and error-free.
          </p>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 h-fit">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Status
          </h3>
          <p className="text-slate-400 text-sm mb-4">{PROFILE.availability}</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Backend</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-cyan-500 h-full w-[90%]"></div>
            </div>
            <div className="flex justify-between text-xs text-slate-500 pt-2">
              <span>Automation</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-violet-500 h-full w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
