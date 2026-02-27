// ─── ARK Learning Arena: Comprehensive FAQ Data ───
// 50 FAQs organized by category for SEO and AI visibility

export interface FAQ {
    q: string;
    a: string;
    links?: { text: string; href: string }[];
}

export interface FAQCategory {
    id: string;
    title: string;
    description: string;
    faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
    {
        id: "neet",
        title: "NEET Coaching FAQs",
        description: "Common questions about our NEET preparation programs in Chennai",
        faqs: [
            {
                q: "What is the NEET coaching program at ARK Learning Arena in Chennai?",
                a: "ARK Learning Arena's NEET coaching program is a structured 2-year intensive course designed for Class 11 and 12 students in Chennai. Our program is built on NCERT-based curriculum with weekly chapter-wise practice tests, monthly full NEET mock exams, expert Biology, Physics, and Chemistry faculty, and a proven 600+ score training strategy. We have consistently maintained an 80% NEET qualification rate among our coached students.",
                links: [{ text: "Learn more about NEET Coaching", href: "/neet-coaching-in-chennai" }],
            },
            {
                q: "What is ARK's NEET qualification success rate?",
                a: "ARK Learning Arena has consistently maintained an 80% NEET qualification rate among our coached students. We have produced 3 government medical seat holders. Our structured 2-year NEET program, NCERT-focused curriculum, weekly testing model, and expert faculty mentorship are the key factors behind our success rate in Chennai.",
                links: [{ text: "View our results", href: "/results-achievements" }],
            },
            {
                q: "How does ARK prepare students for NEET 2026?",
                a: "For NEET 2026, ARK follows a systematic preparation strategy: (1) Complete NCERT mastery across Physics, Chemistry, and Biology, (2) Weekly chapter-wise tests to ensure concept retention, (3) Monthly full-length NEET mock exams under exam conditions, (4) Performance analytics with topic-wise accuracy and rank projection, (5) One-on-one mentoring for strategy alignment, and (6) Dedicated doubt-clearing sessions every week.",
            },
            {
                q: "What is the fee structure for NEET coaching at ARK Chennai?",
                a: "ARK Learning Arena offers competitive and transparent fee structures for our NEET coaching programs. Fees vary based on the program duration (2-year regular or crash course for repeaters). We also offer early enrollment discounts and sibling concessions. For detailed fee information, please contact our admissions team at +91 76393 99217 or book a free academic assessment.",
            },
            {
                q: "Does ARK offer a NEET Foundation program for younger students?",
                a: "Yes, ARK offers a NEET Foundation program for students in Class 8–10. This early-start program builds strong conceptual foundations in Science and Mathematics, introduces NEET-level thinking, and prepares students for Olympiads. By starting early, students gain a 3-year head start over peers who begin NEET preparation only in Class 11.",
                links: [{ text: "Explore NEET Foundation", href: "/class-11-12-science-coaching" }],
            },
            {
                q: "What is the batch size for NEET coaching at ARK?",
                a: "ARK maintains focused batches of 20 students for NEET coaching. Small batch sizes ensure that every student receives personalised attention, gets their doubts cleared promptly, and is individually tracked through our performance analytics system. This is a key differentiator from large coaching centres in Chennai.",
            },
            {
                q: "Does ARK provide NEET coaching for repeaters?",
                a: "Yes, ARK has a specially designed Repeaters Batch for students who have attempted NEET previously. We start with a comprehensive diagnostic assessment, build a custom remediation and acceleration plan, and offer bi-weekly full mock exams. The program is a strategic, focused campaign designed to significantly improve scores in the repeat attempt.",
                links: [{ text: "NEET Coaching details", href: "/neet-coaching-in-chennai" }],
            },
            {
                q: "What subjects are covered in NEET coaching at ARK?",
                a: "ARK's NEET coaching comprehensively covers all three NEET subjects: Biology (Botany and Zoology — all chapters with NCERT mastery and diagram practice), Physics (Mechanics, Thermodynamics, Electrostatics, Optics, Modern Physics), and Chemistry (Physical, Organic, and Inorganic Chemistry with reaction mechanisms). We also include dedicated test strategy sessions covering time management, question selection, and negative marking avoidance.",
            },
            {
                q: "How does ARK track NEET preparation progress?",
                a: "ARK uses a comprehensive performance dashboard that tracks every student's NEET preparation progress. This includes weekly chapter-wise test scores, monthly mock exam results with topic-wise accuracy breakdowns, time spent per section analysis, rank projection reports, and trend tracking over the entire preparation period. Parents receive detailed monthly performance reports.",
            },
            {
                q: "What makes ARK's NEET coaching different from other institutes in Chennai?",
                a: "ARK's NEET coaching stands apart through: (1) Truly small batches of 20 (not 50-100 like most centres), (2) NCERT-first approach — 80% of NEET is NCERT-based, (3) Weekly testing with individual performance tracking, (4) Monthly parent transparency reports, (5) Remedial system for struggling students, (6) Expert faculty with proven results, and (7) A structured accountability system including attendance tracking and discipline framework. We are not just a coaching centre — we are an academic ecosystem.",
            },
            {
                q: "Does ARK offer online NEET coaching?",
                a: "ARK Learning Arena primarily offers in-person NEET coaching at our Chennai centre to ensure maximum student engagement, discipline, and accountability. However, we provide supplementary online resources including recorded revision lectures, practice test platforms, and digital performance analytics dashboards for our enrolled students.",
            },
            {
                q: "What is ARK's study plan for NEET 2026?",
                a: "ARK's NEET 2026 study plan follows a structured timeline: Phase 1 (Apr–Aug): Complete syllabus coverage with NCERT mastery and chapter-wise tests. Phase 2 (Sep–Dec): Revision, problem-solving intensive, and unit-wise mock tests. Phase 3 (Jan–Mar): Full-length mock exam series, previous year analysis, and exam strategy refinement. Phase 4 (Apr–May): Final revision sprint with daily mock tests and personalized gap analysis.",
            },
            {
                q: "How do I enroll for NEET coaching at ARK Chennai?",
                a: "Enrolling at ARK is simple: (1) Book a free Academic Diagnostic Assessment (ADA) by calling +91 76393 99217 or filling our online form. (2) Attend the diagnostic test and counselling session. (3) Receive your personalized SWOT analysis and recommended program. (4) Complete registration and begin your structured NEET preparation journey. Early enrollment is recommended as batch sizes are limited.",
            },
            {
                q: "Does ARK provide NEET mock tests?",
                a: "Yes, ARK conducts regular NEET mock tests as a core part of our coaching program. We offer weekly chapter-wise practice tests, monthly full-length NEET simulation tests under exam conditions, and bi-weekly mocks for repeater batch students. Each mock test is followed by detailed analytics including topic-wise accuracy, time analysis, and rank projection.",
                links: [{ text: "See our results", href: "/results-achievements" }],
            },
            {
                q: "What are ARK's NEET topper scores?",
                a: "ARK's NEET toppers have achieved exceptional scores: Priya S. scored 680/720 (AIR 4,821) and secured a Government Medical Seat in 2024. Arjun K. scored 672/720 (AIR 6,102), and Divya R. scored 665/720 (AIR 7,834) — both securing Government Medical Seats. These results demonstrate the effectiveness of our structured NEET coaching approach in Chennai.",
                links: [{ text: "View all results", href: "/results-achievements" }],
            },
        ],
    },
    {
        id: "tuition",
        title: "Tuition & Academic FAQs",
        description: "Questions about tuition programs for Class 6–12 at ARK Chennai",
        faqs: [
            {
                q: "What tuition programs does ARK offer for Class 6–10?",
                a: "ARK offers comprehensive tuition for Class 6–10 students across ICSE, CBSE, and Tamil Nadu State Board. Our program includes expert coaching in Science, Mathematics, Social Studies, and Languages with weekly assessments, subject-wise remedial sessions, monthly parent performance reports, and individual performance analytics. We focus on building genuine understanding rather than rote memorization.",
                links: [{ text: "Explore Class 6-10 Tuition", href: "/class-6-10-tuition" }],
            },
            {
                q: "What boards does ARK cover for tuition?",
                a: "ARK covers all three major boards in Chennai: ICSE, CBSE, and Tamil Nadu State Board for Classes 6–12. Our faculty is trained for all major boards, ensuring concept clarity aligned with each board's specific syllabus, exam pattern, and marking scheme. Whether your child studies at a CBSE school in Chennai or a State Board school, ARK has tailored programs for them.",
                links: [{ text: "Tuition Centre details", href: "/tuition-centre-in-chennai" }],
            },
            {
                q: "Does ARK provide tuition for Class 11 and 12 Science?",
                a: "Yes, ARK provides specialized Science coaching for Class 11 and 12 students. Our program covers Physics, Chemistry, Biology, and Mathematics with board exam preparation integrated alongside. For students pursuing NEET alongside boards, we offer an integrated program that covers both board syllabus and NEET preparation simultaneously.",
                links: [{ text: "Class 11-12 Science Coaching", href: "/class-11-12-science-coaching" }],
            },
            {
                q: "How does ARK's weekly testing system work?",
                a: "Every student at ARK is assessed weekly through structured chapter-wise tests. Test results are analyzed to identify conceptual gaps, track improvement trends, and determine which students need remedial attention. The results feed into our performance analytics system and are included in the monthly parent transparency reports. No student slips through the cracks.",
            },
            {
                q: "What is the batch size for tuition at ARK?",
                a: "ARK maintains intentionally small batch sizes of 15–20 students for tuition programs. This ensures that every student receives personalised attention, gets their doubts addressed promptly, and is individually monitored. Small batches are a cornerstone of ARK's academic philosophy — allowing our faculty to identify individual challenges and provide targeted support.",
            },
            {
                q: "Does ARK provide Board Exam preparation?",
                a: "Yes, ARK has an intensive Board Exam Preparation program for Class 10 and 12 students. This includes full-length mock board tests every month, timed practice under exam conditions, section-wise performance breakdown, personalized revision plans, answer writing and presentation training, and last 10-year question paper analysis. We maintain a 95%+ distinction rate across boards.",
            },
            {
                q: "How does ARK help with homework and assignments?",
                a: "ARK provides dedicated homework support sessions where students complete their school assignments with proper understanding, not just compliance. For our Nestlings program (ages 3–7), homework support is a core component. For older students, our doubt-clearing sessions address any assignment-related challenges alongside concept building.",
            },
            {
                q: "What is ARK's remedial system?",
                a: "ARK's remedial system is designed to ensure no student is left behind. When our weekly testing identifies students struggling with specific concepts, they receive targeted remedial sessions. These are personalized interventions focused on closing specific knowledge gaps. Every gap is identified through data-driven analysis and addressed through structured re-teaching and practice.",
            },
            {
                q: "Does ARK provide performance reports to parents?",
                a: "Yes, parent transparency is one of ARK's core values. Parents receive detailed monthly performance reports covering attendance tracking, weekly test scores and trends, subject-wise performance breakdown, areas of improvement identified, remedial actions taken, and overall academic standing. We also conduct regular parent-teacher meetings to discuss student progress.",
            },
            {
                q: "What subjects does ARK tuition cover?",
                a: "ARK tuition covers all core subjects: Science (Physics, Chemistry, Biology with practical support), Mathematics (Algebra, Geometry, Trigonometry, Statistics, Calculus for 11-12), Social Studies and Humanities (History, Geography, Civics, Economics), and Languages (English grammar & writing, Tamil/Hindi support, reading comprehension, essay writing).",
                links: [{ text: "View all tuition programs", href: "/tuition-centre-in-chennai" }],
            },
            {
                q: "Does ARK offer Physics tuition in Chennai?",
                a: "Yes, ARK offers expert Physics tuition in Chennai for Class 6–12 students as well as NEET aspirants. Our Physics faculty covers Mechanics, Thermodynamics, Electrostatics, Optics, Modern Physics, and all board-level topics with a focus on concept clarity, numerical problem-solving, and practical understanding. Physics tuition is available for CBSE, ICSE, and State Board students.",
            },
            {
                q: "What is the ARK Nestlings program?",
                a: "ARK Nestlings is our early childhood program for children aged 3–7. It provides a safe, nurturing environment combining structured daycare with foundational academic learning. The program includes phonics and early reading foundation, number sense and basic mathematics, creative arts and play-based learning, character education, and daily parent communication updates. The motto: Dream. Believe. Achieve.",
            },
            {
                q: "How does ARK help students prepare for competitive exams alongside boards?",
                a: "ARK offers integrated programs that cover board syllabus alongside competitive exam preparation. For NEET aspirants, our curriculum aligns NCERT-based board preparation with NEET-specific problem-solving and mock tests. For foundation-level students, we combine school curriculum with Olympiad preparation and competitive exam exposure, giving them a head start without academic overload.",
            },
        ],
    },
    {
        id: "chennai",
        title: "Chennai Location FAQs",
        description: "Questions about ARK's location, accessibility, and Chennai operations",
        faqs: [
            {
                q: "Where is ARK Learning Arena located in Chennai?",
                a: "ARK Learning Arena is located in Chennai, Tamil Nadu. Our centre is accessible from all major areas of Chennai including T. Nagar, Adyar, Velachery, Anna Nagar, and surrounding localities. We are situated in a well-connected area with easy access via public transport and private vehicles. Contact us at +91 76393 99217 for exact directions.",
            },
            {
                q: "Is ARK the best coaching centre in Chennai?",
                a: "ARK Learning Arena is consistently rated among the top coaching centres in Chennai for NEET preparation and academic tuition. What sets us apart is our structured academic ecosystem — small batches, weekly testing, monthly parent reports, performance analytics, and a remedial system. With an 80% NEET qualification rate, 3 government medical seat holders, and a 95%+ board distinction rate, our results speak for themselves.",
                links: [{ text: "View our results", href: "/results-achievements" }],
            },
            {
                q: "What areas in Chennai does ARK serve?",
                a: "ARK Learning Arena serves students from across Chennai including T. Nagar, Adyar, Velachery, Mylapore, Anna Nagar, Porur, Tambaram, Chromepet, Pallavaram, Sholinganallur, OMR, ECR, and surrounding areas in Tamil Nadu. Our central location makes us accessible from most parts of Chennai, and our result-oriented approach attracts students from across the city.",
            },
            {
                q: "Does ARK offer franchise opportunities in Chennai?",
                a: "Yes, ARK offers franchise opportunities with three models: Flagship (₹22L) — full-scale centre with complete academic setup, Studio (₹13L) — mid-scale centre for focused programs, and POD (₹7L) — compact centre for specific localities. Each model comes with full training, academic support, brand usage rights, curriculum access, and ongoing mentorship from the ARK founding team.",
            },
            {
                q: "What is the timing for classes at ARK Chennai?",
                a: "ARK operates both morning and evening batches to accommodate different school schedules. Tuition classes run after school hours, NEET coaching has dedicated time slots, and our Nestlings program offers full-day and half-day options. Specific timings vary by program and batch. Contact us at +91 76393 99217 or WhatsApp us for the current schedule.",
            },
            {
                q: "How is ARK different from other coaching centres in Chennai?",
                a: "ARK is a structured academic ecosystem — not just a tuition centre. Our differentiators in Chennai include: (1) Proven weekly testing framework with no student left untracked, (2) Monthly parent transparency reports with full academic visibility, (3) Performance analytics with trend analysis and data-driven improvement, (4) Remedial system for struggling students, (5) Accountability structure with strict discipline policy, and (6) Mentorship model that builds character beyond academics.",
                links: [{ text: "Learn why parents choose ARK", href: "/tuition-centre-in-chennai" }],
            },
            {
                q: "Is discipline mandatory at ARK Chennai?",
                a: "Yes, discipline is the foundation of ARK's academic system and is non-negotiable. We have a clear attendance policy, behaviour expectations, and academic accountability structures. Students are expected to maintain regular attendance, complete all assignments, and participate in weekly tests. This disciplined approach is what creates the results that set ARK apart from ordinary coaching centres in Chennai.",
            },
            {
                q: "How do I contact ARK Learning Arena?",
                a: "You can reach ARK Learning Arena through multiple channels: Phone: +91 76393 99217, Email: info@tuitionwithark.com, WhatsApp: wa.me/917639399217, Website: tuitionwithark.com. You can also visit our centre in Chennai directly. Our admissions counsellors are available to answer your questions and help you book a free Academic Diagnostic Assessment.",
            },
            {
                q: "Does ARK accept admissions throughout the year?",
                a: "ARK accepts admissions on a rolling basis, subject to batch availability. However, we recommend early enrollment as our batch sizes are intentionally limited to maintain quality. The best time to join is at the beginning of the academic year, but mid-year admissions are possible after a diagnostic assessment to assess current academic standing and place the student appropriately.",
            },
            {
                q: "What is the Academic Diagnostic Assessment (ADA) at ARK?",
                a: "The Academic Diagnostic Assessment (ADA) is the first step for every student joining ARK. It is a comprehensive evaluation that assesses the student's current academic level, identifies strengths and weaknesses across subjects, and produces a SWOT analysis. Based on the ADA results, ARK recommends the most suitable program and creates a personalized academic improvement plan. The initial ADA is offered free of charge.",
            },
            {
                q: "Does ARK provide transportation for students in Chennai?",
                a: "Currently, ARK does not provide dedicated transportation services. However, our centre is located in a well-connected area of Chennai with easy access via public transport (buses and metro) and private vehicles. Parents find it convenient to drop and pick up students, and many students from nearby areas commute independently.",
            },
            {
                q: "What safety measures does ARK have for students?",
                a: "ARK prioritizes student safety with supervised premises, controlled entry/exit, trained staff, and clear safety protocols. For our Nestlings program (ages 3-7), we maintain extra safety measures including child-safe environments, verified caregivers, and daily parent communication. All ARK staff undergo background verification and are trained in child safety protocols.",
            },
        ],
    },
];

// Flatten all FAQs for schema markup
export const allFAQs: FAQ[] = faqCategories.flatMap((c) => c.faqs);
