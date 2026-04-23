import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
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
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-xs px-2.5 py-1 bg-bg-tertiary border border-border-color text-text-secondary rounded-md">
                {t}
              </span>
            ))}
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
        <h4 className="font-mono text-xs text-text-dim uppercase tracking-widest border-b border-border-color pb-2">Engineering Case Study</h4>
        
        <div>
          <strong className="text-text-primary font-syne text-lg">Problem:</strong>
          <p className="font-mono text-sm text-text-secondary mt-1 leading-relaxed">{project.problem}</p>
        </div>

        <div>
          <strong className="text-text-primary font-syne text-lg">Architecture:</strong>
          <p className="font-mono text-sm font-semibold text-accent mt-1 p-3 bg-bg-tertiary rounded-lg border border-border-color">
            {project.architecture}
          </p>
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
            Engineering Case Studies
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
