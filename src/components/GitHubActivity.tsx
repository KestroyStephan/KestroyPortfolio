import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { fallbackRepos, profile } from '../data';
import { Reveal, SectionHeading, trackGlow } from './effects';

type Repo = { name: string; description: string | null; language: string | null; html_url: string; pushed_at?: string; stargazers_count?: number; fork?: boolean };
type Stats = { repos: Repo[]; publicRepos?: number; followers?: number; languages: [string, number][] };

const langColors: Record<string, string> = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Dart: '#00B4AB', Java: '#b07219', PHP: '#4F5D95',
  HTML: '#e34c26', CSS: '#663399', 'Jupyter Notebook': '#DA5B0B', Kotlin: '#A97BFF', 'C#': '#178600',
};

const CACHE_KEY = 'gh-activity-v1';

function countLanguages(repos: Repo[]) {
  const counts = new Map<string, number>();
  repos.forEach((r) => r.language && counts.set(r.language, (counts.get(r.language) ?? 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
}

function timeAgo(iso?: string) {
  if (!iso) return '';
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

async function loadStats(): Promise<Stats> {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
  } catch { /* storage unavailable */ }

  const base = `https://api.github.com/users/${profile.githubUser}`;
  const [user, repos] = await Promise.all([
    fetch(base).then((r) => (r.ok ? r.json() : Promise.reject())),
    fetch(`${base}/repos?sort=pushed&per_page=100`).then((r) => (r.ok ? r.json() : Promise.reject())),
  ]);
  const own = (repos as Repo[]).filter((r) => !r.fork);
  const stats: Stats = { repos: own.slice(0, 6), publicRepos: user.public_repos, followers: user.followers, languages: countLanguages(own) };
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(stats));
  } catch { /* storage unavailable */ }
  return stats;
}

export function GitHubActivity() {
  const [stats, setStats] = useState<Stats>({ repos: fallbackRepos, languages: countLanguages(fallbackRepos) });

  useEffect(() => {
    let alive = true;
    loadStats()
      .then((s) => alive && setStats(s))
      .catch(() => { /* keep the fallback list */ });
    return () => {
      alive = false;
    };
  }, []);

  const total = stats.languages.reduce((n, [, c]) => n + c, 0) || 1;

  return (
    <section id="github" className="relative px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="07"
          eyebrow="GitHub activity"
          title={
            <>
              Recent commits.
            </>
          }
          intro="Live from my public GitHub: the repositories I’ve worked on most recently and the languages they use."
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <div className="card flex h-full flex-col p-6">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--color-text)] hover:underline">
                <Github className="h-5 w-5" /> @{profile.githubUser}
              </a>
              {stats.publicRepos !== undefined && (
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-4xl font-medium tracking-tight text-[var(--color-text)]">{stats.publicRepos}</p>
                    <p className="text-sm">public repositories</p>
                  </div>
                  <div>
                    <p className="text-4xl font-medium tracking-tight text-[var(--color-text)]">{stats.followers}</p>
                    <p className="text-sm">followers</p>
                  </div>
                </div>
              )}
              <div className="mt-auto pt-10">
                <p className="eyebrow mb-3">Languages across repositories</p>
                <div className="flex h-2 overflow-hidden rounded-full bg-[var(--color-surface-2)]" aria-hidden>
                  {stats.languages.map(([l, c]) => (
                    <span key={l} style={{ width: `${(c / total) * 100}%`, background: langColors[l] ?? '#8b91a3' }} />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {stats.languages.map(([l, c]) => (
                    <li key={l} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: langColors[l] ?? '#8b91a3' }} />
                      {l} <span className="text-[var(--color-faint)]">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {stats.repos.map((r, i) => (
              <Reveal as="li" key={r.name} delay={(i % 2) * 60}>
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerMove={trackGlow}
                  className="card card-glow group flex h-full flex-col p-5 transition-colors hover:border-[var(--color-line-strong)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="break-all font-mono text-sm text-[var(--color-text)]">{r.name}</p>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-faint)] transition-colors group-hover:text-[var(--color-text)]" />
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed">{r.description ?? 'No description yet.'}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-faint)]">
                    {r.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full" style={{ background: langColors[r.language] ?? '#8b91a3' }} />
                        {r.language}
                      </span>
                    )}
                    {!!r.stargazers_count && (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" /> {r.stargazers_count}
                      </span>
                    )}
                    {r.pushed_at && <span>Updated {timeAgo(r.pushed_at)}</span>}
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
