import portrait from '../assets/kestroy.jpg';
import { capabilities, modelCard } from '../data';
import { Reveal, SectionHeading, Tilt } from './effects';

export function About() {
  return (
    <section id="model" className="relative px-4 py-28 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          tag="model card"
          title={
            <>
              Engineer by training,
              <br />
              <span className="text-[var(--color-acid)]">designer</span> at heart.
            </>
          }
          intro="Every good model ships with a model card. Here's mine — what I was trained on and what I'm built for."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Tilt className="h-full" max={6}>
              <figure className="panel ticks h-full overflow-hidden p-3">
                <div className="relative overflow-hidden">
                  <img
                    src={portrait}
                    alt="Portrait of Kestroy Stephan"
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover grayscale-[35%] transition duration-700 hover:grayscale-0"
                  />
                  <div aria-hidden className="scanline pointer-events-none absolute inset-0" />
                </div>
                <figcaption className="tilt-pop flex items-center justify-between px-1 pt-3">
                  <span className="label">fig. 01 — the engineer</span>
                  <span className="tag border-[var(--color-acid)]/40 text-[var(--color-acid)]">● available</span>
                </figcaption>
              </figure>
            </Tilt>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3">
                <span className="font-mono text-xs text-white/70">MODEL_CARD.md</span>
                <span className="label">readme</span>
              </div>
              <dl className="divide-y divide-[var(--color-line)]">
                {modelCard.map((row) => (
                  <div key={row.key} className="grid gap-1 px-5 py-3 sm:grid-cols-[170px_1fr]">
                    <dt className="font-mono text-xs text-white/40">{row.key}</dt>
                    <dd className={`text-sm ${row.accent ? 'text-[var(--color-acid)]' : 'text-[var(--color-paper)]/90'}`}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.code} className="group bg-[var(--color-ink-2)] p-5 transition-colors hover:bg-[var(--color-ink-3)]">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center border border-[var(--color-line)] font-mono text-xs font-bold text-[var(--color-acid)] transition-colors group-hover:bg-[var(--color-acid)] group-hover:text-[var(--color-ink)]">
                      {c.code}
                    </span>
                    <h3 className="font-medium">{c.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/55">{c.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
