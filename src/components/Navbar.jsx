import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolioData'
import { MenuIcon, CloseIcon } from './Icons'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-clip transition-colors duration-300 ${
        scrolled ? 'bg-ink-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20 w-full min-w-0">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group min-w-0"
        >
          <span className="relative w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden border-2 border-mint-400 shadow-lg shadow-mint-500/20">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-center"
            />
          </span>

          <span className="flex flex-col leading-none min-w-0">
            <span className="font-display text-sm font-semibold text-paper-100 group-hover:text-mint-400 transition-colors tracking-wide">
              M. ARHAM
            </span>

            <span className="font-mono text-[10px] tracking-[0.2em] text-paper-500 uppercase mt-1">
              Front-End Dev
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-paper-300 hover:text-mint-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-3">
          {/* Theme Toggle */}
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-mint-500/40 text-mint-400 px-4 py-2 text-sm font-medium hover:bg-mint-500/10 transition-colors"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="lg:hidden flex items-center justify-center w-10 h-10 flex-shrink-0 p-0 text-paper-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon width={22} height={22} />
            ) : (
              <MenuIcon width={22} height={22} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden w-full overflow-x-clip border-t border-ink-border/14 bg-ink-900/95 backdrop-blur-md">
          <ul className="flex flex-col container-px py-4 gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-paper-300 hover:text-mint-400 border-b border-ink-border/60 last:border-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}