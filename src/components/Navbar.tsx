import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'case-studies', label: 'Case studies' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
];

export function Navbar() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // The active link is whichever section crosses the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    ['top', ...links.map((l) => l.id), 'github', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const el = listRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    setPill((p) => (el ? { left: el.offsetLeft, width: el.offsetWidth } : { ...p, width: 0 }));
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-3 pl-5 transition-colors duration-300 ${
          scrolled || open ? 'border-[var(--color-line)] bg-[var(--color-bg)]/80 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--color-text)]" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--color-text)] text-[11px] font-bold text-[var(--color-bg)]">KS</span>
          Kestroy Stephan
        </a>

        <ul ref={listRef} className="relative hidden items-center lg:flex">
          <span
            aria-hidden
            className="absolute inset-y-0 rounded-full bg-white/[0.06] transition-all duration-300 ease-out"
            style={{ left: pill.left, width: pill.width, opacity: pill.width ? 1 : 0 }}
          />
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${active === l.id ? 'text-[var(--color-text)]' : 'hover:text-[var(--color-text)]'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden h-9 px-4 text-[13px] sm:inline-flex">
            Let’s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--color-text)] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg)]/95 p-3 backdrop-blur-xl lg:hidden">
          <ul>
            {[...links, { id: 'contact', label: 'Contact' }].map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3.5 text-lg ${active === l.id ? 'bg-white/[0.05] text-[var(--color-text)]' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
