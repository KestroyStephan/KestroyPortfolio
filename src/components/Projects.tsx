import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

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

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Active Development':
        return 'bg-green-500/10 border border-green-500/30 text-green-400';
      case 'Deployed':
        return 'bg-blue-500/10 border border-blue-500/30 text-blue-400';
      case 'Research':
      case 'Prototype':
      case 'Experimental':
        return 'bg-amber-500/10 border border-amber-500/30 text-amber-400';
      default:
        return 'bg-violet-500/10 border border-violet-500/30 text-violet-400';
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Projects
        </h2>
        
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A collection of full-stack applications, machine learning models, mobile apps, and research prototypes 
          showcasing diverse technical skills and problem-solving approaches.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
              />
              <div className="relative p-6 bg-gray-900 rounded-2xl border border-gray-800 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <span className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/KestroyStephan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-cyan-500/20">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Active Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Deployed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500"></div>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span>Research/Experimental</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
