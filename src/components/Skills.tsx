import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data";
import * as LucideIcons from "lucide-react";

// Robust dynamic resolver for Lucide icons
const IconRenderer: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // Gracefully fallback to standard Code icon if typo happens
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Code;
  return <IconComponent className={className || "w-5 h-5"} />;
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="py-24 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 border-y border-zinc-200 dark:border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 uppercase">
            My Tech Arsenal
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Comprehensive Skills & Expertise
          </p>
          <div className="mt-3 w-16 h-1 bg-sky-500 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Categories Tab Selector with Glide Style */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((category, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold tracking-wide transition-all duration-300 transform scale-95 border cursor-pointer ${
                  isActive
                    ? "bg-sky-500 text-black border-sky-500 dark:bg-sky-400 dark:text-black dark:border-sky-400 scale-100"
                    : "bg-white text-zinc-650 border-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => {
            return (
              <div
                key={skill.name}
                className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Skill Title & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-sky-100 dark:bg-zinc-800 text-sky-500 dark:text-sky-400 group-hover:scale-110 transition-all duration-300">
                      <IconRenderer name={skill.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-100">
                      {skill.name}
                    </span>
                  </div>
                  {/* Skill level indicator */}
                  <span className="text-xs sm:text-sm font-semibold font-mono text-sky-500 dark:text-sky-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Spring progress bar */}
                <div className="relative w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-sky-500 dark:bg-sky-400 rounded-full transition-all duration-1000 ease-out shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Small motivational footer badge */}
        <div className="mt-16 text-center">
          <div className="max-w-md mx-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-sky-400 rounded-full animate-ping" />
            <span>Currently mastering TypeScript Type Systems & Next.js App Router</span>
          </div>
        </div>

      </div>
    </section>
  );
};
