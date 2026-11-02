import { ArrowUpRight, Github } from 'lucide-react';
import { caseStudies, ceylo, otherProjects, type CaseStudy, type Shot } from '../data';
import { Reveal, SectionHeading, trackGlow } from './effects';
import { BrowserFrame } from './Showcase';

const [agentic, weekly, surprise, gift] = caseStudies;

function Tile({ study, className = '', children }: { study: CaseStudy; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={`#cs-${study.slug}`}
      onPointerMove={trackGlow}
      className={`card card-glow group flex flex-col overflow-hidden transition-colors hover:border-[var(--color-line-strong)] ${className}`}
    >
      <div className="relative min-h-0 flex-1 overflow-hidden">{children}</div>
      <div className="flex items-start justify-between gap-4 border-t border-[var(--color-line)] p-5">
        <div>
          <p className="eyebrow mb-1.5">{study.category}</p>
          <h3 className="text-xl font-medium">{study.name}</h3>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[var(--color-faint)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-text)]" />
      </div>
    </a>
  );
}

// A framed screen that bleeds off the tile edge and lifts on hover, lit by the project's accent.
function Peek({ shot, accent, tall = false }: { shot: Shot; accent: string; tall?: boolean }) {
  return (
    <div className={`relative h-full ${tall ? 'min-h-[260px]' : 'min-h-[230px]'}`} style={{ background: `radial-gradient(90% 80% at 80% 0%, ${accent}30, transparent 70%)` }}>
      <div className="absolute left-6 right-[-14%] top-7 origin-top-left transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
        <BrowserFrame shot={shot} />
      </div>
    </div>
  );
}

export function Work() {
  const [concierge, sos] = ceylo.shots!;
  return (
    <section id="work" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Products I’ve <span className="serif">designed,</span>
              <br className="hidden md:block" /> built and shipped.
            </>
          }
          intro="A mix of production work at Xaltrix and products I led from idea to launch. Each one opens into a full case study below."
        />

        <div className="grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-2">
            <Tile study={ceylo} className="h-full">
              <div className="relative h-full min-h-[340px] overflow-hidden bg-[#0b1a15]" style={{ background: `radial-gradient(80% 70% at 30% 10%, ${ceylo.accent}38, #0b1a15 70%)` }}>
                <img
                  src={concierge.src}
                  alt={concierge.alt}
                  loading="lazy"
                  className="absolute bottom-0 left-[4%] h-[92%] w-auto max-w-none rounded-t-2xl object-cover object-top shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:-translate-y-2"
                />
                <div className="absolute bottom-[-8%] right-[-10%] hidden w-[58%] rotate-[-3deg] transition-transform duration-700 group-hover:-translate-y-3 group-hover:rotate-[-1deg] sm:block">
                  <BrowserFrame shot={sos} />
                </div>
                <span className="chip absolute left-4 top-4 border-white/15 bg-black/50 backdrop-blur">Featured case study</span>
              </div>
            </Tile>
          </Reveal>

          <Reveal className="md:col-span-2" delay={80}>
            <Tile study={agentic} className="h-full">
              <Peek shot={agentic.shots![0]} accent={agentic.accent} />
            </Tile>
          </Reveal>

          <Reveal className="md:col-span-2" delay={140}>
            <Tile study={weekly} className="h-full">
              <Peek shot={weekly.shots![0]} accent={weekly.accent} />
            </Tile>
          </Reveal>

          <Reveal className="md:col-span-3">
            <Tile study={surprise} className="h-full">
              <Peek shot={surprise.shots![0]} accent={surprise.accent} tall />
            </Tile>
          </Reveal>

          <Reveal className="md:col-span-3" delay={80}>
            <Tile study={gift} className="h-full">
              <Peek shot={gift.shots![0]} accent={gift.accent} tall />
            </Tile>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="text-lg font-medium">More projects</h3>
            <a href="https://github.com/KestroyStephan?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-[var(--color-text)]">
              All repositories →
            </a>
          </div>
          <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {otherProjects.map((p) => (
              <li key={p.name} className="grid gap-2 py-5 md:grid-cols-[1.1fr_1.6fr_1.2fr_auto] md:items-center md:gap-6">
                <p className="text-[var(--color-text)]">
                  {p.name} <span className="ml-1 text-sm text-[var(--color-faint)]">{p.kind}</span>
                </p>
                <p className="text-sm">{p.text}</p>
                <p className="font-mono text-xs text-[var(--color-faint)]">{p.stack.join(' · ')}</p>
                <div className="flex gap-4 text-sm">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-text)]" aria-label={`${p.name} live site`}>
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[var(--color-text)]" aria-label={`${p.name} source on GitHub`}>
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
