'use client'

import { useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

export function useParallax(
  distance: number = 30,
  inputRange: [number, number] = [0, 1]
): { ref: React.RefObject<HTMLDivElement | null>; y: MotionValue<number> } {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, inputRange, [-distance, distance])
  return { ref, y }
}

export function useHeroParallax(distance: number = 40): MotionValue<number> {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -distance])
  return y
}
