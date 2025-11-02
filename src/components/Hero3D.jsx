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
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glassy neon overlays - non-blocking interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_60%)] blur-2xl" />
      </div>

      {/* Animated sparkle grid (pure CSS) */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse" />
      </div>

      {/* Content (non-blocking except CTAs) */}
      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-6 pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur pointer-events-auto"
          >
            <Brain className="h-4 w-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-300/80">LLM Engineer • AI Researcher</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="text-balance font-[800] leading-tight tracking-tight text-white/95 md:text-6xl text-4xl"
          >
            Building Intelligence with <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">Language</span> and Code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
            className="mt-4 max-w-2xl text-white/70 md:text-lg"
          >
            I design, train, and deploy large language models and intelligent systems. My work blends deep learning, NLP, and product thinking to ship real-world AI.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110 pointer-events-auto"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Explore Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-all hover:bg-white/10 pointer-events-auto"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 text-xs text-white/60">
            <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
            <span>Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
