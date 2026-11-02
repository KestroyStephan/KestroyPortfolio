import { Brain, Code2, Container, Database, Server, Smartphone } from 'lucide-react';
import { expertise } from '../data';
import { Reveal, SectionHeading, trackGlow } from './effects';
import { Toolbox } from './Toolbox';

const icons = [Code2, Smartphone, Server, Brain, Database, Container];

export function Expertise() {
  return (
    <section id="expertise" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Technical expertise"
          title={
            <>
              Full stack, <span className="serif">end to end.</span>
            </>
          }
          intro="From Flutter and React interfaces to FastAPI services, PostgreSQL schemas, local LLMs and the Docker and Azure setup that runs them."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((g, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={g.group} delay={(i % 3) * 70}>
                <div onPointerMove={trackGlow} className="card card-glow h-full p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-accent-soft)]">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="font-mono text-xs text-[var(--color-faint)]">0{i + 1}</span>
                  </div>
                  <h3 className="mb-4 text-lg font-medium">{g.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Toolbox />
      </div>
    </section>
  );
}
