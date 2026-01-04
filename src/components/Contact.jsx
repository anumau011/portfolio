import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-950">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <SectionHeading>Let's Collaborate</SectionHeading>
      <p className="text-slate-400 mb-12">
        Whether you have a question, a freelance project, or just want to say hi, my inbox is open.
      </p>

      <div className="bg-slate-900 p-8 rounded-2xl border border-white/5 shadow-2xl">
        <form className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-400 text-sm mb-2">Name</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-2">Email</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-2">Message</label>
            <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
          </div>
          <Button variant="primary" className="w-full justify-center">Send Message</Button>
        </form>
      </div>

      <footer className="mt-20 text-slate-600 text-sm">
        <p>© 2026 Anubhav Maurya. Built with React & Tailwind.</p>
      </footer>
    </div>
  </section>
);

export default Contact;
