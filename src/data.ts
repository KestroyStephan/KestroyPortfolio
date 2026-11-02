// All portfolio content lives here so it can be updated without touching layout code.
import ceyloAdminSos from './assets/projects/ceylo-admin-sos.webp';
import ceyloAdminAi from './assets/projects/ceylo-admin-ai.webp';
import weeklyLogin from './assets/projects/weekly-login.webp';
import ahDashboard from './assets/projects/ah-dashboard.webp';
import ahOnboarding from './assets/projects/ah-onboarding.webp';
import ahPayroll from './assets/projects/ah-payroll.webp';
import shHome from './assets/projects/sh-home.webp';
import shBox from './assets/projects/sh-box.webp';
import shTracking from './assets/projects/sh-tracking.webp';
import shAdmin from './assets/projects/sh-admin.webp';
import shInventory from './assets/projects/sh-inventory.webp';
import ghHome from './assets/projects/gh-home.webp';
import ghShop from './assets/projects/gh-shop.webp';
import ghProduct from './assets/projects/gh-product.webp';
import rypHome from './assets/projects/ryp-home.webp';
import thesisPhoto from './assets/thesis.webp';
import ceyloMConcierge from './assets/projects/ceylo-m-concierge.webp';
import ceyloMItinerary from './assets/projects/ceylo-m-itinerary.webp';
import ceyloMTailor from './assets/projects/ceylo-m-tailor.webp';
import ceyloMExplore from './assets/projects/ceylo-m-explore.webp';
import ceyloMGuides from './assets/projects/ceylo-m-guides.webp';
import ceyloMBooking from './assets/projects/ceylo-m-booking.webp';
import ceyloMMarket from './assets/projects/ceylo-m-market.webp';
import ceyloMPassport from './assets/projects/ceylo-m-passport.webp';
import ceyloMSos from './assets/projects/ceylo-m-sos.webp';
import shoppeeHome from './assets/projects/shoppee-home.webp';
import weatherApp from './assets/projects/weather-app.webp';
import housePrice from './assets/projects/house-price.webp';
import fakeMessage from './assets/projects/fake-message.webp';
import wineQuality from './assets/projects/wine-quality.webp';
import tripPlanner from './assets/projects/trip-planner.webp';
import teaInventory from './assets/projects/tea-inventory.webp';
import videoGenerator from './assets/projects/video-generator.webp';
import aerosafe from './assets/projects/aerosafe.webp';
import invoiceGenerator from './assets/projects/invoice-generator.webp';
import aurafit from './assets/projects/aurafit.webp';

export const profile = {
  name: 'Kestroy Stephan',
  title: 'Software Engineer | Full-Stack Developer | AI & Automation Enthusiast',
  email: 'stephankestroy@gmail.com',
  phone: '+94 70 203 6472',
  phoneHref: 'tel:+94702036472',
  github: 'https://github.com/KestroyStephan',
  githubUser: 'KestroyStephan',
  linkedin: 'https://www.linkedin.com/in/kestroy-stephan/',
  // Leave empty to hide the link everywhere it appears.
  researchgate: 'https://www.researchgate.net/profile/Kestroy-Stephan',
  medium: 'https://medium.com/@stephankestroy',
  location: 'Sri Lanka · GMT+5:30',
  status: 'Open to work · Available immediately',
  focus: 'Software Engineering · Python Backend · Applied AI',
  // Put a PDF at public/Kestroy-Stephan-CV.pdf and set this to '/Kestroy-Stephan-CV.pdf' to turn on the Download CV button.
  cv: '',
};

export const heroStats = [
  { value: '7', label: 'AI agents shipped in AgenticHR' },
  { value: '3', label: 'company projects delivered in 2026' },
  { value: '171', label: 'automated tests in CEYLO' },
  { value: '3', label: 'languages supported by CEYLO' },
];

export type Shot = { src: string; alt: string; label: string; frame?: 'browser' | 'raw' };

// A flat phone screen, drawn inside a CSS device frame.
export type Screen = { src: string; alt: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  // Real screens. 'browser' draws window chrome around the shot; 'raw' shows it as is.
  shots?: Shot[];
  // Mobile app screens, shown in a 3D phone carousel.
  phones?: Screen[];
  // Shown instead of screenshots when a product is private or has no public UI.
  flow?: string[];
  links: { label: string; href: string; kind: 'github' | 'live' | 'product' }[];
  accent: string;
};

