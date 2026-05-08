'use client'

import { motion } from 'framer-motion'
import { useHeroParallax } from '@/hooks/useParallax'

export default function Hero() {
  const y = useHeroParallax(40)

  return (
    <section className="hero container">
      <motion.div style={{ y, willChange: 'transform' }}>
        <div className="hero-tag">● OPEN TO SENIOR PRODUCT DESIGN ROLES</div>

        <h1>
          I design products<br />
          that <span>convert</span>,<br />
          <span>onboard</span>, and <span>retain</span>.
        </h1>

        <p>Senior product designer with 7+ years shipping 0-to-1 and 1-to-N products.</p>
        <p>Specialized in complex workflows: checkout, onboarding, health dashboards.</p>
        <p>
          Measured outcomes: increased conversion by 34%, reduced churn by 22%,
          cut task time by 41%.
        </p>
        <p>
          Cross-functional leader who prototypes in Figma, tests with real users, and
          ships with engineering.
        </p>

        <div className="buttons">
          <a href="#work" className="btn primary">
            View case studies <span style={{ fontSize: '20px', marginTop: '-2px' }}>→</span>
          </a>
          <a href="#contact" className="btn secondary">
            <span style={{ fontSize: '15px' }}>↗</span> Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
