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
              Final-year Information Technology student at KIIT University specializing in backend
              engineering and scalable systems. Experienced in designing high-performance REST APIs,
              building data pipelines, and developing AI-driven applications including multi-modal
              RAG systems.
            </p>
            <p className="font-mono text-base text-text-secondary leading-relaxed">
              Passionate about clean architecture, system design, and the intersection of
              traditional backend engineering with modern AI capabilities.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-mono text-sm text-accent hover:underline flex items-center gap-2"
              >
                Let&apos;s work together ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Stats & Education */}
          <motion.div variants={fadeUp} className="space-y-6">
             <h3 className="font-syne font-semibold text-2xl text-text-primary">Education & Details</h3>
             <div className="glass-card rounded-[2rem] p-8 space-y-4 glow-cyan-hover transition-all duration-300">
               {[
                  { label: 'Degree', value: 'B.Tech in Information Technology' },
                  { label: 'University', value: 'KIIT University, Bhubaneswar' },
                  { label: 'Graduation', value: 'Expected May 2026' },
                  { label: 'CGPA', value: '9.21 / 10' },
                  { label: 'Location', value: 'Bhubaneswar, Odisha, India' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row justify-between sm:items-center py-2 border-b border-border-color/30 last:border-0 gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">{item.label}</span>
                    <span className="font-mono text-sm font-semibold text-text-primary text-right">{item.value}</span>
                  </div>
                ))}
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
