import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#model', label: 'Model' },
  { href: '#log', label: 'Log' },
  { href: '#experiments', label: 'Experiments' },
  { href: '#tests', label: 'Tests' },
  { href: '#data', label: 'Data' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-7xl items-center justify-between border px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'border-[var(--color-line)] bg-[var(--color-ink)]/80 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center bg-[var(--color-acid)] font-mono text-xs font-bold text-[var(--color-ink)]">KS</span>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--color-paper)]">KESTROY.LAB</span>
          <span className="hidden border border-[var(--color-line)] px-1.5 py-0.5 font-mono text-[10px] text-white/50 sm:inline">v1.0</span>
        </a>

        <ul className="hidden items-center md:flex">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="group px-3 py-2 font-mono text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-[var(--color-paper)]">
                <span className="text-[var(--color-acid)]/70 group-hover:text-[var(--color-acid)]">0{i + 1}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 border border-[var(--color-acid)]/30 bg-[var(--color-acid)]/5 px-2.5 py-1 font-mono text-[11px] text-[var(--color-acid)] lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-acid)]" />
            status: available
          </span>
          <a
            href="#contact"
            className="hidden bg-[var(--color-paper)] px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] transition-colors hover:bg-[var(--color-acid)] sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 text-[var(--color-paper)] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="panel mx-auto mt-2 max-w-7xl p-2 md:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l, i) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 font-mono text-sm uppercase tracking-wider text-white/80">
                <span className="text-[var(--color-acid)]">0{i + 1}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
