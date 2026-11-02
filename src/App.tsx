import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { CaseStudies } from './components/CaseStudies';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { GitHubActivity } from './components/GitHubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/effects';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)]">
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-text)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-bg)]">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <CaseStudies />
        <Expertise />
        <Experience />
        <About />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
