import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-secondary border-t border-border-color">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.h2 variants={fadeUp} className="font-syne font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            About
          </motion.h2>
        </motion.div>

        {/* 2-column text grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left: Bio */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="font-syne font-semibold text-2xl text-text-primary">About Me</h3>
            <p className="font-mono text-base text-text-secondary leading-relaxed">
              I specialize in building scalable backend systems — from high-throughput REST APIs to AI-driven retrieval pipelines deployed in production.
              My projects handle real concurrent workloads on Railway, and my engineering philosophy prioritises
              correctness, observability, and clean system boundaries over feature velocity.
            </p>
            <p className="font-mono text-base text-text-secondary leading-relaxed">
              I sit at the intersection of classical backend engineering and modern AI infrastructure.
              I&apos;ve built multi-modal RAG systems using FastAPI + Pinecone, architected JWT-based auth flows in Spring Boot, and containerised full-stack applications with Docker.
            </p>
            <div className="pt-4 flex gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-mono text-sm text-accent hover:underline flex items-center gap-2"
              >
                Hire me ↗
              </a>
              <span className="font-mono text-sm text-text-dim">·</span>
              <span className="font-mono text-sm text-[#2dba4e]">Available for SDE roles.</span>
            </div>
          </motion.div>

          {/* Right: Stats & Education */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h3 className="font-syne font-semibold text-2xl text-text-primary">Education & Details</h3>
            <div className="glass-card rounded-[2rem] p-8 space-y-4 glow-cyan-hover transition-all duration-300">
              {[
                { label: 'Degree', value: 'B.Tech in Information Technology' },
                { label: 'University', value: 'KIIT University, Bhubaneswar' },
                { label: 'Graduation', value: 'Expected 2026' },
                { label: 'CGPA', value: '9.29 / 10' },
                { label: 'Location', value: 'Bhubaneswar, Odisha, India' },
                { label: 'Availability', value: 'Open to roles from 2026' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row justify-between sm:items-center py-2 border-b border-border-color/30 last:border-0 gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">{item.label}</span>
                  <span className={`font-mono text-sm font-semibold text-right ${item.label === 'Availability' ? 'text-[#2dba4e]' : 'text-text-primary'}`}>{item.value}</span>
                </div>
              ))}
            </div>
            {/* IBM Cert badge */}
            <div className="flex items-center gap-3 px-4 py-3 glass-card rounded-xl border border-border-color/40">
              <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center text-accent text-xs font-bold flex-shrink-0">IBM</div>
              <div>
                <p className="font-syne text-sm font-semibold text-text-primary">IBM Professional Certificate</p>
                <p className="font-mono text-xs text-text-secondary">RAG and Agentic AI — 2026</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
