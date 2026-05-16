import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi'
import { FaJava, FaAws, FaDocker } from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiReact, SiPython } from 'react-icons/si'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary">
      {/* Deep layered glowing background spots */}
      <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] bg-accent-purple/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Vertical left text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span
          className="font-mono text-xs text-text-dim tracking-widest uppercase"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          Software Engineer
        </span>
      </div>

      {/* Vertical right text: year */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span
          className="font-mono text-xs text-text-dim tracking-widest"
          style={{ writingMode: 'vertical-lr' }}
        >
          2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full pt-24 pb-16">
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left / Main content */}
          <motion.div
            className="flex-1 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Stats row removed */}

            {/* DIVYANSHU RAJ Text */}
            <motion.div variants={childVariants} className="mb-4">
              <h1
                className="font-playfair font-bold select-none animate-text-shimmer text-shimmer-bg bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent-purple tracking-tighter leading-none"
                style={{ fontSize: 'clamp(40px, 8vw, 95px)', filter: 'drop-shadow(0 0 15px rgba(0,229,255,0.3))' }}
              >
                DIVYANSHU RAJ
              </h1>
            </motion.div>

            {/* Subtitle / Title */}
            <motion.h2
              variants={childVariants}
              className="font-syne font-semibold text-xl md:text-3xl text-accent mb-2"
            >
              Software Engineer <span className="text-text-dim px-2">|</span> AI System
            </motion.h2>

            <motion.p
              variants={childVariants}
              className="font-mono text-xs text-[#2dba4e] mb-6 tracking-wide flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-[#2dba4e] animate-pulse" />
              Open to SDE / Software Engineering roles — Available for new roles
            </motion.p>

            <motion.p
              variants={childVariants}
              className="font-mono text-text-secondary text-sm md:text-base mb-8 max-w-xl leading-relaxed"
            >
              I build scalable APIs and intelligent systems.
            </motion.p>

            {/* CTAs & Socials */}
            <motion.div variants={childVariants} className="flex flex-col sm:flex-row flex-wrap gap-6 items-start sm:items-center">
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-mono text-sm px-6 py-3 bg-gradient-to-r from-accent to-accent-purple text-bg-primary font-bold rounded hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] transition-all duration-300"
                >
                  View Projects
                </button>
                <a
                  href="/Divyanshu_Raj_Resume_updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-3 border border-border-color text-text-secondary rounded hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300"
                >
                  Resume ↓
                </a>
              </div>

              <div className="flex gap-4 sm:ml-4 border-l-0 sm:border-l border-border-color pl-0 sm:pl-6">
                <a href="https://github.com/spidyraj" target="_blank" rel="noopener noreferrer" className="p-3 bg-bg-secondary border border-border-color rounded-full hover:border-[#2dba4e] hover:text-[#2dba4e] hover:shadow-[0_0_15px_rgba(45,186,78,0.3)] transition-all">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/divyanshu-raj-227761278" target="_blank" rel="noopener noreferrer" className="p-3 bg-bg-secondary border border-border-color rounded-full hover:border-[#0a66c2] hover:text-[#0a66c2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all">
                  <FiLinkedin size={20} />
                </a>
                <a href="mailto:divyanshu15feb.dr@gmail.com" className="p-3 bg-bg-secondary border border-border-color rounded-full hover:border-[#ea4335] hover:text-[#ea4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)] transition-all">
                  <FiMail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photo (Unboxed, Huge, Tech Orbits) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex-shrink-0 flex justify-center lg:justify-end relative w-full lg:w-auto mt-16 lg:mt-0"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">

              {/* Vibrant Radiant Aura Core */}
              <div className="absolute inset-0 w-full h-full rounded-full opacity-60 mix-blend-screen animate-pulse-glow bg-[conic-gradient(from_0deg_at_50%_50%,#00e5ff_0%,#b535f6_33%,transparent_66%,#00e5ff_100%)] blur-[50px]" />

              {/* Varying Sizes Orbiting Rotating Icons - Now Uniform & Properly Spaced */}
              <div className="absolute inset-[-20%] w-[140%] h-[140%] animate-spin-slower opacity-90 pointer-events-none">
                {/* Center is at 50%, 50%. Radius is 50%. Formula: left = 50 + 50*cos(theta), top = 50 + 50*sin(theta) */}
                <FaJava title="Java" size={45} className="absolute text-[#f89820] drop-shadow-[0_0_20px_#f89820] hover:scale-125 transition-transform cursor-pointer" style={{ top: '50%', left: '100%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
                <SiSpringboot title="Spring Boot" size={45} className="absolute text-[#6db33f] drop-shadow-[0_0_15px_#6db33f] hover:scale-125 transition-transform cursor-pointer" style={{ top: '89%', left: '81.1%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
                <SiReact title="React" size={45} className="absolute text-[#61dafb] drop-shadow-[0_0_25px_#61dafb] hover:scale-125 transition-transform cursor-pointer" style={{ top: '98.8%', left: '38.8%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
                <FaDocker title="Docker" size={45} className="absolute text-[#2496ed] drop-shadow-[0_0_15px_#2496ed] hover:scale-125 transition-transform cursor-pointer" style={{ top: '71.7%', left: '4.9%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
                <SiPostgresql title="PostgreSQL" size={45} className="absolute text-[#336791] drop-shadow-[0_0_20px_#336791] hover:scale-125 transition-transform cursor-pointer" style={{ top: '28.3%', left: '4.9%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
                <FaAws title="AWS" size={45} className="absolute text-[#ff9900] drop-shadow-[0_0_15px_#ff9900] hover:scale-125 transition-transform cursor-pointer" style={{ top: '1.2%', left: '38.8%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
                <SiPython title="Python" size={45} className="absolute text-[#3776ab] drop-shadow-[0_0_15px_#3776ab] hover:scale-125 transition-transform cursor-pointer" style={{ top: '11%', left: '81.1%', transform: 'translate(-50%, -50%)', animation: 'spin 12s linear infinite reverse' }} />
              </div>


              {/* Foreground Image - Static & Huge */}
              <div className="relative w-full h-[110%] z-20 flex items-end justify-center pointer-events-none">
                <img
                  src="/images/profile.png"
                  alt="Divyanshu Raj"
                  className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,229,255,0.3)] filter brightness-110"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />

                {/* Fallback box if image is missing */}
                <div
                  className="w-64 h-80 bg-gradient-to-b from-bg-tertiary to-bg-secondary border border-border-color rounded-[2rem] flex-col items-center justify-center text-text-dim text-xs text-center p-4 hidden"
                  style={{ display: 'none' }}
                >
                  <div className="text-2xl mb-2">🧑</div>
                  <div>Add your photo to</div>
                  <div className="text-accent mt-1">/public/images/profile.png</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicators Top & Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hidden md:flex"
      >
        <FiChevronDown className="text-accent text-2xl animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="font-mono text-xs text-accent tracking-widest flex flex-col items-center gap-1"
        >
          SCROLL DOWN
          <FiChevronDown className="text-lg" />
        </motion.span>
      </motion.div>
    </section>
  )
}
