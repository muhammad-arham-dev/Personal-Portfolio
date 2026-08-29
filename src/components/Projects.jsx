import { projects } from '../data/portfolioData'
import { ArrowUpRightIcon, GithubIcon } from './Icons'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="container-px py-20 sm:py-28">
      <div ref={ref} className="reveal">
        <p className="eyebrow mb-4">My Work</p>
        <h2 className="section-heading">
          Featured <span className="text-mint-400">Projects</span>
        </h2>
        <p className="section-sub">Selected builds from internship work and self-learning.</p>

        <div className="mt-16 divide-y divide-ink-border border-y border-ink-border">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group grid sm:grid-cols-[auto,1fr,auto] items-center gap-6 py-8"
            >
              <span className="font-mono text-sm text-paper-500">{project.index}</span>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper-100 group-hover:text-mint-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-wide bg-mint-500/10 text-mint-400 px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-paper-500 text-sm mt-2 max-w-xl">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3 font-mono text-xs text-paper-500">
                  <span className="text-mint-400">{project.type}</span>
                  {project.tags.map((tag) => (
                    <span key={tag}>· {tag}</span>
                  ))}
                </div>
              </div>

              <div className="flex sm:justify-end gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-paper-100 border border-ink-border rounded-full px-4 py-2 hover:border-mint-500/50 hover:text-mint-400 transition-colors"
                  >
                    Live <ArrowUpRightIcon />
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-paper-100 border border-ink-border rounded-full px-4 py-2 hover:border-mint-500/50 hover:text-mint-400 transition-colors"
                >
                  <GithubIcon width={14} height={14} /> Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-paper-500 font-mono">
        </p>
      </div>
    </section>
  )
}
