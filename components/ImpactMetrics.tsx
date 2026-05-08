'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

const cards = [
  { stat: '24', title: 'Projects Shipped', desc: 'Across 6 companies, 0-to-1 and 1-to-N' },
  { stat: '+41%', title: 'Avg. Conversion Lift', desc: 'Measured across e-commerce and SaaS' },
  { stat: '-52%', title: 'Task Completion Improvement', desc: 'Reduction in time-to-complete in usability tests' },
  { stat: '+2.1M', title: 'Users Impacted', desc: 'Total users across shipped products' },
]

function ImpactCard({
  stat,
  title,
  desc,
  delay,
}: {
  stat: string
  title: string
  desc: string
  delay: number
}) {
  const { ref, y } = useParallax(12)
  return (
    <motion.div
      ref={ref}
      className="impact-card"
      style={{ y, willChange: 'transform' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <h3>{stat}</h3>
      <h4>{title}</h4>
      <p>{desc}</p>
    </motion.div>
  )
}

export default function ImpactMetrics() {
  return (
    <section className="impact-section" id="impact">
      <div className="container impact-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="impact-top-label">PROOF OF IMPACT</div>
          <h2 className="impact-heading">Impact &amp; Metrics</h2>
          <p className="impact-subtext">
            Numbers from shipped work. No vague claims — every metric is
            tied to a specific project and measured post-launch.
          </p>
        </motion.div>

        <div className="impact-grid">
          {cards.map((card, i) => (
            <ImpactCard key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>

        <motion.p
          className="impact-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          ✦ All metrics are measured post-launch using product analytics (Amplitude, Mixpanel, Google Analytics) or usability testing tools (Maze, UserTesting). For student or personal projects without live data, I use task-completion tests, unmoderated usability studies, and before/after comparisons as lightweight proof.
        </motion.p>
      </div>
    </section>
  )
}
