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
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-card rounded-[1.5rem] overflow-hidden flex flex-col glow-cyan-hover transition-all duration-300"
    >
      {/* Image */}
      {!imgError ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-44 object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-44 bg-gradient-to-br from-bg-tertiary to-bg-secondary border-b border-border-color
                        flex items-center justify-center text-text-dim text-xs text-center p-4">
          <div>
            <div className="text-2xl mb-1">📷</div>
            <div>Add screenshot to /public/images/</div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Highlight badge */}
        <span className="font-mono text-xs text-accent bg-accent/5 border border-accent/20 rounded px-2 py-1 self-start">
          {project.highlight}
        </span>

        <div>
          <h3 className="font-syne font-bold text-lg text-text-primary">{project.name}</h3>
          <p className="font-mono text-xs text-text-secondary mt-0.5">{project.subtitle}</p>
        </div>

        <p className="font-mono text-xs text-text-secondary leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-0.5 border border-border-color text-text-dim rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-1 border-t border-border-color mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-accent transition-colors"
            >
              <FiGithub className="text-sm" /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-accent transition-colors"
            >
              <FiExternalLink className="text-sm" /> Live Demo
            </a>
          )}
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
            Projects
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
