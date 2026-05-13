import {
  Building2,
  HeartHandshake,
  PartyPopper,
  GraduationCap,
  MapPin,
  Trophy,
  Sparkles,
} from "lucide-react";

export interface CultureItem {
  type: "image" | "video";
  url: string;
  title: string;
  description: string;
}

export interface CultureCategory {
  id: string;
  category: string;
  description: string;
  icon: typeof Building2;
  items: CultureItem[];
  hideInNav?: boolean;
}

export interface HighlightCard {
  title: string;
  description: string;
  image: string;
  accent: string;
}

export const cultureCategories: CultureCategory[] = [
  {
    id: "campus-life",
    category: "Campus Life",
    description:
      "Experience the vibrant campus of ARK Learning Arena — a structured yet warm academic environment where discipline meets creativity, and every corner inspires growth.",
    icon: Building2,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene11.jpeg",
        title: "Modern Classrooms",
        description: "Well-equipped, air-conditioned classrooms designed for focused learning",
      },
      {
        type: "image",
        url: "/assets/culture/scene12.jpeg",
        title: "Study Zones",
        description: "Dedicated quiet zones for self-study and revision sessions",
      },
      {
        type: "image",
        url: "/assets/culture/scene13.jpeg",
        title: "Library & Resources",
        description: "Extensive collection of NCERT, reference books and study materials",
      },
      {
        type: "image",
        url: "/assets/culture/scene14.png",
        title: "Interactive Sessions",
        description: "Engaging group discussions and collaborative problem-solving",
      },
      {
        type: "image",
        url: "/assets/culture/scene73.jpeg",
        title: "Daily Routines",
        description: "Structured daily schedule that builds consistency and discipline",
      },
    ],
  },
  {
    id: "student-teacher-bonding",
    category: "Student & Teacher Bonding",
    description:
      "At ARK, teachers are more than educators — they are mentors, guides, and lifelong supporters. Our small batch sizes foster deep personal connections.",
    icon: HeartHandshake,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene1.png",
        title: "One-on-One Mentorship",
        description: "Personalised guidance sessions addressing individual academic needs",
      },
      {
        type: "image",
        url: "/assets/culture/scene2.png",
        title: "Group Discussions",
        description: "Open forums where students freely discuss doubts and concepts",
      },
      {
        type: "image",
        url: "/assets/culture/scene3.png",
        title: "Doubt Clearing Sessions",
        description: "Extended after-class sessions ensuring no student is left behind",
      },
      {
        type: "image",
        url: "/assets/culture/scene4.png",
        title: "Motivation Meets",
        description: "Regular motivational sessions to keep students focused and inspired",
      },
      {
        type: "image",
        url: "/assets/culture/scene5.png",
        title: "Celebrating Together",
        description: "Teachers celebrating student milestones and personal achievements",
      },
    ],
  },
  {
    id: "celebrations",
    category: "Celebrations & Events",
    description:
      "From traditional festivals to academic milestones, ARK celebrates every occasion with enthusiasm — building community spirit and cherished memories.",
    icon: PartyPopper,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene31.jpeg",
        title: "Annual Day",
        description: "Grand annual celebrations showcasing student talents and achievements",
      },
      {
        type: "image",
        url: "/assets/culture/scene32.jpeg",
        title: "Festival Celebrations",
        description: "Vibrant Diwali, Pongal, and Christmas celebrations at campus",
      },
      {
        type: "image",
        url: "/assets/culture/scene33.jpeg",
        title: "Cultural Programs",
        description: "Students performing traditional and contemporary cultural acts",
      },
      {
        type: "image",
        url: "/assets/culture/scene34.jpeg",
        title: "Award Ceremonies",
        description: "Recognising academic excellence and outstanding performance",
      },
      {
        type: "image",
        url: "/assets/culture/scene35.jpeg",
        title: "Teachers' Day",
        description: "Students expressing gratitude and love for their mentors",
      },
    ],
  },
  {
    id: "farewell-moments",
    category: "Farewell Moments",
    description:
      "Bittersweet goodbyes that mark the end of an incredible journey — farewell ceremonies filled with gratitude, emotion, and the promise of a bright future.",
    icon: GraduationCap,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene41.jpeg",
        title: "Farewell Ceremony",
        description: "Emotional send-off celebrations for graduating batches",
      },
      {
        type: "image",
        url: "/assets/culture/scene42.jpeg",
        title: "Memories Wall",
        description: "Students sharing their favourite ARK moments and memories",
      },
      {
        type: "image",
        url: "/assets/culture/scene43.jpeg",
        title: "Certificate Distribution",
        description: "Honouring students with completion certificates and awards",
      },
      {
        type: "image",
        url: "/assets/culture/scene44.jpeg",
        title: "Group Photos",
        description: "Capturing lifelong friendships and bonds formed at ARK",
      },
      {
        type: "image",
        url: "/assets/culture/scene33.jpeg",
        title: "Cultural Programs",
        description: "Students performing traditional and contemporary cultural acts",
      },
    ],
  },
  {
    id: "educational-trips",
    category: "Educational Trips",
    description:
      "Learning beyond the classroom — ARK organises educational visits and excursions that bring theoretical concepts to life and broaden student perspectives.",
    icon: MapPin,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene51.jpeg",
        title: "Science Museum Visits",
        description: "Interactive exploration at science and technology museums",
      },
      {
        type: "image",
        url: "/assets/culture/scene52.jpeg",
        title: "Nature Excursions",
        description: "Field trips to botanical gardens and wildlife sanctuaries",
      },
      {
        type: "image",
        url: "/assets/culture/scene53.jpeg",
        title: "Lab & Research Visits",
        description: "Visits to research institutions inspiring future scientists",
      },
      {
        type: "image",
        url: "/assets/culture/scene54.jpeg",
        title: "Educational Workshops",
        description: "Participating in external workshops and seminars",
      },
      {
        type: "image",
        url: "/assets/culture/scene41.jpeg",
        title: "Farewell Ceremony",
        description: "Emotional send-off celebrations for graduating batches",
      },
    ],
  },
  {
    id: "academic-results",
    category: "Academic Results",
    description:
      "Consistent excellence across NEET and Board examinations. Our students don't just pass; they dominate with high distinctions and medical seat placements.",
    icon: Trophy,
    hideInNav: true,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene61.jpeg",
        title: "NEET Top Rankers",
        description: "Our star performers who secured high ranks in NEET 2023",
      },
      {
        type: "image",
        url: "/assets/culture/scene62.jpeg",
        title: "Medical Seat Achievers",
        description: "Students who successfully joined Government Medical Colleges",
      },
      {
        type: "image",
        url: "/assets/culture/scene63.jpeg",
        title: "12th Board Toppers",
        description: "Consistent 480+ scorers in State and CBSE Board Exams",
      },
      {
        type: "image",
        url: "/assets/culture/scene64.jpeg",
        title: "Chemistry Distinction",
        description: "Celebrating 95+ marks in Chemistry by 40% of the batch",
      },
      {
        type: "image",
        url: "/assets/culture/scene65.jpeg",
        title: "Biology Excellence",
        description: "Top scorers in Biology who paved their way to medical excellence",
      },
      {
        type: "image",
        url: "/assets/culture/scene66.jpeg",
        title: "Batch of 2023",
        description: "The proud graduates of ARK Learning Arena",
      },
      {
        type: "image",
        url: "/assets/culture/scene67.jpeg",
        title: "Parent-Teacher Pride",
        description: "Celebrating success stories with the ARK family",
      },
    ],
  },
  {
    id: "achievements-activities",
    category: "Activities & Wins",
    description:
      "Beyond the books — ARK students excel in sports, quizzes, and innovative projects, showcasing their all-round development.",
    icon: Sparkles,
    items: [
      {
        type: "image",
        url: "/assets/culture/scene73.jpeg",
        title: "Quiz Competitions",
        description: "ARK students excelling in inter-school and district quiz events",
      },
      {
        type: "image",
        url: "/assets/culture/scene72.jpeg",
        title: "Yoga Day",
        description: "Innovative science fair projects showcasing practical application",
      },
      {
        type: "image",
        url: "/assets/culture/scene71.jpeg",
        title: "Extracurricular Excellence",
        description: "Students balancing academics with sports, arts, and leadership",
      },
    ],
  },
];

export const highlightCards: HighlightCard[] = [
  {
    title: "Festivals at ARK",
    description:
      "Vibrant celebrations of Diwali, Pongal, Christmas & more — building community spirit and cultural pride among students.",
    image: "/assets/culture/scene1.png",
    accent: "from-amber-500/80 to-orange-600/90",
  },
  {
    title: "Student Achievements",
    description:
      "80% NEET qualification rate, 3 government medical seats, and 95%+ board distinction — discipline creates destiny.",
    image: "/assets/culture/poster_1.png",
    accent: "from-emerald-500/80 to-teal-600/90",
  },
  {
    title: "Daily Academic Life",
    description:
      "Structured routines, weekly tests, doubt sessions, and personalised tracking — every day at ARK is purposeful.",
    image: "/assets/culture/scene5.png",
    accent: "from-blue-500/80 to-indigo-600/90",
  },
  {
    title: "Mentorship Culture",
    description:
      "Small batches of 15–20 ensure every student gets individual attention, motivation, and expert academic guidance.",
    image: "/assets/culture/scene6.png",
    accent: "from-pink-500/80 to-rose-600/90",
  },
];
