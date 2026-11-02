import { useEffect, useRef, useState } from 'react';
import { testSuites } from '../data';
import { SectionHeading } from './effects';

const marquee = ['Python', 'React', 'Next.js', 'TypeScript', 'scikit-learn', 'FastAPI', 'Figma', 'Docker', 'MySQL', 'Firebase', 'Tailwind CSS', 'GitHub Actions'];
const totalTests = testSuites.reduce((n, s) => n + s.items.length, 0);

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  // "Run" the suites one by one once the terminal scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(testSuites.length);
      return;
    }
    let timer: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setInterval(() => {
          setShown((n) => {
            if (n + 1 >= testSuites.length) clearInterval(timer);
            return Math.min(n + 1, testSuites.length);
          });
        }, 260);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  const done = shown === testSuites.length;

  return (
    <section id="tests" className="relative px-4 py-28 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          tag="test suite"
          title={
            <>
              Skills,
              <br />
              <span className="text-[var(--color-acid)]">all passing</span>.
            </>
          }
          intro="A QA engineer's way to list a tech stack: run it."
        />

        <div ref={ref} className="panel ticks overflow-hidden">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3">
            <span className="font-mono text-xs text-white/70">zsh — kestroy@lab</span>
            <span className={`label ${done ? 'text-[var(--color-acid)]' : ''}`}>{done ? 'exit 0' : 'running…'}</span>
          </div>
          <div className="space-y-5 p-5 font-mono text-[13px] md:p-8">
            <p className="text-white/70">
              <span className="text-[var(--color-acid)]">$</span> npm test -- --suite=kestroy
            </p>
            {testSuites.slice(0, shown).map((s) => (
              <div key={s.path} className="animate-[fadeIn_.3s_ease-out]">
                <p className="flex flex-wrap items-center gap-3">
                  <span className="bg-[var(--color-acid)] px-1.5 font-bold text-[var(--color-ink)]">PASS</span>
                  <span className="text-white/45">{s.path}</span>
                  <span className="text-[var(--color-paper)]">{s.name}</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 pl-1 md:pl-14">
                  {s.items.map((it) => (
                    <span key={it} className="text-white/65">
                      <span className="text-[var(--color-acid)]">✓</span> {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {done && (
              <div className="border-t border-[var(--color-line)] pt-5 leading-relaxed text-white/70">
                <p>
                  <span className="inline-block w-28 font-bold text-white/90">Test Suites:</span>
                  <span className="text-[var(--color-acid)]">{testSuites.length} passed</span>, {testSuites.length} total
                </p>
                <p>
                  <span className="inline-block w-28 font-bold text-white/90">Tests:</span>
                  <span className="text-[var(--color-acid)]">{totalTests} passed</span>, {totalTests} total
                </p>
                <p>
                  <span className="inline-block w-28 font-bold text-white/90">Time:</span>4 years (BSc IT)
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" aria-hidden>
          <div className="flex w-max animate-marquee gap-10">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="font-poster text-5xl font-black uppercase text-white/[0.07] md:text-7xl">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
