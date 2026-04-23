import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-dim text-center sm:text-left">
          © 2025 Divyanshu Raj &middot; Built with React + Vite
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/spidyraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-dim hover:text-accent transition-colors"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/divyanshu-raj-227761278"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-dim hover:text-accent transition-colors"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <a
            href="mailto:divyanshu15feb.dr@gmail.com"
            aria-label="Email"
            className="text-text-dim hover:text-accent transition-colors"
          >
            <FiMail className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  )
}
