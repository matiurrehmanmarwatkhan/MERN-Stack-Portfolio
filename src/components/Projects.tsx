import React, { useState } from "react";
import { PROJECTS } from "../data";
import {
  Github,
  ExternalLink,
  Code,
  Layers,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const Projects: React.FC = () => {
  // Map of which project has expanded technical detail panel
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Render CSS-crafted illustrations specific to each project for high-end professional appearance

  // Extra technical bullet points specific to Mati's projects
  const getExtendedDetails = (id: string) => {
    switch (id) {
      case "proj-1":
        return [
          "Developed rich dashboard layout utilizing CSS grids, responsive flexboxes, and collapsible navigation systems.",
          "Implemented beautiful data graphs utilizing Recharts drawing custom visual gradients and dynamic tracking overlays on mouse hover.",
          "Coded using advanced reusable components (Metric Cards, dynamic Charts, visual Table lists) preserving state cleanly.",
          "Utilized state optimization hooks ensuring layout rendering and filter changes complete in under 5 milliseconds.",
        ];
      case "proj-2":
        return [
          "Executed precise responsive markup aligning to professional Figma design layouts perfectly.",
          "Optimized checkout user paths and intuitive visual cart sliders to improve conversion benchmarks.",
          "Wrote structured semantic HTML5 elements alongside responsive CSS flex models to achieve high Google Lighthouse scores.",
          "Packaged layout assets cleanly ensuring fast network downloads on Pakistani mobile connections.",
        ];
      case "proj-3":
        return [
          "Engineered lightweight task storage engine using vanilla JS Event Listeners and LocalStorage hooks directly.",
          "Enabled fluid filtering states ('all tasks', 'completed checks', 'pending actions') using DOM updates.",
          "Practiced solid architectural foundations for dynamic CRUD modifications before diving into React State engines.",
          "Crafted eye-pleasing custom check buttons and item deletion slide-out transitions.",
        ];
      case "proj-4":
        return [
          "Created a responsive Restaurant with full stack functionality using React, Express, and MongoDB.",
          "Implemented a dynamic menu system allowing users to browse and order food items seamlessly.",
          "Optimized menu listing pages for faster load times and better SEO performance.",
          "Developed an admin dashboard for managing products, orders, and users effectively.",
        ];
      case "proj-5":
        return [
          "Created a responsive Restaurant with full stack functionality using React, Express, and MongoDB.",
          "Implemented a dynamic menu system allowing users to browse and order food items seamlessly.",
          "Optimized menu listing pages for faster load times and better SEO performance.",
          "Developed an admin dashboard for managing products, orders, and users effectively.",
        ];
      case "proj-6":
        return [
          "Developed a Property Listing Web Application using React, Node.js, and MongoDB.",
          "Implemented advanced search and filter functionalities for users to find properties easily.",
          "Integrated Google Maps API for interactive property location visualization.",
          "Optimized the application for performance and responsiveness across devices.",
        ];
      case "proj-7":
        return [
          "Developed a FreelancePk platform using React, Node.js, and MongoDB.",
          "Implemented user authentication and authorization for secure access.",
          "Created a dynamic project posting and bidding system for freelancers and clients.",
          "Optimized the platform for performance, scalability, and user experience.",
        ];
      case "proj-8":
        return [
          "Developed a NursPulse platform using React, Node.js, and MongoDB.",
          "Implemented user authentication and authorization for secure access.",
          "Created a blog for sharing healthcare tips and updates.",
          "Optimized the platform for performance, scalability, and user experience.",
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
                      <span>
                        {isExpanded
                          ? "Hide Technical Details"
                          : "Show Technical Specifications"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 pl-2 space-y-1.5 border-l-2 border-sky-455/35 dark:border-sky-400/30 animate-slide-in">
                        {getExtendedDetails(project.id).map((bullet, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal text-justify"
                          >
                            <span className="text-sky-550 dark:text-sky-400 font-bold mt-0.5">
                              •
                            </span>
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
