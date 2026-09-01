import { profile, socials, stack } from '../data/portfolioData'
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'
import TypedRole from './TypedRole'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon }

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full bg-mint-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -left-32 w-[24rem] h-[24rem] rounded-full bg-amber-500/5 blur-[100px]" />

      <div className="container-px relative grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-center">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <p className="eyebrow mb-6">Welcome to my portfolio</p>

          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] text-paper-100 tracking-tight">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-mint-400 to-mint-600 bg-clip-text text-transparent">
              Arham
            </span>
          </h1>

          <div className="mt-6 h-8 font-mono text-lg sm:text-xl">
            <span className="text-paper-500">{'<'} </span>
            <TypedRole />
            <span className="text-paper-500"> {'/>'}</span>
          </div>

          <p className="section-sub">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-mint-500 text-ink-950 font-semibold px-6 py-3 text-sm shadow-glow hover:bg-mint-400 transition-colors"
            >
              Explore My Work <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink-border/14 text-paper-100 px-6 py-3 text-sm hover:border-mint-500/50 hover:text-mint-400 transition-colors"
            >
              Download CV <DownloadIcon width={16} height={16} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <span className="font-mono text-xs tracking-[0.2em] text-paper-500 uppercase">
              Find Me On
            </span>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon }) => {
                const Icon = ICONS[icon]
                return (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-ink-border/14 flex items-center justify-center text-paper-300 hover:text-mint-400 transition-all duration-300 icon-hover-glow"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: photo with orbiting decoration + terminal signature card */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto max-w-sm aspect-square flex items-center justify-center">
            {/* soft glow behind the subject */}
            <div className="absolute inset-6 rounded-full bg-mint-500/20 blur-[70px]" />

            {/* two dashed orbit rings, spinning slowly in opposite directions */}
            <div className="absolute inset-0 rounded-full border border-dashed border-mint-500/25 animate-[spin_22s_linear_infinite]" />
            <div className="absolute -inset-6 rounded-full border border-dashed border-ink-border/40 animate-[spin_32s_linear_infinite_reverse]" />

            <div className="relative z-10 w-[78%] aspect-square rounded-full overflow-hidden border border-mint-500/30">
              <img
                src={profile.creation}
                alt="Muhammad Arham"
                className="w-full h-full object-cover"
              />
            </div>

            {/* floating code-tag badges, echoing the reference layout */}
            <span className="absolute top-2 left-0 sm:-left-2 card w-11 h-11 flex items-center justify-center font-mono text-xs text-mint-400 animate-float float-paused float-on-hover [animation-delay:0.3s] cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
              {'</>'}
            </span>
            <span className="absolute top-16 right-0 sm:-right-3 card w-11 h-11 flex items-center justify-center font-mono text-xs text-mint-400 animate-float float-paused float-on-hover [animation-delay:0.9s] cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
              {'{ }'}
            </span>
            <span className="absolute bottom-8 -left-3 sm:-left-6 card px-3 py-1.5 font-mono text-[11px] text-amber-400 animate-float float-paused float-on-hover [animation-delay:1.4s] cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
              JS
            </span>
            <span className="absolute -top-2 right-10 w-2 h-2 rounded-full bg-mint-400/70 animate-float float-paused float-on-hover [animation-delay:0.6s] cursor-pointer hover:shadow-[0_0_12px_rgba(79,227,194,0.5)] transition-all duration-300" />
            <span className="absolute bottom-2 left-8 w-1.5 h-1.5 rounded-full bg-mint-400/50 animate-float float-paused float-on-hover [animation-delay:1.1s] cursor-pointer hover:shadow-[0_0_12px_rgba(79,227,194,0.5)] transition-all duration-300" />

            {/* floating terminal card */}
            <div className="absolute -bottom-10 -left-4 sm:-left-8 w-64 sm:w-72 card p-4 animate-float float-paused float-on-hover [animation-delay:1s] z-20 cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2564C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-mint-500" />
                <span className="ml-2 font-mono text-[10px] text-paper-500">whoami.js</span>
              </div>
              <p className="font-mono text-xs leading-relaxed text-paper-300">
                <span className="text-amber-400">const</span> dev = {'{'}
                <br />
                &nbsp;&nbsp;name:{' '}
                <span className="text-mint-400">"Muhammad Arham"</span>,
                <br />
                &nbsp;&nbsp;stack:{' '}
                <span className="text-mint-400">"React / Next.js"</span>,
                <br />
                &nbsp;&nbsp;status:{' '}
                <span className="text-mint-400">"Open to Work"</span>
                <br />
                {'}'}
              </p>
            </div>

            {profile.available && (
              <div className="absolute -top-4 -right-4 sm:right-2 flex items-center gap-2 card px-3 py-1.5 z-20 animate-float float-paused float-on-hover cursor-pointer hover:border-mint-400 hover:shadow-[0_0_12px_rgba(79,227,194,0.5),inset_0_0_12px_rgba(79,227,194,0.2)] transition-all duration-300">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500" />
                </span>
                <span className="font-mono text-[11px] text-paper-300">Available for work</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* tech marquee */}
      <div className="mt-24 border-y border-ink-border/14 py-5 overflow-hidden marquee-container">
        <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-paper-500">
          {[...stack, ...stack].map((tech, i) => (
            <span key={`${tech}-${i}`} className="flex items-center gap-10 shrink-0">
              {tech}
              <span className="text-mint-500/50">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}