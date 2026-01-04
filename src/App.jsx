import React from 'react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact
} from './components';
import CodingStats from './components/CodingStats';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <CodingStats/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;