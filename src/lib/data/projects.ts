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
    image: '/assets/images/events/Astrix.png',
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
  {
    id: 'smoke-detector-dashboard',
    title: 'Smoke Detector Dashboard',
    category: 'ai-ml',
    description:
      'IoT-based smoke detection system with real-time monitoring dashboard. Features intelligent alerts, data visualization, and automated safety responses for enhanced fire prevention and safety management.',
    gradient: 'from-red-500 to-orange-600',
    icon: 'fire-extinguisher',
    technologies: ['IoT', 'Python', 'Dashboard', 'Sensors'],
    stats: {
      stars: '4.5',
    },
    links: {
      code: 'https://github.com/YashasviRastogi/Smoke-Detector-Dashboard',
    },
    author: 'Yashasvi Rastogi',
    status: 'completed',
  },
  {
    id: 'c2-server',
    title: 'C2 Server',
    category: 'web',
    description:
      'Command and Control server implementation for cybersecurity research and educational purposes. Demonstrates network communication protocols, remote system management, and security testing frameworks.',
    gradient: 'from-gray-700 to-red-700',
    icon: 'server',
    technologies: ['Python', 'Networking', 'Security', 'Backend'],
    stats: {
      stars: '4.3',
    },
    links: {
      code: 'https://github.com/Thecybersameer/C2_SERVER',
    },
    author: 'Cyber Sameer',
    status: 'completed',
  },
  {
    id: 'project-tech',
    title: 'Project Tech',
    category: 'web',
    description:
      'Comprehensive technology project showcasing modern web development practices. Features responsive design, interactive components, and seamless user experience with cutting-edge frontend technologies.',
    gradient: 'from-purple-500 to-blue-600',
    icon: 'laptop-code',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    stats: {
      stars: '4.4',
    },
    links: {
      code: 'https://github.com/techy-tresa/project-tech',
    },
    author: 'Techy Tresa',
    status: 'completed',
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    category: 'web',
    description:
      'Full-featured e-commerce platform with product catalog, shopping cart, secure payment integration, and order management. Built with modern web technologies for optimal performance and user experience.',
    gradient: 'from-green-500 to-teal-600',
    icon: 'shopping-cart',
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    stats: {
      stars: '4.7',
    },
    links: {
      code: 'https://github.com/nikhilx133/e-commerce_store.git',
    },
    author: 'Nikhil',
    status: 'completed',
  },
  {
    id: 'smart-job-portal',
    title: 'Smart Job Portal with AI Skill Matching',
    category: 'ai-ml',
    description:
      'AI-powered job portal that intelligently matches candidates with opportunities based on skills, experience, and preferences. Features advanced algorithms for resume parsing and skill assessment.',
    gradient: 'from-blue-600 to-indigo-700',
    icon: 'briefcase',
    technologies: ['AI/ML', 'Python', 'NLP', 'Web Development'],
    stats: {
      stars: '4.8',
    },
    links: {
      code: 'https://github.com/PrachiStack/Smart-Job-Portal-with-AI-skill-Matching.git',
    },
    author: 'Prachi',
    status: 'completed',
  },
  {
    id: 'healthcare-prediction',
    title: 'Healthcare Prediction System',
    category: 'ai-ml',
    description:
      'Machine learning-based healthcare prediction system for disease diagnosis and risk assessment. Utilizes advanced algorithms to analyze patient data and provide accurate health predictions.',
    gradient: 'from-pink-500 to-red-600',
    icon: 'heartbeat',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Healthcare'],
    stats: {
      stars: '4.6',
    },
    links: {
      code: 'https://github.com/KcKabir/Healthcare_Prediction-',
    },
    author: 'Kabir',
    status: 'completed',
  },
  {
    id: 'enigma',
    title: 'ENIGMA',
    category: 'web',
    description:
      'Comprehensive project by Team Osiris featuring innovative solutions and modern web technologies. A complete end-to-end application demonstrating best practices in software development.',
    gradient: 'from-purple-600 to-pink-700',
    icon: 'puzzle-piece',
    technologies: ['Full Stack', 'Web Development', 'Modern Framework'],
    stats: {
      stars: '4.9',
    },
    links: {
      code: 'https://github.com/AnubhavDash/ENIGMA',
    },
    author: 'Team Osiris',
    status: 'completed',
  },
  {
    id: 'telegram-bot',
    title: 'Telegram Bot',
    category: 'ai-ml',
    description:
      'Intelligent Telegram bot with automated responses, command handling, and integration capabilities. Features natural language processing and customizable workflows for enhanced user interaction.',
    gradient: 'from-cyan-500 to-blue-600',
    icon: 'robot',
    technologies: ['Python', 'Telegram API', 'Bot Framework', 'NLP'],
    stats: {
      stars: '4.5',
    },
    links: {
      code: 'https://github.com/SahibTaj/Telegram_Bot',
    },
    author: 'Sahib Taj',
    status: 'completed',
  },
  {
    id: 'file-merger39',
    title: 'File Merger 39',
    category: 'web',
    description:
      'A powerful file merging utility that combines multiple files into a single output. Features intelligent file handling, format preservation, and batch processing capabilities for efficient file management.',
    gradient: 'from-orange-500 to-red-600',
    icon: 'file-alt',
    technologies: ['Python', 'File Processing', 'Automation', 'CLI'],
    stats: {
      stars: '4.6',
    },
    links: {
      code: 'https://github.com/sazzan39/file-merger39',
    },
    author: 'Sazzan',
    status: 'completed',
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
