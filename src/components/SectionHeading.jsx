import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, align = "center" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-12 ${align === "left" ? "text-left" : "text-center"}`}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
      <span className="text-cyan-400">/</span> {children}
    </h2>
    <div className={`h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
  </motion.div>
);

export default SectionHeading;
