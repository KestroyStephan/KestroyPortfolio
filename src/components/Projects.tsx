import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { featured, moreExperiments, type Experiment } from '../data';
import { Reveal, SectionHeading } from './effects';

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const phase = (p: number, from: number, to: number) => clamp01((p - from) / (to - from));

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches), []);
  return reduced;
}

// Draws the project's stack as a left-to-right pipeline with flowing connectors.
function StackPipeline({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-4">
      {tech.map((t, i) => (
        <div key={t} className="flex items-center">
          <span className="border border-[var(--color-line)] bg-[var(--color-ink-3)] px-3 py-2 font-mono text-xs text-[var(--color-paper)] md:text-sm">{t}</span>
          {i < tech.length - 1 && (
            <svg width="44" height="10" className="mx-1 shrink-0" aria-hidden>
              <line x1="0" y1="5" x2="44" y2="5" stroke="var(--color-acid)" strokeWidth="1.5" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.8s" repeatCount="indefinite" />
              </line>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function RunWindow({ exp }: { exp: Experiment }) {
  const slug = exp.github.split('/').pop();
  return (
    <div className="panel h-full w-full overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-acid)]" />
        <span className="ml-3 truncate font-mono text-xs text-white/50">~/experiments/{slug?.toLowerCase()} — run</span>
      </div>
      {exp.image ? (
        <img src={exp.image} alt={`${exp.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top" />
      ) : (
        <div className="lab-grid relative flex h-full flex-col justify-between gap-8 p-6 md:p-10">
          <div className="space-y-1.5 font-mono text-xs text-white/55 md:text-sm">
            <p>
              <span className="text-[var(--color-acid)]">$</span> git clone github.com/KestroyStephan/{slug}
            </p>
            <p>
              <span className="text-[var(--color-acid)]">$</span> lab run --experiment {exp.id.toLowerCase()}
            </p>
            <p className="text-white/35">› building pipeline…</p>
          </div>
          <div>
            <p className="label mb-4">pipeline</p>
            <StackPipeline tech={exp.tech} />
          </div>
          <p className="font-mono text-xs text-[var(--color-acid)] md:text-sm">✓ {exp.status.toLowerCase()} · exit 0</p>
        </div>
      )}
    </div>
  );
}

function ExperimentScene({ exp }: { exp: Experiment }) {
  const wrap = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const w = wrap.current;
      const s = stage.current;
      if (!w || !s) return;
      const r = w.getBoundingClientRect();
      const p = clamp01(-r.top / (r.height - window.innerHeight));
      s.style.setProperty('--split', phase(p, 0.12, 0.5).toFixed(3));
      s.style.setProperty('--enter', phase(p, 0.05, 0.5).toFixed(3));
      s.style.setProperty('--card', phase(p, 0.5, 0.68).toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reduced]);

  const half = (side: 'left' | 'right') => ({
    clipPath: side === 'left' ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)',
    transform: `translateX(calc(var(--split) * ${side === 'left' ? '-' : ''}55vw))`,
    opacity: 'calc(1 - var(--split) * 0.9)',
  });

  return (
    <div ref={wrap} className={reduced ? 'relative py-10' : 'relative h-[260vh]'}>
      <div
        ref={stage}
        className={`${reduced ? 'relative' : 'sticky top-0'} flex h-[100svh] items-center justify-center overflow-hidden`}
        style={reduced ? ({ '--split': 1, '--enter': 1, '--card': 1 } as React.CSSProperties) : ({ '--split': 0, '--enter': 0, '--card': 0 } as React.CSSProperties)}
      >
        {/* 3D run window that swings flat as you scroll */}
        <div className="absolute inset-x-4 top-[14svh] bottom-[16svh] mx-auto max-w-5xl [perspective:1400px] md:inset-x-10">
          <div
            className="h-full w-full"
            style={{
              transform: 'rotateX(calc((1 - var(--enter)) * 28deg)) scale(calc(0.72 + var(--enter) * 0.28))',
              opacity: 'calc(var(--enter) * 1.2)',
              transformOrigin: 'center bottom',
            }}
          >
            <RunWindow exp={exp} />
          </div>
        </div>

        {/* Giant title split like a shutter */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="label mb-4" style={{ opacity: 'calc(1 - var(--split))' }}>
            <span className="text-[var(--color-acid)]">{exp.id}</span> // {exp.kind}
          </p>
          <div className="relative w-full text-center">
            {(['left', 'right'] as const).map((side, i) => (
              <span
                key={side}
                aria-hidden={i === 1}
                className={`${i === 1 ? 'absolute inset-0' : 'relative'} block font-poster text-[clamp(4rem,15vw,14rem)] font-black uppercase leading-none text-[var(--color-paper)]`}
                style={half(side)}
              >
                {exp.title}
              </span>
            ))}
          </div>
        </div>

        {/* Info card */}
        <article
          className="panel ticks absolute bottom-[6svh] left-4 right-4 mx-auto max-w-xl bg-[var(--color-ink)]/90 p-5 backdrop-blur-md md:left-auto md:right-10 md:mx-0"
          style={{ opacity: 'var(--card)', transform: 'translateY(calc((1 - var(--card)) * 40px))' }}
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="label">
              <span className="text-[var(--color-acid)]">{exp.id}</span> // {exp.kind}
            </span>
            <span className="tag border-[var(--color-acid)]/40 text-[var(--color-acid)]">{exp.status}</span>
          </div>
          <h3 className="text-2xl font-medium">{exp.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{exp.description}</p>
          <a
            href={exp.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[var(--color-paper)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] transition-colors hover:bg-[var(--color-acid)]"
          >
            <Github className="h-4 w-4" /> View source
          </a>
        </article>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="experiments" className="relative pt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          index="03"
          tag="experiments"
          title={
            <>
              Selected
              <br />
              <span className="text-[var(--color-acid)]">experiments</span>.
            </>
          }
          intro="Every project is an experiment: a hypothesis, a stack and a result. Scroll to run them."
        />
      </div>

      {featured.map((exp) => (
        <ExperimentScene key={exp.id} exp={exp} />
      ))}

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-10 md:px-6">
        <Reveal>
          <p className="label mb-4">more_runs[] — {moreExperiments.length} additional experiments</p>
          <ul className="panel divide-y divide-[var(--color-line)]">
            {moreExperiments.map((exp) => (
              <li key={exp.id}>
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-center gap-2 px-5 py-4 transition-colors hover:bg-[var(--color-acid)] md:grid-cols-[90px_1.2fr_1.6fr_auto]"
                >
                  <span className="font-mono text-xs text-[var(--color-acid)] group-hover:text-[var(--color-ink)]">{exp.id}</span>
                  <span className="font-display text-lg text-[var(--color-paper)] group-hover:text-[var(--color-ink)]">
                    {exp.title} <span className="label group-hover:text-[var(--color-ink)]/70">· {exp.kind}</span>
                  </span>
                  <span className="text-sm text-white/55 group-hover:text-[var(--color-ink)]/80">{exp.description}</span>
                  <ArrowUpRight className="hidden h-5 w-5 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)] md:block" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="mt-8 text-center">
          <a href="https://github.com/KestroyStephan" target="_blank" rel="noopener noreferrer" className="tag h-11 px-5 text-sm hover:border-[var(--color-acid)] hover:text-[var(--color-acid)]">
            <Github className="h-4 w-4" /> All repositories on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
