export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    github?: string;
    website?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ramachokkalingam S A',
    role: 'Mentor',
    image: '/assets/images/team/team.jpg',
    bio: 'Passionate about AI/ML, IoT, and Robotics. Leading Techniki to empower the next generation of tech innovators.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ramachokkalingam',
      github: 'https://github.com/Ramachokkalingam',
      website: 'https://ramachokkalingam.github.io/',
      instagram: 'https://www.instagram.com/raman_asura',
    },
  },
  {
    id: 2,
    name: 'Sajan',
    role: 'President',
    image: '/assets/images/team/Sazzan1.jpg',
    bio: 'Tech and robotics enthusiast with an entrepreneurial mindset, passionate about exploring innovative ideas and building solutions that make an impact',
    social: {
      linkedin: 'https://www.linkedin.com/in/sajan-dhakal-023a3a253',
      github: 'https://github.com/sazzan39',
      instagram: 'https://www.instagram.com/sazzan39',
    },
  },
  {
    id: 3,
    name: 'Reetunjai',
    role: 'Vice President',
    image: '/assets/images/team/Reetunjai.jpg',
    bio: 'Innovative thinker fueled by ambition and a passion for tech driven solutions. Searching for mysteries of world.',
    social: {
      linkedin: 'https://www.linkedin.com/in/reetunjaidutta',
      github: 'https://github.com/Reetu019',
      instagram: 'https://www.instagram.com/_blacksoviet',
    },
  },
  {
    id: 4,
    name: 'Manav',
    role: 'Management Core',
    image: '/assets/images/team/manav1.jpeg',
    bio: 'I plan and coordinate engaging club events, ensuring they run smoothly. Outside of this, I enjoy exploring new ideas, trying new things, and continuously learning new skills.',
    social: {
      linkedin: 'https://www.linkedin.com/in/manav-raghav',
      instagram: 'https://www.instagram.com/rag_manav?igsh=cHhxZGlsY3l3dGNy',
    },
  },
  {
    id: 5,
    name: 'Priyanshi',
    role: 'Tech Core',
    image: '/assets/images/team/Priyanshi.jpg',
    bio: 'At the crossroads of code and coordination, driven by tech and management, yet grounded in being approachable, friendly, and always ready to build together.',
    social: {
      linkedin: 'https://www.linkedin.com/in/priyansshi-i',
      github: 'https://github.com/priyansshi-i',
    },
  },
  {
    id: 6,
    name: 'Sampriya',
    role: 'Tech Core',
    image: '/assets/images/team/sampriya.jpg',
    bio: 'Once aimed for medicine, accidentally hacked into tech who swapped scalpel with Computer Vision and OCR...now suturing code and healthcare together.',
    social: {
      linkedin: 'http://www.linkedin.com/in/sampriya-behera-b73080306',
      github: 'https://github.com/Sampriya247',
    },
  },
  {
    id: 7,
    name: 'Kabir',
    role: 'Tech Core',
    image: '/assets/images/team/kabir.jpg',
    bio: 'Passionate about AI/ML and Full Stack Web Development. With a strong focus on problem solving and innovation, I strive to create meaningful solutions that merge technology with real world impact.',
    social: {
      linkedin: 'https://www.instagram.com/only.kabir_',
      github: 'https://github.com/KcKabir',
      instagram: 'https://www.instagram.com/only.kabir_',
    },
  },
  {
    id: 8,
    name: 'Sahib',
    role: 'Tech Core',
    image: '/assets/images/team/sahib.jpg',
    bio: 'Passionate about AI/ML and development, I thrive at the intersection of leadership and technology. Focused on collaboration and innovation, I aim to turn ideas into impactful solutions',
    social: {
      linkedin: 'http://www.linkedin.com/in/sahib-taj-singh-123b37216',
      github: 'https://github.com/SahibTaj',
      instagram: 'https://www.instagram.com/sahib__taj',
    },
  },
  {
    id: 9,
    name: 'Nikhil',
    role: 'Tech Core',
    image: '/assets/images/team/nikhil.jpeg',
    bio: 'Passionate about Web Devlopment and DataScience. I contribute to design and develop web solutions for club activities and events',
    social: {
      github: 'https://github.com/nikhilx133',
    },
  },
  
  {
    id: 10,
    name: 'Saksham',
    role: 'Tech Core',
    image: '/assets/images/team/saksham.jpg',
    bio: 'Passionate backend developer with expertise in Django, building scalable and efficient web solutions. Always exploring ways to optimize performance and create impactful digital experiences',
    social: {
      linkedin: 'https://www.linkedin.com/in/saksham-arora-bb4831329',
      github: 'https://github.com/GitGuru-sudo',
      instagram: 'https://www.instagram.com/saksham._.0510',
    },
  },
  {
    id: 11,
    name: 'Prachi',
    role: 'Tech Core',
    image: '/assets/images/team/Prachi.jpg',
    bio: 'Enthusiastic Web Developer with a flair for crafting interactive and responsive web interfaces. I turn design ideas into seamless, user-friendly digital experiences using modern web technologies',
    social: {
      linkedin: 'https://www.linkedin.com/in/prachi-6a845232a',
      github: 'https://github.com/PrachiStack',
    },
  },
  
  {
    id: 12,
    name: 'Kunal',
    role: 'Tech Core',
    image: '/assets/images/team/kunal.jpg',
    bio: 'Passionate web developer skilled in building responsive, user-friendly websites and web applications. Focused on clean code and modern design',
    social: {},
  },
  {
    id: 13,
    name: 'Debojit Dey',
    role: 'CyberSecurity Core',
    image: '/assets/images/team/devojit.jpeg',
    bio: 'Passionate aspiring cybersecurity enthusiast and game developer , blending hands-on hacking skills with creative coding projects.',
    social: {
      linkedin: 'https://www.linkedin.com/in/debojit-dey-88882124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/Dev6848',
    },
  },
  {
    id: 14,
    name: 'Sameer',
    role: 'Cybersecurity Lead',
    image: '/assets/images/team/sameer1.jpeg',
    bio: 'I am a passionate Cybersecurity enthusiast fully focused towards blue teaming (SOC) and ethical hacking. Also I just entered the path of devops engineering journey.',
    social: {
      github: 'https://github.com/thecybersameer',
    },
  },



];
