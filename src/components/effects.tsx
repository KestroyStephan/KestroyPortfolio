import { useEffect, useRef, type ReactNode, type PointerEvent } from 'react';
import { m } from 'framer-motion';

// Fades children up once when they scroll into view.
export function Reveal({ children, className = '', delay = 0, as = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' }) {
  const Tag = as === 'li' ? m.li : m.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

// Tips its content toward the pointer in 3D, with a soft glare. Mouse only; touch stays flat.
export function Tilt({ children, className = '', max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.classList.add('is-tilting');
    el.style.setProperty('--ry', `${((x - 0.5) * max * 2).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${((0.5 - y) * max * 2).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${(y * 100).toFixed(1)}%`);
  };
  const onLeave = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.classList.remove('is-tilting');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };
  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className={`tilt relative ${className}`}>
      {children}
      <span aria-hidden className="tilt-glare" />
    </div>
  );
}

// Thin bar along the top of the window showing how far down the page you are.
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left scale-x-0 bg-[var(--color-accent-soft)]"
    />
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
        <p className="eyebrow mb-5" data-index={index}>{eyebrow}</p>
        <h2 className="text-4xl font-medium leading-[1.02] md:text-6xl">{title}</h2>
      </div>
      {intro && <p className="max-w-md text-base leading-relaxed lg:justify-self-end">{intro}</p>}
    </Reveal>
  );
}
