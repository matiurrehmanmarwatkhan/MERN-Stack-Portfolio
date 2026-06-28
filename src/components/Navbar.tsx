import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-sm font-medium tracking-wide text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 py-2 group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 dark:bg-sky-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
};

export const Navbar: React.FC = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Transform navbar based on scroll depth
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Track scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#architecture", label: "Architecture" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Scroll Progress Indicator Bar at Top */}
      <div 
        id="scroll-indicator"
        className="fixed top-0 left-0 right-0 h-[3px] bg-sky-400 z-50 origin-left transition-all duration-100"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/85 dark:bg-zinc-950/80 shadow-lg shadow-black/5 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo initials block */}
            <a href="#hero" className="flex items-center space-x-2 group">
              <div className="p-1.5 rounded-lg bg-sky-500 dark:bg-sky-500/10 border border-sky-400/20 group-hover:scale-105 transition-all duration-300">
                <Cpu className="w-5 h-5 text-zinc-950 dark:text-sky-405" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300 font-sans">
                MATI <span className="text-sky-500 dark:text-sky-400">UR REHMAN</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            {/* Control Widgets (CTA only) */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#contact"
                className="px-4 py-1.5 bg-zinc-800 dark:bg-zinc-800 text-white rounded-full text-sm font-medium hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-black dark:hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 border border-zinc-700 shadow-sm"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Nav Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                id="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 animate-slide-in">
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium px-3 py-2 rounded-lg text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 hover:text-sky-500 dark:hover:text-sky-400"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center inline-flex justify-center items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-sky-500 text-slate-950 dark:bg-sky-400 dark:text-zinc-950 font-semibold"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
