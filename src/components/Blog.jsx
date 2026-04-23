import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const tagColors = {
  'AI / ML': 'text-accent bg-accent/5 border-accent/20',
  'Backend': 'text-purple-400 bg-purple-400/5 border-purple-400/20',
  'DevOps': 'text-green-400 bg-green-400/5 border-green-400/20',
}

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-bg-primary border-t border-border-color">
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
            Blog
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card rounded-[1.5rem] p-8 flex flex-col gap-4 glow-cyan-hover transition-all duration-300"
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs px-2 py-0.5 border rounded ${tagColors[blog.tag] || 'text-text-secondary border-border-color'}`}>
                  {blog.tag}
                </span>
                <span className="font-mono text-xs text-text-dim">{blog.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-syne font-bold text-base text-text-primary leading-snug">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="font-mono text-xs text-text-secondary leading-relaxed flex-1">
                {blog.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border-color">
                <span className="font-mono text-xs text-text-dim">{blog.readTime}</span>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="font-mono text-xs text-accent hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
