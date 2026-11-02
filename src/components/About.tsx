import { GraduationCap } from 'lucide-react';
import { certifications, education, profile } from '../data';
import { Reveal, SectionHeading } from './effects';
import desk from '../assets/kestroy-desk.webp';

const facts = [
  { k: 'Based in', v: profile.location },
  { k: 'Languages', v: 'English · Tamil · Sinhala' },
  { k: 'Open to', v: 'Remote worldwide · relocation' },
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
              Engineer by training,
              <br className="hidden md:block" /> <span className="serif">product-minded by habit.</span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <figure className="overflow-hidden rounded-[24px] border border-[var(--color-line)]">
              <img src={desk} alt="Kestroy Stephan at his desk with a laptop" loading="lazy" width={800} height={899} className="aspect-[8/9] w-full object-cover" />
            </figure>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-[var(--color-text)]">
                I’m a software engineer from Sri Lanka. At Xaltrix I build AgenticHR, an AI hiring platform, across Flutter, FastAPI and PostgreSQL, and I keep client
                platforms running day to day.
              </p>
              <p>
                I’m drawn to problems where AI meets a real workflow: hiring, travel, team reporting. I care about the parts users never see too, such as clean architecture,
                access control, tests in CI and deployments that stay up.
              </p>
              <p>I’ve completed my BSc (Hons) in Information Technology and I’m awaiting graduation. I’m open to remote roles worldwide and to relocating.</p>
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
