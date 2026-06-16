import React from "react";
import { PERSONAL_INFO } from "../data";
import { Mail, Phone, Linkedin, Github, Cpu, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-50 dark:bg-[#020202] border-t border-zinc-200 dark:border-zinc-900 text-zinc-500 py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-zinc-200 dark:border-zinc-900">
          
          {/* Left Column - Logo brand info */}
          <div className="md:col-span-4 space-y-3">
            <a href="#hero" onClick={handleScrollToTop} className="flex items-center space-x-2 w-fit">
              <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-450">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold font-mono tracking-tighter text-zinc-900 dark:text-white">
                MATI<span className="text-sky-400 font-bold">.</span>UR
              </span>
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Slick, responsive MERN Stack solutions centering modern JavaScript practices. Mentored by Saylani Mass IT Training.
            </p>
          </div>

          {/* Center Column - Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap justify-start md:justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium font-mono text-zinc-650 dark:text-zinc-400">
            <a href="#hero" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">Projects</a>
            <a href="#education" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">Education</a>
            <a href="#architecture" className="hover:text-sky-505 dark:hover:text-sky-400 transition-colors duration-300">Architecture</a>
            <a href="#contact" className="hover:text-sky-505 dark:hover:text-sky-400 transition-colors duration-300">Contact</a>
          </div>

          {/* Right Column - Direct connect buttons */}
          <div className="md:col-span-4 flex justify-start md:justify-end items-center space-x-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-805 text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-808 text-zinc-600 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              title="Phone Call"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Lower row: copyright & signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} Mati Ur Rehman. All rights reserved. Registered Developer Portfolio.
          </div>
          <div className="flex items-center space-x-1 font-mono hover:text-zinc-300 transition-colors">
            <span>Coded with</span>
            <Heart className="w-3.5 h-3.5 text-rose-505 fill-rose-500 animate-pulse" />
            <span>in Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
