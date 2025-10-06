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
}

export const upcomingEvents: Event[] = [
  {
    id: 'techniki-tt',
    title: 'Techniki TT',
    category: 'Competition',
    date: 'Sep 2025',
    status: 'upcoming',
    description:
      'Join Techniki Teams to turn your ideas into reality with mentorship, teamwork, and national opportunities!',
    image: '/assets/images/events/Techniki TT.jpg',
    gradient: 'from-blue-500 to-blue-700',
    icon: 'trophy',
    participants: 'Registration Open',
    link: '/events/techniki-tt',
    detailsPage: '/events/techniki-tt',
  },
];

export const pastEvents: Event[] = [
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
