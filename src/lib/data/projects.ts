export interface Project {
  id: string;
  title: string;
  category: 'ai-ml' | 'web' | 'mobile' | 'robotics' | 'arvr' | 'blockchain';
  description: string;
  image?: string;
  gradient: string;
  icon: string;
  technologies: string[];
  stats: {
    stars?: string;
    forks?: string;
    views?: string;
    downloads?: string;
  };
  links: {
    demo?: string;
    code?: string;
    live?: string;
  };
  author?: string;
  featured?: boolean;
  status: 'active' | 'completed' | 'live';
}

export const projects: Project[] = [
  {
    id: 'astrix-rover',
    title: 'Astrix Rover',
    category: 'robotics',
    description:
      'A comprehensive rover project featuring both a live website and detailed documentation. Explore the project showcase and dive deep into technical specifications, research papers, and implementation details.',
    image: '/assets/images/logo/Astrix.png',
    gradient: 'from-cyan-600 to-blue-700',
    icon: 'robot',
    technologies: ['Website', 'Research', 'Technical Specs'],
    stats: {
      stars: '4.9',
      views: '2.5k',
    },
    links: {
      live: 'https://www.astrixrover.tech',
    },
    featured: true,
    status: 'live',
  },
  {
    id: 'smart-campus',
    title: 'Smart Campus Assistant',
    category: 'ai-ml',
    description:
      'An AI-powered chatbot that helps students navigate campus resources, answer academic queries, and provide personalized recommendations using natural language processing.',
    gradient: 'from-blue-600 to-purple-700',
    icon: 'brain',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    stats: {
      stars: '4.8',
      forks: '12 forks',
    },
    links: {},
    featured: true,
    status: 'active',
  },
  {
    id: 'eco-tracker',
    title: 'EcoTracker Platform',
    category: 'web',
    description:
      'A comprehensive web platform for tracking carbon footprint, promoting sustainable practices, and connecting environmentally conscious individuals and organizations.',
    gradient: 'from-green-600 to-blue-700',
    icon: 'globe',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    stats: {
      stars: '4.9',
      forks: '18 forks',
    },
    links: {},
    featured: true,
    status: 'active',
  },
  {
    id: 'studybuddy',
    title: 'StudyBuddy App',
    category: 'mobile',
    description:
      'A collaborative study platform connecting students for group learning sessions and knowledge sharing.',
    gradient: 'from-purple-600 to-pink-700',
    icon: 'mobile-alt',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    stats: {
      stars: '4.6',
      downloads: '2.5k',
    },
    links: {},
    status: 'active',
  },
  {
    id: 'virtual-lab',
    title: 'Virtual Lab Experience',
    category: 'arvr',
    description:
      'Immersive VR chemistry lab allowing students to conduct experiments in a safe virtual environment.',
    gradient: 'from-indigo-600 to-blue-700',
    icon: 'vr-cardboard',
    technologies: ['Unity', 'C#', 'VR SDK'],
    stats: {
      stars: '4.7',
      views: '1.2k',
    },
    links: {},
    status: 'active',
  },
  {
    id: 'certifychain',
    title: 'CertifyChain',
    category: 'blockchain',
    description:
      'Blockchain-based certificate verification system ensuring authenticity and preventing fraud.',
    gradient: 'from-yellow-600 to-orange-700',
    icon: 'link',
    technologies: ['Solidity', 'Web3.js', 'Ethereum'],
    stats: {
      stars: '4.5',
      views: '500+',
    },
    links: {},
    status: 'active',
  },
  {
    id: 'healthbot',
    title: 'HealthBot Assistant',
    category: 'ai-ml',
    description:
      'AI-powered health assistant providing symptom analysis and preliminary health recommendations.',
    gradient: 'from-red-600 to-pink-700',
    icon: 'robot',
    technologies: ['Python', 'scikit-learn', 'FastAPI'],
    stats: {
      stars: '4.8',
      views: '3.2k',
    },
    links: {},
    status: 'active',
  },
  {
    id: 'codemetrics',
    title: 'CodeMetrics Dashboard',
    category: 'web',
    description:
      'Analytics dashboard for tracking coding progress and performance metrics for student developers.',
    gradient: 'from-teal-600 to-green-700',
    icon: 'chart-line',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    stats: {
      stars: '4.4',
      views: '800+',
    },
    links: {},
    status: 'active',
  },
  {
    id: 'techniki-website',
    title: 'Techनिकी Website',
    category: 'web',
    description:
      'Modern, responsive community website showcasing events, projects, and fostering collaboration among tech enthusiasts.',
    gradient: 'from-blue-600 to-purple-700',
    icon: 'globe',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    stats: {
      stars: '5.0',
      views: '500+',
    },
    links: {
      live: '/',
    },
    status: 'live',
  },
  {
    id: 'ai-tools-review',
    title: 'AI Tools Review Web App',
    category: 'web',
    description:
      'A Django-based web application where users can submit, view, and explore reviews of different AI tools with WhatsApp notifications and Excel data handling.',
    gradient: 'from-orange-500 to-pink-600',
    icon: 'robot',
    technologies: ['Django', 'Python', 'WhatsApp API', 'Excel'],
    stats: {
      stars: '4.7',
      forks: '8 forks',
    },
    links: {
      demo: 'https://github.com/GitGuru-sudo/review.git',
      code: 'https://github.com/GitGuru-sudo/review.git',
    },
    author: 'SAKSHAM',
    status: 'active',
  },
  {
    id: 'kckabir-portfolio',
    title: 'Portfolio & Web Projects',
    category: 'web',
    description:
      'A collection of creative web projects including HTML portfolios, interactive dice games, drum games, and various frontend applications showcasing modern web development skills.',
    gradient: 'from-blue-500 to-purple-600',
    icon: 'code',
    technologies: ['HTML5', 'JavaScript', 'CSS3', 'Web Games'],
    stats: {
      stars: '4.6',
      forks: '6 forks',
    },
    links: {
      demo: 'https://github.com/KcKabir',
      code: 'https://github.com/KcKabir',
    },
    author: 'KABIR',
    status: 'active',
  },
  {
    id: 'voting-system',
    title: 'Online Voting & Feedback System',
    category: 'web',
    description:
      'Full-stack web application for university voting and feedback with student/admin panels, real-time analytics, and secure authentication using bcrypt and sessions.',
    gradient: 'from-green-500 to-teal-600',
    icon: 'vote-yea',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'EJS'],
    stats: {
      stars: '4.8',
      forks: '5 forks',
    },
    links: {
      demo: 'https://github.com/KcKabir/Voting1',
      code: 'https://github.com/KcKabir/Voting1',
    },
    author: 'KABIR',
    status: 'active',
  },
  {
    id: 'irctc-redesign',
    title: 'IRCTC Website Redesign',
    category: 'web',
    description:
      'Modern, user-friendly redesign of the IRCTC website with enhanced UI, gamification features, and improved color scheme for better train ticket booking experience.',
    gradient: 'from-indigo-500 to-pink-600',
    icon: 'train',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    stats: {
      stars: '4.9',
      views: '2.1k',
    },
    links: {
      live: 'https://irctc-website-virid.vercel.app',
      code: 'https://github.com/priyansshi-i/Irctc--redesign',
    },
    author: 'PRIYANSHI',
    status: 'live',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects', icon: 'th' },
  { id: 'ai-ml', label: 'AI/ML', icon: 'brain' },
  { id: 'web', label: 'Web Development', icon: 'globe' },
  { id: 'robotics', label: 'Robotics', icon: 'robot' },
  { id: 'mobile', label: 'Mobile Apps', icon: 'mobile-alt' },
  { id: 'arvr', label: 'AR/VR', icon: 'vr-cardboard' },
  { id: 'blockchain', label: 'Blockchain', icon: 'link' },
];
