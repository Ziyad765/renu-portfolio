import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Renu Venugopal",
  title: "Computer Science and Design Undergraduate",
  objective: "Detail-oriented and innovative Computer Science and Design undergraduate with strong problem-solving abilities and a passion for developing user-centric solutions. Seeking opportunities to apply technical and creative skills to contribute to impactful and scalable projects.",
  contact: {
    phone: "",
    email: "renuvenugopal178@gmail.com",
    linkedin: "https://linkedin.com/in/renu-venugopal-476573276",
    github: "https://github.com/renuvenugopal178"
  },
  education: [
    {
      degree: "B.Tech in Computer Science and Design",
      institution: "Government Engineering College, Kozhikode",
      yearOrScore: "Expected 2026"
    },
    {
      degree: "Higher Secondary Education",
      institution: "GHSS Peruva, Kottayam",
      yearOrScore: "93%"
    },
    {
      degree: "Secondary Education",
      institution: "HSS Muttuchira, Kottayam",
      yearOrScore: "90%+"
    }
  ],
  projects: [
    {
      title: "HashNet",
      subtitle: "AI-Driven Network Security Layer",
      category: "Security",
      description: [
        "Designed a privacy-focused AI-driven networking layer replacing IP routing with hashed, ephemeral identities.",
        "Integrated semantic filtering using SBERT and DistilBERT.",
        "Implemented role-based access control and a self-healing agent using Isolation Forest."
      ],
      technologies: ["Python", "Transformers", "AES-GCM", "Flask"]
    },
    {
      title: "Eventify",
      subtitle: "Event Management Web Application",
      category: "Web",
      description: [
        "Developed a full-stack web application for event discovery, booking, payment handling, and customization."
      ],
      technologies: ["React", "Supabase", "Tailwind CSS"]
    },
    {
      title: "TinkerHack",
      subtitle: "AI-Based Women Safety Application",
      category: "AI/ML",
      description: [
        "Built an AI-powered safety application to detect emergency situations and trigger real-time alerts."
      ],
      technologies: ["React", "EmailJS", "Tailwind CSS"]
    },
    {
      title: "CyberSafe",
      subtitle: "IEEE SIGHT Project",
      category: "VR",
      description: [
        "Designed a cybersecurity awareness initiative using an interactive VR-based game.",
        "Targeted Kudumbashree members to improve cyber safety awareness."
      ],
      technologies: ["VR", "Game Design"]
    }
  ],
  internships: [
    {
      role: "Virtual Internship – Ethical Hacking",
      company: "C-DAC Noida",
      duration: "July–August 2025"
    },
    {
      role: "Cybersecurity Intern",
      company: "Deloitte",
      duration: "June 2025"
    },
    {
      role: "AI/ML Intern",
      company: "Maitexa Technology Pvt. Ltd.",
      duration: "July 2024"
    },
    {
      role: "Internship in AR/VR",
      company: "IEEE VR - MSS",
      duration: "June–July"
    }
  ],
  skills: {
    technical: [
      { name: "Languages", skills: ["Python", "C", "JavaScript", "HTML/CSS", "Node.js"] },
      { name: "Web Dev", skills: ["React.js", "Supabase", "Tailwind CSS"] },
      { name: "AI/ML", skills: ["Model Integration", "Semantic Filtering", "Transformers"] },
      { name: "Cybersecurity", skills: ["Ethical Hacking", "Penetration Testing"] },
      { name: "Tools", skills: ["Git", "Figma"] }
    ],
    chartData: [
      { subject: 'Web Dev', A: 90, fullMark: 100 },
      { subject: 'AI / ML', A: 85, fullMark: 100 },
      { subject: 'Cybersecurity', A: 80, fullMark: 100 },
      { subject: 'Design (Figma)', A: 75, fullMark: 100 },
      { subject: 'AR / VR', A: 70, fullMark: 100 },
      { subject: 'Core CS (C/Py)', A: 95, fullMark: 100 },
    ]
  },
  volunteer: [
    "Active volunteer in IEEE, IEEE Computer Society, ISTE, and NSS.",
    "Member of IEDC and TinkerHub.",
    "Coordinator for IEEE SIGHT CyberSafety, Sahamitra Program, and AKCSSC.",
    "Mentored juniors in C programming and conducted VR training sessions under IEEE initiatives."
  ]
};