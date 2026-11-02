import { Brain, Code2, Bug, PenTool, Globe2 } from 'lucide-react';
import kestroyImg from '../assets/kestroy.jpg';
import { Reveal, SectionHeading, Tilt } from './effects';

const focus = [
  { icon: Brain, title: 'AI & Machine Learning', text: 'Data cleaning, feature engineering, scikit-learn models and FastAPI / Streamlit serving.' },
  { icon: Code2, title: 'Front-End Engineering', text: 'React, Next.js and TypeScript interfaces that are fast, accessible and responsive.' },
  { icon: Bug, title: 'Quality Assurance', text: 'Test planning, unit tests, CI with GitHub Actions and careful API validation.' },
  { icon: PenTool, title: 'UI/UX Design', text: 'Figma prototypes, usability testing and visual design that users actually enjoy.' },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 · About"
          title={
            <>
              Engineer by training, <span className="text-gradient">designer at heart.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Tilt className="mx-auto max-w-sm rounded-3xl lg:max-w-none" max={8}>
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-500/40 via-violet-600/40 to-fuchsia-500/30 blur-2xl" />
              <div className="glass overflow-hidden rounded-3xl p-2">
                <img
                  src={kestroyImg}
                  alt="Portrait of Kestroy Stephan, AI/ML Engineer and Front-End Developer"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="tilt-pop glass absolute -bottom-6 -right-2 rounded-2xl px-5 py-4 sm:-right-6">
                <p className="text-xs text-slate-400">Status</p>
                <p className="font-display font-semibold text-white">Awaiting graduation · 2026</p>
              </div>
            </Tilt>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              I'm <strong className="font-semibold text-white">Kestroy Stephan</strong>, an IT graduate from{' '}
              <span className="text-cyan-300">Horizon Campus, Sri Lanka</span>. I've completed my BSc (Hons) in Information
              Technology and am now awaiting graduation — and looking for my first full-time role as an AI/ML engineer,
              front-end developer, QA engineer or UI/UX designer.
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              I've built machine learning models, REST APIs, data dashboards, a full-stack e-commerce site and an Android
              app. I care about reliable, well-tested software and interfaces that feel effortless to use.
            </p>
            <p className="text-lg leading-relaxed text-slate-400">
              Leadership comes naturally too — Head Prefect, Executive Faculty Representative on the student council, and
              event coordinator. I communicate clearly, am comfortable collaborating remotely, and learn fast.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {focus.map(({ icon: Icon, title, text }) => (
                <div key={title} className="glass rounded-2xl p-5 transition-colors hover:border-cyan-400/30">
                  <Icon className="mb-3 h-6 w-6 text-cyan-300" />
                  <h3 className="mb-1 font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Globe2 className="h-5 w-5 text-violet-300" />
              <span className="text-sm text-slate-400">Speaks</span>
              {['English', 'Tamil', 'Sinhala'].map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
