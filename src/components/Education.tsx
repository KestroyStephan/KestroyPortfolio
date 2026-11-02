import { BadgeCheck } from 'lucide-react';
import { certifications, datasets } from '../data';
import { Reveal, SectionHeading } from './effects';

export function Education() {
  return (
    <section id="data" className="relative px-4 py-28 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="05"
          tag="training data"
          title={
            <>
              Education &<br />
              <span className="text-[var(--color-acid)]">certifications</span>.
            </>
          }
          intro="The datasets this model was trained on."
        />

        <Reveal>
          <div className="panel overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-[var(--color-line)]">
                  {['dataset', 'source', 'period', 'status'].map((h) => (
                    <th key={h} className="label px-5 py-3 font-normal">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-line)]">
                {datasets.map((d) => (
                  <tr key={d.name} className={d.primary ? 'bg-[var(--color-acid)]/[0.04]' : ''}>
                    <td className="px-5 py-5 font-display text-lg text-[var(--color-paper)]">{d.name}</td>
                    <td className="px-5 py-5 text-sm text-white/60">{d.source}</td>
                    <td className="px-5 py-5 font-mono text-sm text-white/70">{d.period}</td>
                    <td className="px-5 py-5">
                      <span className={`tag ${d.primary ? 'border-[var(--color-acid)]/40 text-[var(--color-acid)]' : ''}`}>
                        {d.note ?? 'completed'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <ul className="grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <li key={c.title} className="bg-[var(--color-ink-2)] p-5 transition-colors hover:bg-[var(--color-ink-3)]">
                <BadgeCheck className="mb-3 h-5 w-5 text-[var(--color-acid)]" />
                <p className="font-medium text-[var(--color-paper)]">{c.title}</p>
                <p className="mt-1 text-sm text-white/50">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
