import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroStats, profile } from '../data';
import { Tilt } from './effects';
import portrait from '../assets/kestroy-portrait.webp';

// Circular "open to work" stamp that slowly turns at the portrait's corner.
function RotatingBadge() {
  return (
    <div className="absolute -top-6 right-2 grid h-24 w-24 place-items-center rounded-full sm:-right-5 sm:h-28 sm:w-28 border border-[var(--color-line)] bg-[var(--color-bg)]/85 backdrop-blur-md md:-right-8">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]" aria-hidden>
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-[var(--color-text)] font-mono text-[7.4px] uppercase tracking-[0.16em]">
          <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">Open to work · Software Engineer ·</textPath>
        </text>
      </svg>
      <span className="status-dot h-2.5 w-2.5" />
      <span className="sr-only">Open to work</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative px-4 pb-16 pt-28 md:px-6 md:pt-36">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[90vh]" />
      <div aria-hidden className="aurora -top-40 right-[-10%] h-[560px] w-[560px] bg-[var(--color-accent)]/[0.16]" />
      <div aria-hidden className="aurora left-[-15%] top-[30%] h-[420px] w-[420px] bg-[var(--color-cyan)]/[0.08] [animation-delay:-8s]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-7 lg:pt-6">
          <p className="chip mb-8 max-w-full animate-[fadeUp_.7s_ease-out_both] whitespace-normal">
            <span className="status-dot shrink-0" /> {profile.status}
          </p>

          <h1 className="animate-[fadeUp_.8s_.08s_ease-out_both] text-[clamp(2.75rem,7.2vw,5.75rem)] font-medium leading-[0.98]">
            Building <span className="serif aurora-text pr-1">Intelligent</span>
            <br />
            Digital Experiences.
          </h1>

          <p className="mt-7 animate-[fadeUp_.8s_.16s_ease-out_both] font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-[var(--color-text)]/70">
            {profile.title}
          </p>

          <p className="mt-5 max-w-xl animate-[fadeUp_.8s_.22s_ease-out_both] text-lg leading-relaxed">
            I design and develop scalable web applications, intelligent AI-powered solutions, and modern digital products that solve real-world problems.
          </p>

          <div className="mt-9 flex animate-[fadeUp_.8s_.3s_ease-out_both] flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight className="h-4 w-4" />
            </a>
            {profile.cv ? (
              <a href={profile.cv} download className="btn btn-ghost">
                Download CV <Download className="h-4 w-4" />
              </a>
            ) : (
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent('CV request')}`} className="btn btn-ghost">
                Request CV <Mail className="h-4 w-4" />
              </a>
            )}
            <span className="mx-1 hidden h-6 w-px bg-[var(--color-line-strong)] sm:block" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
              <Github className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn" aria-label={`Email ${profile.email}`}>
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-[420px] animate-[fadeUp_1s_.2s_ease-out_both] self-start lg:col-span-5 lg:mr-0">
          {/* accent backlight and offset outline give the portrait depth */}
          <div aria-hidden className="absolute inset-x-8 -bottom-6 top-16 rounded-full bg-[var(--color-accent)]/25 blur-[70px]" />
          <div aria-hidden className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[32px] border border-[var(--color-accent-soft)]/25 transition-transform duration-700 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
          <Tilt max={5} className="rounded-[26px]">
          <figure className="relative overflow-hidden rounded-[26px] bg-[var(--color-surface)] ring-1 ring-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
            <img
              src={portrait}
              alt="Portrait of Kestroy Stephan in a black suit"
              width={800}
              height={1000}
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            />
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_55%,rgba(10,11,16,0.55))]" />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/50 to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-lg font-medium text-[var(--color-text)]">Kestroy Stephan</p>
                <p className="text-sm">Software Engineer</p>
              </div>
              <p className="eyebrow hidden text-right sm:block">{profile.location}</p>
            </figcaption>
          </figure>
          </Tilt>
          <RotatingBadge />
          <div className="absolute -left-4 top-8 hidden animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)]/85 px-4 py-3 backdrop-blur-md sm:block lg:-left-10">
            <p className="eyebrow mb-1">Focus</p>
            <p className="text-sm text-[var(--color-text)]">Python backend · Applied AI</p>
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 border-y border-[var(--color-line)] md:mt-20 md:grid-cols-4">
        {heroStats.map((s, i) => (
          <div key={s.label} className={`px-1 py-6 md:px-6 ${i % 2 ? 'pl-5 md:pl-6' : ''} ${i ? 'md:border-l md:border-[var(--color-line)]' : ''} ${i % 2 ? 'border-l border-[var(--color-line)]' : ''} ${i > 1 ? 'border-t border-[var(--color-line)] md:border-t-0' : ''}`}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-medium tracking-tight text-[var(--color-text)] md:text-4xl">{s.value}</dd>
            <dd className="mt-1 text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>

      <a href="#work" className="relative mx-auto mt-10 hidden w-fit items-center gap-2 text-xs md:flex" aria-label="Scroll to selected work">
        <ArrowDown className="h-3.5 w-3.5" /> Scroll
      </a>
    </section>
  );
}
