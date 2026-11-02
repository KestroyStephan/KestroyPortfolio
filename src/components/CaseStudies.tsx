import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { caseStudies, ceylo, type CaseStudy } from '../data';
import { Reveal, SectionHeading } from './effects';
import { FlowVisual } from './FlowVisual';

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

function Featured() {
  const [concierge, sos, ai, guide, booking] = ceylo.images!;
  const shot = 'h-full w-full object-cover';
  return (
    <article id="cs-ceylo" className="scroll-mt-24">
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: ceylo.accent }} />
            {ceylo.category} · {ceylo.year}
          </p>
          <h3 className="text-[clamp(3.5rem,11vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.045em]">{ceylo.name}</h3>
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

      {/* Real screens from the CEYLO launch video */}
      <div className="mt-4 grid gap-4 md:grid-cols-12">
        <Reveal className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[#0d1f19] md:col-span-7 md:row-span-2">
          <img src={concierge.src} alt={concierge.alt} loading="lazy" className={`${shot} aspect-square md:aspect-auto`} />
        </Reveal>
        <Reveal delay={80} className="overflow-hidden rounded-2xl border border-[var(--color-line)] md:col-span-5">
          <img src={sos.src} alt={sos.alt} loading="lazy" className={`${shot} aspect-[980/619]`} />
        </Reveal>
        <Reveal delay={140} className="overflow-hidden rounded-2xl border border-[var(--color-line)] md:col-span-5">
          <img src={ai.src} alt={ai.alt} loading="lazy" className={`${shot} aspect-[980/654]`} />
        </Reveal>
        <Reveal className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[#0d1f19] md:col-span-8">
          <img src={guide.src} alt={guide.alt} loading="lazy" className={`${shot} aspect-[950/700] object-top`} />
        </Reveal>
        <Reveal delay={80} className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[#0d1f19] md:col-span-4">
          <img src={booking.src} alt={booking.alt} loading="lazy" className={`${shot} aspect-[500/700] object-top`} />
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

function Study({ study, flip }: { study: CaseStudy; flip: boolean }) {
  const image = study.images?.[0];
  return (
    <article id={`cs-${study.slug}`} className="scroll-mt-24 border-t border-[var(--color-line)] pt-14 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? 'lg:order-2' : ''}>
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: study.accent }} />
            {study.category} · {study.year}
          </p>
          <h3 className="text-4xl font-medium md:text-5xl">{study.name}</h3>
          <p className="mt-5 text-lg leading-relaxed">{study.summary}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Block label="Problem"><p className="text-[15px]">{study.problem}</p></Block>
            <Block label="Solution"><p className="text-[15px]">{study.solution}</p></Block>
          </div>
          <div className="mt-8">
            <Block label="My role"><p className="text-[15px] text-[var(--color-text)]/85">{study.role}</p></Block>
          </div>
          <div className="mt-8"><Links study={study} /></div>
        </Reveal>

        <Reveal delay={100} className={`flex flex-col gap-6 ${flip ? 'lg:order-1' : ''}`}>
          <div className="card overflow-hidden">
            {image ? (
              <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[16/10] w-full object-cover object-left" />
            ) : (
              <div className="p-5 md:p-6">
                <p className="eyebrow mb-4">How it works</p>
                <FlowVisual steps={study.flow!} accent={study.accent} />
              </div>
            )}
          </div>
          <Block label="Features"><Features items={study.features} accent={study.accent} /></Block>
          <Stack items={study.stack} />
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
          intro="What each product does, the part I built, and the stack behind it, with real screens wherever the product is public."
        />
        <Featured />
        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {caseStudies.map((s, i) => (
            <Study key={s.slug} study={s} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
