import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaJava, FaAws, FaDocker } from 'react-icons/fa'
import { SiSpringboot, SiPostgresql, SiReact } from 'react-icons/si'

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
          Backend Engineer
        </span>
      </div>

      {/* Vertical right text: year */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span
          className="font-mono text-xs text-text-dim tracking-widest"
          style={{ writingMode: 'vertical-lr' }}
        >
          2025
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

            {/* DIVYANSHU RAJ Text Illumination */}
            <motion.h1
              variants={childVariants}
              className="font-playfair font-bold mb-4 select-none animate-text-shimmer text-shimmer-bg bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent-purple tracking-tighter leading-none"
              style={{ fontSize: 'clamp(50px, 10vw, 120px)', filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.4))' }}
            >
              DIVYANSHU RAJ
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="font-mono text-text-secondary text-sm md:text-lg mb-8 max-w-xl"
            >
              — I&apos;m a{' '}
              <span className="text-accent drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] font-bold">Software Engineer</span> building scalable
              systems &amp; <span className="text-accent-purple drop-shadow-[0_0_8px_rgba(181,53,246,0.8)] font-bold">AI-driven applications</span>.
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
                  href="/resume.pdf"
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
              
              {/* Spinning Radiant Aura Core */}
              <div className="absolute inset-0 w-full h-full rounded-full opacity-50 mix-blend-screen animate-pulse-glow bg-[conic-gradient(from_0deg_at_50%_50%,#00e5ff_0%,#b535f6_33%,transparent_66%,#00e5ff_100%)] blur-[50px]" />
              
              {/* Orbiting Rotating Icons */}
              <div className="absolute inset-[-10%] w-[120%] h-[120%] animate-spin-slower opacity-80 pointer-events-none">
                <FaJava size={50} className="absolute top-[10%] left-[20%] text-[#b07219] drop-shadow-[0_0_15px_#b07219]" style={{ animation: 'spin 12s linear infinite reverse' }} />
                <SiSpringboot size={45} className="absolute bottom-[20%] right-[10%] text-[#6db33f] drop-shadow-[0_0_15px_#6db33f]" style={{ animation: 'spin 12s linear infinite reverse' }} />
                <SiReact size={55} className="absolute top-[40%] right-[5%] text-[#61dafb] drop-shadow-[0_0_15px_#61dafb]" style={{ animation: 'spin 12s linear infinite reverse' }} />
                <FaDocker size={60} className="absolute bottom-[10%] left-[30%] text-[#2496ed] drop-shadow-[0_0_15px_#2496ed]" style={{ animation: 'spin 12s linear infinite reverse' }} />
                <SiPostgresql size={45} className="absolute top-[5%] right-[40%] text-[#336791] drop-shadow-[0_0_15px_#336791]" style={{ animation: 'spin 12s linear infinite reverse' }} />
                <FaAws size={40} className="absolute top-[60%] left-[5%] text-[#ff9900] drop-shadow-[0_0_15px_#ff9900]" style={{ animation: 'spin 12s linear infinite reverse' }} />
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-6 lg:left-20 flex items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="font-mono text-xs text-text-dim tracking-widest"
        >
          Scroll down ↓
        </motion.span>
      </motion.div>
    </section>
  )
}
