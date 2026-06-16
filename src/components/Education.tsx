import React from "react";
import { EDUCATION } from "../data";
import { Calendar, Award, GraduationCap, CheckCircle, Flame, Server } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 bg-zinc-50 dark:bg-[#050505] transition-colors duration-500 overflow-hidden border-b border-zinc-200 dark:border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 uppercase">
            My Journey
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Education & Certifications
          </p>
          <div className="mt-3 w-16 h-1 bg-sky-505 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical core line with scanline laser animation */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[3px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-sky-300 via-sky-500 to-sky-400 timeline-glow" />
          </div>

          <div className="space-y-12">
            {EDUCATION.map((item, index) => {
              const isEven = index % 2 === 0;
              const isActive = item.period.includes("Present");

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central timeline milestone node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-[#050505] bg-zinc-100 dark:bg-zinc-900 -translate-x-1/2 flex items-center justify-center z-10 shadow-md">
                    {isActive ? (
                      <Flame className="w-3.5 h-3.5 text-sky-500 animate-pulse fill-sky-500/20" />
                    ) : (
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 fill-sky-500/10" />
                    )}
                  </div>

                  {/* Spacer for MD screens to align cards correctly */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content card box */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative group">
                      
                      {/* Interactive glowing pill for Active track */}
                      {isActive && (
                        <span className="absolute top-4 right-4 inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-sky-100/90 text-sky-700 dark:bg-sky-950/20 dark:text-sky-400 border border-sky-500/20 shadow-md animate-pulse">
                          <span>IN PROGRESS</span>
                        </span>
                      )}

                      <div className="flex items-center space-x-2.5 text-xs font-mono font-bold text-sky-500 dark:text-sky-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="mt-2.5 text-xl font-bold font-display text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-450 transition-colors duration-300">
                        {item.degree}
                      </h3>

                      <div className="mt-1 flex items-center space-x-1 text-sm font-semibold text-zinc-700 dark:text-zinc-350">
                        <GraduationCap className="w-4 h-4 text-zinc-400" />
                        <span>{item.institution}</span>
                      </div>

                      <p className="mt-3.5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications and Additional Courses Subsection */}
        <div className="mt-20 max-w-4xl mx-auto border-t border-zinc-250 dark:border-zinc-800 pt-16">
          <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-white text-center mb-8 flex items-center justify-center space-x-2">
            <Award className="w-5 h-5 text-sky-505 dark:text-sky-400" />
            <span>Additional Achievements & Curriculum</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center flex flex-col justify-between">
              <div className="mx-auto p-2.5 rounded-xl bg-sky-50 dark:bg-zinc-800 text-sky-600 dark:text-sky-400 w-fit mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">SMIT Mock Hackathon #2</h4>
              <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Recognized for completing responsive and accessibility-focused layouts in competitive timeline sessions.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center flex flex-col justify-between">
              <div className="mx-auto p-2.5 rounded-xl bg-sky-50 dark:bg-zinc-800 text-sky-600 dark:text-sky-400 w-fit mb-3">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">DOM Assigment Top-Grade</h4>
              <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Awarded top marks for deep understanding of Event Loops, Callback Execution, and vanilla JS structures.
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center flex flex-col justify-between">
              <div className="mx-auto p-2.5 rounded-xl bg-sky-50 dark:bg-zinc-800 text-sky-600 dark:text-sky-400 w-fit mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white leading-snug">REST API & Postman Skills</h4>
              <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                Exceptional results validating routing paths, query parameters verification, headers, and CORS troubleshooting.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
