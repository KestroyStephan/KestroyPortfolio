import { ArrowUpRight, BookOpen, FileText, GraduationCap, PenLine } from 'lucide-react';
import { articles, profile, publications, thesis } from '../data';
import { Reveal, SectionHeading, Tilt } from './effects';

// Published research and writing. Links appear only once they are filled in data.ts.
export function Research() {
  const profiles = [
    profile.researchgate && { href: profile.researchgate, label: 'ResearchGate', Icon: BookOpen },
    profile.medium && { href: profile.medium, label: 'Medium', Icon: PenLine },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof BookOpen }[];

  return (
    <section id="research" className="relative px-4 py-24 md:px-6 md:py-32">
            <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          eyebrow="Research & writing"
          title={
            <>
              Research and writing.
            </>
          }
          intro="My final-year thesis, two extended abstracts published at HIRS 2025, and the guides I write on Medium."
        />

        {profiles.length > 0 && (
          <Reveal className="-mt-4 mb-10 flex flex-wrap gap-2.5">
            {profiles.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-10 px-4 text-[13px]">
                <Icon className="h-4 w-4" /> {label} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </Reveal>
        )}

        <Reveal className="mb-4">
          <Tilt max={2.5} className="rounded-[24px]">
            <article className="card grid overflow-hidden md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative min-h-[320px] overflow-hidden bg-[var(--color-surface-2)] md:min-h-[440px]">
                <img src={thesis.photo} alt="Kestroy holding his bound final-year thesis at Horizon Campus" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[50%_42%] transition-transform duration-[1.2s] ease-out hover:scale-[1.04]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[var(--color-surface)]/40" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <span className="chip mb-6 w-fit border-[var(--color-accent-soft)]/30 text-[var(--color-text)]">
                  <GraduationCap className="h-3.5 w-3.5 text-[var(--color-accent-soft)]" /> Final-year thesis · {thesis.date}
                </span>
                <h3 className="text-2xl font-medium leading-tight md:text-[2rem]">{thesis.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-faint)]">
                  S. Kestroy · {thesis.degree} · {thesis.school}
                </p>
                <p className="mt-6 text-[15px] leading-relaxed md:text-base">{thesis.summary}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#cs-ceylo" className="btn btn-primary h-10 px-4 text-[13px]">
                    See CEYLO <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a href="https://github.com/KestroyStephan/CEYLO" target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-10 px-4 text-[13px]">
                    Source code <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          </Tilt>
        </Reveal>

        <ol className="grid gap-4 lg:grid-cols-2">
          {publications.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <Tilt max={3} className="h-full rounded-[20px]">
                <article className="card flex h-full flex-col p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="chip border-[var(--color-accent-soft)]/30 text-[var(--color-text)]">
                      <FileText className="h-3.5 w-3.5 text-[var(--color-accent-soft)]" /> {p.venue}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-faint)]">0{i + 1}</span>
                  </div>
                  <p className="eyebrow mb-3">{p.type}</p>
                  <h3 className="text-xl font-medium leading-snug md:text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-faint)]">{p.authors}</p>
                  <p className="mt-5 flex-1 text-[15px] leading-relaxed">{p.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-[var(--color-line)] pt-5 text-sm">
                    {(p.href || profile.researchgate) && (
                      <a href={p.href || profile.researchgate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-soft)]">
                        {p.href ? 'Read the paper' : 'On ResearchGate'} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.related && (
                      <a href={`#${p.related}`} className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-text)]">
                        See the project <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </ol>

        {articles.length > 0 && (
          <Reveal className="mt-14">
            <p className="eyebrow mb-5">Articles on Medium</p>
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {articles.map((a) => (
                <li key={a.href}>
                  <a href={a.href} target="_blank" rel="noopener noreferrer" className="group grid gap-1 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6">
                    <span>
                      <span className="text-lg text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-soft)]">{a.title}</span>
                      {a.summary && <span className="mt-1 block text-sm">{a.summary}</span>}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-faint)]">
                      {a.date} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
