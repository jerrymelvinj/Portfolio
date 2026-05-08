'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="contact-section container" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="contact-top-label">GET IN TOUCH</div>

        <h2 className="contact-heading">Let&apos;s build something meaningful</h2>

        <p className="contact-subtext">
          I&apos;m currently open to senior product design and design leadership roles. If you&apos;re building something that solves real problems for real people, I&apos;d love to hear about it.
        </p>

        <div className="contact-buttons">
          <a href="mailto:hello@alexchen.design" className="contact-btn primary-contact-btn">
            ✉ hello@alexchen.design
          </a>
          <a href="#" className="contact-btn secondary-contact-btn">
            ↓ Download resume
          </a>
        </div>

        <div className="social-icons-row">
          <div className="social-icon-box">in</div>
          <div className="social-icon-box">𝕏</div>
          <div className="social-icon-box">Be</div>
          <div className="social-icon-box">Dr</div>
        </div>
      </motion.div>
    </section>
  )
}
