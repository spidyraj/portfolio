import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(43,187,178,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="w-12 h-12 rounded-full glass-card border border-accent/40 flex items-center justify-center text-accent shadow-lg"
            aria-label="Scroll to top"
          >
            <FiArrowUp strokeWidth={3} size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(43,187,178,0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollBottom}
        className="w-12 h-12 rounded-full glass-card border border-accent/40 flex items-center justify-center text-accent shadow-lg"
        aria-label="Scroll to bottom"
      >
        <FiArrowDown strokeWidth={3} size={22} />
      </motion.button>
    </div>
  )
}
