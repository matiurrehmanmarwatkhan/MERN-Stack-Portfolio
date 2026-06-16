import React, { useEffect, useState } from "react";
import { PERSONAL_INFO, STATISTICS } from "../data";
import { Award, Zap, Compass, UserCheck } from "lucide-react";

interface CounterProps {
  value: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) return;

    // Fast-pacing durations for high numbers, slow for small numbers
    const totalDuration = 1200; // ms
    const incrementTime = Math.max(Math.floor(totalDuration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40); // larger increments
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-display text-3xl sm:text-4xl font-extrabold text-sky-500 dark:text-sky-400">
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const customIcons = [Award, Zap, Compass, UserCheck];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#050505] border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 uppercase">
            Get To Know Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            About Mati Ur Rehman
          </p>
          <div className="mt-3 w-16 h-1 bg-sky-500 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-slate-100">
              Interactive MERN Stack Engineer based in Pakistan
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              {PERSONAL_INFO.about}
            </p>

            {/* Career Objectives Block */}
            <div className="p-5 rounded-3xl bg-zinc-100/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80">
              <h4 className="text-sm font-semibold font-mono text-sky-500 dark:text-sky-400 uppercase tracking-wider mb-2">
                Career Objectives
              </h4>
              <p className="text-sm text-zinc-650 dark:text-zinc-300 text-justify italic">
                "{PERSONAL_INFO.careerObjectives}"
              </p>
            </div>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Full Name</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{PERSONAL_INFO.name}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Primary Contact</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Email Address</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 break-words">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-500">Current Residence</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Statistics Box Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {STATISTICS.map((stat, i) => {
              const IconComponent = customIcons[i % customIcons.length];
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 shadow-md flex flex-col justify-between hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-zinc-800 text-sky-500 dark:text-sky-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Animated Number Tracker */}
                    <div className="flex items-baseline">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">
                      {stat.label}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
