import { Briefcase, Award, Users, Sparkles, Trophy } from 'lucide-react';
import { Reveal, SectionHeading, Tilt } from './effects';

const experiences = [
  {
    role: 'Graduate — Open to Work',
    company: 'Seeking AI/ML, Front-End, QA or UI/UX roles',
    period: '2026 — Now',
    current: true,
    description:
      'Completed all requirements for my BSc (Hons) in Information Technology at Horizon Campus and awaiting graduation. Actively building AI-powered web apps (AI Trip Planner with Next.js, TypeScript and Convex) and available immediately for remote positions or international relocation.',
    skills: ['Next.js', 'TypeScript', 'Machine Learning', 'Remote-ready'],
    icon: Sparkles,
  },
  {
    role: 'Executive Faculty Representative',
    company: 'Horizon Campus Student Council',
    period: '2023 — 2024',
    description:
      'Represented the faculty’s students, coordinated academic initiatives and bridged communication between lecturers and students. Led team projects and organised campus events.',
    skills: ['Leadership', 'Stakeholder Communication', 'Event Management', 'Teamwork'],
    icon: Users,
  },
  {
    role: 'Event Coordinator & Poster Designer',
    company: "Let's Play Pool Club, Kotagala",
    period: '2020 — 2022',
    description:
      'Planned and ran club events, designed promotional material in Canva and managed volunteers — sharpening my visual design and coordination skills.',
    skills: ['Visual Design', 'Canva', 'Event Planning', 'Volunteer Management'],
    icon: Briefcase,
  },
  {
    role: 'Head Prefect',
    company: 'Cambridge College, Kotagala',
    period: '2019 — 2020',
    description:
      'Led the prefect body, organised school activities, mentored junior students and acted as liaison between students and administration.',
    skills: ['Leadership', 'Mentoring', 'Organisation', 'Problem Solving'],
    icon: Award,
  },
];

const achievements = [
  'School Sports President — Cambridge College',
  'Volunteer — Child Development Forum',
  'Volunteer — Horizon Campus Graduation Ceremony (2023)',
  'Participant — King of the 64 (2024)',
  'Member — Leo Club & Media Club',
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 · Journey"
          title={
            <>
              Experience & <span className="text-gradient">leadership</span>
            </>
          }
          intro="Where I am now and the roles that shaped how I work with people."
        />

        <ol className="relative space-y-8 border-l border-white/10 pl-8 md:pl-12">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <li key={exp.role} className="relative">
                <span
                  className={`absolute -left-[3.05rem] top-6 flex h-9 w-9 items-center justify-center rounded-full border md:-left-[4.05rem] ${
                    exp.current
                      ? 'border-emerald-400/60 bg-emerald-400/15 text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.5)]'
                      : 'border-white/15 bg-[var(--color-ink-2)] text-cyan-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <Reveal delay={i * 80}>
                  <Tilt className="rounded-3xl" max={4}>
                    <article
                      className={`glass rounded-3xl p-6 md:p-8 ${exp.current ? 'border-emerald-400/30 bg-emerald-400/[0.03]' : ''}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white md:text-2xl">{exp.role}</h3>
                          <p className="mt-1 text-violet-300">{exp.company}</p>
                        </div>
                        <span
                          className={`chip font-mono ${exp.current ? 'border-emerald-400/40 text-emerald-300' : ''}`}
                        >
                          {exp.current && <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />}
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-4 leading-relaxed text-slate-400">{exp.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.skills.map((s) => (
                          <span key={s} className="chip">
                            {s}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Tilt>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-16">
          <div className="glass rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-amber-300" />
              <h3 className="text-2xl font-semibold text-white">Achievements & activities</h3>
            </div>
            <ul className="grid gap-3 md:grid-cols-2">
              {achievements.map((a) => (
                <li key={a} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-slate-300">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
