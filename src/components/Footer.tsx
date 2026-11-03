import { LogoMark } from './Logo';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#case-studies', label: 'Case studies' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-24 md:px-6 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-t border-[var(--color-line)] pt-12 md:grid-cols-[1.4fr_1fr_auto]">
          <div>
            <p className="flex items-center gap-3 text-[var(--color-text)]">
              <LogoMark withTag className="h-8 w-auto" />
              <span className="font-display text-lg font-semibold">Kestroy Stephan</span>
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed">Software Engineer building full-stack products and AI automation. Based in Sri Lanka, working with teams anywhere.</p>
            <div className="mt-6 flex gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn h-10 w-10" aria-label="GitHub profile">
                <Github className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn h-10 w-10" aria-label="LinkedIn profile">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn h-10 w-10" aria-label="Send an email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Sitemap</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[15px]">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-[var(--color-text)]">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#top" className="icon-btn self-start" aria-label="Back to top">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-sm text-[var(--color-faint)] md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Kestroy Stephan. All rights reserved.</p>
          <p>Designed and built by Kestroy · React, TypeScript, Tailwind</p>
        </div>

        <p aria-hidden className="pointer-events-none mt-10 select-none text-center text-[clamp(3rem,15vw,12rem)] font-semibold leading-none tracking-[-0.06em] text-white/[0.035]">
          KESTROY
        </p>
      </div>
    </footer>
  );
}
