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

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl font-semibold text-white md:text-6xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-slate-400">{intro}</p>}
    </Reveal>
  );
}
