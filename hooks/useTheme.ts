'use client'

import { useState, useEffect } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.body.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    const body = document.body
    body.classList.toggle('dark')
    const dark = body.classList.contains('dark')
    setIsDark(dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  return { isDark, toggle }
}
