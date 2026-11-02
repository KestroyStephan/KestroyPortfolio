import { useEffect, useRef, type ReactNode, type PointerEvent } from 'react';

// Fades children up when they scroll into view.
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' }) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

// Moves the .card-glow highlight to follow the pointer.
export function trackGlow(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}

export function SectionHeading({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
      <div>
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span className="text-[var(--color-accent-soft)]">{index}</span>
          <span className="h-px w-8 bg-[var(--color-line-strong)]" />
          {eyebrow}
        </p>
        <h2 className="text-4xl font-medium leading-[1.02] md:text-6xl">{title}</h2>
      </div>
      {intro && <p className="max-w-md text-base leading-relaxed lg:justify-self-end">{intro}</p>}
    </Reveal>
  );
}
