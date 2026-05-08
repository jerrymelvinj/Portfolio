'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

export default function FeaturedWork() {
  const { ref: imgRef, y: imgY } = useParallax(20)

  return (
    <section className="featured-work container" id="work">
      <div className="featured-label">FEATURED WORK</div>

      <div className="featured-grid">
        <motion.div
          className="featured-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="project-pill">★ Strongest Project</div>

          <h2>VitalFlow — Health Dashboard Redesign</h2>

          <div className="mini-title">PROBLEM</div>
          <p>
            Users were abandoning the health dashboard after 2 minutes. 68% of patients
            never completed their weekly check-in.
          </p>

          <div className="mini-title">OUTCOME</div>
          <p>
            Increased weekly check-in completion from 32% to 71% and reduced support
            tickets by 47%.
          </p>

          <a href="#" className="case-study-link">Read full case study →</a>
        </motion.div>

        <div ref={imgRef}>
          <motion.div
            className="featured-image-wrap"
            style={{ y: imgY, willChange: 'transform' }}
          >
            <div className="read-pill">▷ 6 min read</div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
              alt="dashboard"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
