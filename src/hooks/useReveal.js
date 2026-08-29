import { useEffect, useRef } from 'react'

/**
 * Adds the `.is-visible` class to an element (paired with the `.reveal`
 * class in index.css) the first time it scrolls into view.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
