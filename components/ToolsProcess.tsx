'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Understand',
    desc: 'Stakeholder interviews, competitive audits, and user research to define the real problem — not the assumed one.',
  },
  {
    num: '02',
    title: 'Frame',
    desc: 'Synthesize insights into user journeys, job stories, and measurable success metrics before touching a pixel.',
  },
  {
    num: '03',
    title: 'Explore',
    desc: 'Rapid ideation with divergent concepts. Test early and often with real users, not just internal stakeholders.',
  },
  {
    num: '04',
    title: 'Prototype',
    desc: 'High-fidelity interactive prototypes in Figma/Framer. Build flows, not screens. Test task completion, not preferences.',
  },
  {
    num: '05',
    title: 'Ship & Measure',
    desc: 'Partner with engineering for pixel-perfect implementation. Monitor metrics, iterate based on real usage data.',
  },
]

export default function ToolsProcess() {
  return (
    <section className="tools-process-section container" id="process">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="tools-top-label">HOW I WORK</div>
        <h2 className="tools-heading">Tools &amp; Process</h2>
        <p className="tools-subtext">
          My workflow is built around research-backed decisions, rapid
          prototyping, and shipping with engineering. No handoffs —
          continuous collaboration.
        </p>
      </motion.div>

      <h3 className="process-mini-heading">My 5-Step Process</h3>

      <div className="process-grid">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="process-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.07 }}
          >
            <div className="process-number">{step.num}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
