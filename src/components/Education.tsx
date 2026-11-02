import { GraduationCap, BookOpen, BadgeCheck } from 'lucide-react';
import { Reveal, SectionHeading, Tilt } from './effects';

const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Horizon Campus',
    location: 'Malabe, Sri Lanka',
    period: '2022 — 2026',
    status: 'Completed · Awaiting graduation',
    highlight: true,
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'CP/N/Cambridge College',
    location: 'Kotagala, Sri Lanka',
    period: '2020',
    status: 'Engineering Technology stream',
  },
  {
    degree: 'G.C.E. Ordinary Level',
    institution: 'CP/N/Cambridge College',
    location: 'Kotagala, Sri Lanka',
    period: '2017',
    status: 'Completed',
  },
];

const credentials = [
  { title: 'Diploma in Information Technology (DITEC)', issuer: 'Esoft Metro Campus, Hatton', kind: 'Diploma' },
  { title: 'Computer Application Assistant (NVQ Level 3)', issuer: 'Loyola Campus, Hatton', kind: 'NVQ' },
  { title: 'Programming in Python: Python for Beginners', issuer: 'Open Learning, University of Moratuwa', kind: 'Certificate' },
  { title: 'Web Design for Beginners', issuer: 'Open Learning, University of Moratuwa', kind: 'Certificate' },
  { title: 'Pandas, Intro to Machine Learning, Data Cleaning', issuer: 'Kaggle', kind: 'Certificate' },
  { title: 'Community-Based Eco Tourism', issuer: 'University Ramon Llull', kind: 'Course' },
];

export function Education() {
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 · Education"
          title={
            <>
              Education & <span className="text-gradient">certifications</span>
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 80}>
              <Tilt className="h-full rounded-3xl" max={6}>
                <article className={`glass flex h-full flex-col rounded-3xl p-7 ${edu.highlight ? 'border-cyan-400/30' : ''}`}>
                  <div
                    className={`tilt-pop mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${
                      edu.highlight ? 'bg-gradient-to-br from-cyan-400 to-violet-500' : 'bg-white/5'
                    }`}
                  >
                    <GraduationCap className={`h-6 w-6 ${edu.highlight ? 'text-slate-950' : 'text-cyan-300'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-violet-300">{edu.institution}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-5">
                    <span className="font-mono text-sm text-slate-400">{edu.period}</span>
                    <span className={`chip ${edu.highlight ? 'border-emerald-400/40 text-emerald-300' : ''}`}>{edu.status}</span>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="glass rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-cyan-300" />
              <h3 className="text-2xl font-semibold text-white">Diplomas & certifications</h3>
            </div>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {credentials.map((c) => (
                <li key={c.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-cyan-400/30">
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                    <BadgeCheck className="h-4 w-4 text-emerald-400" /> {c.kind}
                  </div>
                  <p className="font-medium text-slate-100">{c.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
