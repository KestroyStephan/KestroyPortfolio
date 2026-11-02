import { ArrowUpRight, Cpu, Languages, MapPin, ShieldAlert, Sprout, Wallet } from 'lucide-react';
import { companyProjects, experience, operations } from '../data';
import { Reveal, SectionHeading, trackGlow } from './effects';
import { BrowserFrame } from './Showcase';

const tints = ['#7c8cff', '#f59e0b', '#4ade80'];
const featureIcons = [Sprout, MapPin, Wallet, Languages, ShieldAlert, Cpu];

// There are no public Govi.ai screens, so this draws the features I built as an illustrated phone.
function FeaturePhone({ name, features, accent }: { name: string; features: string[]; accent: string }) {
  return (
    <div className="absolute left-1/2 top-6 w-[210px] -translate-x-1/2 rounded-t-[28px] border border-b-0 border-white/12 bg-[#0d0f15] p-3 pb-0 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover:-translate-y-1.5">
      <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-white/15" />
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="text-xs font-medium text-[var(--color-text)]">{name}</span>
        <span className="text-[9px] uppercase tracking-wider text-[var(--color-faint)]">Illustration</span>
      </div>
      <ul className="grid grid-cols-2 gap-1.5">
        {features.map((f, i) => {
          const Icon = featureIcons[i % featureIcons.length];
          return (
            <li key={f} className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
              <Icon className="mb-1.5 h-3.5 w-3.5" style={{ color: accent }} />
              <span className="block text-[10px] leading-tight text-[var(--color-text)]/80">{f}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Professional experience"
          title={
            <>
              Shipping production
              <br className="hidden md:block" /> software <span className="serif">at Xaltrix.</span>
            </>
          }
          intro="Nine months at Xaltrix: a full-stack internship from January 2026, then Software Engineer from July to the end of September 2026."
        />

        <ol className="relative">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 60} className="grid gap-4 border-t border-[var(--color-line)] py-10 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="font-mono text-xs text-[var(--color-faint)]">{job.period}</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium">{job.role}</h3>
                <p className="mt-1">
                  {job.org} <span className="text-[var(--color-faint)]">· {job.place}</span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-[var(--color-accent-soft)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Company projects */}
        <div id="company-projects" className="mt-16 scroll-mt-24 md:mt-24">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Company projects</p>
              <h3 className="text-3xl font-medium md:text-4xl">Work delivered for Xaltrix and its clients</h3>
            </div>
            <a href="https://xaltrix.tech/products/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-10 px-4 text-[13px]">
              Xaltrix products <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {companyProjects.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div onPointerMove={trackGlow} className="card card-glow group flex h-full flex-col overflow-hidden">
                  <div className="relative h-52 overflow-hidden border-b border-[var(--color-line)]" style={{ background: `radial-gradient(90% 80% at 80% 0%, ${tints[i]}30, transparent 70%)` }}>
                    {p.shot ? (
                      <div className="absolute left-5 right-[-18%] top-6 transition-transform duration-700 group-hover:-translate-y-1.5">
                        <BrowserFrame shot={p.shot} />
                      </div>
                    ) : (
                      <FeaturePhone name={p.name} features={p.features ?? []} accent={tints[i]} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow mb-3">{p.kind}</p>
                  <h4 className="text-xl font-medium">{p.name}</h4>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed">{p.text}</p>
                  {p.note && <p className="mt-3 text-xs leading-relaxed text-[var(--color-faint)]">{p.note}</p>}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <div className="card p-6 md:p-8">
              <p className="eyebrow mb-6">Platform engineering &amp; support</p>
              <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {operations.map((o) => (
                  <li key={o.title}>
                    <p className="text-[15px] font-medium text-[var(--color-text)]">{o.title}</p>
                    <p className="mt-1 text-sm leading-relaxed">{o.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
