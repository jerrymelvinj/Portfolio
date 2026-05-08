'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

function CaseOneImage() {
  const { ref, y } = useParallax(18)
  return (
    <div ref={ref} className="case-image-box" style={{ overflow: 'hidden' }}>
      <motion.img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
        alt="dashboard"
        style={{ y, willChange: 'transform' }}
      />
    </div>
  )
}

function CaseTwoImage() {
  const { ref, y } = useParallax(18)
  return (
    <div ref={ref} className="case-image-box dark-ui-box" style={{ overflow: 'hidden' }}>
      <motion.img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
        alt="dashboard"
        style={{ y, willChange: 'transform' }}
      />
    </div>
  )
}

function CaseThreeImage() {
  const { ref, y } = useParallax(18)
  return (
    <div ref={ref} className="case-image-box checkout-ui-box" style={{ overflow: 'hidden' }}>
      <motion.img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
        alt="checkout ui"
        style={{ y, willChange: 'transform' }}
      />
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function CaseStudies() {
  return (
    <>
      {/* ── Case One ── */}
      <section className="case-studies container" id="work">
        <div className="case-top-label">SELECTED WORK</div>
        <h2 className="case-heading">Case Studies</h2>
        <p className="case-subtext">
          Three projects that show how I think, decide, and ship. Each
          includes real problems, real process, and real outcomes.
        </p>

        <div className="case-meta-row">
          <div className="case-meta-left">
            <span className="highlight-meta">VITALFLOW HEALTH</span>
            <span>•</span>
            <span>Lead Product Designer</span>
            <span>•</span>
            <span>3 months</span>
            <span>•</span>
            <span>2025</span>
          </div>
          <div className="case-meta-right">▷ 6 min read</div>
        </div>

        <div className="case-grid">
          <CaseOneImage />

          <motion.div
            className="case-content-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>VitalFlow — Health Dashboard Redesign</h3>

            <div className="case-small-title">CONTEXT</div>
            <p>
              VitalFlow is a remote patient monitoring platform used by 12,000+ patients and 400 healthcare providers. The existing dashboard was functional but overloaded, causing patient drop-off and provider frustration.
            </p>

            <div className="case-small-title orange">PROBLEMS</div>
            <ul>
              <li>68% of patients never completed their weekly check-in due to a 14-step form with medical jargon.</li>
              <li>Providers spent 8+ minutes per patient finding relevant vitals across 6 disconnected views.</li>
              <li>Mobile usage was 62% of traffic, but the dashboard was desktop-first and unusable on phones.</li>
            </ul>

            <div className="case-small-title">PROCESS & DECISIONS</div>
            <ul>
              <li>Ran 12 remote interviews with patients and shadowed 5 providers to map actual workflows.</li>
              <li>Discovered patients wanted reassurance, not data — they needed to know "am I okay?" in under 30 seconds.</li>
              <li>Iterated through 4 prototype rounds, testing with 8 real patients each round, cutting the check-in from 14 steps to 4.</li>
              <li>Traded granular data tables for prioritized action cards — providers saw a 60% reduction in time-to-insight.</li>
            </ul>

            <div className="case-small-title">SOLUTION</div>
            <ul>
              <li>Redesigned the patient home screen into a single "Health Snapshot" with color-coded status, progress ring, and one-tap check-in.</li>
              <li>Built a provider "Priority Queue" that surfaces patients needing attention, sorted by risk score.</li>
              <li>Delivered a fully responsive mobile-first experience with thumb-zone navigation and gesture-based data entry.</li>
            </ul>

            <div className="outcome-card">
              <div className="case-small-title orange">OUTCOMES</div>
              <ul>
                <li>Weekly check-in completion: 32% → 71% (+122%) in first 6 weeks post-launch.</li>
                <li>Provider time-to-insight: 8.2 min → 3.1 min (-62%) measured via session analytics.</li>
                <li>Support tickets related to navigation dropped 47%.</li>
                <li>Patient NPS improved from 18 to 52.</li>
              </ul>
            </div>

            <div className="tool-tags">
              <span>Figma</span>
              <span>Maze</span>
              <span>UserTesting</span>
              <span>Amplitude</span>
              <span>Jira</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Case Two ── */}
      <section className="case-two container">
        <div className="case-meta-row">
          <div className="case-meta-left">
            <span className="highlight-meta">LUMINA ANALYTICS</span>
            <span>•</span>
            <span>Product Designer</span>
            <span>•</span>
            <span>2.5 months</span>
            <span>•</span>
            <span>2024</span>
          </div>
          <div className="case-meta-right">▷ 5 min read</div>
        </div>

        <div className="case-grid reverse-layout">
          <motion.div
            className="case-content-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Lumina — SaaS Onboarding Overhaul</h3>

            <div className="case-small-title">CONTEXT</div>
            <p>
              Lumina is a B2B analytics platform for marketing teams. New users were dropping off during onboarding at a 74% rate, and trial-to-paid conversion sat at 11%.
            </p>

            <div className="case-small-title orange">PROBLEMS</div>
            <ul>
              <li>74% of trial users abandoned onboarding before connecting a data source — the 'blank slate' felt overwhelming.</li>
              <li>Onboarding took 18 minutes average; competitors promised setup in under 5.</li>
              <li>No clear "aha moment" — users didn't understand the platform's unique value until day 3.</li>
            </ul>

            <div className="case-small-title">PROCESS & DECISIONS</div>
            <ul>
              <li>Analyzed 340 funnel drop-off events and identified 3 critical friction points using FullStory and Mixpanel.</li>
              <li>Ran 5 unmoderated usability tests with target users (marketing managers at mid-size companies).</li>
              <li>Shifted from 'setup everything first' to 'show value first' — let users preview a live dashboard with sample data before connecting their own.</li>
              <li>A/B tested 3 onboarding flows; the 'sample data first' variant won with 41% better completion.</li>
            </ul>

            <div className="case-small-title">SOLUTION</div>
            <ul>
              <li>Created a 3-step guided setup with a visible progress bar and milestone celebrations (confetti micro-interaction on data source connect).</li>
              <li>Built an interactive 'Playground' dashboard pre-loaded with realistic sample data so users see value in under 90 seconds.</li>
              <li>Added contextual tooltips and empty-state illustrations that explain next steps rather than leaving users stranded.</li>
            </ul>

            <div className="outcome-card">
              <div className="case-small-title orange">OUTCOMES</div>
              <ul>
                <li>Trial-to-paid conversion: 11% → 27% (+145%) over 3 months.</li>
                <li>Onboarding completion rate: 26% → 64% (+146%).</li>
                <li>Time to first dashboard view: 18 min → 4.2 min (-77%).</li>
                <li>Support tickets during onboarding period dropped 38%.</li>
              </ul>
            </div>

            <div className="tool-tags">
              <span>Figma</span>
              <span>Framer</span>
              <span>FullStory</span>
              <span>Mixpanel</span>
              <span>Notion</span>
            </div>
          </motion.div>

          <CaseTwoImage />
        </div>
      </section>

      {/* ── Case Three ── */}
      <section className="case-three container">
        <div className="case-meta-row">
          <div className="case-meta-left">
            <span className="highlight-meta">MERIDIAN OUTDOORS</span>
            <span>•</span>
            <span>Senior UX Designer</span>
            <span>•</span>
            <span>4 months</span>
            <span>•</span>
            <span>2023</span>
          </div>
          <div className="case-meta-right">▷ 7 min read</div>
        </div>

        <div className="case-grid reverse-case-layout">
          <CaseThreeImage />

          <motion.div
            className="case-content-box"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Meridian — E-commerce Checkout Rebuild</h3>

            <div className="case-small-title">CONTEXT</div>
            <p>
              Meridian Outdoors is a direct-to-consumer outdoor gear brand doing $4M/year online. Their checkout flow was built on a legacy template and mobile drop-off at the payment step was killing revenue.
            </p>

            <div className="case-small-title orange">PROBLEMS</div>
            <ul>
              <li>62% of mobile users abandoned at the payment step — the form had 23 fields and no autofill support.</li>
              <li>Guest checkout was buried behind a mandatory account creation wall.</li>
              <li>Shipping costs appeared only at the final step, causing sticker-shock abandonment.</li>
            </ul>

            <div className="case-small-title">PROCESS & DECISIONS</div>
            <ul>
              <li>Conducted a heuristic evaluation and found 14 usability violations in the checkout flow alone.</li>
              <li>Analyzed 2,800 checkout sessions and identified 3 primary abandonment triggers.</li>
              <li>Built a clickable prototype and ran 10 task-based tests — users completed the new flow 41% faster.</li>
              <li>Collaborated with engineering on a phased rollout to minimize risk; shipped behind a feature flag.</li>
            </ul>

            <div className="case-small-title">SOLUTION</div>
            <ul>
              <li>Reduced the checkout from 5 pages to a single-page accordion with 7 core fields (down from 23).</li>
              <li>Promoted guest checkout to the default, with optional account creation post-purchase (one checkbox).</li>
              <li>Surfaced shipping estimates at the cart level and added a dynamic progress indicator ('2 minutes left').</li>
              <li>Implemented address autofill and mobile-optimized input types (tel, email, numeric keyboards).</li>
            </ul>

            <div className="outcome-card">
              <div className="case-small-title orange">OUTCOMES</div>
              <ul>
                <li>Checkout completion rate (mobile): 18% → 43% (+139%).</li>
                <li>Overall revenue per visitor: +34% in first quarter post-launch.</li>
                <li>Cart abandonment: dropped from 72% to 51%.</li>
                <li>Customer complaints about checkout difficulty: down 61%.</li>
              </ul>
            </div>

            <div className="tool-tags">
              <span>Figma</span>
              <span>Hotjar</span>
              <span>Lookback</span>
              <span>Google Optimize</span>
              <span>Linear</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
