import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { caseStudies, ceylo, type CaseStudy } from '../data';
import { Reveal, SectionHeading } from './effects';
import { FlowVisual } from './FlowVisual';
import { PhoneCarousel, Showcase } from './Showcase';

function Links({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {study.links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn h-10 px-4 text-[13px] ${l.kind === 'github' ? 'btn-ghost' : 'btn-primary'}`}>
          {l.kind === 'github' ? <Github className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
          {l.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((t) => (
        <li key={t} className="chip">{t}</li>
      ))}
    </ul>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

function Features({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((f) => (
        <li key={f} className="flex gap-3 text-[15px] leading-relaxed">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
          {f}
        </li>
      ))}
    </ul>
  );
}

function Header({ study, size = 'md' }: { study: CaseStudy; size?: 'lg' | 'md' }) {
  return (
    <>
      <p className="eyebrow mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: study.accent }} />
        {study.category} · {study.year}
      </p>
      <h3 className={size === 'lg' ? 'text-[clamp(3.5rem,11vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.045em]' : 'text-4xl font-medium md:text-6xl'}>
        {study.name}
      </h3>
    </>
  );
}

function Featured() {
  return (
    <article id="cs-ceylo" className="scroll-mt-24">
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <Header study={ceylo} size="lg" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{ceylo.summary}</p>
        </div>
        <Links study={ceylo} />
      </Reveal>

      <Reveal className="mt-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
          {ceylo.metrics!.map((m) => (
            <div key={m.label} className="bg-[var(--color-surface)] p-5">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-3xl font-medium tracking-tight text-[var(--color-text)]">{m.value}</dd>
              <dd className="mt-1 text-sm">{m.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-4 grid gap-4 lg:grid-cols-2 lg:items-start">
        <Reveal className="min-w-0">
          <PhoneCarousel screens={ceylo.phones!} accent={ceylo.accent} name={ceylo.name} />
        </Reveal>
        <Reveal delay={100} className="min-w-0">
          <p className="eyebrow mb-3 lg:hidden">Admin portal</p>
          <Showcase shots={ceylo.shots!} accent={ceylo.accent} name={`${ceylo.name} admin`} compact />
          <p className="mt-4 text-sm leading-relaxed">
            The React admin portal runs the operation: vendor and guide verification, cultural events, the AI Center for model health and a live SOS monitor on the map.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
        <Reveal><Block label="The problem">{ceylo.problem}</Block></Reveal>
        <Reveal delay={80}><Block label="The solution">{ceylo.solution}</Block></Reveal>
        <Reveal delay={160}><Block label="My role">{ceylo.role}</Block></Reveal>
      </div>

      <Reveal className="mt-12 grid gap-10 border-t border-[var(--color-line)] pt-10 lg:grid-cols-[1.5fr_1fr]">
        <Block label="Key features"><Features items={ceylo.features} accent={ceylo.accent} /></Block>
        <Block label="Built with"><Stack items={ceylo.stack} /></Block>
      </Reveal>
    </article>
  );
}

// Each case study: a full-width showcase of its real screens, then the story in three columns.
function Study({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article id={`cs-${study.slug}`} className="scroll-mt-24 border-t border-[var(--color-line)] pt-14 md:pt-20">
      <Reveal className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="mb-3 font-mono text-xs text-[var(--color-faint)]">0{index + 2} / 0{caseStudies.length + 1}</p>
          <Header study={study} />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{study.summary}</p>
        </div>
        <Links study={study} />
      </Reveal>

      <Reveal className="mt-10">
        {study.shots ? (
          <Showcase shots={study.shots} accent={study.accent} name={study.name} />
        ) : (
          <div className="card p-6">
            <FlowVisual steps={study.flow!} accent={study.accent} />
          </div>
        )}
      </Reveal>

      {study.flow && study.shots && (
        <Reveal className="mt-4">
          <div className="card p-5 md:p-6">
            <p className="eyebrow mb-4">How it works</p>
            <FlowVisual steps={study.flow} accent={study.accent} />
          </div>
        </Reveal>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
        <Reveal className="space-y-8">
          <Block label="Problem"><p className="text-[15px]">{study.problem}</p></Block>
          <Block label="Solution"><p className="text-[15px]">{study.solution}</p></Block>
        </Reveal>
        <Reveal delay={80}>
          <Block label="Features"><Features items={study.features} accent={study.accent} /></Block>
        </Reveal>
        <Reveal delay={160} className="space-y-8">
          <Block label="My role"><p className="text-[15px] text-[var(--color-text)]/85">{study.role}</p></Block>
          <Block label="Built with"><Stack items={study.stack} /></Block>
        </Reveal>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Case studies"
          title={
            <>
              The problem, the build,
              <br className="hidden md:block" /> <span className="serif">and what shipped.</span>
            </>
          }
          intro="What each product does, the part I built, and the stack behind it, shown on real screens from the running apps."
        />
        <Featured />
        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {caseStudies.map((s, i) => (
            <Study key={s.slug} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
