import React, { useState } from "react";
import { PROJECTS } from "../data";
import { Github, ExternalLink, Code, Layers, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export const Projects: React.FC = () => {
  // Map of which project has expanded technical detail panel
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Render CSS-crafted illustrations specific to each project for high-end professional appearance
  const renderProjectIllustration = (id: string) => {
    switch (id) {
      case "proj-1": // React Dashboard
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black p-4 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-all duration-500 border border-zinc-850/40">
            {/* Mock Dashboard elements */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-ping" />
                <span className="text-[9px] font-mono text-sky-400">telemetry_node_ready</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-400/20 text-[8px] font-mono text-sky-400">
                LIVE METRICS
              </div>
            </div>
            
            <div className="my-auto grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-zinc-950/80 border border-sky-500/10 text-center">
                <div className="text-[7px] font-mono text-zinc-500 uppercase">Load</div>
                <div className="text-xs font-bold text-sky-400 font-mono">42.8%</div>
                <div className="w-full h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                  <div className="w-[42.8%] h-full bg-sky-550" />
                </div>
              </div>
              <div className="p-2 rounded bg-zinc-950/80 border border-sky-500/10 text-center animate-pulse">
                <div className="text-[7px] font-mono text-zinc-500 uppercase">Requests</div>
                <div className="text-xs font-bold text-sky-450 font-mono">1.2k</div>
                <div className="w-full h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                  <div className="w-[75%] h-full bg-sky-400" />
                </div>
              </div>
              <div className="p-2 rounded bg-zinc-950/80 border border-sky-500/10 text-center">
                <div className="text-[7px] font-mono text-zinc-500 uppercase">DB Latency</div>
                <div className="text-xs font-bold text-amber-400 font-mono">12ms</div>
                <div className="w-full h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
                  <div className="w-[12%] h-full bg-amber-450" />
                </div>
              </div>
            </div>

            <div className="h-10 w-full flex items-end space-x-1 pt-1 border-t border-zinc-800">
              <div className="w-[10%] bg-sky-500 h-[30%] rounded-t-sm" />
              <div className="w-[10%] bg-sky-600 h-[45%] rounded-t-sm" />
              <div className="w-[10%] bg-sky-450 h-[60%] rounded-t-sm" />
              <div className="w-[10%] bg-sky-500 h-[50%] rounded-t-sm" />
              <div className="w-[10%] bg-sky-600 h-[75%] rounded-t-sm" />
              <div className="w-[10%] bg-sky-400 h-[92%] rounded-t-sm animate-pulse" />
              <div className="w-[10%] bg-sky-500 h-[65%] rounded-t-sm" />
              <div className="w-[10%] bg-sky-450 h-[80%] rounded-t-sm" />
              <div className="w-[10%] bg-zinc-700 h-[50%] rounded-t-sm" />
              <div className="w-[10%] bg-zinc-850 h-[40%] rounded-t-sm" />
            </div>
          </div>
        );
      case "proj-2": // Hackathon E-Commerce
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-[#101012] p-4 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-all duration-500 border border-zinc-850/40">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold font-mono text-zinc-200">TECH-BAG Store</span>
              <div className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-450" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="p-1.5 rounded bg-zinc-950/80 border border-zinc-800/60 flex flex-col space-y-1">
                <div className="aspect-square w-full bg-zinc-850 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500">
                  🎒 IMG
                </div>
                <div className="text-[8px] font-bold text-zinc-300 font-sans">Tactical Backpack</div>
                <div className="text-[8px] font-mono text-sky-400">$45.00</div>
              </div>

              <div className="p-1.5 rounded bg-zinc-950/80 border border-zinc-800/60 flex flex-col space-y-1">
                <div className="aspect-square w-full bg-zinc-850 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500">
                  🎧 IMG
                </div>
                <div className="text-[8px] font-bold text-zinc-300 font-sans">Cyber Headset</div>
                <div className="text-[8px] font-mono text-sky-400">$120.00</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[8px] font-mono text-sky-500/60 pt-2 border-t border-zinc-800">
              <span>Checkout State: Active</span>
              <span className="px-1.5 bg-sky-505/20 rounded py-0.5 text-[7px] text-sky-450 font-bold">SALE -15%</span>
            </div>
          </div>
        );
      case "proj-3": // Todo App with CRUD
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#101012] to-[#040405] p-4 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-all duration-500 border border-zinc-850/45">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[9px] font-mono text-zinc-500">// Task Checklist Organizer</span>
              <span className="text-[9px] font-bold font-mono text-sky-400">DOM Core v1.0</span>
            </div>

            <div className="my-auto space-y-2.5">
              <div className="flex items-center space-x-2 text-xs text-zinc-500 line-through decoration-sky-500/50 opacity-50 bg-zinc-950/50 p-1.5 rounded">
                <span className="w-3 h-3 bg-sky-500 rounded flex items-center justify-center text-[8px] text-zinc-950 font-bold">&#10003;</span>
                <span className="text-[10px] font-sans">Implement DOM listener actions</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-zinc-300 bg-zinc-950 p-1.5 rounded border border-zinc-800">
                <span className="w-3 h-3 bg-sky-500 rounded flex items-center justify-center text-[8px] text-zinc-950 font-bold">&#10003;</span>
                <span className="text-[10px] font-medium font-sans">Verify state update filters</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-zinc-400 opacity-90 p-1.5 rounded bg-zinc-950/20 mr-1">
                <span className="w-3 h-3 border border-zinc-750 rounded" />
                <span className="text-[10px] font-sans">Test persistent localStorage save</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[7px] font-mono text-zinc-500 pt-1.5">
              <span>Fidelity Status: Pristine</span>
              <span>2/3 Completed</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
            <Code className="w-12 h-12 text-slate-600" />
          </div>
        );
    }
  };

  // Extra technical bullet points specific to Mati's projects
  const getExtendedDetails = (id: string) => {
    switch (id) {
      case "proj-1":
        return [
          "Developed rich dashboard layout utilizing CSS grids, responsive flexboxes, and collapsible navigation systems.",
          "Implemented beautiful data graphs utilizing Recharts drawing custom visual gradients and dynamic tracking overlays on mouse hover.",
          "Coded using advanced reusable components (Metric Cards, dynamic Charts, visual Table lists) preserving state cleanly.",
          "Utilized state optimization hooks ensuring layout rendering and filter changes complete in under 5 milliseconds."
        ];
      case "proj-2":
        return [
          "Executed precise responsive markup aligning to professional Figma design layouts perfectly.",
          "Optimized checkout user paths and intuitive visual cart sliders to improve conversion benchmarks.",
          "Wrote structured semantic HTML5 elements alongside responsive CSS flex models to achieve high Google Lighthouse scores.",
          "Packaged layout assets cleanly ensuring fast network downloads on Pakistani mobile connections."
        ];
      case "proj-3":
        return [
          "Engineered lightweight task storage engine using vanilla JS Event Listeners and LocalStorage hooks directly.",
          "Enabled fluid filtering states ('all tasks', 'completed checks', 'pending actions') using DOM updates.",
          "Practiced solid architectural foundations for dynamic CRUD modifications before diving into React State engines.",
          "Crafted eye-pleasing custom check buttons and item deletion slide-out transitions."
        ];
      default:
        return [];
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-[#050505] border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 uppercase">
            Proof of Work
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Featured Projects & Contributions
          </p>
          <div className="mt-3 w-16 h-1 bg-sky-500 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        {/* Project Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 shadow-md group hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Visual Illustration viewport */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800/40">
                  {renderProjectIllustration(project.id)}
                </div>

                {/* Content Details Block */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-3">
                    {/* Category Label */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-100 text-sky-600 dark:bg-zinc-850 dark:text-sky-400">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold font-display text-zinc-900 dark:text-zinc-100 group-hover:text-sky-505 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed text-justify">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-605 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expansion Accordion for technical details */}
                  <div className="mt-4 border-t border-zinc-200 dark:border-zinc-800/80 pt-3">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between text-xs font-mono font-bold text-zinc-550 hover:text-sky-500 dark:hover:text-sky-400 transition-colors py-1 cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Technical Details" : "Show Technical Specifications"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 pl-2 space-y-1.5 border-l-2 border-sky-455/35 dark:border-sky-400/30 animate-slide-in">
                        {getExtendedDetails(project.id).map((bullet, idx) => (
                          <div key={idx} className="flex items-start space-x-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal text-justify">
                            <span className="text-sky-550 dark:text-sky-400 font-bold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Action button bar */}
                  <div className="flex items-center space-x-3 pt-6 mt-4 border-t border-zinc-200 dark:border-zinc-800/60">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex justify-center items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wide border border-zinc-300 hover:bg-zinc-150/40 dark:border-zinc-800 dark:hover:bg-zinc-805 text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>CODEBASE</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex justify-center items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wide bg-sky-500 hover:bg-sky-600 dark:bg-sky-400 dark:text-zinc-950 dark:hover:bg-sky-300 text-black transition-colors duration-300 shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE DEMO</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
