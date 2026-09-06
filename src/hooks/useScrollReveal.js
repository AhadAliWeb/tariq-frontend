'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when the observed element scrolls into view.
 * Used to trigger a single, deliberate entrance animation per section
 * instead of re-triggering on every scroll.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, inView]
}
