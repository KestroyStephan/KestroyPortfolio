import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
}