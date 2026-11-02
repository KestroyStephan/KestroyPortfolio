// All portfolio content lives here so it can be updated without touching layout code.

export const profile = {
  name: 'Kestroy Stephan',
  email: 'stephankestroy@gmail.com',
  phone: '+94 70 203 6472',
  phoneHref: 'tel:+94702036472',
  github: 'https://github.com/KestroyStephan',
  linkedin: 'https://www.linkedin.com/in/kestroy-stephan/',
  location: 'Sri Lanka · GMT+5:30',
  roles: ['AI/ML Engineer', 'Front-End Developer', 'QA Engineer', 'UI/UX Designer'],
  // Put a PDF at public/Kestroy-Stephan-CV.pdf and set this to '/Kestroy-Stephan-CV.pdf' to show the CV button.
  cv: '',
};

export const modelCard = [
  { key: 'model', value: 'kestroy-stephan · v1.0' },
  { key: 'architecture', value: 'AI/ML × Front-End × QA × UI/UX' },
  { key: 'trained_on', value: 'BSc (Hons) Information Technology — Horizon Campus, 2022–2026' },
  { key: 'status', value: 'Training complete · awaiting graduation ceremony', accent: true },
  { key: 'intended_use', value: 'Graduate / junior roles in AI/ML, front-end, QA or UI/UX' },
  { key: 'deployment', value: 'Remote worldwide · open to relocation' },
  { key: 'languages', value: 'English · Tamil · Sinhala' },
  { key: 'extra_layers', value: 'Leadership — Head Prefect, Executive Faculty Representative' },
];

export const capabilities = [
  { code: 'ML', title: 'AI & Machine Learning', text: 'Data cleaning, feature engineering, scikit-learn models, NLP, served with FastAPI or Streamlit.' },
  { code: 'FE', title: 'Front-End Engineering', text: 'React, Next.js and TypeScript interfaces that are fast and responsive.' },
  { code: 'QA', title: 'Quality Assurance', text: 'Test planning, unit and API testing, CI with GitHub Actions.' },
  { code: 'UX', title: 'UI/UX Design', text: 'Figma prototypes, usability testing and clean visual design.' },
];

export const trainingLog = [
  {
    epoch: '04',
    period: '2026 — now',
    role: 'Graduate — Open to Work',
    org: 'Seeking AI/ML, Front-End, QA or UI/UX roles',
    text: 'Completed all requirements for my BSc (Hons) in Information Technology at Horizon Campus and awaiting graduation. Building AI-powered web apps such as AI Trip Planner (Next.js, TypeScript, Convex). Available immediately for remote positions or international relocation.',
    tags: ['Next.js', 'TypeScript', 'Machine Learning', 'Remote-ready'],
    current: true,
  },
  {
    epoch: '03',
    period: '2023 — 2024',
    role: 'Executive Faculty Representative',
    org: 'Horizon Campus Student Council',
    text: 'Represented the faculty’s students, coordinated academic initiatives and bridged communication between lecturers and students. Led team projects and organised campus events.',
    tags: ['Leadership', 'Stakeholder Communication', 'Event Management'],
  },
  {
    epoch: '02',
    period: '2020 — 2022',
    role: 'Event Coordinator & Poster Designer',
    org: "Let's Play Pool Club, Kotagala",
    text: 'Planned and ran club events, designed promotional material in Canva and managed volunteers.',
    tags: ['Visual Design', 'Canva', 'Event Planning'],
  },
  {
    epoch: '01',
    period: '2019 — 2020',
    role: 'Head Prefect',
    org: 'Cambridge College, Kotagala',
    text: 'Led the prefect body, organised school activities, mentored junior students and liaised between students and administration.',
    tags: ['Leadership', 'Mentoring', 'Organisation'],
  },
];

export const achievements = [
  'School Sports President — Cambridge College',
  'Volunteer — Child Development Forum',
  'Volunteer — Horizon Campus Graduation Ceremony (2023)',
  'Participant — King of the 64 (2024)',
  'Member — Leo Club & Media Club',
];

export type Experiment = {
  id: string;
  title: string;
  kind: string;
  description: string;
  tech: string[];
  github: string;
  status: 'Active Development' | 'Deployed' | 'Completed' | 'Research' | 'Prototype' | 'Experimental';
  // Optional screenshot (import it or put it in /public). Without one, a generated run panel is shown.
  image?: string;
};

export const featured: Experiment[] = [
  {
    id: 'EXP-01',
    title: 'AI Trip Planner',
    kind: 'AI · Full-stack web app',
    description: 'AI-powered trip planning app with a modular front-end architecture, real-time data and AI-assisted itinerary generation.',
    tech: ['Next.js', 'TypeScript', 'React', 'Convex', 'Arcjet'],
    github: 'https://github.com/KestroyStephan/AI-Trip-Planner',
    status: 'Active Development',
  },
  {
    id: 'EXP-02',
    title: 'House Price API',
    kind: 'ML · Regression service',
    description: 'End-to-end regression pipeline — preprocessing, training and model inference served through FastAPI, with a focus on reproducibility and response validation.',
    tech: ['Python', 'scikit-learn', 'FastAPI'],
    github: 'https://github.com/KestroyStephan/House-Price-Prediction',
    status: 'Deployed',
  },
  {
    id: 'EXP-03',
    title: 'Wine Quality',
    kind: 'ML · Interactive app',
    description: 'Predicts wine quality from chemical features. Exploratory data analysis, feature selection and a Streamlit app for visual exploration.',
    tech: ['Python', 'Streamlit', 'scikit-learn', 'EDA'],
    github: 'https://github.com/KestroyStephan/wine-quality-prediction',
    status: 'Completed',
  },
  {
    id: 'EXP-04',
    title: 'AuraFit',
    kind: 'Mobile · Android app',
    description: 'Fitness and wellness app prototype with authentication, cloud sync, activity tracking and a Firebase backend.',
    tech: ['Java', 'Android Studio', 'Firebase'],
    github: 'https://github.com/KestroyStephan/AuraFit',
    status: 'Completed',
  },
];

