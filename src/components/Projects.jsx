import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { FaJava, FaAws, FaDocker, FaBrain, FaMicrochip, FaSeedling } from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiReact, SiNextdotjs, SiFastapi, SiMysql, SiPinecone, SiOpenai, SiExpress, SiPrisma, SiTailwindcss, SiSupabase } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const iconMap = {
  'Java': { icon: FaJava, color: '#f89820' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  'React': { icon: SiReact, color: '#61dafb' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'Docker': { icon: FaDocker, color: '#2496ed' },
  'AWS': { icon: FaAws, color: '#ff9900' },
  'MySQL': { icon: SiMysql, color: '#4479a1' },
  'Next.js': { icon: SiNextdotjs, color: '#e2e8f0' },
  'LLaMA': { icon: FaBrain, color: '#b535f6' },
  'Whisper': { icon: FaMicrochip, color: '#9b72ff' },
  'Pinecone': { icon: FaSeedling, color: '#00c785' },
  'JWT': { icon: BsCodeSlash, color: '#f59e0b' },
  'Express.js': { icon: SiExpress, color: '#e2e8f0' },
  'Prisma': { icon: SiPrisma, color: '#2d3748' },
  'TailwindCSS': { icon: SiTailwindcss, color: '#38bdf8' },
  'Supabase': { icon: SiSupabase, color: '#3ecf8e' },
}

function AnimatedArchitecture({ architectureText, techList }) {
  const steps = architectureText.split('→').map(s => s.trim())

  return (
    <div className="mt-3 p-6 bg-bg-tertiary rounded-2xl border border-border-color/50 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-purple/5 animate-pulse-glow" />

      {/* Architecture Flow */}
      <div className="flex-1 flex flex-col gap-3 relative z-10 w-full">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="flex flex-col"
          >
            <div className="px-4 py-2 bg-bg-secondary/80 border border-accent/30 rounded-lg text-accent text-xs font-mono shadow-[0_0_10px_rgba(0,229,255,0.1)] glow-cyan-hover">
              {step}
            </div>
            {idx < steps.length - 1 && (
              <div className="flex justify-center -my-1 opacity-50">
                <FiArrowRight className="rotate-90 text-text-dim text-lg" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Orbiting Orbital Tech Stack */}
      <div className="hidden md:flex relative w-[200px] h-[200px] flex-shrink-0 items-center justify-center">
        {/* Core Glow */}
        <div className="absolute inset-0 bg-accent-purple/10 rounded-full blur-[40px] animate-pulse-glow" />

        {/* Orbit Track */}
        <div className="absolute w-[180px] h-[180px] rounded-full border border-border-color border-dashed opacity-30 animate-spin" style={{ animationDuration: '20s' }} />

        {/* Orbital Icons */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationTimingFunction: 'linear' }}>
          {techList.slice(0, 6).map((tech, idx) => {
            const mapped = iconMap[tech]
            if (!mapped) return null
            const Icon = mapped.icon
            const angle = (idx / Math.min(6, techList.length)) * 360
            const radius = 90
            const x = Math.cos(angle * (Math.PI / 180)) * radius
            const y = Math.sin(angle * (Math.PI / 180)) * radius

            return (
              <div
                key={tech}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-bg-secondary border border-border-color rounded-full flex items-center justify-center shadow-lg"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                {/* Counter rotate to keep icon upright */}
                <div
                  className="animate-spin"
                  style={{ animationDuration: '12s', animationDirection: 'reverse', animationTimingFunction: 'linear' }}
                >
                  <Icon className="text-xl drop-shadow-[0_0_8px_currentColor]" style={{ color: mapped.color }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01, boxShadow: '0 25px 50px -12px rgba(0,229,255,0.15)' }}
      className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row gap-8 p-8 transition-all duration-300 border border-border-color/50"
    >
      {/* Left Column: Image & Links */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="rounded-xl overflow-hidden shadow-lg bg-bg-tertiary border border-border-color relative">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center text-text-dim text-xs">
              Preview Image Missing
            </div>
          )}
        </div>

        <div>
          <h3 className="font-syne font-bold text-2xl text-text-primary mb-1">{project.name}</h3>
          <p className="font-mono text-sm text-accent mb-4">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => {
              const mapped = iconMap[t]
              const Icon = mapped ? mapped.icon : BsCodeSlash
              const color = mapped ? mapped.color : '#8b949e'
              return (
                <span key={t} title={t} className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 bg-bg-tertiary border border-border-color text-text-secondary rounded-lg hover:border-accent/40 hover:text-accent hover:-translate-y-0.5 transition-all cursor-default">
                  <Icon style={{ color }} className="text-base flex-shrink-0" />
                  {t}
                </span>
              )
            })}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-text-primary hover:text-accent transition-colors">
                <FiGithub /> Source Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm text-text-primary hover:text-accent transition-colors">
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Deep Engineering Case Study */}
      <div className="w-full lg:w-2/3 flex flex-col gap-5">
        <h4 className="font-mono text-xs text-text-dim uppercase tracking-widest border-b border-border-color pb-2">Engineering Projects</h4>

        <div>
          <strong className="text-text-primary font-syne text-lg">Problem:</strong>
          <p className="font-mono text-sm text-text-secondary mt-1 leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <strong className="text-text-primary font-syne text-lg">Architecture:</strong>
          <AnimatedArchitecture architectureText={project.architecture} techList={project.tech} />
        </div>

        {project.decisions && project.decisions.length > 0 && (
          <div>
            <strong className="text-text-primary font-syne text-lg">Key Decisions:</strong>
            <ul className="list-disc leading-relaxed ml-5 mt-2 space-y-1">
              {project.decisions.map((d, i) => (
                <li key={i} className="font-mono text-sm text-text-secondary">{d}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div className="p-4 bg-bg-secondary rounded-xl border border-border-color">
            <strong className="text-accent-purple font-syne text-base mb-1 block">Challenges</strong>
            <p className="font-mono text-xs text-text-secondary">{project.challenges}</p>
          </div>
          <div className="p-4 bg-bg-secondary rounded-xl border border-border-color">
            <strong className="text-[#2dba4e] font-syne text-base mb-1 block">Results</strong>
            <p className="font-mono text-xs text-text-secondary">{project.results}</p>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

import { useState } from 'react'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-bg-secondary border-t border-border-color">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <motion.h2 variants={fadeUp} className="font-syne font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Engineering Projects
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