export const ceylo: CaseStudy = {
  slug: 'ceylo',
  name: 'CEYLO',
  category: 'AI tourism platform · Final-year project',
  year: '2025 — 2026',
  summary:
    'An intelligent, sustainable tourism platform for Sri Lanka: a React Native app for travellers and local vendors, and a React admin portal that runs the whole operation.',
  problem:
    'Travellers in Sri Lanka juggle separate apps to plan trips, find trustworthy local guides and stay safe, often with weak connectivity outside the cities. Sustainability rarely factors into what they are recommended.',
  solution:
    'One platform that plans itineraries with an AI concierge, ranks places with an eco-scorer, connects travellers to verified vendors and guides, and keeps SOS working offline, syncing the moment signal returns.',
  features: [
    'AI Concierge that builds day-by-day itineraries from a chat',
    'Eco-Scorer that weights sustainability at 70% of a recommendation',
    'Offline SOS with a priority sync queue and offline maps',
    'Vendor portal: bookings, revenue, trust score and proof of service',
    'Admin console: vendor and guide verification, cultural events, live SOS monitor',
    'Fully localised in English, Sinhala and Tamil',
  ],
  role: 'Full-Stack & AI Engineer in a team of three. I built across the mobile app, the web admin portal and the AI models.',
  stack: ['React Native', 'Expo', 'React', 'Vite', 'Firebase', 'Firestore', 'TensorFlow Lite', 'Google Maps'],
  metrics: [
    { value: '5', label: 'AI models trained' },
    { value: '171', label: 'automated tests' },
    { value: '498', label: 'concurrent users, p99 < 1.5 s' },
    { value: '17 KB', label: 'offline recommender model' },
  ],
  phones: [
    { src: ceyloMConcierge, alt: 'CEYLO AI Concierge chat planning a three-day trip to Kandy', label: 'AI Concierge' },
    { src: ceyloMItinerary, alt: 'Generated five-day itinerary with eco scores and carbon score', label: 'Itinerary' },
    { src: ceyloMTailor, alt: 'Tailor Your Journey form with trip focus, dates, days and budget', label: 'Trip planner' },
    { src: ceyloMExplore, alt: 'Hidden gems and nearby heritage places in Kandy', label: 'Explore' },
    { src: ceyloMGuides, alt: 'Local Guides list for finding a certified eco-expert', label: 'Local guides' },
    { src: ceyloMBooking, alt: 'Booking status screen showing the guide approved the request', label: 'Booking' },
    { src: ceyloMMarket, alt: 'Marketplace of eco-friendly local tea and handicraft products', label: 'Marketplace' },
    { src: ceyloMPassport, alt: 'Traveller profile with eco points and eco passport', label: 'Eco passport' },
    { src: ceyloMSos, alt: 'Emergency Support screen tracking an SOS alert', label: 'Offline SOS' },
  ],
  shots: [
    { src: ceyloAdminSos, alt: 'CEYLO admin portal live SOS monitor with map', label: 'SOS monitor', frame: 'browser' },
    { src: ceyloAdminAi, alt: 'CEYLO admin AI Center with model metrics', label: 'AI Center', frame: 'browser' },
  ],
  links: [
    { label: 'Source', href: 'https://github.com/KestroyStephan/CEYLO', kind: 'github' },
    { label: 'Admin portal', href: 'https://ceylo-theta.vercel.app', kind: 'live' },
  ],
  accent: '#34d399',
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'agentichr',
    name: 'AgenticHR',
    category: 'AI hiring platform · Xaltrix product',
    year: '2026',
    summary: 'An AI-driven recruitment and HR platform, released by Xaltrix as Aura (Agentic HR). It takes a role from job description to onboarding.',
    problem:
      'Hiring teams lose most of their week to repetitive steps: writing job posts, screening CVs, scheduling interviews across calendars and chasing paperwork.',
    solution:
      'A set of AI agents that automate each stage of the hiring pipeline while HR stays in control of every decision, with interviews, offers, leave and payroll in the same product.',
    features: [
      'Seven AI agents: JD generation, LinkedIn posting, resume parsing, ranking, video-interview analysis, hiring decision support, onboarding',
      'Interview scheduling across Zoom, Jitsi and Outlook',
      'Offers with e-signature, plus leave and payroll modules',
      'Role-based access control and OAuth 2.0 sign-in',
      'Self-hosted LLaMA 3 via Ollama, with cloud model fallbacks',
    ],
    role: 'Built end to end: Flutter app for web, Android and iOS, FastAPI backend, 40-table PostgreSQL schema and deployments. Phase 1 shipped in April 2026.',
    stack: ['Flutter', 'Dart', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Ollama', 'Docker', 'Azure'],
    flow: ['Job requisition', 'AI job post', 'Sourcing', 'AI screening', 'AI interview', 'Offer & onboarding'],
    shots: [
      { src: ahDashboard, alt: 'AgenticHR HR dashboard with workforce analytics', label: 'HR dashboard', frame: 'browser' },
      { src: ahOnboarding, alt: 'AgenticHR onboarding funnel and onboarding by department', label: 'Onboarding', frame: 'browser' },
      { src: ahPayroll, alt: 'AgenticHR payroll configuration for allowances and deductions', label: 'Payroll setup', frame: 'browser' },
    ],
    links: [{ label: 'Xaltrix products', href: 'https://xaltrix.tech/products/', kind: 'product' }],
    accent: '#7c8cff',
  },
  {
    slug: 'weekly-report',
    name: 'Weekly Report Generator',
    category: 'Team productivity · Full-stack web app',
    year: '2026',
    summary: 'ProgressHub, a team dashboard where members file task-level weekly reports and managers review, correct and approve them.',
    problem: 'Weekly reporting over email and spreadsheets makes it hard to track who submitted, what changed and what still needs a manager’s attention.',
    solution: 'A role-aware workflow with version history and analytics, plus an assistant that answers questions about the team’s reports.',
    features: [
      'Roles for members, managers and admins (RBAC)',
      'Four-stage workflow: Draft → Submitted → Needs Correction → Approved, with version history',
      'Four analytics charts, plus project and user management',
      'ProgressHub assistant: local Llama 3 RAG with voice input and output',
      'JWT auth with bcrypt; RBAC covered by pytest',
    ],
    role: 'Designed and built the full stack: React front end, FastAPI and MongoDB backend, and the RAG assistant.',
    stack: ['React', 'Vite', 'TanStack Query', 'Zustand', 'Recharts', 'FastAPI', 'MongoDB', 'Pydantic'],
    shots: [{ src: weeklyLogin, alt: 'ProgressHub sign-in screen of the Weekly Report Generator', label: 'Sign in', frame: 'browser' }],
    links: [
      { label: 'Source', href: 'https://github.com/KestroyStephan/Weekly-Report-Generator-Team-Dashboard', kind: 'github' },
      { label: 'Live app', href: 'https://weekly-report-generator-team-dashbo-psi.vercel.app', kind: 'live' },
    ],
    accent: '#2dd4bf',
  },
  {
    slug: 'surprise-heaven',
    name: 'Surprise Heaven',
    category: 'Gifting marketplace · MERN',
    year: '2025',
    summary: 'A personalised gift mall with custom cakes, build-your-own surprise boxes, wishlists and live rider tracking, built by a team of five.',
    problem: 'Online gift shops sell fixed products; people who want something personal end up coordinating bakers, shops and couriers themselves.',
    solution: 'Studios for designing cakes and gifts, a surprise-box builder and rider tracking, all in one checkout.',
    features: [
      'Cake Studio and Custom Studio for personalised orders',
      'Build-a-Surprise-Box flow',
      'Live rider GPS tracking on OpenStreetMap',
      'Stripe, Razorpay and cash-on-delivery payments',
      'Wishlist sharing, verified-purchase reviews, offers and coupons',
      'Admin portal: inventory, sales and profit reports, live chats',
    ],
    role: 'Owned the backend: REST API, authentication and security, payments, orders, notifications, chat and contact APIs.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'Razorpay', 'OpenStreetMap'],
    flow: ['Pick or design', 'Personalise', 'Pay', 'Rider assigned', 'Live tracking', 'Delivered'],
    shots: [
      { src: shHome, alt: 'Surprise Heaven storefront home page', label: 'Storefront', frame: 'browser' },
      { src: shBox, alt: 'Build-a-Surprise-Box builder with gifts and a running total', label: 'Surprise box', frame: 'browser' },
      { src: shTracking, alt: 'My orders page with live rider tracking on a map', label: 'Live tracking', frame: 'browser' },
      { src: shAdmin, alt: 'Surprise Heaven admin dashboard', label: 'Admin', frame: 'browser' },
      { src: shInventory, alt: 'Surprise Heaven admin inventory with stock levels', label: 'Inventory', frame: 'browser' },
    ],
    links: [{ label: 'Source', href: 'https://github.com/KestroyStephan/Gift_Heaven', kind: 'github' }],
    accent: '#f472b6',
  },
  {
    slug: 'giftheaven',
    name: 'GiftHeaven',
    category: 'E-commerce · PHP → MERN',
    year: '2024 — 2025',
    summary: 'A gift e-commerce store I built first on the LAMP stack, then rebuilt on MERN with separate storefront, admin and backend apps.',
    problem: 'The first version mixed pages and data access in PHP, which made new features slow to add.',
    solution: 'A MERN rebuild split into a React storefront, a React admin and an Express API.',
    features: ['Product catalogue and product pages', 'Cart and checkout', 'Admin CRUD for products and orders', 'Separate admin, backend and frontend apps in the MERN version'],
    role: 'Solo developer on both versions.',
    stack: ['PHP', 'MySQL', 'React', 'Node.js', 'Express', 'MongoDB'],
    flow: ['LAMP v1', 'Storefront', 'Cart & checkout', 'MERN v2', 'Admin app', 'REST API'],
    shots: [
      { src: ghHome, alt: 'GiftHeaven home page hero', label: 'Home', frame: 'browser' },
      { src: ghShop, alt: 'GiftHeaven featured products grid', label: 'Shop', frame: 'browser' },
      { src: ghProduct, alt: 'GiftHeaven product page with size picker and gallery', label: 'Product', frame: 'browser' },
    ],
    links: [{ label: 'Source (PHP version)', href: 'https://github.com/KestroyStephan/GiftHeaven-Website', kind: 'github' }],
    accent: '#fbbf24',
  },
];

