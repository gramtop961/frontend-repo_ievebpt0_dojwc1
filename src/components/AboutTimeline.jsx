import React from 'react';
import { motion } from 'framer-motion';
import { Book, Cpu } from 'lucide-react';

const items = [
  {
    title: 'M.S. in Computer Science',
    org: 'Focus: Deep Learning & NLP',
    type: 'Education',
    year: '2019 — 2021',
    desc: 'Thesis on scaling transformer architectures for domain adaptation and low-resource languages.'
  },
  {
    title: 'LLM Engineer',
    org: 'AI Product Lab',
    type: 'Experience',
    year: '2023 — Present',
    desc: 'Designed retrieval-augmented generation, evaluation pipelines, and safety filters for customer-facing LLM features.'
  },
  {
    title: 'Applied Research Intern',
    org: 'Vision & Language Group',
    type: 'Research',
    year: '2022',
    desc: 'Rapid prototyping of multi-modal encoders and instruction-tuned models.'
  },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function AboutTimeline() {
  return (
    <section id="about" className="relative w-full bg-[#0b0e13] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-cyan-500/30 to-violet-500/30 p-2 ring-1 ring-white/10">
            <Cpu className="h-5 w-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About</h2>
        </div>
        <p className="mb-10 max-w-3xl text-white/70">
          I work across the stack of modern ML — from dataset curation and training pipelines to evaluation, safety, and shipping usable products.
        </p>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-widest text-white/50">
                <span>{item.type}</span>
                <span className="text-cyan-300/80">{item.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
              <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                <Book className="h-4 w-4 text-violet-400" />
                <span>{item.org}</span>
              </div>
              <p className="text-sm text-white/70">{item.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 text-xs text-white/50">
                Tools: PyTorch, JAX, Triton, Weights & Biases, Ray, FastAPI
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
