import {
  Building2,
  HeartHandshake,
  PartyPopper,
  GraduationCap,
  MapPin,
  Trophy,
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
        url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
        title: "Modern Classrooms",
        description: "Well-equipped, air-conditioned classrooms designed for focused learning",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80",
        title: "Study Zones",
        description: "Dedicated quiet zones for self-study and revision sessions",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
        title: "Library & Resources",
        description: "Extensive collection of NCERT, reference books and study materials",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        title: "Interactive Sessions",
        description: "Engaging group discussions and collaborative problem-solving",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
        title: "Lab Practicals",
        description: "Hands-on experiments bringing Physics, Chemistry & Biology to life",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
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
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
        title: "One-on-One Mentorship",
        description: "Personalised guidance sessions addressing individual academic needs",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        title: "Group Discussions",
        description: "Open forums where students freely discuss doubts and concepts",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
        title: "Doubt Clearing Sessions",
        description: "Extended after-class sessions ensuring no student is left behind",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80",
        title: "Motivation Meets",
        description: "Regular motivational sessions to keep students focused and inspired",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
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
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        title: "Annual Day",
        description: "Grand annual celebrations showcasing student talents and achievements",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
        title: "Festival Celebrations",
        description: "Vibrant Diwali, Pongal, and Christmas celebrations at campus",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        title: "Cultural Programs",
        description: "Students performing traditional and contemporary cultural acts",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
        title: "Award Ceremonies",
        description: "Recognising academic excellence and outstanding performance",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
        title: "Sports Day",
        description: "Annual sports events promoting fitness and team spirit",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
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
        url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
        title: "Farewell Ceremony",
        description: "Emotional send-off celebrations for graduating batches",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&q=80",
        title: "Memories Wall",
        description: "Students sharing their favourite ARK moments and memories",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1525921429624-479f6258d857?w=800&q=80",
        title: "Certificate Distribution",
        description: "Honouring students with completion certificates and awards",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
        title: "Group Photos",
        description: "Capturing lifelong friendships and bonds formed at ARK",
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
        url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80",
        title: "Science Museum Visits",
        description: "Interactive exploration at science and technology museums",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        title: "Nature Excursions",
        description: "Field trips to botanical gardens and wildlife sanctuaries",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        title: "Lab & Research Visits",
        description: "Visits to research institutions inspiring future scientists",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
        title: "Educational Workshops",
        description: "Participating in external workshops and seminars",
      },
    ],
  },
  {
    id: "achievements-activities",
    category: "Achievements & Activities",
    description:
      "From NEET qualifiers to board exam toppers, from quiz champions to science fair winners — ARK students consistently prove that discipline creates destiny.",
    icon: Trophy,
    items: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1567168544230-b57c3236e2b1?w=800&q=80",
        title: "NEET Success Stories",
        description: "Students celebrating NEET qualification with 80% success rate",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
        title: "Board Exam Toppers",
        description: "Consistent 95%+ distinction rate across all board examinations",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
        title: "Quiz Competitions",
        description: "ARK students excelling in inter-school and district quiz events",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80",
        title: "Science Projects",
        description: "Innovative science fair projects showcasing practical application",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    accent: "from-amber-500/80 to-orange-600/90",
  },
  {
    title: "Student Achievements",
    description:
      "80% NEET qualification rate, 3 government medical seats, and 95%+ board distinction — discipline creates destiny.",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
    accent: "from-emerald-500/80 to-teal-600/90",
  },
  {
    title: "Daily Academic Life",
    description:
      "Structured routines, weekly tests, doubt sessions, and personalised tracking — every day at ARK is purposeful.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    accent: "from-blue-500/80 to-indigo-600/90",
  },
  {
    title: "Mentorship Culture",
    description:
      "Small batches of 15–20 ensure every student gets individual attention, motivation, and expert academic guidance.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80",
    accent: "from-pink-500/80 to-rose-600/90",
  },
];
