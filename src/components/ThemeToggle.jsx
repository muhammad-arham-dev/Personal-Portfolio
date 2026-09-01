import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle({ className = '' }) {
  // index.html's inline script already set the correct class before paint,
  // so just read it back here to sync React state.
  const [isLight, setIsLight] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('light')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  return (
    <button
      type="button"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={() => setIsLight((v) => !v)}
      className={`w-10 h-10 rounded-full border border-ink-border/14 flex items-center justify-center text-paper-300 hover:text-mint-400 transition-all duration-300 icon-hover-glow ${className}`}
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}