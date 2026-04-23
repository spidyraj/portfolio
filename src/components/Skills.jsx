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
  'Java': { icon: FaJava, color: '#f89820' },
  'Python': { icon: SiPython, color: '#3776ab' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  'FastAPI': { icon: SiFastapi, color: '#009688' },
  'React': { icon: SiReact, color: '#61dafb' },
  'HTML': { icon: BsCodeSlash, color: '#e34f26' },
  'CSS': { icon: BsCodeSlash, color: '#1572b6' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'MySQL': { icon: SiMysql, color: '#4479a1' },
  'Docker': { icon: SiDocker, color: '#2496ed' },
  'Git': { icon: SiGit, color: '#f05032' },
  'AWS': { icon: FaAws, color: '#ff9900' },
  'Postman': { icon: SiPostman, color: '#ff6c37' },
  'Prisma ORM': { icon: SiPrisma, color: '#2d3748' },
  'Railway': { icon: SiRailway, color: '#0b0d0e' },
  'RAG Systems': { icon: FaBrain, color: '#b535f6' },
  'LLM Integration': { icon: FaMicrochip, color: '#b535f6' },
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

        {/* Skill container */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap gap-4"
        >
          {skills.map((skill) => {
            const mapped = iconMap[skill]
            const Icon = mapped ? mapped.icon : BsCodeSlash
            const color = mapped ? mapped.color : '#00e5ff'

            return (
              <motion.div
                key={skill}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl shadow-xl glow-cyan-hover
                           font-syne font-bold text-base md:text-lg text-text-primary hover:text-accent transition-all duration-300 cursor-default group"
              >
                <Icon className="text-2xl sm:text-3xl transition-transform group-hover:scale-110 drop-shadow-md" style={{ color }} />
                <span>{skill}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
