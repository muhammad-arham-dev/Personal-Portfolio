import { about, profile } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'
import { BracesIcon } from './Icons'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="container-px py-16 sm:py-20">
      <div ref={ref} className="reveal grid lg:grid-cols-[0.85fr,1.15fr] gap-16 items-center">
        {/* photo */}
        <div className="relative mx-auto lg:mx-0 max-w-xs">
          {/* circular border ring with gradient effect */}
          <div className="absolute -inset-6 rounded-full border-2 border-mint-500/30 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -inset-4 rounded-full border border-mint-500/20" />
          
          {/* main photo */}
          <div className="rounded-full overflow-hidden border-2 border-mint-500/40 aspect-square shadow-lg">
            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
          </div>

          {/* top right badge - Years of Learning */}
          <div className="absolute -top-3 -right-3 card px-3 py-2 shadow-lg animate-bounce">
            <div className="flex items-center gap-2">
              <span className="text-mint-400 font-bold text-sm">1</span>
              <div className="text-left">
                <p className="font-mono text-[9px] text-paper-500 uppercase tracking-wide leading-none">
                  Year of
                </p>
                <p className="font-mono text-[9px] text-paper-500 uppercase tracking-wide leading-none">
                  Learning
                </p>
              </div>
            </div>
          </div>

          {/* bottom left badge - Frontend Developer */}
          <div className="absolute -bottom-2 -left-2 card px-3 py-2 shadow-lg animate-bounce [animation-delay:0.2s]">
            <div className="flex items-center gap-2">
              <span className="text-mint-400"><BracesIcon width={16} height={16} /></span>
              <div className="text-left">
                <p className="font-mono text-[9px] text-paper-500 uppercase tracking-wide leading-none">
                  Frontend
                </p>
                <p className="font-mono text-[9px] text-paper-500 uppercase tracking-wide leading-none">
                  Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* copy */}
        <div>
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="section-heading">
            I'm {profile.firstName} <span className="text-mint-400">{profile.lastName}</span>
          </h2>

          <div className="mt-6 space-y-4 text-paper-300 leading-relaxed max-w-2xl">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-ink-border bg-ink-border">
            {about.details.map((d) => (
              <div key={d.label} className="bg-ink-850 px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-wide text-paper-500">
                  {d.label}
                </p>
                <p className="text-paper-100 font-medium mt-1">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
