import { skills } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

const GROUPS = [
  { key: 'frontend', label: 'Front-End', comment: '// what I build interfaces with' },
  { key: 'backend', label: 'Back-End', comment: '// how I handle data & logic' },
  { key: 'tools', label: 'Tools & Workflow', comment: '// how I ship' },
  { key: 'soft', label: 'Soft Skills', comment: '// how I work with people' },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="bg-ink-850/50 border-y border-ink-border">
      <div className="container-px py-20 sm:py-28">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-4">Skill Set</p>
          <h2 className="section-heading">
            Tools of the <span className="text-mint-400">trade</span>
          </h2>
          <p className="section-sub">
            A practical toolkit built through internship work, self-directed projects, and a
            couple of very patient certifications.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {GROUPS.map((group) => (
              <div key={group.key} className="card p-6">
                <p className="font-mono text-[11px] text-paper-500 mb-1">{group.comment}</p>
                <h3 className="font-display text-lg font-semibold text-paper-100 mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border border-ink-border text-paper-300 hover:border-mint-500/40 hover:text-mint-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
