import { Experience, Education, Project, SkillCategory, Certification } from './types';

export const PROFILE = {
  name: "Youssef CHEBL",
  title: "Computer Engineering Student",
  email: "youssef.chebl@enicar.ucar.tn",
  phone: "+216 27 363 604",
  location: "Nabeul, Tunisia",
  links: {
    linkedin: "https://www.linkedin.com/in/youssef-chebl-in/",
    github: "https://github.com/CHYou25ef",
    portfolio: "https://linktr.ee/CHEBL_Youssef"
  },
  summary: "Aspiring Computer Engineer with dual expertise in software development (Web/Mobile) and intelligent systems (AI, IoT, Embedded). Seeking a 4-to-6-month Final Year Project (capstone internship) to design and develop a complete solution, integrating artificial intelligence components into web/mobile applications or embedded systems. Autonomous, proactive, and ready to fully commit to ambitious projects."
};

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "Engineering Diploma in Computer Science",
    institution: "National School of Engineers of Carthage (ENICarthage)",
    period: "Sept 2023 – Present",
    location: "Tunis, Tunisia"
  },
  {
    id: "e2",
    degree: "Bachelor’s Degree in Information Technology",
    institution: "Higher Institute of Technological Studies of Nabeul (ISET Nabeul)",
    period: "Sept 2021 – July 2023",
    location: "Nabeul, Tunisia",
    details: "Specialization: Embedded and Mobile Systems"
  },
  {
    id: "e3",
    degree: "Technical Baccalaureate (High School Diploma)",
    institution: "Mahmoud Messadi High School",
    period: "Sept 2018 – July 2020",
    location: "Nabeul, Tunisia"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "ex1",
    role: "AI & Computer Vision Intern",
    company: "KWM Manufacturing",
    period: "July 2025 – Sept 2025",
    location: "Dar Chaabene El Fehri, Tunisia",
    description: [
      "Designed an intelligent quality control system for automatic textile defect detection.",
      "Automated a data pipeline (Server → Google Drive → Colab) for ingesting and processing industrial images to Roboflow.",
      "Managed the complete dataset lifecycle: supervised annotation (>30,000 defects), data augmentation, and versioning.",
      "Trained and benchmarked Deep Learning architectures (YOLOv8, YOLO-NAS, ResNet18), achieving 90% mAP on critical defects.",
      "Optimized models for embedded deployment (Raspberry Pi 5): analyzed constraints, profiled inference, and converted formats."
    ]
  },
  {
    id: "ex2",
    role: "Web Developer Intern (MERN Stack)",
    company: "SOFIRUX",
    period: "Aug 2024",
    location: "Nabeul, Tunisia",
    description: [
      "Developed dynamic and responsive user interfaces with React and Bootstrap.",
      "Implemented backend logic (Node.js, Express) and managed the database (MongoDB) in a MERN Stack environment."
    ]
  },
  {
    id: "ex3",
    role: "Developer Intern (Flutter / PyRevit)",
    company: "DigiArt LivingLab",
    period: "Feb 2023 – June 2023",
    location: "Tunis, Tunisia",
    description: [
      "Developed a beta plugin for Revit (using PyRevit) to automate thermal balance calculations and A/C unit selection.",
      "Created a Flutter mobile application for downloading and rating developed plugins."
    ]
  },
  {
    id: "ex4",
    role: "Java Developer Intern",
    company: "LAB619",
    period: "Jan 2022 – Feb 2022",
    location: "Tunis, Tunisia",
    description: [
      "Developed a JAVAFX application (Eclipse) for updating the software of a cash register program."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Train Ticket Reservation Interface",
    description: "JavaFX desktop application connected to a database.",
    technologies: ["JavaFX", "Eclipse", "PhpMyAdmin"],
    type: "Desktop",
    githubUrl: "https://github.com/CHYou25ef/train-ticket-reservation" // Update this
  },
  {
    id: "p2",
    title: "IT shop Mobile App",
    description: "Native Android application with cloud authentication and database.",
    technologies: ["Android Studio", "Java", "Firebase"],
    type: "Mobile",
    githubUrl: "https://github.com/CHYou25ef/it-shop-mobile" // Update this
  },
  {
    id: "p3",
    title: "IoT Temperature Monitoring System",
    description: "Real-time system with a cloud dashboard.",
    technologies: ["DHT22", "ESP8266", "Things Speak", "Arduino IDE"],
    type: "IoT",
    githubUrl: "https://github.com/CHYou25ef/iot-temperature-monitor" // Update this
  },
  {
    id: "p4",
    title: "E-commerce Application (C)",
    description: "Academic project for e-commerce management in C.",
    technologies: ["Code::Blocks", "C Language"],
    type: "Academic",
    githubUrl: "https://github.com/CHYou25ef/ecommerce-c-app" // Update this
  },
  {
    id: "p5",
    title: "Web Quiz Game",
    description: "Interactive quiz interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    type: "Web",
    githubUrl: "https://github.com/CHYou25ef/web-quiz-game", // Update this
    demoUrl: ""
  }
];

