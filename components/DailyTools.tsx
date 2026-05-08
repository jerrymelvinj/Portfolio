'use client'

import { motion } from 'framer-motion'

const toolGroups = [
  {
    title: 'DESIGN & PROTOTYPING',
    tags: ['Figma', 'Framer', 'Principle', 'ProtoPie'],
  },
  {
    title: 'RESEARCH & TESTING',
    tags: ['Maze', 'UserTesting', 'Lookback', 'Hotjar', 'FullStory'],
  },
  {
    title: 'ANALYTICS & DATA',
    tags: ['Amplitude', 'Mixpanel', 'Google Analytics', 'Heap'],
  },
  {
    title: 'COLLABORATION',
    tags: ['Notion', 'Jira', 'Linear', 'Slack', 'Loom'],
  },
  {
    title: 'AI & WORKFLOW',
    tags: ['ChatGPT', 'Midjourney', 'Claude', 'Raycast', 'Arc'],
  },
]

export default function DailyTools() {
  return (
    <section className="daily-tools-section container">
      <h3 className="daily-tools-heading">Tools I Use Daily</h3>

      <div className="daily-tools-grid">
        {toolGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="daily-tool-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
          >
            <div className="daily-tool-title">{group.title}</div>
            <div className="daily-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