export const categories = ['AI & ML', 'Automation', 'Full-stack', 'Frontend', 'Backend & APIs', 'Mobile'] as const;
export type Category = (typeof categories)[number];

export type LibraryProject = {
  name: string;
  kind: string;
  text: string;
  categories: Category[];
  image: string;
  // 'illustration' marks covers drawn from the source code because there is no running UI to capture.
  imageKind?: 'screen' | 'data' | 'illustration';
  caseStudy?: string;
  github?: string;
  live?: string;
  accent: string;
};

// Every project, tagged so the library can be filtered by area.
export const projectLibrary: LibraryProject[] = [
  { name: 'CEYLO', kind: 'AI tourism platform', text: 'React Native app and React admin portal with an AI concierge, eco-scoring and offline SOS.', categories: ['AI & ML', 'Mobile', 'Full-stack'], image: ceyloMConcierge, caseStudy: 'ceylo', github: 'https://github.com/KestroyStephan/CEYLO', live: 'https://ceylo-theta.vercel.app', accent: '#34d399' },
  { name: 'AgenticHR', kind: 'AI hiring platform', text: 'Seven AI agents that take a role from job description to onboarding, with payroll and leave.', categories: ['AI & ML', 'Automation', 'Mobile', 'Backend & APIs'], image: ahDashboard, caseStudy: 'agentichr', accent: '#7c8cff' },
  { name: 'Weekly Report Generator', kind: 'Team dashboard', text: 'Role-aware weekly reports with approvals, analytics and a local Llama 3 RAG assistant.', categories: ['Full-stack', 'Automation', 'AI & ML'], image: weeklyLogin, caseStudy: 'weekly-report', github: 'https://github.com/KestroyStephan/Weekly-Report-Generator-Team-Dashboard', live: 'https://weekly-report-generator-team-dashbo-psi.vercel.app', accent: '#2dd4bf' },
  { name: 'Surprise Heaven', kind: 'MERN gifting marketplace', text: 'Cake and gift studios, a surprise-box builder, payments and live rider tracking.', categories: ['Full-stack', 'Backend & APIs'], image: shHome, caseStudy: 'surprise-heaven', github: 'https://github.com/KestroyStephan/Gift_Heaven', accent: '#f472b6' },
  { name: 'GiftHeaven', kind: 'E-commerce · PHP → MERN', text: 'Gift store built on LAMP, then rebuilt as separate MERN storefront, admin and API apps.', categories: ['Full-stack', 'Frontend'], image: ghHome, caseStudy: 'giftheaven', github: 'https://github.com/KestroyStephan/GiftHeaven-Website', accent: '#fbbf24' },
  { name: 'AI Video Studio', kind: 'Local text-to-video', text: 'CogVideoX and Wan2.1 on consumer GPUs: a FastAPI job queue with VRAM offloading and live progress over WebSockets.', categories: ['AI & ML', 'Backend & APIs', 'Full-stack'], image: videoGenerator, imageKind: 'data', github: 'https://github.com/KestroyStephan/Video-Generator', accent: '#818cf8' },
  { name: 'AeroSafe', kind: 'Travel safety dashboard', text: 'Live safety scores and government advisories for any country, with IP-based origin detection and Google sign-in.', categories: ['Full-stack', 'Frontend', 'Backend & APIs'], image: aerosafe, github: 'https://github.com/KestroyStephan/Predictive-Travel-Safety-Dashboard', accent: '#c026d3' },
  { name: 'Fake Message Detection', kind: 'NLP classifier', text: 'TF-IDF with Logistic Regression and Naive Bayes; 98.8% test accuracy on news articles.', categories: ['AI & ML'], image: fakeMessage, imageKind: 'data', github: 'https://github.com/KestroyStephan/Fake-Message-Detection', accent: '#f87171' },
  { name: 'House Price API', kind: 'ML service', text: 'Random Forest regressor served through FastAPI with predict and model-info endpoints.', categories: ['AI & ML', 'Backend & APIs'], image: housePrice, imageKind: 'data', github: 'https://github.com/KestroyStephan/House-Price-Prediction', accent: '#45e3f5' },
  { name: 'Wine Quality', kind: 'ML app', text: 'EDA, feature selection and a Random Forest classifier (92% test accuracy) behind a Streamlit app.', categories: ['AI & ML'], image: wineQuality, imageKind: 'data', github: 'https://github.com/KestroyStephan/wine-quality-prediction', accent: '#c084fc' },
  { name: 'AI Trip Planner', kind: 'AI web app', text: 'Chat-driven trip builder that collects budget, group size and days, then generates a plan.', categories: ['AI & ML', 'Frontend', 'Full-stack'], image: tripPlanner, imageKind: 'illustration', github: 'https://github.com/KestroyStephan/AI-Trip-Planner', accent: '#60a5fa' },
  { name: 'Shoppee', kind: 'MERN storefront', text: 'Fashion storefront with category pages, cart and an admin for products.', categories: ['Frontend', 'Full-stack'], image: shoppeeHome, github: 'https://github.com/KestroyStephan/website-shoppee', live: 'https://website-shoppee.vercel.app', accent: '#fb923c' },
  { name: 'Invoice Generator', kind: 'React app', text: 'Invoices and quotations with live totals, editable line items and PDF export.', categories: ['Frontend'], image: invoiceGenerator, github: 'https://github.com/KestroyStephan/Invoice-Generator', accent: '#3b82f6' },
  { name: 'AuraFit', kind: 'Android app', text: 'Fitness app with a step counter and analytics, live workouts, workout history and a meal planner on Firebase.', categories: ['Mobile'], image: aurafit, imageKind: 'illustration', github: 'https://github.com/KestroyStephan/AuraFit', accent: '#fb7185' },
  { name: 'Weather App', kind: 'Web app', text: 'Weather for five world cities from the OpenWeatherMap API.', categories: ['Frontend'], image: weatherApp, github: 'https://github.com/KestroyStephan/Weather-Web-Application', accent: '#38bdf8' },
  { name: 'Tea Inventory System', kind: 'Desktop app', text: 'Java Swing and MySQL app for a tea factory’s products, inventory, sales and users.', categories: ['Backend & APIs'], image: teaInventory, imageKind: 'illustration', github: 'https://github.com/KestroyStephan/ITBIN-2211-0207', accent: '#4ade80' },
];

