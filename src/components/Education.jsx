import { education, certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="container-px py-16 sm:py-20">
      <div ref={ref} className="reveal">
        <p className="eyebrow mb-4 justify-center">My Education</p>
        <h2 className="section-heading text-center mx-auto">
          Learning <span className="text-mint-400">Journey</span>
        </h2>
        <p className="section-sub text-center mx-auto">
          A Steady Academic Path in Information Technology and Computer Science that shaped how I
          approach building Software today.
        </p>

        {/* timeline */}
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-ink-border" />
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, i) => (
              <div key={edu.id} className="relative">
                <div className="hidden md:flex absolute -top-[2.15rem] left-6 w-3 h-3 rounded-full bg-mint-500 ring-4 ring-ink-900" />
                <div className="card p-6 h-full hover:border-mint-500/30 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-xs text-mint-400 border border-mint-500/30 rounded-full px-3 py-1">
                      {edu.period}
                    </span>
                    <span className="font-mono text-[11px] text-paper-500">{edu.meta}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-paper-100">
                    {edu.degree}
                  </h3>
                  <p className="text-mint-400 text-sm mt-1">{edu.field}</p>
                  <p className="text-paper-500 text-sm mt-3">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* certifications */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-500 mb-5">
            // Certifications
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="flex items-start gap-4 card p-5 hover:border-mint-500/30 transition-colors"
              >
                <span className="mt-1 w-2 h-2 rounded-sm bg-mint-500 shrink-0" />
                <div>
                  <p className="text-paper-100 font-medium leading-snug">{cert.title}</p>
                  <p className="text-paper-500 text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
