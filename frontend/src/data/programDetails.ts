import type { ProgramDetail } from "@/components/ark/ProgramDetailModal";

export const programDetails: Record<string, ProgramDetail> = {
  "ARK Nestlings": {
    id: "ark-nestlings",
    title: "ARK Nestlings",
    subtitle: "Early Childhood Program",
    tagline: "A safe and nurturing space for young minds to grow — daycare, structured learning, and homework support under one roof.",
    description:
      "ARK Nestlings is a carefully crafted early childhood program that provides a safe, nurturing, and stimulating environment for children aged 3–7. We combine structured daycare with foundational academic learning, ensuring children develop not just cognitively but emotionally and socially. Our approach integrates play-based learning with discipline, setting the stage for lifelong academic excellence. Dream. Believe. Achieve.",
    ageGroup: "Ages 3–7",
    duration: "Full Day / Half Day",
    batchSize: "Small Batches (10–15)",
    highlights: [
      "Safe, supervised daycare environment",
      "Structured homework support sessions",
      "Phonics and early reading foundation",
      "Number sense and basic mathematics",
      "Creative arts, craft, and play-based learning",
      "Character education and value-building",
      "Confident communication development",
      "Daily parent communication updates",
    ],
    curriculum: [
      {
        subject: "Language & Literacy",
        topics: ["Phonics", "Reading readiness", "Storytelling", "Vocabulary building", "Writing basics"],
      },
      {
        subject: "Mathematics Foundation",
        topics: ["Number recognition", "Counting", "Shapes & patterns", "Basic operations", "Logical thinking"],
      },
      {
        subject: "EVS & Life Skills",
        topics: ["Environmental awareness", "Hygiene habits", "Social skills", "Emotional regulation", "Team play"],
      },
      {
        subject: "Creative Development",
        topics: ["Drawing & craft", "Music & rhythm", "Drama & role play", "Storytelling", "Physical education"],
      },
    ],
    features: [
      { icon: "Target", title: "Play-Based Learning", desc: "Learning through structured play to build curiosity, creativity, and problem-solving from day one." },
      { icon: "Users", title: "Small Batch Care", desc: "10–15 children per batch ensures personalized attention and individual growth tracking." },
      { icon: "BookOpen", title: "Homework Support", desc: "Dedicated homework sessions ensure school assignments are completed with understanding, not just compliance." },
      { icon: "Award", title: "Parent Transparency", desc: "Daily updates on child's activity, mood, progress, and behavior to keep parents fully informed." },
    ],
    outcomes: [
      "Strong phonics foundation and reading readiness before formal schooling",
      "Confidence in basic numeracy and logical thinking",
      "Emotional maturity and social interaction skills",
      "Healthy study habits and discipline established early",
      "Creative expression and communication skills",
      "Seamless, confident transition into formal primary education",
    ],
    color: "bg-gradient-to-br from-ark-navy to-ark-navy-light",
    accentColor: "bg-ark-pink/20 text-white",
  },

  "ARK Tuition": {
    id: "ark-tuition",
    title: "ARK Tuition",
    subtitle: "Class 6–12 Academic Coaching",
    tagline: "Expert tuition for ICSE, CBSE, and State Board students with weekly testing and continuous parent updates.",
    description:
      "ARK Tuition provides structured, concept-first coaching for students from Class 6 to 12 across ICSE, CBSE, and State Board curricula. Our approach goes beyond exam preparation — we build genuine understanding and consistent habits. Weekly tests, performance analytics, and remedial sessions ensure no student is left behind. Every student receives individual attention in small batches with regular parent reporting.",
    ageGroup: "Class 6–12",
    duration: "Academic Year",
    batchSize: "Batches of 15–20",
    highlights: [
      "ICSE, CBSE & State Board coverage",
      "Weekly assessments and performance tracking",
      "Subject-wise remedial sessions",
      "Monthly parent performance reports",
      "Doubt-clearing sessions every week",
      "Strong focus on board exam preparation",
      "Attendance and discipline tracking",
      "Individual performance analytics",
    ],
    curriculum: [
      {
        subject: "Science",
        topics: ["Physics", "Chemistry", "Biology", "Practicals support", "Lab concepts"],
      },
      {
        subject: "Mathematics",
        topics: ["Algebra", "Geometry", "Trigonometry", "Statistics", "Calculus (11-12)"],
      },
      {
        subject: "Social Studies / Humanities",
        topics: ["History", "Geography", "Civics", "Economics", "Political Science"],
      },
      {
        subject: "Languages",
        topics: ["English grammar & writing", "Tamil / Hindi support", "Reading comprehension", "Essay writing"],
      },
    ],
    features: [
      { icon: "Target", title: "Weekly Testing System", desc: "Every student is tested weekly. Results are tracked and used to identify gaps and plan remedial sessions." },
      { icon: "BookOpen", title: "Concept-First Teaching", desc: "We prioritize deep understanding over rote memorization — building students who think, not just reproduce answers." },
      { icon: "Users", title: "Parent Reporting", desc: "Structured monthly reports with attendance, test scores, and subject-wise performance trends shared with parents." },
      { icon: "Award", title: "Board Exam Strategy", desc: "Dedicated board prep modules activate from Class 9 onwards with full-length mock tests and answer writing training." },
    ],
    outcomes: [
      "Strong subject-wise conceptual foundation across all boards",
      "Consistent improvement in test scores tracked over time",
      "Exam readiness with full-length mock test experience",
      "Parents fully informed and involved in academic journey",
      "Discipline and study habits that carry into higher education",
      "85%+ board distinction rate across batches",
    ],
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentColor: "bg-white/20 text-white",
  },

  "Board Exam Prep": {
    id: "board-exam-prep",
    title: "Board Exam Prep",
    subtitle: "Class 10 & 12 Intensive",
    tagline: "Intensive board preparation with concept clarity, full-length mock tests, and performance analytics. 95%+ distinction rate.",
    description:
      "Our Board Exam Preparation program is designed for Class 10 and 12 students who want to achieve distinction-level scores. We run intensive modules with timed practice, full-length mock tests under exam conditions, and deep performance analytics. Every topic is covered, every gap is identified, and every student receives a personalized improvement plan. The result: consistent 95%+ distinction rate across boards.",
    ageGroup: "Class 10 & 12",
    duration: "6–12 Month Intensive",
    batchSize: "Small Focused Batches",
    highlights: [
      "Full-length board mock tests every month",
      "Timed practice under exam conditions",
      "Section-wise performance breakdown",
      "Personalized revision plans",
      "Answer writing and presentation training",
      "95%+ distinction rate track record",
      "Last 10-year question paper analysis",
      "High-priority chapter identification",
    ],
    curriculum: [
      {
        subject: "Class 10 Focus",
        topics: ["All subjects (Science, Maths, Social, English)", "Chapter importance mapping", "Question pattern analysis", "Mock board exams"],
      },
      {
        subject: "Class 12 Science",
        topics: ["Physics", "Chemistry", "Biology / Maths", "English", "Full board mock series"],
      },
      {
        subject: "Revision Strategy",
        topics: ["High-priority chapters", "Previous year analysis", "Marking scheme understanding", "Answer presentation"],
      },
    ],
    features: [
      { icon: "Target", title: "Mock Exam Series", desc: "Monthly full-length board simulation tests with detailed answer review and marking scheme guidance." },
      { icon: "Award", title: "95%+ Distinction Rate", desc: "Proven track record of students achieving distinction across ICSE, CBSE, and State Board every year." },
      { icon: "BookOpen", title: "Answer Writing Training", desc: "Dedicated sessions on how to structure answers for maximum marks — critical for board exams." },
      { icon: "Users", title: "Personalized Revision", desc: "Each student receives a custom revision schedule based on their diagnostic test performance." },
    ],
    outcomes: [
      "Distinction-level board exam scores",
      "Deep concept clarity in all subjects",
      "Confidence under timed exam conditions",
      "Strong answer presentation and writing skills",
      "Clear strategy for maximizing marks in every section",
      "Solid foundation for higher education and competitive exams",
    ],
    color: "bg-gradient-to-br from-ark-navy-deep to-ark-navy",
    accentColor: "bg-white/15 text-white",
  },

  "NEET Coaching": {
    id: "neet-coaching",
    title: "NEET Coaching",
    subtitle: "2-Year Intensive Program",
    tagline: "NCERT-based structured NEET preparation. Weekly practice, mock exams, 600+ score strategy, and expert mentoring.",
    description:
      "ARK's NEET Coaching program is a rigorous 2-year structured journey from Class 11 to 12, built specifically to help students qualify NEET with 600+ scores. Our curriculum is deeply NCERT-aligned with systematic topic progression, weekly practice tests, full mock exams, and performance dashboards. Expert faculty guide every student with personalized mentoring. We don't just prepare — we produce qualified doctors.",
    ageGroup: "Class 11–12",
    duration: "2-Year Program",
    batchSize: "Focused Batches of 20",
    highlights: [
      "NCERT-based structured curriculum",
      "Weekly chapter-wise practice tests",
      "Monthly full NEET mock exams",
      "600+ score training strategy",
      "Expert Biology, Physics & Chemistry faculty",
      "Performance dashboard tracking",
      "Doubt sessions every week",
      "NEET-specific answer attempt strategy",
    ],
    curriculum: [
      {
        subject: "Biology",
        topics: ["Botany (all chapters)", "Zoology (all chapters)", "NCERT mastery", "Diagram practice", "High-weightage topics"],
      },
      {
        subject: "Physics",
        topics: ["Mechanics", "Thermodynamics", "Electrostatics", "Optics", "Modern Physics"],
      },
      {
        subject: "Chemistry",
        topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Reaction mechanisms", "NCERT problems"],
      },
      {
        subject: "Test Strategy",
        topics: ["Time management", "Question selection strategy", "Negative marking avoidance", "Mock test analysis", "Rank improvement plan"],
      },
    ],
    features: [
      { icon: "Target", title: "600+ Score Strategy", desc: "Structured topic roadmap and priority ranking to maximize NEET scores — especially Biology which accounts for 360 marks." },
      { icon: "BookOpen", title: "NCERT Mastery System", desc: "Every NCERT line is covered systematically. NEET is 80% NCERT — we ensure complete mastery before moving to references." },
      { icon: "Award", title: "Mock Exam Analytics", desc: "Detailed analytics after every mock exam — topic-wise accuracy, time spent, and rank projection reports." },
      { icon: "Users", title: "Expert Mentoring", desc: "One-on-one mentoring sessions for strategy alignment, motivation, and performance correction throughout the year." },
    ],
    outcomes: [
      "NEET qualification with 600+ scores",
      "Complete NCERT mastery across all three subjects",
      "Government medical seat achievement",
      "Exam temperament and time management under pressure",
      "Rank-ready preparation with mock test analytics",
      "Confidence and readiness for medical college interview",
    ],
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    accentColor: "bg-white/20 text-white",
  },

  "NEET Foundation": {
    id: "neet-foundation",
    title: "NEET Foundation",
    subtitle: "Early NEET Preparation",
    tagline: "Early NEET preparation for Class 8–10 students. Concept building, Olympiad readiness, and structured testing calendar.",
    description:
      "The NEET Foundation program is designed for Class 8, 9, and 10 students who aspire to pursue medicine. We start early — building strong conceptual foundations in Science and Mathematics, introducing NEET-level thinking, and preparing students for Olympiads and competitive assessments. By the time these students reach Class 11, they are already ahead. Early advantage is the decisive factor in NEET success.",
    ageGroup: "Class 8–10",
    duration: "3-Year Foundation",
    batchSize: "Small Focused Batches",
    highlights: [
      "Early NEET conceptual foundation",
      "Olympiad preparation (Science, Maths)",
      "Weekly foundation tests",
      "Introduction to Biology, Physics, Chemistry",
      "Logical reasoning and analytical skills",
      "Strong NCERT base from Class 8",
      "Confidence building for competitive exams",
      "Structured annual testing calendar",
    ],
    curriculum: [
      {
        subject: "Science Foundation",
        topics: ["Biology basics", "Physics fundamentals", "Chemistry introduction", "Lab skills", "Conceptual problem solving"],
      },
      {
        subject: "Mathematics",
        topics: ["Algebra", "Number theory", "Geometry", "Statistics", "Logical reasoning"],
      },
      {
        subject: "Olympiad Prep",
        topics: ["Science Olympiad", "Maths Olympiad", "NTSE preparation", "Reasoning skills", "Competitive mindset"],
      },
    ],
    features: [
      { icon: "Target", title: "Early Advantage", desc: "Starting NEET preparation from Class 8 gives students a 3-year head start over peers who begin only in Class 11." },
      { icon: "BookOpen", title: "Olympiad Readiness", desc: "Simultaneous Olympiad preparation builds problem-solving skills and competitive exposure at an early age." },
      { icon: "Award", title: "Structured Testing", desc: "Annual testing calendar with chapter-wise, unit-wise, and cumulative assessments to track foundation progress." },
      { icon: "Users", title: "Mentorship", desc: "Regular mentoring to build the right mindset, study habits, and career clarity for aspiring doctors." },
    ],
    outcomes: [
      "Strong Science and Maths foundation ready for Class 11 NEET curriculum",
      "Olympiad qualifications and competitive exam experience",
      "Analytical thinking and problem-solving skills",
      "Confident transition into NEET Coaching (Class 11-12)",
      "3-year head start over peers starting late",
      "Clarity of career goal and discipline to pursue medicine",
    ],
    color: "bg-gradient-to-br from-ark-pink to-pink-600",
    accentColor: "bg-white/20 text-white",
  },

  "Repeaters Batch": {
    id: "repeaters-batch",
    title: "Repeaters Batch",
    subtitle: "NEET Repeaters Program",
    tagline: "Specially designed for NEET repeaters. Diagnostic assessment, targeted remediation, and accelerated preparation strategy.",
    description:
      "The ARK Repeaters Batch is a specially designed intensive program for students who have attempted NEET and are committed to improving their score. We start with a comprehensive diagnostic assessment to identify exact weak areas, then build a custom remediation and acceleration plan. This is not a re-run of the same preparation — it is a strategic, focused campaign to crack NEET in the repeat attempt.",
    ageGroup: "NEET Repeaters",
    duration: "6–12 Month Crash",
    batchSize: "Small Focused Batches",
    highlights: [
      "Diagnostic assessment on day one",
      "Personalized remediation plan",
      "Accelerated topic coverage",
      "Bi-weekly full mock exams",
      "Score improvement tracking",
      "Psychological support and motivation",
      "Previous year paper mastery",
      "Time management and attempt strategy",
    ],
    curriculum: [
      {
        subject: "Diagnostic & Remediation",
        topics: ["Topic-wise weakness mapping", "Priority subject identification", "Custom study plan", "Gap analysis"],
      },
      {
        subject: "Biology Intensive",
        topics: ["High-weightage chapter mastery", "NCERT line-by-line revision", "Diagram mastery", "Mock test analysis"],
      },
      {
        subject: "Physics & Chemistry",
        topics: ["Formula revision", "Reaction mechanisms", "Problem pattern mastery", "Speed and accuracy training"],
      },
      {
        subject: "Mock Exam Series",
        topics: ["Bi-weekly full mocks", "Previous year analysis", "Score simulation", "Rank prediction"],
      },
    ],
    features: [
      { icon: "Target", title: "Diagnostic First", desc: "We begin every repeater's journey with a full diagnostic assessment to identify exact gaps — no guesswork, only precision." },
      { icon: "BookOpen", title: "Accelerated Coverage", desc: "Compressed timeline with maximum impact — strategic topic coverage based on NEET weightage and personal weak areas." },
      { icon: "Award", title: "Bi-Weekly Mocks", desc: "Frequent full-length mock exams to build exam temperament, speed, accuracy, and confidence for the repeat attempt." },
      { icon: "Users", title: "Motivational Support", desc: "Dedicated counselling and motivational sessions to rebuild confidence and focus for students in their repeat year." },
    ],
    outcomes: [
      "Significant NEET score improvement over previous attempt",
      "Complete identification and remediation of weak areas",
      "Government seat qualification in the repeat year",
      "Exam confidence and psychological readiness",
      "Strategic time allocation and attempt planning",
      "Full mock test experience and performance analytics",
    ],
    color: "bg-gradient-to-br from-ark-navy-deep to-slate-700",
    accentColor: "bg-white/15 text-white",
  },
};
