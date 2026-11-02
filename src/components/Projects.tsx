import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeading, Tilt } from './effects';

const projects = [
  {
    title: 'AI Trip Planner',
    description: 'Intelligent AI-powered trip planning web application with modular frontend architecture, real-time data handling, and AI-assisted itinerary generation.',
    tech: ['Next.js', 'TypeScript', 'React', 'Arcjet', 'Convex'],
    gradient: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/KestroyStephan/AI-Trip-Planner',
    status: 'Active Development',
  },
  {
    title: 'GiftHeaven Website',
    description: 'Full-stack LAMP e-commerce platform with product management, shopping cart, checkout system. Demonstrates CRUD operations, SQL schema design, and form validation.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    gradient: 'from-violet-500 to-purple-500',
    github: 'https://github.com/KestroyStephan/GiftHeaven-Website',
    status: 'Completed',
  },
  {
    title: 'House Price Prediction API',
    description: 'End-to-end regression pipeline with preprocessing and model inference served by FastAPI. Focused on reproducibility and API response validation.',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'ML'],
    gradient: 'from-pink-500 to-rose-500',
    github: 'https://github.com/KestroyStephan/House-Price-Prediction',
    status: 'Deployed',
  },
  {
    title: 'Wine Quality Predictor',
    description: 'Interactive ML web app predicting wine quality from chemical features. Performed EDA, feature selection and served model via Streamlit for visualization.',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'Data Science'],
    gradient: 'from-orange-500 to-amber-500',
    github: 'https://github.com/KestroyStephan/wine-quality-prediction',
    status: 'Completed',
  },
  {
    title: 'AuraFit Mobile App',
    description: 'Fitness/wellness mobile prototype with user authentication, cloud sync, activity tracking, and Firebase backend integration.',
    tech: ['Android Studio', 'Firebase', 'Java', 'Mobile'],
    gradient: 'from-green-500 to-emerald-500',
    github: 'https://github.com/KestroyStephan/AuraFit',
    status: 'Completed',
  },
  {
    title: 'Tea Inventory System',
    description: 'Desktop inventory and reporting system for tea business operations with data models, CRUD interfaces and printable reports for stock management.',
    tech: ['Java', 'NetBeans', 'MySQL', 'Desktop'],
    gradient: 'from-indigo-500 to-blue-500',
    github: 'https://github.com/KestroyStephan/ITBIN-2211-0207',
    status: 'Completed',
  },
  {
    title: 'Eco-Tourer',
    description: 'Research prototype for an AI-assisted sustainable tourism guide with intelligent recommendations and eco-friendly travel planning features.',
    tech: ['JavaScript', 'Web Stack', 'AI'],
    gradient: 'from-teal-500 to-cyan-500',
    github: 'https://github.com/KestroyStephan/Eco-Tourer',
    status: 'Research',
  },
  {
    title: 'Weather Web Application',
    description: 'Client-side weather dashboard using public weather APIs with responsive layout, API requests, and dynamic DOM updates for real-time weather data.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    gradient: 'from-sky-500 to-blue-500',
    github: 'https://github.com/KestroyStephan/Weather-Web-Application',
    status: 'Completed',
  },
  {
    title: 'Predictive Travel Safety Dashboard',
    description: 'Analytic dashboard prototype for predicting travel safety using data science techniques and machine learning models with Jupyter notebooks.',
    tech: ['Python', 'Jupyter', 'Data Analysis', 'ML'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/KestroyStephan/Predictive-Travel-Safety-Dashboard',
    status: 'Prototype',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Experimental recommendation engine exploring collaborative filtering and content-based algorithms for personalized movie suggestions.',
    tech: ['Python', 'Machine Learning', 'Pandas'],
    gradient: 'from-red-500 to-orange-500',
    github: 'https://github.com/KestroyStephan/Movie-Recomondation',
    status: 'Experimental',
  },
  {
    title: 'Fake News Detection',
    description: 'NLP-based classification system for detecting fake news articles using machine learning models and natural language processing techniques.',
    tech: ['Python', 'NLP', 'scikit-learn', 'ML'],
    gradient: 'from-amber-500 to-yellow-500',
    github: 'https://github.com/KestroyStephan/Fake-News-Detection',
    status: 'Research',
  },
];

const statusStyle: Record<string, string> = {
  'Active Development': 'border-emerald-400/40 text-emerald-300',
  Deployed: 'border-sky-400/40 text-sky-300',
  Completed: 'border-violet-400/40 text-violet-300',
};

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 · Work"
          title={
            <>
              Selected <span className="text-gradient">projects</span>
            </>
          }
          intro="Full-stack apps, machine learning models, mobile apps and research prototypes — each one taught me something new."
        />

        <Reveal className="mb-8">
          <Tilt className="rounded-3xl" max={5}>
            <article className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
              <div className={`absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${featured.gradient} opacity-30 blur-3xl`} />
              <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="chip border-cyan-400/40 font-mono text-cyan-300">Featured</span>
                    <span className={`chip ${statusStyle[featured.status] ?? 'border-amber-400/40 text-amber-300'}`}>{featured.status}</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-white md:text-5xl">{featured.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">{featured.description}</p>
                </div>
                <div className="tilt-pop flex flex-col gap-5 md:items-end">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {featured.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition-transform hover:scale-105"
                  >
                    <Github className="h-4 w-4" /> View source
                  </a>
                </div>
              </div>
            </article>
          </Tilt>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <Tilt className="h-full rounded-3xl">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="glass flex h-full flex-col rounded-3xl p-6 transition-colors hover:border-white/20"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${project.gradient} opacity-90 shadow-lg`} />
                    <span className={`chip ${statusStyle[project.status] ?? 'border-amber-400/40 text-amber-300'}`}>{project.status}</span>
                  </div>
                  <h3 className="tilt-pop flex items-center gap-2 text-xl font-semibold text-white">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                  </h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="https://github.com/KestroyStephan"
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-3 rounded-2xl px-7 py-4 font-semibold text-white transition-all hover:scale-105 hover:border-cyan-400/40"
          >
            <Github className="h-5 w-5" />
            See everything on GitHub
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
