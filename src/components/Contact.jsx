import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const contactLinks = [
  { icon: FiMail, label: 'divyanshu15feb.dr@gmail.com', href: 'mailto:divyanshu15feb.dr@gmail.com' },
  { icon: FiLinkedin, label: 'linkedin.com/in/divyanshu-raj-227761278', href: 'https://linkedin.com/in/divyanshu-raj-227761278' },
  { icon: FiGithub, label: 'github.com/spidyraj', href: 'https://github.com/spidyraj' },
  { icon: FiPhone, label: '+91 6203024049', href: 'tel:+916203024049' },
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      'service_tk549tl',     // Service ID
      'template_yvif9ab',     // Template ID
      formRef.current,        // The form 
      'sfWtsvcWmxtd2FPxo'     // Public Key
    )
    .then((result) => {
      console.log(result.text)
      setLoading(false)
      setSubmitted(true)
    }, (error) => {
      console.log(error.text)
      setLoading(false)
      alert("Failed to send message. Please try again.")
    })
  }

  return (
    <section id="contact" className="section-padding bg-bg-secondary border-t border-border-color">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="font-syne font-bold text-4xl md:text-5xl text-text-primary leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Let&apos;s work<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">together.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-mono text-sm text-text-secondary leading-relaxed max-w-sm">
              Available for <span className="text-accent font-semibold">SDE / Backend Engineering roles</span> from May 2026.
              I respond to all serious enquiries within 24 hours.
              Whether it&apos;s a full-time role, internship, or interesting technical collaboration — drop a message.
            </motion.p>

            <motion.div variants={stagger} className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    variants={fadeUp}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Icon className="text-text-dim group-hover:text-accent transition-colors text-sm flex-shrink-0" />
                    <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors truncate">
                      {link.label}
                    </span>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glow-cyan-hover transition-all duration-300 rounded-[2rem] p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="text-3xl">✅</div>
                <p className="font-syne font-semibold text-text-primary text-lg">Message Sent!</p>
                <p className="font-mono text-sm text-text-secondary">
                  Thanks! I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="font-mono text-xs text-accent hover:underline mt-4 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-accent uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-bg-secondary/40 border border-border-color/50 rounded-xl px-4 py-3
                               font-mono text-sm text-text-primary placeholder-text-dim outline-none
                               focus:border-accent focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-accent uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-bg-secondary/40 border border-border-color/50 rounded-xl px-4 py-3
                               font-mono text-sm text-text-primary placeholder-text-dim outline-none
                               focus:border-accent focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
                  />
                </div>
                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-accent uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={5}
                    className="w-full bg-bg-secondary/40 border border-border-color/50 rounded-xl px-4 py-3
                               font-mono text-sm text-text-primary placeholder-text-dim outline-none
                               focus:border-accent focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-accent to-accent-purple text-bg-primary font-mono text-sm font-bold rounded-xl
                             hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all disabled:opacity-60 disabled:hover:shadow-none"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
