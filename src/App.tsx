import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-ink)] text-slate-200">
      {/* subtle noise-free backdrop gradient for the whole page */}
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.06),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.08),transparent_50%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
