import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Brain } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon radial glow overlays - non-blocking interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col justify-center px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Brain className="h-4 w-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-300/80">LLM Engineer • AI Researcher</span>
          </div>
          <h1 className="text-balance font-[800] leading-tight tracking-tight text-white/95 md:text-6xl text-4xl">
            Building Intelligence with <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">Language</span> and Code
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 md:text-lg">
            I design, train, and deploy large language models and intelligent systems. My work blends deep learning, NLP, and product thinking to ship real-world AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-all hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
