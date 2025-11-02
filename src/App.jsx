import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import AboutTimeline from './components/AboutTimeline.jsx';
import Showcase from './components/Showcase.jsx';
import SkillsAndContact from './components/SkillsAndContact.jsx';
import { Rocket } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0b10]/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="rounded-md bg-gradient-to-br from-cyan-500/20 to-violet-600/20 p-2 ring-1 ring-white/10">
            <Rocket className="h-4 w-4 text-cyan-300" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-white">LLM Portfolio</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#research" className="hover:text-white">Research</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/15 md:text-sm">Let’s talk</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#07080d] text-white">
      <Navbar />
      <Hero3D />
      <AboutTimeline />
      <Showcase />
      <SkillsAndContact />
      <footer className="border-t border-white/10 bg-[#080a10] py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} • Built with love for AI, language, and systems.
      </footer>
    </div>
  );
}
