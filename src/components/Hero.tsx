import React, { useState, useEffect } from "react";
import { ArrowDown, Mail, Github, Linkedin, Briefcase, FileText, MapPin, Globe } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import cvPdf from "@/assets/MERN Stack CV.pdf";

export const Hero: React.FC = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pakistanTime, setPakistanTime] = useState("");

  const titles = PERSONAL_INFO.titles;

  // 1. Double-helix typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullTitle = titles[titleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedTitle(currentFullTitle.substring(0, typedTitle.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedTitle(currentFullTitle.substring(0, typedTitle.length + 1));
      }, 100);
    }

    if (!isDeleting && typedTitle === currentFullTitle) {
      timer = setTimeout(() => setIsDeleting(true), 2500); // Wait before deleting
    } else if (isDeleting && typedTitle === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, titleIndex, titles]);

  // 2. Real-time Pakistan Clock for recruiter engagement
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setPakistanTime(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. CV PDF direct link is handled directly in the CTA buttons below

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-zinc-50 dark:bg-[#050505] transition-colors duration-500"
    >
      {/* Drifting Background Gradients & Tech Canvas Grid Overlay */}
      <div className="absolute inset-0 grid-lens opacity-70 z-0" />
      
      {/* Drifting radial cosmic clouds */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-sky-450/10 dark:bg-sky-950/20 rounded-full blur-[80px] pointer-events-none z-0 animate-drift-gradient" />
      <div className="absolute bottom-[15%] right-[8%] w-[400px] h-[400px] bg-sky-450/10 dark:bg-sky-950/20 rounded-full blur-[100px] pointer-events-none z-0 animate-drift-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column Text Box with Entrance Animation trigger style */}
          <div id="hero-left-col" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status pill indicating hiring availabilities */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border border-zinc-200 dark:border-zinc-800 shadow-sm animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span className="text-xs font-semibold tracking-wide font-mono text-zinc-700 dark:text-zinc-300">
                Open for Remote & Onsite Jobs / Internships
              </span>
            </div>

            <h1 className="leading-tight font-display tracking-tight text-zinc-950 dark:text-white">
              <span className="text-sm sm:text-base font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 block mb-2 uppercase">
                Assalamu Alaikum, I am
              </span>
              <span id="developer-name" className="text-4xl sm:text-6xl font-bold block mb-4 tracking-tighter">
                {PERSONAL_INFO.name}
              </span>
              {/* Dynamic typing loop */}
              <span className="text-2xl sm:text-4xl font-semibold text-zinc-800 dark:text-zinc-250 block min-h-[48px]">
                A{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400 dark:from-sky-400 dark:to-sky-350 italic font-serif typing-cursor">
                  {typedTitle}
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {PERSONAL_INFO.tagline} Focused on crafting high-performance, robust single-page systems in Peshawar, Pakistan. High capacity backend learner under Saylani Mass IT guidelines.
            </p>

            {/* Current local Pakistan clock inside Hero to show dynamic engineering detail */}
            <div className="flex items-center space-x-2.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-zinc-300 dark:text-zinc-800">|</span>
              <Globe className="w-4 h-4 text-sky-500" />
              <span>PKT Time: </span>
              <span className="text-sky-500 dark:text-sky-450 font-bold">{pakistanTime || "..."}</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
              {/* Material Magnetic Effect Style Buttons */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex justify-center items-center space-x-2 px-6 py-3 bg-sky-500 text-black font-bold rounded-xl hover:bg-sky-400 transform hover:-translate-y-1 transition-all duration-300 shadow-md cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href={cvPdf}
                download="Mati_Ur_Rehman_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center space-x-2 px-6 py-3 border border-zinc-350 dark:border-zinc-700 rounded-xl hover:bg-zinc-200/50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transform hover:-translate-y-1 transition-all duration-300 font-semibold cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-500 dark:text-sky-450" />
                <span>Get PDF CV / Resume</span>
              </a>
            </div>

            {/* Social media connections */}
            <div className="flex items-center space-x-4 pt-6">
              <span className="text-xs font-mono text-zinc-400 tracking-wider font-semibold uppercase">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 hover:rotate-6 scale-95"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 hover:-rotate-6 scale-95"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 hover:rotate-6 scale-95"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Hero Right Column: Dynamic Coder Widget Layout Box */}
          <div id="hero-right-col" className="lg:col-span-5 flex justify-center items-center z-10 w-full">
            <div className="relative w-full max-w-[380px] p-6 rounded-3xl bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 flex flex-col justify-center relative overflow-hidden shadow-2xl transition-all duration-500 select-none group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[50px] pointer-events-none"></div>
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-sky-500 text-[10px] font-mono font-bold text-black uppercase tracking-wider shadow-md">
                Active State
              </div>

              {/* Pseudo terminal interface header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200/50 dark:border-zinc-850">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/85" />
                  <span className="w-3 h-3 rounded-full bg-sky-400" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  mati-ur-rehman.json
                </span>
              </div>

              {/* Developer stats mock editor representation */}
              <div className="pt-4 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-800 dark:text-slate-300 space-y-1">
                <p><span className="text-indigo-500 dark:text-purple-400">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-emerald-600 dark:text-teal-400">name</span>: <span className="text-amber-600 dark:text-amber-400">"Mati Ur Rehman"</span>,</p>
                <p className="pl-4"><span className="text-emerald-600 dark:text-teal-400">title</span>: <span className="text-amber-600 dark:text-amber-400">"MERN Stack Architect"</span>,</p>
                <p className="pl-4"><span className="text-emerald-600 dark:text-teal-400">location</span>: <span className="text-amber-600 dark:text-amber-400">"Lakki Marwat, Pakistan"</span>,</p>
                <p className="pl-4"><span className="text-emerald-600 dark:text-teal-400">saylaniAffiliation</span>: <span className="text-amber-600 dark:text-amber-400">"Diploma Student (SMIT)"</span>,</p>
                <p className="pl-4"><span className="text-emerald-600 dark:text-teal-400">passionateAbout</span>: <span className="text-cyan-500">[</span></p>
                <p className="pl-8"><span className="text-amber-600 dark:text-amber-400">"Clean Code"</span>,</p>
                <p className="pl-8"><span className="text-amber-600 dark:text-amber-400">"Interactive UI/UX"</span>,</p>
                <p className="pl-8"><span className="text-amber-600 dark:text-amber-400">"Scalable Express Backends"</span></p>
                <p className="pl-4"><span className="text-cyan-500">]</span>,</p>
                <p className="pl-4"><span className="text-emerald-600 dark:text-teal-400">willToSucceed</span>: <span className="text-amber-600 dark:text-amber-400">"Unconditional"</span></p>
                <p>&#125;;</p>

                <div className="pt-4 border-t border-zinc-150 dark:border-zinc-800 mt-4 text-[10px] sm:text-[11px] text-zinc-505 dark:text-zinc-400">
                  <p className="italic">// Recruiter spotlight hint: </p>
                  <p className="text-sky-500 dark:text-sky-400 font-semibold mt-1">
                    "AI recruiter bot is active on bottom-right corner! Try talking to it."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic down-arrow to next section */}
        <div className="hidden sm:flex justify-center pt-16">
          <a
            href="#about"
            className="p-3.5 rounded-full glass-panel border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 dark:hover:border-sky-400 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all duration-300 shadow-md animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 text-sky-400 dark:text-sky-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
