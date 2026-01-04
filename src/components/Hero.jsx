import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal as TerminalIcon } from 'lucide-react';
import Typewriter from './Typewriter';
import Button from './Button';
import profileImg from '../assets/img3.png';
import { PROFILE } from '../content';

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 font-mono mb-4 tracking-wide">Hi, I am</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {PROFILE.name}
        </h1>

        <div className="text-2xl md:text-3xl text-slate-400 mb-6 min-h-[40px] flex items-center gap-2">
          <span>I build</span>
          <Typewriter
            wait={2000}
            words={[
              "Scalable Backend Systems",
              "Secure REST APIs",
              "Automated Workflows",
              "High-Performance DBs"
            ]}
          />
        </div>
        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
          {PROFILE.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="#projects">View Projects</Button>
          <Button variant="outline" href="#contact">Contact Me</Button>
        </div>

        <div className="flex gap-6 mt-12">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-[2rem] transform rotate-6 translate-x-4 translate-y-4"></div>

          <div className="absolute inset-0 bg-slate-800 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={profileImg}
              alt={PROFILE.name}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-4 border-b-4 border-cyan-500/50 rounded-bl-3xl"></div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
