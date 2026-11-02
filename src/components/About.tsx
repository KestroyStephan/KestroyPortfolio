import { GraduationCap } from 'lucide-react';
import { certifications, education, profile } from '../data';
import { Reveal, SectionHeading } from './effects';
import desk from '../assets/kestroy-desk.webp';

const facts = [
  { k: 'Based in', v: profile.location },
  { k: 'Languages', v: 'English · Tamil · Sinhala' },
  { k: 'Open to', v: 'On-site · Hybrid · Remote' },
  { k: 'Leadership', v: 'Faculty Representative · Head Prefect' },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="About"
          title={
            <>
              A bit about me.
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <figure className="group relative">
              <div aria-hidden className="absolute -inset-3 -translate-x-3 translate-y-3 rounded-[30px] border border-[var(--color-violet)]/25 transition-transform duration-700 group-hover:-translate-x-1.5 group-hover:translate-y-1.5" />
              <div className="relative overflow-hidden rounded-[24px] ring-1 ring-white/10">
                <img
                  src={desk}
                  alt="Kestroy Stephan at his desk with a laptop"
                  loading="lazy"
                  width={800}
                  height={899}
                  className="aspect-[8/9] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 chip border-white/15 bg-black/45 backdrop-blur">Focus · Execute · Succeed</figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-[var(--color-text)]">
                I’m a software engineer from Sri Lanka. At Xaltrix I built AgenticHR, an AI hiring platform, across Flutter, FastAPI and PostgreSQL, and kept client
                platforms running day to day until the end of September 2026.
              </p>
              <p>
                I’m drawn to problems where AI meets a real workflow: hiring, travel, team reporting. I care about the parts users never see too, such as clean architecture,
                access control, tests in CI and deployments that stay up.
              </p>
              <p>
                I’ve completed my BSc (Hons) in Information Technology and I’m awaiting graduation. Next, I’m looking for a software engineering role focused on Python
                backend and applied AI, on-site, hybrid or remote.
              </p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.k} className="bg-[var(--color-surface)] p-5">
                  <dt className="eyebrow mb-1.5">{f.k}</dt>
                  <dd className="text-[15px] text-[var(--color-text)]">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="eyebrow mb-4">Education</p>
              <div className="flex gap-4 border-b border-[var(--color-line)] pb-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--color-line)] text-[var(--color-accent-soft)]">
                  <GraduationCap className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <p className="font-medium text-[var(--color-text)]">{education.degree}</p>
                  <p className="text-[15px]">
                    {education.school} · {education.period}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ok)]">{education.status}</p>
                </div>
              </div>
              <ul className="mt-2 divide-y divide-[var(--color-line)]">
                {certifications.map((c) => (
                  <li key={c.title} className="flex flex-col justify-between gap-1 py-3.5 text-[15px] sm:flex-row sm:gap-6">
                    <span className="text-[var(--color-text)]/85">{c.title}</span>
                    <span className="text-sm text-[var(--color-faint)] sm:text-right">{c.issuer}</span>
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
