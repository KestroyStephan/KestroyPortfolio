import { useEffect, useRef, type ReactNode, type PointerEvent } from 'react';

// Fades children up when they scroll into view.
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// Card that tilts in 3D toward the pointer, with a soft glare.
export function Tilt({ children, className = '', max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ref.current.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`);
    ref.current.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`);
    ref.current.style.setProperty('--gx', `${px * 100}%`);
    ref.current.style.setProperty('--gy', `${py * 100}%`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`tilt group relative ${className}`}>
      <div className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export function SectionHeading({ index, tag, title, intro }: { index: string; tag: string; title: ReactNode; intro?: string }) {
  return (
    <Reveal className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="label mb-5">
          <span className="text-[var(--color-acid)]">{index}</span> // {tag}
        </p>
        <h2 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">{title}</h2>
      </div>
      {intro && <p className="max-w-sm text-base leading-relaxed text-white/55 md:text-right">{intro}</p>}
    </Reveal>
  );
}
