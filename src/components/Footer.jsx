import { navLinks, profile, socials } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-ink-border overflow-hidden">
      <div className="container-px py-16 relative grid sm:grid-cols-3 gap-10 sm:gap-16 items-start">
        {/* Left: Navigation */}
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-paper-500 hover:text-mint-400 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Center: Profile Info */}
        <div className="flex flex-col items-center text-center">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-16 h-16 rounded-2xl object-cover border border-ink-border mb-4"
          />
          <p className="font-display text-lg font-semibold text-paper-100">{profile.name}</p>
          <p className="font-mono text-xs text-mint-400 uppercase tracking-wide mt-1">
            {profile.role}
          </p>
          <p className="text-paper-500 text-sm italic mt-2">
            "Crafting digital experiences with code &amp; craft."
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center justify-center sm:justify-end gap-3">
          {socials.map(({ label, href, icon }) => {
            const Icon = ICONS[icon]
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-ink-border flex items-center justify-center text-paper-300 hover:text-mint-400 hover:border-mint-500/50 transition-colors"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>

      <p className="relative container-px pb-8 text-center font-mono text-xs text-paper-500">
        © {year} {profile.name}. Built with React &amp; Tailwind CSS.
      </p>

      {/* big background name */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-bold text-[18vw] leading-none text-paper-100/[0.03] whitespace-nowrap"
      >
        ARHAM
      </div>
    </footer>
  )
}
