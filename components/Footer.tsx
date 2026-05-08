'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

export default function Footer() {
  const { ref, y } = useParallax(10)

  return (
    <motion.footer
      ref={ref}
      className="main-footer"
      style={{ y, willChange: 'transform' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container footer-inner">
        <div className="footer-left">
          <h3>Jerry Melvin J</h3>
          <p>UI/UX &amp; Product Designer · Karnataka, IN</p>
        </div>

        <div className="footer-right">
          <span>hello@jerrymelvin.design</span>
          <span>LinkedIn</span>
          <span>Dribbble</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Jerry Melvin J . Built with intention.</span>
        <span>Designed in Figma. Built with React &amp; Tailwind.</span>
      </div>
    </motion.footer>
  )
}
