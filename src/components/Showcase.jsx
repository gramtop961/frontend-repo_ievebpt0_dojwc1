import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain } from 'lucide-react';

const projects = [
  {
    title: 'RAG Architect',
    tags: ['LLMs', 'Retrieval', 'Evaluation'],
    desc: 'A production-grade retrieval-augmented generation system with hybrid search, query planning, and automatic evals.',
    link: '#',
    glow: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Low-Rank Adaptation Suite',
    tags: ['NLP', 'LoRA', 'Fine-tuning'],
    desc: 'Efficient fine-tuning toolkit for task-specific adapters with safety and bias checks.',
    link: '#',
    glow: 'from-violet-500 to-fuchsia-500'
  },
  {
    title: 'Vision-Language Playground',
    tags: ['Multimodal', 'Contrastive', 'Transformers'],
    desc: 'Interactive demos for contrastive pretraining, attention visualization, and caption grounding.',
    link: '#',
    glow: 'from-sky-500 to-cyan-400'
  },
];

const papers = [
  {
    title: 'Robust Instruction Tuning via Mixture-of-Feedback',
    venue: 'Preprint',
    year: '2024',
    summary: 'Combining model and human feedback signals to improve generalization and safety.',
    link: '#'
  },
  {
    title: 'Domain-Adapted Transformers for Low-Resource NLP',
    venue: 'ACL',
    year: '2023',
    summary: 'Scaling laws for adaptation strategies under extreme data scarcity.',
    link: '#'
  },
  {
    title: 'Latent Alignment for Multimodal Retrieval',
    venue: 'NeurIPS Workshop',
    year: '2022',
    summary: 'Simple training recipes that close the gap to heavy cross-attention models.',
    link: '#'
  },
];

function TiltCard({ children }) {
  const [style, setStyle] = useState({});
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rX = (py - 0.5) * -10; // tilt up/down
    const rY = (px - 0.5) * 10; // tilt left/right
    setStyle({ transform: `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg)` });
  };
  const onLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className="transition-transform duration-150 will-change-transform"
    >
      {children}
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="projects" className="relative w-full bg-[#0a0b10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-md bg-gradient-to-br from-cyan-500/30 to-violet-500/30 p-2 ring-1 ring-white/10">
            <Code2 className="h-5 w-5 text-sky-400" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <TiltCard>
                <div className="relative h-56 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition group-hover:bg-white/[0.06]">
                  <motion.div
                    initial={{ backgroundPosition: '0% 50%' }}
                    whileHover={{ backgroundPosition: '100% 50%' }}
                    transition={{ duration: 1.4, ease: 'easeInOut' }}
                    className={`pointer-events-none absolute inset-0 opacity-60 blur-2xl bg-gradient-to-br ${p.glow}`}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <div className="relative z-10">
                    <div className="mb-3 inline-flex items-center gap-2 text-xs text-white/70">
                      {p.tags.map(t => (
                        <span key={t} className="rounded-full bg-white/10 px-2 py-1">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>

        <div id="research" className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-md bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 p-2 ring-1 ring-white/10">
              <Brain className="h-5 w-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Research & Publications</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {papers.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25),transparent_60%)] blur-2xl"
                  />
                  <div className="relative z-10">
                    <div className="mb-2 text-xs uppercase tracking-widest text-white/50">{p.venue} • {p.year}</div>
                    <h3 className="text-base font-semibold text-white/90">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{p.summary}</p>
                    <div className="mt-4 inline-flex items-center text-sm text-cyan-300">Read paper →</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
