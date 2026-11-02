import { useState } from 'react';
import { Mail, Send, Github, Linkedin, Phone, MapPin, Plane } from 'lucide-react';
import { Reveal, SectionHeading } from './effects';

const EMAIL = 'stephankestroy@gmail.com';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // There is no backend, so the form opens the visitor's email app with everything pre-filled.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity for Kestroy — from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-cyan-400/60 focus:outline-none focus:ring-4 focus:ring-cyan-400/10';

  return (
    <section id="contact" className="relative px-4 pb-12 pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 · Contact"
          title={
            <>
              Let's build something <span className="text-gradient">great together.</span>
            </>
          }
          intro="I'm available now for full-time, contract or internship roles in AI/ML, front-end development, QA or UI/UX — remote, or on-site abroad with relocation."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-4">
            {[
              { href: `mailto:${EMAIL}`, Icon: Mail, label: 'Email', value: EMAIL },
              { href: 'tel:+94702036472', Icon: Phone, label: 'Phone', value: '+94 70 203 6472' },
            ].map(({ href, Icon, label, value }) => (
              <a key={label} href={href} className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan-400/40">
                <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 p-3 text-slate-950 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">{label}</p>
                  <p className="truncate font-medium text-white">{value}</p>
                </div>
              </a>
            ))}

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/KestroyStephan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center justify-center gap-2 rounded-2xl p-5 text-white transition-colors hover:border-cyan-400/40"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kestroy-stephan/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center justify-center gap-2 rounded-2xl p-5 text-white transition-colors hover:border-cyan-400/40"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 text-fuchsia-300" />
                <h3 className="font-semibold">Based in Sri Lanka</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Working hours flexible for teams in Europe, the Middle East, Asia-Pacific and North America.
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                <Plane className="h-4 w-4 text-cyan-300" /> Open to relocation and work-from-home roles
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass space-y-5 rounded-3xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-400">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-400">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-400">Message</label>
                <textarea id="message" name="message" rows={6} required value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell me about the role or project…" />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-4 font-semibold text-slate-950 shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.02]"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" /> Send message
              </button>
              <p className="text-center text-xs text-slate-500">Opens your email app with the message ready to send.</p>
            </form>
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Kestroy Stephan · AI/ML Engineer & Front-End Developer</p>
          <p>Built with React, Three.js & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
}