export const thesis = {
  title: 'An AI-Powered Guide for Sustainable Eco & Cultural Tourism in Sri Lanka',
  degree: 'BSc (Hons) Information Technology',
  school: 'Faculty of Information Technology, Horizon Campus',
  date: 'October 2026',
  summary:
    'My final-year dissertation, written around CEYLO: the research, design, AI models and user testing behind a mobile guide that helps travellers explore Sri Lanka sustainably and safely.',
  photo: thesisPhoto,
};

export type Publication = {
  title: string;
  venue: string;
  type: string;
  authors: string;
  summary: string;
  tags: string[];
  href?: string;
  related?: string;
};

// Extended abstracts from the HIRS 2025 symposium, both reviewed and accepted.
export const publications: Publication[] = [
  {
    title: 'AI-Powered Mobile Guide for Sustainable Eco-Cultural Tourism in Sri Lanka: Development and User Assessment',
    venue: 'HIRS 2025',
    type: 'Extended abstract · Published',
    authors: 'Kestroy S., Sharoobini R. A., Kishnapriyan N., Isuru Samarappulige',
    summary: 'The research behind CEYLO: an AI mobile guide that plans eco-cultural trips, connects travellers with local guides and vendors, and was assessed with real users.',
    tags: ['Applied AI', 'Mobile', 'Sustainable tourism'],
    href: '',
    related: 'cs-ceylo',
  },
  {
    title: 'Real-Time Fake News Detection with Explainable and Reproducible ML Models',
    venue: 'HIRS 2025',
    type: 'Extended abstract · Published',
    authors: 'Kestroy S., Sanju A. V., Kishnapriyan, Jineshini S., Herath H.M.D.S.',
    summary: 'Machine-learning models that classify news as fake or real in real time, built so their predictions can be explained and their results reproduced.',
    tags: ['NLP', 'Machine learning', 'Explainability'],
    href: '',
    related: 'projects',
  },
];

