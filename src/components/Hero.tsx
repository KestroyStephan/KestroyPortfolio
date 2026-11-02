import { lazy, Suspense, useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, FileDown } from 'lucide-react';
import portrait from '../assets/kestroy-cutout.webp';
import { profile } from '../data';

const HeroScene = lazy(() => import('./HeroScene'));

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState('');
  useEffect(() => {
    let role = 0;
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = roles[role];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let wait = deleting ? 35 : 70;
      if (!deleting && i === word.length) {
        deleting = true;
        wait = 1800;
      } else if (deleting && i === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        wait = 300;
      }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [roles]);
  return text;
}

export function Hero() {
  const [reveal, setReveal] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const typed = useTypedRoles(profile.roles);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const c = document.createElement('canvas');
    if (!reduced && (c.getContext('webgl2') || c.getContext('webgl'))) setShow3D(true);
  }, []);

  const lines = reveal ? ['AI / ML', 'ENGINEER'] : ['KESTROY', 'STEPHAN'];

  return (
    <section id="top" className="relative overflow-hidden lg:min-h-[100svh]">
      <div aria-hidden className="lab-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--color-acid)]/10 blur-[140px]" />
      {show3D && (
        <div aria-hidden className="absolute inset-0">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      {/* Poster name. The real name stays in the accessible h1 even while the visual text swaps. */}
      <h1 className="sr-only">Kestroy Stephan — AI/ML Engineer & Front-End Developer</h1>
      <div aria-hidden className="pointer-events-none relative z-10 flex flex-col items-center pt-24 md:pt-20">
        {lines.map((line) => (
          <span
            key={line}
            className="block select-none font-poster text-[clamp(4.5rem,19vw,17rem)] font-black uppercase leading-[0.82] tracking-tight text-[var(--color-paper)] transition-all duration-500"
          >
            {line}
          </span>
        ))}
      </div>

      {/* Portrait overlapping the lower half of the name */}
      <div className="relative z-20 -mt-[10vw] flex justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
        <button
          type="button"
          onMouseEnter={() => setReveal(true)}
          onMouseLeave={() => setReveal(false)}
          onFocus={() => setReveal(true)}
          onBlur={() => setReveal(false)}
          onClick={() => setReveal((r) => !r)}
          aria-label="Reveal Kestroy's role"
          className="group relative block"
        >
          <img
            src={portrait}
            alt="Kestroy Stephan"
            width={720}
            height={795}
            fetchPriority="high"
            className="h-[46vh] max-h-[620px] w-auto object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_75%,transparent)] transition-[filter] duration-500 lg:h-[64vh] group-hover:drop-shadow-[0_0_40px_rgba(212,255,58,0.25)]"
          />
          <span className="label absolute bottom-6 left-1/2 hidden -translate-x-1/2 whitespace-nowrap lg:block border border-[var(--color-line)] bg-[var(--color-ink)]/80 px-2 py-1 backdrop-blur">
            ◎ hover: run inference
          </span>
        </button>
      </div>

      {/* Left: live "prediction" terminal */}
      <div className="relative z-30 mx-auto -mt-10 grid max-w-7xl gap-4 px-4 pb-12 sm:grid-cols-2 lg:absolute lg:inset-x-0 lg:bottom-10 lg:mt-0 lg:px-6 lg:pb-0">
        <div className="panel ticks w-full max-w-sm bg-[var(--color-ink)]/85 p-5 backdrop-blur-md">
          <p className="label mb-3">// kestroy.predict(&quot;next_role&quot;)</p>
          <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-white/80">
            <span className="text-white/40">{'{'}</span>
            {'\n  '}role: <span className="text-[var(--color-acid)]">"{typed}<span className="animate-blink">▌</span>"</span>,
            {'\n  '}remote: <span className="text-[var(--color-signal)]">true</span>,
            {'\n  '}relocate: <span className="text-[var(--color-signal)]">true</span>,
            {'\n  '}degree: <span className="text-[var(--color-warn)]">"BSc (Hons) IT"</span>
            {'\n'}
            <span className="text-white/40">{'}'}</span>
          </pre>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {[
              { href: profile.github, label: 'GitHub', Icon: Github },
              { href: profile.linkedin, label: 'LinkedIn', Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center border border-[var(--color-line)] text-white/70 transition-colors hover:border-[var(--color-acid)] hover:text-[var(--color-acid)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            {profile.cv && (
              <a href={profile.cv} download className="tag h-9 hover:border-[var(--color-acid)] hover:text-[var(--color-acid)]">
                <FileDown className="h-3.5 w-3.5" /> CV
              </a>
            )}
          </div>
        </div>

        {/* Right: pitch + CTA */}
        <div className="panel w-full max-w-sm justify-self-end bg-[var(--color-ink)]/85 p-5 backdrop-blur-md sm:text-right">
          <p className="label mb-3">// specimen · {profile.location}</p>
          <p className="font-display text-lg leading-snug text-[var(--color-paper)]">
            IT graduate turning data and ideas into intelligent, well-tested products people enjoy using.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:justify-end">
            <a href="#experiments" className="tag h-10 px-4 hover:border-white/30">
              View experiments
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center gap-2 bg-[var(--color-acid)] px-4 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
