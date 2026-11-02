import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import type { Shot } from '../data';

// Window chrome around a screenshot, so web screens read as a product rather than a loose image.
export function BrowserFrame({ shot, className = '', fit = 'cover' }: { shot: Shot; className?: string; fit?: 'cover' | 'contain' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0d0f15] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
        <span className="mx-auto max-w-[60%] truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-[10px] text-[var(--color-faint)] sm:text-[11px]">{shot.label}</span>
        <span className="w-8" />
      </div>
      <img src={shot.src} alt={shot.alt} loading="lazy" className={`block aspect-[16/9.4] w-full bg-white ${fit === 'cover' ? 'object-cover object-left-top' : 'object-contain'}`} />
    </div>
  );
}

function Screen({ shot }: { shot: Shot }) {
  if (shot.frame === 'raw') {
    return (
      <div className="overflow-hidden rounded-xl shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)]">
        <img src={shot.src} alt={shot.alt} loading="lazy" className="block aspect-[16/10.4] w-full object-contain" />
      </div>
    );
  }
  return <BrowserFrame shot={shot} />;
}

/**
 * Interactive gallery: the active screen sits on an accent-lit stage with the next one
 * layered behind it. Tabs switch screens; it advances on its own while in view.
 */
export function Showcase({ shots, accent, name }: { shots: Shot[]; accent: string; name: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const many = shots.length > 1;

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!many || paused || !visible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % shots.length), 4500);
    return () => clearTimeout(t);
  }, [active, paused, visible, many, shots.length]);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !tilt.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.current.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (tilt.current) tilt.current.style.transform = '';
    setPaused(false);
  };

  const next = (active + 1) % shots.length;

  return (
    <div style={{ '--accent': accent } as CSSProperties}>
      <div
        ref={stage}
        onPointerMove={onMove}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={onLeave}
        className="relative overflow-hidden rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)] px-4 pb-6 pt-8 sm:px-8 sm:pt-12 md:px-12"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(70% 60% at 50% 0%, ${accent}2e, transparent 70%)` }} />
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

        <div className="relative [perspective:1600px]">
          <div ref={tilt} className="grid transition-transform duration-300 ease-out [transform-style:preserve-3d]">
            {shots.map((s, k) => {
              const isActive = k === active;
              const isNext = many && k === next;
              return (
                <div
                  key={s.label}
                  aria-hidden={!isActive}
                  className="[grid-area:1/1] transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
                  style={{
                    opacity: isActive ? 1 : isNext ? 0.28 : 0,
                    transform: isActive ? 'none' : isNext ? 'translate3d(4%,-6%,-80px) scale(0.9)' : 'translate3d(0,6%,0) scale(0.94)',
                    filter: isActive ? 'none' : 'blur(1px) saturate(0.6)',
                    zIndex: isActive ? 2 : isNext ? 1 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <Screen shot={s} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {many && (
        <div role="tablist" aria-label={`${name} screens`} className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {shots.map((s, k) => (
            <button
              key={s.label}
              role="tab"
              type="button"
              aria-selected={k === active}
              onClick={() => setActive(k)}
              className={`relative shrink-0 overflow-hidden rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                k === active ? 'border-[var(--color-line-strong)] text-[var(--color-text)]' : 'border-[var(--color-line)] hover:text-[var(--color-text)]'
              }`}
            >
              {k === active && !paused && visible && (
                <span aria-hidden key={active} className="absolute inset-y-0 left-0 animate-[progress_4.5s_linear_forwards] bg-white/[0.07]" />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
