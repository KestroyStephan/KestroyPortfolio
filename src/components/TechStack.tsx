import { Code2, Database, Cloud, Layers, Palette, Brain } from 'lucide-react';

const techCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    technologies: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    technologies: ['scikit-learn', 'pandas', 'Feature Engineering', 'Model Evaluation', 'Streamlit', 'NLP'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Frontend Development',
    icon: Layers,
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Component Design', 'Responsive UI'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'QA & DevOps',
    icon: Cloud,
    technologies: ['Jira', 'GitHub', 'GitHub Actions', 'Docker', 'CI/CD', 'Unit Testing'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Design & UX',
    icon: Palette,
    technologies: ['Figma', 'Adobe XD', 'Canva', 'Usability Testing', 'UI/UX Design'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Databases & Backend',
    icon: Database,
    technologies: ['MongoDB', 'MySQL', 'FastAPI', 'Node.js', 'REST APIs'],
    gradient: 'from-indigo-500 to-blue-500',
  },
];

const certifications = [
  {
    title: 'Programming in Python',
    issuer: 'University of Moratuwa',
    category: 'Development',
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    category: 'Design',
  },
  {
    title: 'Pandas, Intro to ML, Data Cleaning',
    issuer: 'Kaggle',
    category: 'Data Science',
  },
  {
    title: 'Community-Based Eco Tourism',
    issuer: 'University Ramon Llull',
    category: 'Professional',
  },
  {
    title: 'Diploma in IT (DITEC)',
    issuer: 'Esoft Metro Campus',
    category: 'Education',
  },
  {
    title: 'Computer Application Assistant (NVQ Level 3)',
    issuer: 'Loyola Campus',
    category: 'Technical',
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Tech Stack & Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}
                />
                <div className="relative p-8 bg-gray-900 rounded-2xl border border-gray-800">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative p-8 bg-gray-900 rounded-2xl border border-gray-800">
            <h3 className="text-3xl mb-8 text-center bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Certifications & Qualifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                    <span className="text-xs text-gray-500">{cert.category}</span>
                  </div>
                  <h4 className="text-cyan-400 mb-1">{cert.title}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/20">
          <h3 className="text-2xl mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Teamwork', 'Leadership', 'Critical Thinking', 'Problem Solving', 'Communication', 'Creativity', 'Time Management'].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-gray-300 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}