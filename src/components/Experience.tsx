import { Briefcase, Award, Users } from 'lucide-react';

const experiences = [
  {
    role: 'Executive Faculty Representative',
    company: 'Horizon Campus Student Council',
    period: '2023/24',
    description: 'Represented student interests, coordinated academic initiatives, and facilitated communication between faculty and students. Led team projects and organized campus events.',
    skills: ['Leadership', 'Communication', 'Event Management', 'Teamwork'],
    icon: Users,
  },
  {
    role: 'Event Coordinator & Poster Designer',
    company: "Let's Play Pool Club, Kotagala",
    period: '2020 - 2022',
    description: 'Coordinated club events, designed promotional materials using Canva and design tools, and managed volunteers. Strengthened stakeholder communication and visual design skills.',
    skills: ['Design', 'Canva', 'Event Planning', 'Volunteer Management'],
    icon: Briefcase,
  },
  {
    role: 'Head Prefect',
    company: 'Cambridge College',
    period: '2019 - 2020',
    description: 'Led student body, organized school activities, mentored junior students, and served as liaison between students and administration. Demonstrated strong leadership and problem-solving abilities.',
    skills: ['Leadership', 'Mentoring', 'Organization', 'Problem Solving'],
    icon: Award,
  },
];

const achievements = [
  'School Sports President - Cambridge College',
  'Volunteer - Child Development Forum',
  'Volunteer - Horizon Campus Graduation Ceremony (2023)',
  'Participant - King of the 64 (2024)',
  'Member - Leo Club & Media Club',
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Experience & Leadership
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-violet-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2" />
                  
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 border-4 border-gray-950">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 animate-ping opacity-50" />
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="group relative inline-block w-full">
                      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-6 bg-gray-900 rounded-xl border border-gray-800">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <div className="flex-grow">
                            <h3 className="text-xl text-cyan-400 mb-1">
                              {exp.role}
                            </h3>
                            <p className="text-violet-400">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-3">
                          {exp.period}
                        </p>
                        
                        <p className="text-gray-300 mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20">
          <h3 className="text-2xl mb-6 text-center">Achievements & Activities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}