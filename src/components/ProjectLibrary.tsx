import { useState } from 'react';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { caseStudies, categories, ceylo, projectLibrary, type Category } from '../data';
import { Reveal, Tilt } from './effects';

const studies = [ceylo, ...caseStudies];

// Every project as a card, filterable by area. Cards re-deal with a short stagger when the filter changes.
export function ProjectLibrary() {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const shown = filter === 'All' ? projectLibrary : projectLibrary.filter((p) => p.categories.includes(filter));
  const count = (c: Category) => projectLibrary.filter((p) => p.categories.includes(c)).length;

  return (
    <div id="projects" className="mt-24 scroll-mt-24">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">All projects</p>
          <h3 className="text-3xl font-medium md:text-4xl">
            Everything, sorted by area
          </h3>
        </div>
        <a href="https://github.com/KestroyStephan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[var(--color-text)]">
          All repositories →
        </a>
      </Reveal>

      <Reveal>
        <div role="tablist" aria-label="Filter projects by area" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
          {(['All', ...categories] as const).map((c) => {
            const on = filter === c;
            return (
              <button
                key={c}
                role="tab"
                type="button"
                aria-selected={on}
                onClick={() => setFilter(c)}
                className={`relative shrink-0 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  on
                    ? 'border-transparent bg-[var(--color-accent)] font-medium text-white'
                    : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-text)]'
                }`}
              >
                {c}
                <span className={`ml-1.5 font-mono text-[11px] ${on ? 'text-white/70' : 'text-[var(--color-faint)]'}`}>
                  {c === 'All' ? projectLibrary.length : count(c)}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <ul key={filter} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => {
          const study = studies.find((c) => c.slug === p.caseStudy);
          const tech = p.tech ?? study?.stack.slice(0, 5) ?? [];
          const features = study?.features.slice(0, 3) ?? [];
          return (
          <li key={p.name} className="animate-[deal_.6s_cubic-bezier(0.2,0.7,0.2,1)_both]" style={{ animationDelay: `${i * 55}ms` }}>
            <Tilt max={5} className="h-full rounded-[20px]">
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <a
                  href={p.caseStudy ? `#cs-${p.caseStudy}` : p.github}
                  {...(p.caseStudy ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="relative block aspect-[16/10] overflow-hidden border-b border-[var(--color-line)]"
                  style={{ background: `radial-gradient(90% 90% at 80% 0%, ${p.accent}38, var(--color-surface-2) 70%)` }}
                  aria-label={p.caseStudy ? `${p.name} case study` : `${p.name} on GitHub`}
                >
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className={`absolute left-5 top-5 w-[calc(100%-2.5rem)] rounded-lg object-cover object-top shadow-[0_24px_50px_-18px_rgba(0,0,0,0.9)] ring-1 ring-white/10 transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.02] ${
                      p.name === 'CEYLO' ? '!left-1/2 !w-[38%] -translate-x-1/2 !rounded-2xl group-hover:-translate-x-1/2' : 'aspect-[16/10]'
                    }`}
                  />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow mb-2">{p.kind}</p>
                  <h4 className="text-lg font-semibold">{p.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
                  {features.length > 0 && (
                    <ul className="mt-4 space-y-1.5 text-[13px] leading-snug" aria-label={`${p.name} key features`}>
                      {features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-cyan)]" />
                          <span className="line-clamp-2">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex-1" />
                  {tech.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${p.name} technologies`}>
                      {tech.map((t) => (
                        <li key={t} className="chip !border-[var(--color-accent)]/25 !bg-[var(--color-accent)]/[0.07] !text-[11px]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex gap-4 border-t border-[var(--color-line)] pt-4 text-sm">
                    {p.caseStudy && (
                      <a href={`#cs-${p.caseStudy}`} className="inline-flex items-center gap-1 text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-soft)]">
                        Case study <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-text)]" aria-label={`${p.name} live site`}>
                        <Globe className="h-3.5 w-3.5" /> Live
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-text)]" aria-label={`${p.name} source on GitHub`}>
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Tilt>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
