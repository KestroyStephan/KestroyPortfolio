import { achievements, trainingLog } from '../data';
import { Reveal, SectionHeading } from './effects';

// A decorative "loss curve" that descends as experience accumulates.
function LossCurve() {
  return (
    <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden>
      <path d="M0 10 C 60 20, 90 70, 150 80 S 260 100, 400 104" fill="none" stroke="var(--color-acid)" strokeWidth="1.5" />
      <path d="M0 10 C 60 20, 90 70, 150 80 S 260 100, 400 104 V120 H0 Z" fill="var(--color-acid)" opacity="0.06" />
      {[0, 100, 200, 300, 400].map((x) => (
        <line key={x} x1={x} x2={x} y1="0" y2="120" stroke="rgba(255,255,255,0.06)" />
      ))}
    </svg>
  );
}

export function Experience() {
  return (
    <section id="log" className="relative px-4 py-28 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          tag="training log"
          title={
            <>
              Experience &<br />
              <span className="text-[var(--color-acid)]">leadership</span>.
            </>
          }
          intro="Each epoch added a new layer — from leading a school to building AI products."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <ol className="panel divide-y divide-[var(--color-line)]">
            {trainingLog.map((e, i) => (
              <li key={e.role}>
                <Reveal delay={i * 70} className="grid gap-4 p-6 md:grid-cols-[150px_1fr] md:p-8">
                  <div>
                    <p className={`font-mono text-xs ${e.current ? 'text-[var(--color-acid)]' : 'text-white/40'}`}>
                      epoch {e.epoch}/04
                    </p>
                    <p className="mt-1 font-mono text-sm text-white/70">{e.period}</p>
                    {e.current && (
                      <span className="mt-3 inline-flex items-center gap-2 bg-[var(--color-acid)] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-[var(--color-ink)]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-ink)]" /> running
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium md:text-2xl">{e.role}</h3>
                    <p className="mt-1 text-sm text-[var(--color-signal)]/80">{e.org}</p>
                    <p className="mt-4 max-w-2xl leading-relaxed text-white/60">{e.text}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="panel p-5">
              <p className="label mb-2">loss / epoch</p>
              <LossCurve />
              <p className="mt-2 font-mono text-xs text-white/50">
                loss ↓ · skills ↑ · <span className="text-[var(--color-acid)]">converging</span>
              </p>
            </div>
            <div className="panel ticks p-5">
              <p className="label mb-4">extra_signals[]</p>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-snug text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--color-acid)]" />
                    {a}
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
