import { useState, useEffect, useRef } from 'react'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  const timeoutRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e) => {
      // Debounce to prevent rapid re-renders during drag-resize
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setMatches(e.matches)
      }, 150)
    }

    media.addEventListener('change', listener)
    return () => {
      media.removeEventListener('change', listener)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [query])

  return matches
}
