import { Code2, Database, Cloud, Layers, Palette, Brain } from 'lucide-react';
import { Reveal, SectionHeading, Tilt } from './effects';

const techCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    technologies: ['scikit-learn', 'pandas', 'Feature Engineering', 'Model Evaluation', 'NLP', 'Streamlit', 'Jupyter'],
    gradient: 'from-violet-500 to-fuchsia-500',
    span: 'md:col-span-2',
  },
  {
    title: 'Languages',
    icon: Code2,
    technologies: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'PHP', 'HTML', 'CSS'],
    gradient: 'from-cyan-400 to-blue-500',
    span: '',
  },
  {
    title: 'Front-End',
    icon: Layers,
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive UI', 'Component Design'],
    gradient: 'from-pink-500 to-rose-500',
    span: '',
  },
  {
    title: 'Backend & Data',
    icon: Database,
    technologies: ['FastAPI', 'Node.js', 'REST APIs', 'MySQL', 'MongoDB', 'Firebase', 'Convex'],
    gradient: 'from-indigo-500 to-sky-500',
    span: '',
  },
  {
    title: 'QA & DevOps',
    icon: Cloud,
    technologies: ['Unit Testing', 'API Testing', 'GitHub Actions', 'CI/CD', 'Docker', 'Jira', 'Git'],
    gradient: 'from-orange-500 to-amber-400',
    span: '',
  },
  {
    title: 'Design & UX',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Canva', 'Wireframing', 'Prototyping', 'Usability Testing'],
    gradient: 'from-emerald-500 to-teal-400',
    span: 'md:col-span-2 lg:col-span-1',
  },
];

const marquee = ['Python', 'React', 'Next.js', 'TypeScript', 'scikit-learn', 'FastAPI', 'Figma', 'Docker', 'MySQL', 'Firebase', 'Tailwind CSS', 'GitHub Actions'];

const softSkills = ['Teamwork', 'Leadership', 'Critical Thinking', 'Problem Solving', 'Communication', 'Creativity', 'Time Management'];

export function TechStack() {
  return (
    <section id="skills" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 · Toolkit"
          title={
            <>
              Skills & <span className="text-gradient">tech stack</span>
            </>
          }
          intro="The tools I reach for to take an idea from data to a deployed, tested product."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map(({ title, icon: Icon, technologies, gradient, span }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className={span}>
              <Tilt className="h-full rounded-3xl" max={6}>
                <div className="glass h-full rounded-3xl p-7">
                  <div className="tilt-pop mb-6 flex items-center gap-4">
                    <div className={`rounded-2xl bg-gradient-to-br ${gradient} p-3 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((t) => (
                      <span key={t} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" aria-hidden>
          <div className="flex w-max animate-marquee gap-12">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="font-display text-3xl font-semibold text-white/15 md:text-5xl">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((s) => (
              <span key={s} className="glass rounded-full px-5 py-2.5 text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-200">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
