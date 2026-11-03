import { Award, GraduationCap } from 'lucide-react';
import { certifications, education, thesis } from '../data';
import { Reveal, SectionHeading } from './effects';

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="07" eyebrow="Education" title="Education and certificates." intro="Where I studied, and the courses I took along the way." />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Reveal>
            <article className="card card-hover h-full p-6 md:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-line)] bg-[var(--color-accent)]/10 text-[var(--color-accent-soft)]">
                <GraduationCap className="h-5 w-5" />
              </span>
              <p className="eyebrow mt-6">{education.period}</p>
              <h3 className="mt-2 text-2xl font-semibold md:text-[1.75rem]">{education.degree}</h3>
              <p className="mt-2 text-[15px]">{education.school}</p>
              <p className="mt-1 text-sm text-[var(--color-ok)]">{education.status}</p>
              <div className="mt-8 border-t border-[var(--color-line)] pt-6">
                <p className="eyebrow mb-2">Final-year thesis</p>
                <a href="#research" className="text-[15px] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-soft)]">
                  {thesis.title}
                </a>
              </div>
            </article>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {certifications.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 70}>
                <div className="card card-hover flex h-full items-start gap-4 p-5">
                  <Award className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--color-cyan)]" />
                  <div>
                    <p className="text-[15px] font-medium text-[var(--color-text)]">{c.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-faint)]">{c.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
