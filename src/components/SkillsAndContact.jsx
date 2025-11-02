import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain, Code2, Cpu } from 'lucide-react';

const skills = [
  { name: 'Transformers', level: 95, icon: Brain, color: 'from-cyan-400 to-sky-500' },
  { name: 'Training Systems', level: 90, icon: Cpu, color: 'from-violet-400 to-fuchsia-500' },
  { name: 'MLOps', level: 85, icon: Code2, color: 'from-blue-400 to-cyan-500' },
];

function Gauge({ level, color }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_30px_rgba(56,189,248,0.35)]`}
      />
    </div>
  );
}

function OrbitingIcons() {
  return (
    <div className="relative mx-auto h-56 w-56">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-0 animate-spin rounded-full" style={{ animationDuration: '18s' }}>
        <a href="mailto:hello@example.com" className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white/10 p-2 text-cyan-300 shadow-lg backdrop-blur transition hover:bg-white/20"><Mail className="h-5 w-5" /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white shadow-lg backdrop-blur transition hover:bg-white/20"><Github className="h-5 w-5" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-sky-300 shadow-lg backdrop-blur transition hover:bg-white/20"><Linkedin className="h-5 w-5" /></a>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/10 p-2 text-violet-300 shadow-lg backdrop-blur"><Brain className="h-5 w-5" /></div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] blur-xl" />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-400/40 animate-pulse"
          style={{
            top: `${(Math.sin(i) * 0.5 + 0.5) * 100}%`,
            left: `${(Math.cos(i * 1.3) * 0.5 + 0.5) * 100}%`,
            animationDuration: `${6 + (i % 5)}s`,
            animationDelay: `${i * 0.2}s`,
            boxShadow: '0 0 12px rgba(56,189,248,0.5)'
          }}
        />
      ))}
    </div>
  );
}

export default function SkillsAndContact() {
  return (
    <section id="skills" className="relative w-full bg-[#0b0e13] py-20 text-white">
      <Particles />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Skills</h2>
          <div className="text-sm text-white/60">LLMs • NLP • Multimodal • Systems • MLOps</div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <s.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="text-lg font-semibold text-white/90">{s.name}</div>
              </div>
              <Gauge level={s.level} color={s.color} />
              <div className="mt-3 text-xs text-white/60">Proficiency: {s.level}%</div>
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Contact</h2>
            <div className="text-sm text-white/60">Available for research and engineering collaborations</div>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              action="mailto:hello@example.com"
              method="post"
              encType="text/plain"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/70">Name</label>
                <input required name="name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-cyan-500/60" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-white/70">Email</label>
                <input required type="email" name="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-cyan-500/60" placeholder="you@domain.com" />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm text-white/70">Message</label>
                <textarea required name="message" rows="4" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-cyan-500/60" placeholder="Tell me about your project" />
              </div>
              <button className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 font-semibold shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
                Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              <OrbitingIcons />
              <div className="mt-6 text-center text-white/70">
                Prefer email? <a href="mailto:hello@example.com" className="text-cyan-300 underline-offset-4 hover:underline">hello@example.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
