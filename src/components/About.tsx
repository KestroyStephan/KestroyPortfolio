import { Code2, Sparkles, Rocket, GraduationCap, Users, Award } from 'lucide-react';
import kestroyImg from '../assets/kestroy.png';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/50 via-violet-500/50 to-pink-500/50 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img src={kestroyImg} alt="Kestroy" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a motivated IT undergraduate at <span className="text-cyan-400">Horizon Campus</span>, seeking opportunities in AI/Machine Learning, 
              Front-end Development, QA, or UI/UX. I'm passionate about delivering reliable, user-centered digital products 
              that make a real impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With strong technical skills in Python, ML pipelines, React/Next.js, automated testing, and design tools like 
              Figma and Canva, I bring a unique blend of technical expertise and creative problem-solving. I've developed 
              machine learning models, created interactive data visualizations, and designed responsive user interfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a proven leader and team player, I've served as <span className="text-violet-400">Head Prefect</span>, 
              <span className="text-violet-400"> Executive Faculty Representative</span>, and coordinated various campus 
              projects, demonstrating strong collaboration and communication skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20">
                <GraduationCap className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="mb-2">Continuous Learner</h3>
                <p className="text-sm text-gray-400">
                  Always expanding knowledge through certifications and projects
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/20">
                <Users className="w-8 h-8 text-violet-400 mb-3" />
                <h3 className="mb-2">Team Leader</h3>
                <p className="text-sm text-gray-400">
                  Proven leadership in academic and extracurricular settings
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20">
                <Award className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="mb-2">Multi-talented</h3>
                <p className="text-sm text-gray-400">
                  AI/ML, Full Stack, QA, and UI/UX expertise
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-3">Languages</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300">English</span>
                <span className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300">Tamil</span>
                <span className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300">Sinhala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}