import React from 'react';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyle = "px-6 py-3 rounded font-medium transition-all duration-300 flex items-center gap-2";
  const styles = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]",
    outline: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    ghost: "text-slate-400 hover:text-white"
  };

  if (href) return <a href={href} className={`${baseStyle} ${styles[variant]} ${className}`}>{children}</a>;
  return <button onClick={onClick} className={`${baseStyle} ${styles[variant]} ${className}`}>{children}</button>;
};

export default Button;
