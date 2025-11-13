import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Horizon Campus',
    location: 'Malabe, Sri Lanka',
    period: '2022 - Present',
    status: 'In Progress',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    degree: 'G.C.E Advanced Level',
    institution: 'CP/N/Cambridge College',
    location: 'Kotagala, Sri Lanka',
    period: '2020',
    status: 'Engineering Technology Stream',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    degree: 'G.C.E Ordinary Level',
    institution: 'CP/N/Cambridge College',
    location: 'Kotagala, Sri Lanka',
    period: '2017',
    status: 'Completed',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${edu.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}
              />
              <div className="relative h-full p-6 bg-gray-900 rounded-2xl border border-gray-800 flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center mb-4`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg mb-2 text-cyan-400">
                  {edu.degree}
                </h3>
                
                <p className="text-violet-400 mb-1">
                  {edu.institution}
                </p>
                
                <p className="text-sm text-gray-500 mb-2">
                  {edu.location}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{edu.period}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300">
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl">Professional Development</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                  <div>
                    <p className="text-gray-300">Community-Based Eco Tourism</p>
                    <p className="text-sm text-gray-500">University Ramon Llull</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                  <div>
                    <p className="text-gray-300">Diploma in Information Technology (DITEC)</p>
                    <p className="text-sm text-gray-500">Esoft Metro Campus, Hatton</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2" />
                  <div>
                    <p className="text-gray-300">Computer Application Assistant (NVQ Level 3)</p>
                    <p className="text-sm text-gray-500">Loyola Campus, Hatton</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative p-6 bg-gray-900 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-green-400" />
                <h3 className="text-xl">Online Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2" />
                  <div>
                    <p className="text-gray-300">Programming in Python: Python for Beginners</p>
                    <p className="text-sm text-gray-500">Open Learning, University of Moratuwa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2" />
                  <div>
                    <p className="text-gray-300">Web Design for Beginners</p>
                    <p className="text-sm text-gray-500">Open Learning, University of Moratuwa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2" />
                  <div>
                    <p className="text-gray-300">Pandas, Intro to ML, Data Cleaning</p>
                    <p className="text-sm text-gray-500">Kaggle Certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
