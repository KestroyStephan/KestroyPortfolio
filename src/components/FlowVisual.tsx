// A product's workflow drawn as connected steps, used where there are no public screenshots.
export function FlowVisual({ steps, accent, compact = false }: { steps: string[]; accent: string; compact?: boolean }) {
  return (
    <ol className={`grid w-full ${compact ? 'grid-cols-2 gap-2' : 'grid-cols-2 gap-3 sm:grid-cols-3'}`}>
      {steps.map((s, i) => (
        <li
          key={s}
          className={`relative flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)] ${compact ? 'px-3 py-2.5 text-xs' : 'px-4 py-3.5 text-sm'} text-[var(--color-text)]/85`}
        >
          <span
            className="grid h-5 w-5 shrink-0 place-items-center rounded-full font-mono text-[10px]"
            style={{ background: `${accent}22`, color: accent }}
          >
            {i + 1}
          </span>
          {s}
        </li>
      ))}
    </ol>
  );
}
