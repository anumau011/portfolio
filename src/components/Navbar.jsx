import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <TerminalIcon className="text-cyan-400" /> AM<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
              {link}
            </a>
          ))}
          <Button variant="outline" onClick={() => window.location.href = '#contact'}>Hire Me</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-slate-900 border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
