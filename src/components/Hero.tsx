import { lazy, Suspense, useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, MapPin, ArrowDown } from 'lucide-react';

const HeroScene = lazy(() => import('./HeroScene'));

const roles = ['AI/ML Engineer', 'Front-End Developer', 'QA Engineer', 'UI/UX Designer'];

const stats = [
  { value: '11+', label: 'Projects built' },
  { value: 'BSc (Hons)', label: 'Information Technology' },
  { value: '3', label: 'Languages spoken' },
  { value: 'GMT+5:30', label: 'Remote-ready time zone' },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Only load the WebGL scene when the device can handle it and motion is welcome.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = document.createElement('canvas');
    const webgl = !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    if (!reduced && webgl) setShow3D(true);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 xl:pb-36">
      {/* ambient aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-32 top-40 h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="grid-floor absolute inset-x-0 bottom-[-20%] h-[60%]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10">
          <div className="glass mb-8 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-slate-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to work · Remote &amp; international roles
          </div>

          <p className="eyebrow mb-4">Hi, I'm</p>
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
            Kestroy
            <br />
            <span className="text-gradient">Stephan</span>
          </h1>

          <p className="mt-6 h-9 font-display text-2xl text-slate-200 md:text-3xl" aria-live="polite">
            <span className="sr-only">AI/ML Engineer, Front-End Developer, QA Engineer and UI/UX Designer. </span>
            <span aria-hidden key={roleIndex} className="inline-block animate-[float_0.6s_ease-out]">
              {roles[roleIndex]}
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            IT graduate (BSc Hons, Horizon Campus) building intelligent, user-centred products — from machine learning
            pipelines and APIs to polished React interfaces. Ready to join a team remotely or relocate.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" /> Sri Lanka · Available worldwide
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-colors hover:border-cyan-400/40"
            >
              Let's talk
            </a>
            <div className="flex items-center gap-2">
              {[
                { href: 'https://github.com/KestroyStephan', label: 'GitHub profile', Icon: Github },
                { href: 'https://www.linkedin.com/in/kestroy-stephan/', label: 'LinkedIn profile', Icon: Linkedin },
                { href: 'mailto:stephankestroy@gmail.com', label: 'Send an email', Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-3 text-slate-300 transition-all hover:-translate-y-0.5 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[380px] sm:h-[460px] lg:h-[560px]">
          {show3D ? (
            <Suspense fallback={<OrbFallback />}>
              <HeroScene />
            </Suspense>
          ) : (
            <OrbFallback />
          )}
        </div>
      </div>

      <dl className="absolute inset-x-0 bottom-8 mx-auto hidden max-w-6xl grid-cols-4 gap-4 px-4 xl:grid">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl px-5 py-4">
            <dt className="text-xs text-slate-400">{s.label}</dt>
            <dd className="font-display text-xl font-semibold text-white">{s.value}</dd>
          </div>
        ))}
      </dl>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 xl:hidden">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function OrbFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="animate-float h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,#67e8f9,#7c3aed_55%,#1e1b4b)] shadow-[0_0_120px_rgba(124,58,237,0.5)]" />
    </div>
  );
}