export const moreExperiments: Experiment[] = [
  { id: 'EXP-05', title: 'Fake News Detection', kind: 'NLP', description: 'NLP classifier that flags fake news articles using machine learning.', tech: ['Python', 'NLP', 'scikit-learn'], github: 'https://github.com/KestroyStephan/Fake-News-Detection', status: 'Research' },
  { id: 'EXP-06', title: 'Movie Recommender', kind: 'RecSys', description: 'Collaborative filtering and content-based recommendations.', tech: ['Python', 'Pandas', 'ML'], github: 'https://github.com/KestroyStephan/Movie-Recomondation', status: 'Experimental' },
  { id: 'EXP-07', title: 'Travel Safety Dashboard', kind: 'Data science', description: 'Predictive dashboard prototype for travel safety built in Jupyter.', tech: ['Python', 'Jupyter', 'ML'], github: 'https://github.com/KestroyStephan/Predictive-Travel-Safety-Dashboard', status: 'Prototype' },
  { id: 'EXP-08', title: 'Eco-Tourer', kind: 'AI research', description: 'AI-assisted sustainable tourism guide with eco-friendly recommendations.', tech: ['JavaScript', 'AI'], github: 'https://github.com/KestroyStephan/Eco-Tourer', status: 'Research' },
  { id: 'EXP-09', title: 'GiftHeaven', kind: 'E-commerce', description: 'LAMP e-commerce site with product management, cart and checkout.', tech: ['PHP', 'MySQL', 'JavaScript'], github: 'https://github.com/KestroyStephan/GiftHeaven-Website', status: 'Completed' },
  { id: 'EXP-10', title: 'Tea Inventory System', kind: 'Desktop', description: 'Inventory and reporting system for tea business operations.', tech: ['Java', 'MySQL'], github: 'https://github.com/KestroyStephan/ITBIN-2211-0207', status: 'Completed' },
  { id: 'EXP-11', title: 'Weather Web App', kind: 'Web', description: 'Responsive weather dashboard using public weather APIs.', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/KestroyStephan/Weather-Web-Application', status: 'Completed' },
];

// Skills presented as a passing test suite.
export const testSuites = [
  { path: 'ml/', name: 'AI & Machine Learning', items: ['scikit-learn', 'pandas', 'Feature Engineering', 'Model Evaluation', 'NLP', 'Streamlit', 'Jupyter'] },
  { path: 'lang/', name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'PHP', 'HTML/CSS'] },
  { path: 'frontend/', name: 'Front-End', items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive UI'] },
  { path: 'backend/', name: 'Backend & Data', items: ['FastAPI', 'Node.js', 'REST APIs', 'MySQL', 'MongoDB', 'Firebase', 'Convex'] },
  { path: 'qa/', name: 'QA & DevOps', items: ['Unit Testing', 'API Testing', 'GitHub Actions', 'CI/CD', 'Docker', 'Jira', 'Git'] },
  { path: 'design/', name: 'Design & UX', items: ['Figma', 'Adobe XD', 'Canva', 'Wireframing', 'Prototyping', 'Usability Testing'] },
  { path: 'soft/', name: 'Soft skills', items: ['Teamwork', 'Leadership', 'Communication', 'Problem Solving', 'Critical Thinking', 'Time Management'] },
];

export const datasets = [
  { name: 'BSc (Hons) Information Technology', source: 'Horizon Campus, Malabe', period: '2022 — 2026', note: 'Completed · awaiting graduation', primary: true },
  { name: 'G.C.E. Advanced Level — Engineering Technology', source: 'CP/N/Cambridge College, Kotagala', period: '2020' },
  { name: 'G.C.E. Ordinary Level', source: 'CP/N/Cambridge College, Kotagala', period: '2017' },
];

export const certifications = [
  { title: 'Diploma in Information Technology (DITEC)', issuer: 'Esoft Metro Campus, Hatton' },
  { title: 'Computer Application Assistant (NVQ Level 3)', issuer: 'Loyola Campus, Hatton' },
  { title: 'Programming in Python: Python for Beginners', issuer: 'Open Learning, University of Moratuwa' },
  { title: 'Web Design for Beginners', issuer: 'Open Learning, University of Moratuwa' },
  { title: 'Pandas · Intro to Machine Learning · Data Cleaning', issuer: 'Kaggle' },
  { title: 'Community-Based Eco Tourism', issuer: 'University Ramon Llull' },
];
