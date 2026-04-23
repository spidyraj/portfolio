import { motion } from 'framer-motion'
import { FiDatabase, FiLock, FiServer, FiActivity } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const principles = [
  {
    id: 'api',
    icon: FiActivity,
    title: 'API Design',
    color: '#00e5ff',
    content: 'Strict REST compliance. Resources are predictable and properly scoped. I default to cursor-based pagination for high-throughput endpoints and ensure robust error standardization across services.'
  },
  {
    id: 'db',
    icon: FiDatabase,
    title: 'Database Optimization',
    color: '#2dba4e',
    content: 'Prioritize composite indexing on high-read multi-tenant tables. I actively monitor query execution plans to eliminate N+1 problems and utilize connection pooling (e.g., PgBouncer) for traffic spikes.'
  },
  {
    id: 'auth',
    icon: FiLock,
    title: 'Authentication & Security',
    color: '#b535f6',
    content: 'Stateless architecture using JWTs with strict short-lived access tokens and HttpOnly secure refresh token rotation. Roles are explicitly mapped locally to minimize DB hits on protected routes.'
  },
  {
    id: 'scale',
    icon: FiServer,
    title: 'Scalability Decisions',
    color: '#ff9900',
    content: 'Horizontal scaling focus. I design backend processes assuming they will be containerized. Background workers handle heavy compute (audio transcription, embeddings) off the main event loop.'
  }
]

export default function SystemDesign() {
  return (
    <section id="system-design" className="section-padding bg-bg-primary border-t border-border-color">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-syne font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            How I Design Systems
          </motion.h2>
          <motion.p variants={fadeUp} className="font-mono text-sm text-text-secondary mt-4 max-w-2xl">
            Core principles defining my backend engineering approach, ensuring solutions stay robust, secure, and ready for scale.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -6 }}
                className="glass-card p-6 flex flex-col gap-4 rounded-2xl border border-border-color/50 relative overflow-hidden group cursor-default"
                style={{ transition: 'box-shadow 0.3s ease, border-color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 25px ${p.color}33, 0 0 60px ${p.color}11`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
              >
                {/* Animated top border glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                />

                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ boxShadow: [`0 0 10px ${p.color}66`, `0 0 25px ${p.color}99`, `0 0 10px ${p.color}66`] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                    className="p-3 bg-bg-tertiary rounded-lg border border-border-color"
                  >
                    <Icon className="text-2xl drop-shadow-md" style={{ color: p.color }} />
                  </motion.div>
                  <h3 className="font-syne font-bold text-xl text-text-primary">{p.title}</h3>
                </div>
                <p className="font-mono text-sm leading-relaxed text-text-secondary">
                  {p.content}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
