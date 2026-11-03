// The K + code-tag mark. Drawn as plain shapes so it stays sharp at any size.
export function LogoMark({ className = 'h-8 w-8', withTag = false }: { className?: string; withTag?: boolean }) {
  return (
    <svg viewBox={withTag ? '0 0 92 64' : '0 0 56 64'} className={className} aria-hidden>
      <path d="M5 52 L14 12 H23 L14 52 Z" fill="#e6ecf5" />
      <path d="M14.5 38 L42 12 H53 L16.5 46 Z" fill="#1677ff" />
      <path d="M21 37 L29 31 L43 52 H33 Z" fill="#aab8cc" />
      {withTag && (
        <g fill="none" stroke="#00d4ff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M64 30 L57 36 L64 42" />
          <path d="M74 27 L69 45" />
          <path d="M79 30 L86 36 L79 42" />
        </g>
      )}
    </svg>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} aria-label="Kestroy Stephan, back to top" className="flex items-center gap-2.5 font-display text-[15px] font-semibold tracking-tight text-[var(--color-text)]">
      <LogoMark withTag className="h-7 w-auto" />
      Kestroy Stephan
    </a>
  );
}
