import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import {
  SiPython, SiSpringboot, SiFastapi, SiReact,
  SiPostgresql, SiMysql, SiDocker, SiGit,
  SiPostman, SiPrisma, SiRailway
} from 'react-icons/si'
import { FaBrain, FaMicrochip, FaJava, FaAws } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'

const iconMap = {
  'Java': FaJava,
  'Python': SiPython,
  'Spring Boot': SiSpringboot,
  'FastAPI': SiFastapi,
  'React': SiReact,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Docker': SiDocker,
  'Git': SiGit,
  'AWS': FaAws,
  'Postman': SiPostman,
  'Prisma ORM': SiPrisma,
  'Railway': SiRailway,
  'RAG Systems': FaBrain,
  'LLM Integration': FaMicrochip,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-primary border-t border-border-color">
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
            Skills
          </motion.h2>
        </motion.div>

        {/* Skill categories */}
        <div className="space-y-10">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.p
                variants={fadeUp}
                className="font-mono text-xs text-text-dim uppercase tracking-widest mb-4"
              >
                {group.category}
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = iconMap[skill]
                  return (
                    <motion.div
                      key={skill}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl shadow-lg glow-cyan-hover
                                 font-mono text-xs text-text-secondary hover:text-accent transition-all duration-300 cursor-default group"
                    >
                      {Icon ? (
                        <Icon className="text-sm text-text-dim group-hover:text-accent transition-colors" />
                      ) : (
                        <BsCodeSlash className="text-sm text-text-dim group-hover:text-accent transition-colors" />
                      )}
                      {skill}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
