import React, { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import ArchitectureDocs from "./components/ArchitectureDocs";
import { Contact } from "./components/Contact";
import { AiAssistant } from "./components/AiAssistant";
import { Footer } from "./components/Footer";

export default function App() {
  
  // Mouse-following spotlight coordinate tracker for premium background gradients
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      {/* Spotlight tracer container wrapper */}
      <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-500 relative spotlight-glow overflow-x-hidden selection:bg-sky-400 selection:text-black dark:selection:bg-sky-400 dark:selection:text-black">
        
        {/* Floating Header */}
        <Navbar />

        {/* Content Section Rails */}
        <main>
          {/* 1. Hero home entrance */}
          <Hero />

          {/* 2. Detailed professional summary */}
          <About />

          {/* 3. Skill matrices */}
          <Skills />

          {/* 4. Interactive project lists */}
          <Projects />

          {/* 5. Chronological studies timeline */}
          <Education />

          {/* 5.5. Full-stack System blueprints */}
          <section
            id="architecture"
            className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 border-b border-zinc-200 dark:border-zinc-900"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-sm font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 uppercase">
                  Blueprints
                </h2>
                <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  System Architecture
                </p>
                <div className="mt-3 w-16 h-1 bg-sky-500 dark:bg-sky-400 mx-auto rounded-full" />
              </div>
              <ArchitectureDocs />
            </div>
          </section>

          {/* 6. Stateful contact triggers */}
          <Contact />
        </main>

        {/* Floating recruiter chat widget */}
        <AiAssistant />

        {/* Bottom index layout */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}