// Medium articles. Add entries as { title, href, date, summary }.
export const articles: { title: string; href: string; date?: string; summary?: string }[] = [
  {
    title: 'Troubleshooting Disk Space Issues with df, du, and ncdu',
    href: 'https://medium.com/@stephankestroy/automating-log-rotation-with-logrotate-093c822b2104',
    date: 'Feb 2025',
    summary: 'A step-by-step Linux guide to finding what is filling a disk and freeing space before it slows the system down.',
  },
];

export const expertise = [
  { group: 'Languages', items: ['Python', 'Dart', 'Java', 'JavaScript', 'PHP', 'HTML', 'CSS', 'SQL'] },
  { group: 'Frontend & Mobile', items: ['Flutter', 'React', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Riverpod'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'REST APIs', 'SQLAlchemy'] },
  { group: 'AI / ML', items: ['Ollama', 'Sentence Transformers', 'pandas', 'scikit-learn', 'TensorFlow Lite'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Firestore'] },
  { group: 'DevOps & Tools', items: ['Docker', 'Linux', 'Azure', 'Git'] },
];

export const experience = [
  {
    period: 'Jul 2026 — Sep 2026',
    role: 'Software Engineer',
    org: 'Xaltrix (Private) Limited',
    place: 'Nuwara Eliya, Sri Lanka',
    points: [
      'Developed and maintained AgenticHR (Aura) across Flutter, FastAPI and PostgreSQL.',
      'Automated payroll bulk processing and resolved education and payslip issues for client companies.',
      'Configured platform settings and Company Management modules, and integrated Referoo background checks.',
      'Troubleshot third-party integrations and maintained the automated API test suite.',
    ],
  },
  {
    period: 'Jan 2026 — Jul 2026',
    role: 'Associate Software Engineer Intern (Full-Stack)',
    org: 'Xaltrix (Private) Limited',
    place: 'Nuwara Eliya, Sri Lanka',
    points: [
      'Built AgenticHR end to end and shipped Phase 1 in April 2026 across three live deployments.',
      'Delivered RestYourPaws: WordPress forms to SugarCRM, live in April 2026.',
      'Built features for Govi.ai, a Flutter smart-agriculture app.',
      'Added a Playwright API test suite to CI, plus end-to-end and load tests.',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Executive Faculty Representative',
    org: 'Horizon Campus Student Council',
    place: 'Malabe, Sri Lanka',
    points: ['Represented the faculty’s students and coordinated academic initiatives and campus events.'],
  },
];

export const companyProjects = [
  {
    name: 'AgenticHR · Aura',
    kind: 'AI hiring platform',
    text: 'Flutter + FastAPI platform with seven AI agents, interviews, offers, leave and payroll.',
    tags: ['Flutter', 'FastAPI', 'PostgreSQL', 'Ollama'],
    href: 'https://xaltrix.tech/products/',
    shot: { src: ahOnboarding, alt: 'AgenticHR onboarding dashboard', label: 'AgenticHR · Onboarding', frame: 'browser' } as Shot,
  },
  {
    name: 'RestYourPaws',
    kind: 'Client integration',
    text: 'Moved WPForms to Gravity Forms, added SugarCRM middleware and a medical-record PDF, then took it through QA and UAT.',
    tags: ['WordPress', 'PHP', 'SugarCRM'],
    shot: { src: rypHome, alt: 'RestYourPaws public website home page', label: 'restyourpaws.com.au', frame: 'browser' } as Shot,
    note: 'The client’s public site. My work was the intake forms and the SugarCRM integration behind it.',
  },
  {
    name: 'Govi.ai',
    kind: 'Smart agriculture app',
    text: 'Responsive layouts, a map location picker, encrypted error logging, finance and translation screens, and firmware OTA flows.',
    tags: ['Flutter', 'Dart'],
    features: ['Zones & accounts', 'Map location picker', 'Harvest & finance', 'Translations', 'Encrypted error logs', 'Firmware OTA'],
  },
];

export const operations = [
  { title: 'Payroll bulk processing', text: 'Automation that processes payroll for many employees at once.' },
  { title: 'Education & payslip fixes', text: 'Diagnosed and resolved issues in education records and payslip generation.' },
  { title: 'Platform configuration', text: 'Settings and configuration for client workspaces.' },
  { title: 'Integration troubleshooting', text: 'LinkedIn, Zoom and Outlook issues traced and fixed.' },
  { title: 'Automated API testing', text: 'Playwright API suite running in CI.' },
  { title: 'Referoo integration', text: 'Background checks connected to the hiring flow.' },
  { title: 'Company Management modules', text: 'Modules for managing client company data.' },
];

export const education = {
  degree: 'BSc (Hons) Information Technology',
  school: 'Horizon Campus, Malabe',
  period: '2022 — 2026',
  status: 'Completed · awaiting graduation',
};

export const certifications = [
  { title: 'Diploma in Information Technology (DITEC)', issuer: 'Esoft Metro Campus' },
  { title: 'Computer Application Assistant — NVQ Level 3', issuer: 'Loyola Campus' },
  { title: 'Python for Beginners', issuer: 'University of Moratuwa — Open Learning' },
  { title: 'Pandas · Intro to ML · Data Cleaning', issuer: 'Kaggle' },
];

// Shown if the GitHub API can't be reached.
export const fallbackRepos = [
  { name: 'CEYLO', description: 'AI-powered sustainable tourism platform for Sri Lanka.', language: 'JavaScript', html_url: 'https://github.com/KestroyStephan/CEYLO' },
  { name: 'Weekly-Report-Generator-Team-Dashboard', description: 'Team weekly reporting with RBAC, analytics and a RAG assistant.', language: 'Python', html_url: 'https://github.com/KestroyStephan/Weekly-Report-Generator-Team-Dashboard' },
  { name: 'Gift_Heaven', description: 'Surprise Heaven: personalised MERN gifting store.', language: 'JavaScript', html_url: 'https://github.com/KestroyStephan/Gift_Heaven' },
  { name: 'website-shoppee', description: 'MERN fashion storefront.', language: 'JavaScript', html_url: 'https://github.com/KestroyStephan/website-shoppee' },
  { name: 'AI-Trip-Planner', description: 'AI-assisted itinerary planner.', language: 'TypeScript', html_url: 'https://github.com/KestroyStephan/AI-Trip-Planner' },
  { name: 'House-Price-Prediction', description: 'Regression pipeline served with FastAPI.', language: 'Python', html_url: 'https://github.com/KestroyStephan/House-Price-Prediction' },
];
