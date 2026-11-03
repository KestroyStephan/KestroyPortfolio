import { useState } from 'react';
import { ArrowUpRight, BookOpen, CheckCircle2, Github, Linkedin, Loader2, Mail, PenLine, Phone, Send } from 'lucide-react';
import { profile } from '../data';
import { Reveal } from './effects';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // Messages go to my inbox through FormSubmit, so the visitor stays on the page.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (new FormData(e.currentTarget).get('_honey')) return;
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error('send failed');
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const mailtoFallback = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${formData.name}`)}&body=${encodeURIComponent(
    `${formData.message}\n\n— ${formData.name} (${formData.email})`,
  )}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const input =
    'mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)] px-4 py-3 text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-faint)] transition-colors focus:border-[var(--color-accent-soft)] focus:outline-none';

  const channels = [
    { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email', value: profile.email },
    { href: profile.linkedin, Icon: Linkedin, label: 'LinkedIn', value: 'in/kestroy-stephan' },
    { href: profile.github, Icon: Github, label: 'GitHub', value: profile.githubUser },
    { href: profile.phoneHref, Icon: Phone, label: 'Phone', value: profile.phone },
    ...(profile.researchgate ? [{ href: profile.researchgate, Icon: BookOpen, label: 'ResearchGate', value: 'Publications' }] : []),
    ...(profile.medium ? [{ href: profile.medium, Icon: PenLine, label: 'Medium', value: 'Articles' }] : []),
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-4 pt-24 md:px-6 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute -bottom-60 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/[0.1] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.95]">
            Got a role
            <br />
            or a project? <span className="text-[var(--color-accent-soft)]">Let’s talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            Open to Software Engineer, Python backend and applied AI roles: on-site, hybrid or remote. Available immediately.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-3 break-all text-xl text-[var(--color-text)] underline decoration-[var(--color-line-strong)] underline-offset-8 transition-colors hover:decoration-[var(--color-accent-soft)] md:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.3fr_1fr] [&>*]:min-w-0">
          <Reveal>
            {status === 'sent' ? (
              <div className="card flex h-full flex-col items-start justify-center p-6 md:p-8" role="status">
                <CheckCircle2 className="h-8 w-8 text-[var(--color-ok)]" />
                <h3 className="mt-5 text-2xl font-semibold">Thanks, your message is on its way.</h3>
                <p className="mt-2 text-[15px] leading-relaxed">I read every message and usually reply within a day or two.</p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-ghost mt-6">
                  Send another message
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="card p-6 md:p-8">
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  Name
                  <input name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={input} placeholder="Jane Doe" />
                </label>
                <label className="block text-sm">
                  Email
                  <input name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={input} placeholder="jane@company.com" />
                </label>
              </div>
              <label className="mt-5 block text-sm">
                Message
                <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} className={`${input} resize-none`} placeholder="Tell me about the role or project…" />
              </label>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[var(--color-faint)]" aria-live="polite">
                  {status === 'error' ? (
                    <span className="text-[#f87171]">
                      Couldn’t send just now. Please try again or{' '}
                      <a href={mailtoFallback} className="underline underline-offset-2 hover:text-[var(--color-text)]">
                        email me directly
                      </a>
                      .
                    </span>
                  ) : (
                    'Goes straight to my inbox. I usually reply within a day or two.'
                  )}
                </p>
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:cursor-wait disabled:opacity-70">
                  {status === 'sending' ? (
                    <>
                      Sending <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
            )}
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-4">
            <ul className="card divide-y divide-[var(--color-line)]">
              {channels.map(({ href, Icon, label, value }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <Icon className="h-4 w-4 text-[var(--color-faint)] transition-colors group-hover:text-[var(--color-accent-soft)]" />
                    <span className="w-20 text-sm">{label}</span>
                    <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-text)]">{value}</span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--color-faint)] transition-colors group-hover:text-[var(--color-text)]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="card flex-1 p-6">
              <p className="mb-3 flex items-center gap-2.5 text-sm font-medium text-[var(--color-text)]">
                <span className="status-dot" /> Available for new opportunities
              </p>
              <p className="text-[15px] leading-relaxed">Based in Sri Lanka (GMT+5:30), available to start now and open to on-site, hybrid or remote work.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
