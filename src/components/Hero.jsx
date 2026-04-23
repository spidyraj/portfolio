import { motion } from 'framer-motion'

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
            {/* Stats row */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-4 mb-4"
            >
              <span className="font-mono text-xs text-text-secondary tracking-wide">CGPA: 9.21</span>
              <span className="text-text-dim text-xs">·</span>
              <span className="font-mono text-xs text-text-secondary tracking-wide">3 Projects</span>
              <span className="text-text-dim text-xs">·</span>
              <span className="font-mono text-xs text-text-secondary tracking-wide">Final Year @ KIIT</span>
            </motion.div>

            {/* Hello and Text Illumination */}
            <motion.h1
              variants={childVariants}
              className="font-playfair font-light mb-4 select-none animate-text-shimmer text-shimmer-bg bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent-purple"
              style={{ fontSize: 'clamp(72px, 13vw, 160px)', letterSpacing: '-0.02em', filter: 'drop-shadow(0 0 15px rgba(0,229,255,0.3))' }}
            >
              Hello
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={childVariants}
              className="font-mono text-text-secondary text-sm md:text-base mb-8 max-w-xl"
            >
              — It&apos;s Divyanshu, a{' '}
              <span className="text-accent drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">Backend Engineer</span> building scalable
              systems &amp; <span className="text-accent-purple drop-shadow-[0_0_8px_rgba(181,53,246,0.8)]">AI-driven applications</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={childVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-mono text-sm px-6 py-3 bg-accent text-bg-primary font-medium rounded hover:bg-accent-dim transition-colors duration-200"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-6 py-3 border border-text-dim text-text-secondary rounded hover:border-accent hover:text-accent transition-all duration-200"
              >
                Download Resume ↓
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo (Unboxed, Floating Aura) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex-shrink-0 flex justify-center lg:justify-end relative w-full lg:w-auto"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[500px]"
            >
              {/* Spinning Aura Core */}
              <div className="absolute inset-0 top-10 w-full h-[80%] rounded-full opacity-60 mix-blend-screen animate-spin-slow bg-[conic-gradient(from_0deg_at_50%_50%,#00e5ff_0%,#b535f6_33%,transparent_66%,#00e5ff_100%)] blur-[40px]" />
              <div className="absolute inset-0 top-10 w-full h-[80%] rounded-full opacity-40 mix-blend-screen animate-spin-slower bg-[conic-gradient(from_180deg_at_50%_50%,#b535f6_0%,#00e5ff_33%,transparent_66%,#b535f6_100%)] blur-[60px]" style={{ animationDirection: 'reverse' }} />
              
              {/* The Actual Foreground Cutout Image */}
              <div className="relative w-full h-full z-10 flex items-end justify-center drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                <img
                  src="/images/profile.png"
                  alt="Divyanshu Raj"
                  className="w-full h-auto max-h-full object-contain"
                  style={{ filter: 'drop-shadow(0px -10px 30px rgba(0, 229, 255, 0.4))' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
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
            </motion.div>
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
