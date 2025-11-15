import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'KESTROY STEPHAN';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedName(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl tracking-wider mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent min-h-[120px] flex items-center justify-center">
            {displayedName}
            <span className="animate-pulse">|</span>
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 blur-3xl -z-10" />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl text-gray-300">
            AI/ML Engineer · Front End Developer · QA · UI/UX
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            BSc IT Undergraduate  | Passionate about AI, Machine Learning & User-Centered Design
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://github.com/KestroyStephan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all duration-300 hover:scale-110 border border-cyan-500/30"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kestroy-stephan/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all duration-300 hover:scale-110 border border-cyan-500/30"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="stephankestroy@gmail.com"
            className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 transition-all duration-300 hover:scale-110 border border-cyan-500/30"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-12 animate-bounce inline-block"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </div>
    </section>
  );
}