// ─── PERSONAL ────────────────────────────────────────────────────────────────
export const personal = {
  name:      "Trisha Banerjee",
  role:      "Computer Science & Engineering Student",
  tagline:   "Computer Science and Engineering student with experience in Java, SQL, web technologies, machine learning, Android development, and full-stack application development.",
  email:     "trishabanerjee755@gmail.com",
  phone:     "+91 9832454637",
  // GitHub / LinkedIn — no verified URLs provided; preserved as-is
  github:    "#",
  linkedin:  "#",
  resume:    "/resume.pdf",
  location:  "Hooghly, West Bengal, India",
  available: true,
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  headline:
    "Computer Science and Engineering student — building thoughtful software with Java, SQL, and modern web technologies.",
  paragraphs: [
    "I am pursuing a B.Tech in Computer Science and Engineering at Narula Institute of Technology, Kolkata (SGPA 8.53). My academic and project experience spans full-stack development, machine learning, and Android development. I am interested in Data Structures & Algorithms, open-source contribution, and building software that is clean, efficient, and purposeful.",
    "I have worked on a full-stack AI-powered placement preparation platform using React and Spring Boot, a real-time hand gesture recognition system using Python and SVM, and a dynamic quiz application using JavaScript and REST APIs. I have also completed virtual internships in AI-ML with Google for Developers and in front-end web development with AICTE and IBM SkillsBuild.",
  ],
  stats: [
    { value: "70+",  label: "DSA Problems Solved" },
    { value: "3",    label: "Projects Built" },
    { value: "8.53", label: "Current SGPA" },
  ],
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Exact categories from CV — no invented skills
export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "SQL"],
  },
  {
    category: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Android Studio"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "01",
    title: "AI-Based Placement Preparation & Mock Interview Platform",
    description:
      "Developed a full-stack placement preparation platform with company-wise coding, aptitude, and interview questions. Built an AI-powered mock interview system with JWT authentication, performance tracking, and MySQL database integration using Spring Boot and Hibernate.",
    tech: ["React", "Spring Boot", "Java", "Maven", "Hibernate", "MySQL"],
    year: "2025",
    image: "/images/project1.jpg",
    github: "#",
    live:   null,
  },
  {
    id: "02",
    title: "Real-Time Camera-Based Hand Recognition System",
    description:
      "Developed a real-time hand gesture recognition system using MediaPipe and SVM. Trained a machine learning model for accurate gesture classification and real-time prediction.",
    tech: ["Python", "SVM", "MediaPipe"],
    year: "2025",
    image: "/images/project2.jpg",
    github: "#",
    live:   null,
  },
  {
    id: "03",
    title: "Quiz App",
    description:
      "Developed a responsive quiz application with dynamic questions sourced from the Open Trivia DB API. Implemented score tracking, category selection, and interactive quiz features.",
    tech: ["HTML", "CSS", "JavaScript", "Open Trivia DB API"],
    year: "2024",
    image: "/images/project3.jpg",
    github: "#",
    live:   null,
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
// Achievements + Certifications + Internships all use the same
// year | title | org table layout — no new UI section needed.
export const achievements = [
  // ── Achievements ──
  {
    year: "2026",
    title:
      "Patent Published — \"Real-Time Camera-Based Hand Gesture Recognition System for Sign Language Interpretation Using a Learning-Based Classification Model\" (IN202631031263 A1)",
    org: "Indian Patent Office",
  },
  {
    year: "2024",
    title:
      "Smart India Hackathon — Qualified at Institute Level, Waitlisted for Grand Finale",
    org: "AICTE",
  },
  {
    year: "Ongoing",
    title: "Solved 70+ Data Structures & Algorithms problems",
    org: "LeetCode",
  },

  // ── Certifications ──
  {
    year: "2024",
    title: "Programming in Java — Elite + Gold",
    org: "NPTEL",
  },
  {
    year: "2024",
    title: "Cloud Computing — Elite + Silver",
    org: "NPTEL",
  },
  {
    year: "2024",
    title: "Oracle Certified Foundations Associate",
    org: "Oracle",
  },
  {
    year: "2024",
    title: "Android App Development (30-hour Training)",
    org: "Training Programme",
  },

  // ── Internships ──
  {
    year: "2025",
    title: "AI-ML Virtual Internship",
    org: "Google for Developers",
  },
  {
    year: "2024",
    title: "Front-End Web Development Virtual Internship",
    org: "AICTE – Edunet Foundation – IBM SkillsBuild",
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree:      "B.Tech — Computer Science & Engineering",
    institution: "Narula Institute of Technology",
    location:    "Kolkata, West Bengal",
    period:      "Oct 2024 – Jun 2027",
    status:      "Pursuing",
    note:        "SGPA: 8.53 / 10",
  },
  {
    degree:      "Diploma — Computer Science & Technology",
    institution: "Murarai Government Polytechnic (WEBSCTE)",
    location:    "West Bengal",
    period:      "Dec 2021 – Jun 2024",
    status:      "Completed",
    note:        "84%",
  },
  {
    degree:      "Higher Secondary (Class XII)",
    institution: "Nakunda Katyayani High School",
    location:    "West Bengal",
    period:      "2021",
    status:      "Completed",
    note:        "WBCHSE — 67%",
  },
  {
    degree:      "Secondary Education (Class X)",
    institution: "Nakunda Katyayani High School",
    location:    "West Bengal",
    period:      "2019",
    status:      "Completed",
    note:        "WBBSE — 53%",
  },
];
