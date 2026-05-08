'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      '"Alex doesn\'t just design screens — they design outcomes. The VitalFlow redesign turned our biggest retention problem into our strongest engagement driver. Within 6 weeks, patient check-ins more than doubled."',
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Product Officer, VitalFlow Health',
  },
  {
    quote:
      '"Working with Alex was like having a design partner who actually understood business metrics. The onboarding overhaul they led increased our trial conversion by 145%. That\'s not design fluff — that\'s revenue."',
    name: 'James Park',
    role: 'VP of Product, Lumina Analytics',
  },
  {
    quote:
      '"Alex\'s ability to balance user needs with business constraints is rare. They cut our checkout from 23 fields to 7 without losing a single piece of critical data, and revenue jumped 34% in the first quarter."',
    name: 'Maria Gonzalez',
    role: 'Head of E-commerce, Meridian Outdoors',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay: i * 0.1 },
  }),
}

export default function Testimonials() {
  return (
    <section className="testimonials-section container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="testimonial-top-label">WHAT PEOPLE SAY</div>
        <h2 className="testimonial-heading">Testimonials</h2>
        <p className="testimonial-subtext">
          Direct feedback from PMs, engineers, and executives I've partnered with.
        </p>
      </motion.div>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testimonial-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="quote-mark">"</div>
            <p>{t.quote}</p>
            <div className="testimonial-divider" />
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
