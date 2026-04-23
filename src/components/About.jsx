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

        {/* 3-column grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Col 1: Bio */}
          <motion.div variants={fadeUp} className="md:col-span-1 space-y-4">
            <h3 className="font-syne font-semibold text-xl text-text-primary">About Me</h3>
            <p className="font-mono text-sm text-text-secondary leading-relaxed">
              Final-year Information Technology student at KIIT University specializing in backend
              engineering and scalable systems. Experienced in designing high-performance REST APIs,
              building data pipelines, and developing AI-driven applications including multi-modal
              RAG systems.
            </p>
            <p className="font-mono text-sm text-text-secondary leading-relaxed">
              Passionate about clean architecture, system design, and the intersection of
              traditional backend engineering with modern AI capabilities.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-mono text-sm text-accent hover:underline"
              >
                Let&apos;s work together →
              </a>
            </div>
          </motion.div>

          {/* Col 2: Highlight card */}
          <motion.div
            variants={fadeUp}
            className="glass-card rounded-[2rem] p-8 space-y-5 glow-cyan-hover transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 pb-4 border-b border-border-color/50">
              <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">
                IBM
              </div>
              <div>
                <p className="font-syne font-semibold text-text-primary text-sm">IBM Certified</p>
                <p className="font-mono text-xs text-text-secondary">Professional Certificate</p>
              </div>
            </div>
            <p className="font-mono text-xs text-text-secondary">
              RAG and Agentic AI Professional Certificate — IBM
            </p>

            <div className="space-y-3 pt-2">
              {[
                { label: 'CGPA', value: '9.21 / 10' },
                { label: 'Degree', value: 'B.Tech in IT' },
                { label: 'University', value: 'KIIT University' },
                { label: 'Graduation', value: 'Expected May 2026' },
                { label: 'Location', value: 'Bhubaneswar, India' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="font-mono text-xs text-text-dim">{item.label}</span>
                  <span className="font-mono text-xs text-text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Photo / stat card */}
          <motion.div variants={fadeUp} className="relative flex justify-center items-center h-80 md:h-full pt-8 md:pt-0">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-full max-w-[280px] h-full flex items-end justify-center"
            >
              {/* Glowing Aura Base */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse-glow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-purple/20 rounded-full blur-[60px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
              
              {/* Profile Image (Cutout) */}
              <img
                src="/images/profile.png"
                alt="Divyanshu"
                className="relative z-10 w-full h-auto max-h-full object-contain"
                style={{ filter: 'drop-shadow(0px 0px 25px rgba(0, 229, 255, 0.3))' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-bg-tertiary to-bg-secondary flex flex-col items-center justify-center gap-4 hidden rounded-3xl border border-accent/20"
                style={{ display: 'none' }}
              >
                <div className="text-center space-y-1">
                  <div className="font-syne font-bold text-4xl text-accent drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">9.21</div>
                  <div className="font-mono text-xs text-text-secondary">CGPA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
