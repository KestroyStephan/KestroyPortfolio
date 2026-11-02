import { allTools, toolGroups, type Tool } from '../tools';
import { Reveal } from './effects';

// Brand marks that are near-black would vanish on the dark page, so those are drawn in the text colour.
function brandColor(hex: string) {
  const n = parseInt(hex, 16);
  const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum < 0.28 ? 'var(--color-text)' : `#${hex}`;
}

function Logo({ tool, className = 'h-5 w-5' }: { tool: Tool; className?: string }) {
  const icon = tool.icon;
  if ('path' in icon) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill={brandColor(icon.hex)} aria-hidden>
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className={className} style={{ color: tool.color }} aria-hidden />;
}

// Every tool on one continuously scrolling strip, then the same tools grouped as tiles.
export function Toolbox() {
  const strip = [...allTools, ...allTools];
  return (
    <div className="mt-20">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Toolbox</p>
          <h3 className="text-3xl font-medium md:text-4xl">
            Tools I use day to day
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed">Including the AI assistants and design tools I lean on while I work.</p>
      </Reveal>

      <div className="relative -mx-4 mb-10 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] md:mx-0">
        <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]" aria-hidden>
          {strip.map((tool, i) => (
            <li key={`${tool.name}-${i}`} className="flex items-center gap-2.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-text)]/85">
              <Logo tool={tool} className="h-4 w-4" />
              {tool.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {toolGroups.map((g, gi) => (
          <Reveal key={g.group} delay={(gi % 2) * 80} className={gi === toolGroups.length - 1 && toolGroups.length % 2 ? 'md:col-span-2' : ''}>
            <div className="card h-full p-5 md:p-6">
              <p className="eyebrow mb-4">{g.group}</p>
              <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4" aria-label={g.group}>
                {g.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)]/60 px-2 py-3.5 text-center transition-all duration-300 [transform:perspective(600px)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:[transform:perspective(600px)_rotateX(8deg)] hover:shadow-[0_16px_30px_-16px_rgba(0,0,0,0.9)]"
                  >
                    <Logo tool={tool} className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[11.5px] leading-tight text-[var(--color-text)]/80">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
