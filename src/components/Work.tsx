import { ArrowUpRight } from 'lucide-react';
import { caseStudies, ceylo, type CaseStudy, type Shot } from '../data';
import { Reveal, SectionHeading, Tilt, trackGlow } from './effects';
import { BrowserFrame, Phone } from './Showcase';
import { ProjectLibrary } from './ProjectLibrary';

const [agentic, weekly, surprise, gift] = caseStudies;

function Tile({ study, className = '', children }: { study: CaseStudy; className?: string; children: React.ReactNode }) {
  return (
    <Tilt max={3.5} className={`rounded-[20px] ${className}`}>
    <a
      href={`#cs-${study.slug}`}
      onPointerMove={trackGlow}
      className="card card-glow group flex h-full flex-col overflow-hidden transition-colors hover:border-[var(--color-line-strong)]"
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
    </Tilt>
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
  const [concierge, itinerary, , , , , market] = ceylo.phones!;
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
              <div className="relative h-full min-h-[380px] overflow-hidden [perspective:1400px]" style={{ background: `radial-gradient(80% 70% at 50% 20%, ${ceylo.accent}40, #08130f 72%)` }}>
                <div aria-hidden className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute left-1/2 top-[14%] w-[30%] max-w-[200px] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] [transform:translateX(-150%)_translateZ(-120px)_rotateY(28deg)] group-hover:[transform:translateX(-160%)_translateZ(-100px)_rotateY(22deg)]">
                  <Phone screen={itinerary} />
                </div>
                <div className="absolute left-1/2 top-[14%] w-[30%] max-w-[200px] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] [transform:translateX(50%)_translateZ(-120px)_rotateY(-28deg)] group-hover:[transform:translateX(60%)_translateZ(-100px)_rotateY(-22deg)]">
                  <Phone screen={market} />
                </div>
                <div className="absolute left-1/2 top-[8%] z-10 w-[34%] max-w-[226px] -translate-x-1/2 transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-2">
                  <Phone screen={concierge} />
                </div>
                <span className="chip absolute left-4 top-4 z-20 border-white/15 bg-black/50 backdrop-blur">Featured case study</span>
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

        <ProjectLibrary />
      </div>
    </section>
  );
}
