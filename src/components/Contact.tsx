import { useState } from 'react';
import { Mail, Github, Linkedin, Phone, CornerDownLeft } from 'lucide-react';
import { profile } from '../data';
import { Reveal, SectionHeading } from './effects';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // There is no backend, so the form opens the visitor's email app with everything pre-filled.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity for Kestroy — from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const input =
    'w-full border-0 border-b border-[var(--color-line)] bg-transparent px-0 py-2.5 font-mono text-sm text-[var(--color-paper)] placeholder:text-white/25 transition-colors focus:border-[var(--color-acid)] focus:outline-none';

  const channels = [
    { href: `mailto:${profile.email}`, Icon: Mail, label: 'email', value: profile.email },
    { href: profile.phoneHref, Icon: Phone, label: 'phone', value: profile.phone },
    { href: profile.linkedin, Icon: Linkedin, label: 'linkedin', value: 'in/kestroy-stephan' },
    { href: profile.github, Icon: Github, label: 'github', value: 'KestroyStephan' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-4 pb-10 pt-28 md:px-6">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-acid)]/[0.07] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          index="06"
          tag="inference"
          title={
            <>
              Send a prompt,
              <br />
              get a <span className="text-[var(--color-acid)]">reply</span>.
            </>
          }
          intro="Available now for full-time, contract or internship roles in AI/ML, front-end, QA or UI/UX — remote, or on-site abroad with relocation."
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="panel ticks p-6 md:p-8">
              <p className="mb-6 font-mono text-xs text-white/50">
                <span className="text-[var(--color-acid)]">kestroy@lab</span> ~ $ infer --to {profile.email}
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="label">--name</span>
                  <input name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={input} placeholder="Jane Doe" />
                </label>
                <label className="block">
                  <span className="label">--email</span>
                  <input name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={input} placeholder="jane@company.com" />
                </label>
              </div>
              <label className="mt-6 block">
                <span className="label">--prompt</span>
                <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} className={`${input} resize-none`} placeholder="Tell me about the role or project…" />
              </label>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-white/35">opens your email app, ready to send</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[var(--color-acid)] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
                >
                  Run inference <CornerDownLeft className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <ul className="panel divide-y divide-[var(--color-line)]">
              {channels.map(({ href, Icon, label, value }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--color-ink-3)]"
                  >
                    <Icon className="h-4 w-4 text-white/40 group-hover:text-[var(--color-acid)]" />
                    <span className="w-20 font-mono text-xs text-white/40">{label}</span>
                    <span className="truncate text-sm text-[var(--color-paper)]">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="panel p-5">
              <p className="mb-3 flex items-center gap-2 font-mono text-sm font-bold text-[var(--color-acid)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-acid)]" /> AVAILABLE FOR HIRE
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                Based in Sri Lanka (GMT+5:30). Open to work-from-home roles worldwide and to relocating abroad.
              </p>
            </div>
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 font-mono text-[11px] uppercase tracking-wider text-white/35 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Kestroy Stephan — AI/ML Engineer & Front-End Developer</p>
          <p>kestroy.lab v1.0 · React · Three.js · Tailwind</p>
        </footer>
      </div>
    </section>
  );
}