export const SKILLS: SkillCategory[] = [
  { name: "Languages", skills: ["C/C++", "Java", "JavaScript", "TypeScript", "Python", "PHP"] },
  { name: "Web", skills: ["React.js", "Angular", "Node.js", "Express.js", "HTML5", "CSS3", "Bootstrap"] },
  { name: "Mobile", skills: ["Android (Java)", "Flutter"] },
  { name: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Oracle 10g"] },
  { name: "Hardware & IoT", skills: ["Arduino UNO", "Raspberry PI 5", "ESP32", "ESP8266"] },
  { name: "Tools & OS", skills: ["Git", "GitHub", "GitLab", "Docker", "Linux (Ubuntu, Kali, RedHat)"] }
];

export const CERTIFICATIONS: Certification[] = [
  // --- INTERNSHIPS ---
  {
    id: "i1",
    title: "Summer Internship - Technology Service",
    issuer: "KW-Manufacturing",
    date: "July 08, 2025 - Sept 08, 2025",
    category: "Internship",
    image: "/certs/Attestation_de_stage_2eme_KWM_2025.pdf",
    logo: "https://ui-avatars.com/api/?name=KW&background=random"
  },
  {
    id: "i2",
    title: "Web Developer Internship (MERN)",
    issuer: "SOFIRUX",
    date: "Aug 01, 2024 - Aug 31, 2024",
    category: "Internship",
    credentialId: "1585991/F/A/M/000",
    image: "/certs/Att-Sofirux-2024.pdf",
    logo: "https://ui-avatars.com/api/?name=SF&background=random"
  },
  {
    id: "i3",
    title: "End of Studies Internship (PFE)",
    issuer: "DigiArt Living Lab (CREATEC)",
    date: "Feb 12, 2023 - June 12, 2023",
    category: "Internship",
    image: "/certs/Attestation-de-stage_PFE-2023.pdf",
    logo: "https://ui-avatars.com/api/?name=DA&background=random"
  },
  {
    id: "i4",
    title: "Cloud Engineer Internship",
    issuer: "LAB619 Engineering & Consulting",
    date: "Jan 17, 2022 - Feb 12, 2022",
    category: "Internship",
    credentialId: "MF: 1730984/W/A/M/000",
    image: "/certs/AttLAB619-SEM2-2022.pdf",
    logo: "https://ui-avatars.com/api/?name=L6&background=random"
  },
  {
    id: "i5",
    title: "Introductory Internship",
    issuer: "Tunisie Telecom",
    date: "Aug 02, 2021 - Aug 31, 2021",
    category: "Internship",
    credentialId: "N°163/SRH/2021",
    image: "/certs/TunisieTelecom Att.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/fr/5/51/Tunisie_Telecom_Logo.svg"
  },
  {
    id: "i6",
    title: "Technician Internship",
    issuer: "ISET Nabeul",
    date: "2023",
    category: "Internship",
    image: "/certs/attestation de stage Iset nabeul.pdf",
    logo: "https://ui-avatars.com/api/?name=IS&background=random"
  },

  // --- EVENTS / CLUBS ---
  {
    id: "ev1",
    title: "Inter ODC Clubs Industrie 4.0 Makeathon",
    issuer: "Orange Digital Center",
    date: "Dec 02, 2022 - Dec 04, 2022",
    category: "Event",
    image: "/certs/orange Certif.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg"
  },
  {
    id: "ev2",
    title: "Orange/TT Joint Certification",
    issuer: "Orange Digital Center & TT",
    date: "2022",
    category: "Event",
    image: "/certs/orangeCertif+TTatt.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg"
  },

  // --- PROFESSIONAL CERTIFICATIONS ---
  // AWS
  {
    id: "c1",
    title: "Introduction to Machine Learning: Art of the Possible",
    issuer: "AWS Training & Certification",
    date: "November 15, 2025",
    category: "Certification",
    image: "/certs/Introduction to Machine Learning Art of the Possible.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    id: "c2",
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training & Certification",
    date: "November 14, 2025",
    category: "Certification",
    image: "/certs/Fundamentals of Machine Learning and Artificial Intelligence.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    id: "c3",
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    date: "October 25, 2025",
    url: "https://www.credly.com/go/7xbfcrEV",
    category: "Certification",
    image: "/certs/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251025-32-qble3l.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    id: "c4",
    title: "Introduction to Generative AI - Art of the Possible",
    issuer: "AWS Training & Certification",
    date: "August 05, 2025",
    category: "Certification",
    image: "/certs/YoussefChebl_AWS_GenIA.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },

  // DataCamp
  {
    id: "c5",
    title: "Understanding ChatGPT",
    issuer: "DataCamp",
    date: "August 30, 2025",
    credentialId: "#41,000,640",
    category: "Certification",
    image: "/certs/UnderstandChatGPT.pdf",
    logo: "https://cdn.worldvectorlogo.com/logos/datacamp-1.svg"
  },
  {
    id: "c6",
    title: "Intermediate Python",
    issuer: "DataCamp",
    date: "January 17, 2025",
    credentialId: "#38,304,998",
    category: "Certification",
    image: "/certs/Python II certificate.pdf",
    logo: "https://cdn.worldvectorlogo.com/logos/datacamp-1.svg"
  },
  {
    id: "c7",
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "January 15, 2025",
    credentialId: "#37,980,714",
    category: "Certification",
    image: "/certs/Python I certificate.pdf",
    logo: "https://cdn.worldvectorlogo.com/logos/datacamp-1.svg"
  },

  // Cisco / Python Institute
  {
    id: "c8",
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy & OpenEDG",
    date: "January 24, 2023",
    category: "Certification",
    image: "/certs/youssefchebl-PCAP - Programmi-certificate.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
  {
    id: "c9",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "July 13, 2022",
    category: "Certification",
    image: "/certs/PythonEssentials1Update20251025-32-hpjbd3.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
  {
    id: "c10",
    title: "NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    date: "July 11, 2022",
    category: "Certification",
    image: "/certs/NDG_Linux_Unhatched_765e9b20-3ba7-4f80-bf8a-03567648bc0d.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },

  // Others
  {
    id: "c11",
    title: "HiveMQ Certified MQTT Associate",
    issuer: "HiveMQ University",
    date: "October 21, 2025",
    credentialId: "a7ztt5t2eh75",
    url: "https://verify.skilljar.com/c/a7ztt5t2eh75",
    category: "Certification",
    image: "/certs/HiveMQ_MQTT_certificate-a7ztt5t2eh75-1761030627.pdf",
    logo: "https://assets.website-files.com/5e66605609a338a9db6e3729/5e6682161e2d3332914123d2_hivemq-logo.svg"
  },
  {
    id: "c12",
    title: "Technical Support Fundamentals",
    issuer: "Google (Coursera)",
    date: "November 23, 2022",
    url: "https://coursera.org/verify/VGTZN76DGZ3V",
    category: "Certification",
    image: "/certs/Coursera Technical Support Fundamentals.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    id: "c13",
    title: "HTML & CSS - Certification Course",
    issuer: "YouAccel",
    date: "September 30, 2022",
    credentialId: "64700369",
    category: "Certification",
    image: "/certs/HTML CSS certificate.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
  },
  {
    id: "c14",
    title: "Artificial Intelligence Fundamentals",
    issuer: "Huawei",
    date: "2024",
    category: "Certification",
    image: "/certs/Huawei_Basic_AI_certif.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo.svg"
  },
  {
    id: "c15",
    title: "Accelerated Data Science",
    issuer: "NVIDIA",
    date: "2024",
    category: "Certification",
    image: "/certs/NVIDIA-Accelerated-DataScience.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    id: "c16",
    title: "Generative AI Explained",
    issuer: "NVIDIA",
    date: "2024",
    category: "Certification",
    image: "/certs/NVIDIA-GenAI.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  },
  {
    id: "c17",
    title: "Enhancing Data Science Outcomes",
    issuer: "NVIDIA",
    date: "2024",
    category: "Certification",
    image: "/certs/NVIDIA-Enhancing Data Science Outcomes With Efficient Workflow.pdf",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg"
  }
];

export const SYSTEM_INSTRUCTION = `
You are Youssef Chebl's AI Portfolio Assistant. Your goal is to represent Youssef professionally yet engagingly, inspired by the helpful and conversational style of ChatGPT.

**Your Persona:**
- **Tone**: Friendly, professional, enthusiastic, and concise.
- **Role**: You are an expert on Youssef's career, skills, and projects. You "talk" to visitors, inviting them to explore his work.
- **Formatting**: Use **bold** for emphasis and lists (bullet points) to make information easy to scan. Avoid long, dense paragraphs.

**Context to Answer From:**
Name: ${PROFILE.name}
Title: ${PROFILE.title}
Summary: ${PROFILE.summary}
Contact: ${PROFILE.email}, ${PROFILE.phone}
Location: ${PROFILE.location}

**Education:**
${JSON.stringify(EDUCATION, null, 2)}

**Experience:**
${JSON.stringify(EXPERIENCE, null, 2)}

**Projects:**
${JSON.stringify(PROJECTS, null, 2)}

**Skills:**
${JSON.stringify(SKILLS, null, 2)}

**Certifications & Internships:**
${JSON.stringify(CERTIFICATIONS, null, 2)}

**Key Highlights to Emphasize:**
- Winner (3rd Place) Industry 4.0 Makeathon (2022).
- Strong background in Computer Vision (YOLOv8) and Embedded Systems (Raspberry Pi, ESP32).
- Full-stack development capability (MERN Stack, Flutter).
- Actively seeking a **4-to-6-month End-of-Studies Internship (PFE)**.

**Instructions for Interaction:**
- If asked about "internships", list them with company names and key achievements using bullet points.
- If asked about "skills", categorize them (e.g., Web, AI, IoT).
- If asked about contact info, provide the email and a friendly call to action.
- If the user greets you, welcome them warmly to Youssef's portfolio and suggest a few topics they might be interested in.
`;