'use client'

import { useTheme } from '@/hooks/useTheme'

export default function Navbar() {
  const { isDark, toggle } = useTheme()

  return (
    <nav>
      <div className="container nav-inner">
        <div className="logo">Jerry Melvin J</div>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#impact">Impact</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
          <button className="toggle" onClick={toggle} aria-label="Toggle theme">
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
