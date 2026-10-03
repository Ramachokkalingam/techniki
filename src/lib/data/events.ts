export interface Event {
  id: string;
  title: string;
  category: 'Competition' | 'Workshop' | 'Hackathon';
  date: string;
  status: 'upcoming' | 'completed' | 'live';
  description: string;
  image?: string;
  gradient: string;
  icon: string;
  participants?: string;
  link?: string;
  detailsPage?: string;
  registerUrl?: string; // external registration form (opens in a new tab)
  imagePosition?: 'top' | 'center'; // how a tall banner is cropped in the card
}

export const upcomingEvents: Event[] = [
  {
    id: 'ctrl-think-2',
    title: 'CTRL+THINK 2.0 - From Hackathon to Startups',
    category: 'Hackathon',
    date: 'October 9–10, 2026',
    status: 'upcoming',
    description:
      'A 24-hour overnight hackathon at Deja Brew for Amity University Gurugram students. Teams of 2–4 build a prototype and pitch it for a total prize pool of ₹12,000. Registration is free; shortlisted teams pay ₹199 per team.',
    image: '/assets/images/events/ctrl-think-2-banner.jpg',
    imagePosition: 'top',
    gradient: 'from-purple-600 to-blue-700',
    icon: 'lightbulb',
    participants: '₹12,000 Prize Pool',
    registerUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSeYsiGI3KCn8HVQblC7oXKRSHrgD_7o20nLj28LxYJAljzljA/viewform?usp=publish-editor',
  },
];

export const pastEvents: Event[] = [
  {
    id: 'ai-computervision',
    title: 'Foundations & Frontiers of Computer Vision',
    category: 'Workshop',
    date: 'April 7, 2026',
    status: 'completed',
    description:
      'A hands-on workshop on Computer Vision — from the basics to cutting-edge real-world applications with OpenCV, PyTorch & YOLOv8.',
    image: '/assets/images/events/image.png',
    gradient: 'from-blue-500 to-purple-600',
    icon: 'eye',
    participants: 'Workshop Completed',
    detailsPage: '/events/ai-computervision',
  },
  {
    id: 'techniki-tt',
    title: 'Techniki TT',
    category: 'Competition',
    date: 'Sep 2025',
    status: 'completed',
    description:
      'Techniki Teams helped students turn ideas into reality with mentorship, teamwork, and national opportunities.',
    image: '/assets/images/events/Techniki TT.jpg',
    gradient: 'from-blue-500 to-blue-700',
    icon: 'trophy',
    participants: 'Event Completed',
    detailsPage: '/events/techniki-tt',
  },
    {
    id: 'ethical-hacking-workshop',
    title: 'Ethical Hacking Workshop',
    category: 'Workshop',
    date: 'Nov 11, 2025',
    status: 'completed',
    description:
      'Learn ethical hacking fundamentals with live demos, explore different hacking tools, and understand defensive countermeasures. Organized by Techniki',
    image: '/assets/images/events/ethical_hacking.jpg',
    gradient: 'from-green-500 to-emerald-700',   
    icon: 'shield-alt',
    participants: '80+ Participants',
    detailsPage: '/',
  },
  {
    id: 'ctrl-think',
    title: 'CTRL+THINK - Ideathon & Pitch Competition',
    category: 'Hackathon',
    date: 'Sep 26, 2025',
    status: 'completed',
    description:
    'A 15+ hours hackathon that brought together 25 teams and over 100+ innovative minds in the vibrant vibe of a cafe, where participants built solutions addressing real-life problems through creativity, technology, and teamwork.',
    image: '/assets/images/events/ctrl-think-1.jpg',
    gradient: 'from-purple-600 to-blue-700',
    icon: 'lightbulb',
    participants: '100+ Participants, 25 Teams',
    detailsPage: '/events/ctrl-think',
  },
  {
    id: 'iot-solutions',
    title: 'Brain to Build: IoT Solutions',
    category: 'Competition',
    date: 'Sep 23, 2025',
    status: 'completed',
    description:
      'Use IoT to solve real-life problems! Build smart home automation, safety systems, and more.',
    image: '/assets/images/events/Brain_to_build.jpg',
      gradient: 'from-green-600 to-blue-700',
    icon: 'microchip',
    participants: '15+ Teams',
    detailsPage: '/events/iot-solutions',
  },
  {
    id: 'pitch-craft',
    title: 'Pitch Craft - Ideas to Reality',
    category: 'Competition',
    date: 'Sep 22, 2025',
    status: 'completed',
    description:
      'Learn to create powerful pitches, get expert feedback, and turn your concepts into actionable ventures.',
    image: '/assets/images/events/Pitch_Craft.jpg',
      gradient: 'from-orange-600 to-red-700',
    icon: 'microphone',
    participants: '10+ Teams',
    detailsPage: '/events/pitch-craft',
  },
  {
    id: 'git-github',
    title: 'Git and GitHub Workshop',
    category: 'Workshop',
    date: 'Sep 04, 2025',
    status: 'completed',
    description:
      'A hands-on workshop covering Git version control and GitHub essentials for collaborative projects.',
     image: '/assets/images/events/github.jpg',
    gradient: 'from-gray-600 to-gray-800',
    icon: 'code-branch',
    participants: '50+ Participants',
    detailsPage: '/events/Git_Github',
  },
  {
    id: 'ai-ml-bootcamp',
    title: 'AI/ML Bootcamp',
    category: 'Workshop',
    date: 'Dec 20, 2024',
    status: 'completed',
    description:
      'Intensive hands-on workshop on Machine Learning fundamentals with practical projects',
    image: '/assets/images/events/ai_ml.png',
      gradient: 'from-green-600 to-blue-700',
    icon: 'lightbulb',
    participants: '85 Participants',
  },
  {
    id: 'innovathon-2023',
    title: 'Innovathon 2023',
    category: 'Hackathon',
    date: 'Nov 10, 2023',
    status: 'completed',
    description:
      '48-hour innovation marathon where teams solved real-world problems with creative solutions',
      image:"/assets/images/events/innovathon.png",
    gradient: 'from-purple-600 to-pink-700',
    icon: 'trophy',
    participants: '500+ Participants',
  },
];

export const allEvents = [...upcomingEvents, ...pastEvents];
