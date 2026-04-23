import { useParams, Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const tagColors = {
  'AI / ML': 'text-accent border-accent/30',
  'Backend': 'text-purple-400 border-purple-400/30',
  'DevOps': 'text-green-400 border-green-400/30',
}

// Very simple markdown-like renderer
function renderContent(content) {
  const lines = content.trim().split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="font-syne font-bold text-3xl text-text-primary mt-8 mb-4">
          {line.slice(2)}
        </h1>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-syne font-semibold text-xl text-text-primary mt-8 mb-3 pb-2 border-b border-border-color">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-syne font-semibold text-lg text-text-primary mt-6 mb-2">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-mono text-sm text-accent font-medium mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const listItems = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={i} className="space-y-1 my-3 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="font-mono text-xs text-text-secondary flex gap-2">
              <span className="text-accent mt-0.5">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
      continue
    } else if (line.startsWith('```')) {
      const lang = line.slice(3)
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <pre key={i} className="bg-bg-secondary border border-border-color rounded-lg p-4 my-4 overflow-x-auto">
          <code className="font-mono text-xs text-text-secondary leading-relaxed">
            {codeLines.join('\n')}
          </code>
        </pre>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />)
    } else {
      // Regular paragraph — handle inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g)
      elements.push(
        <p key={i} className="font-mono text-sm text-text-secondary leading-relaxed my-2">
          {parts.map((part, pi) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pi} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>
            }
            return part
          })}
        </p>
      )
    }
    i++
  }

  return elements
}

export default function BlogPost() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="font-syne font-bold text-4xl text-text-primary">404</p>
          <p className="font-mono text-sm text-text-secondary">Blog post not found.</p>
          <Link to="/" className="font-mono text-sm text-accent hover:underline">← Back to home</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="font-mono text-xs text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1 mb-8"
            >
              ← Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 space-y-4"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`font-mono text-xs px-2 py-0.5 border rounded ${tagColors[blog.tag] || 'text-text-secondary border-border-color'}`}>
                {blog.tag}
              </span>
              <span className="font-mono text-xs text-text-dim">{blog.date}</span>
              <span className="font-mono text-xs text-text-dim">·</span>
              <span className="font-mono text-xs text-text-dim">{blog.readTime}</span>
            </div>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-text-primary leading-tight">
              {blog.title}
            </h1>
            <p className="font-mono text-sm text-text-secondary leading-relaxed">
              {blog.excerpt}
            </p>
            <div className="h-px bg-border-color" />
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {renderContent(blog.content)}
          </motion.article>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-border-color">
            <Link
              to="/"
              className="font-mono text-sm text-accent hover:underline"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
