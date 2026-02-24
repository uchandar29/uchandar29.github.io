export const personalInfo = {
  name: "Urmil Chandarana",
  firstName: "Urmil Jatin",
  lastName: "Chandarana",
  fullName: "Urmil Jatin Chandarana",
  title: "Software Engineer & CS Graduate Student",
  location: "Davis, California",
  phone: "+1 (530) 760-6834",
  email: "urmilchandarana@gmail.com",
  graduationDate: "March 2027 (Expected)",
  openToRelocation: true,
  bio: `I'm a passionate software engineer and Computer Science graduate student at UC Davis, driven by a deep curiosity for building robust, scalable systems. My interests lie at the intersection of Distributed Systems, System Engineering, Network Security, and exploring how AI can be integrated to enhance these domains. With nearly 3 years of industry experience at Oracle, I've engineered full-stack solutions, optimized DevOps pipelines, and led containerization migrations that transformed deployment workflows. I'm actively seeking new opportunities to learn, grow, and thrive in environments where I can take ownership and make a meaningful impact.`,
  links: {
    github: "https://github.com/DimitriBelikov",
    linkedin: "https://linkedin.com/in/urmilchandarana",
    medium: "https://medium.com/@urmilchandarana",
  },
  resumeUrl: "/Resume_Urmil Jatin Chandarana.pdf",
  profileImage: "/images/profile.jpg",
};

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    institution: "University of California, Davis",
    degree: "Master of Science",
    field: "Computer Science",
    location: "Davis, California",
    startDate: "Sept 2025",
    endDate: "March 2027 (Expected)",
    gpa: "4.0 / 4.0",
    coursework: [
      "ECS 265: Distributed Database Systems",
      "ECS 235A: Computer and Information Security",
    ],
  },
  {
    institution: "K.J. Somaiya College of Engineering",
    degree: "Bachelor of Technology",
    field: "Computer Engineering",
    location: "Mumbai, India",
    startDate: "Aug 2018",
    endDate: "Jun 2022",
    gpa: "9.4 / 10",
    coursework: [
      "Advanced Algorithms: Design and Analysis",
      "Operating Systems",
      "Full Stack Development",
      "Computer Network",
      "Blockchain",
      "Cloud Computing & Emerging Technologies",
    ],
  },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Associate Consultant (Software Development Engineer)",
    company: "Oracle Financial Services Software Limited",
    location: "Pune, India",
    startDate: "Aug 2022",
    endDate: "Jun 2025",
    highlights: [
      "Engineered and delivered full-stack features for the Oracle Banking Digital Experience (OBDX) platform, using Spring Boot, Core Java, and OJET for a major European Bank.",
      "Streamlined DevOps pipelines, reducing manual intervention by 30% using tools including Jenkins & Gradle and implemented automation guidelines to enhance team efficiency.",
      "Orchestrated the migration from a traditional application setup to a containerized environment using Docker, reducing environment setup and deployment time by 85% while achieving 100% environment parity across development and production.",
      "Spearheaded the development and delivery of critical modules, including a Login system via CAS & Bill Payment Functionality, ensuring seamless integration under tight deadlines alongside collaborating with clients.",
      "Led 7 product patch set upgrades, ensuring meticulous planning and error-free execution and acted as a technical SPC (Single point-of-contact) for client stakeholders.",
      "Optimized team efficiency by 75% through 10+ technical enablement sessions and multiple requirement workshops; successfully mitigated requirement-related bugs and accelerated the adoption of new product features.",
    ],
    technologies: [
      "Core Java",
      "JavaScript",
      "SQL",
      "Spring Boot",
      "Docker",
      "Jenkins",
      "Gradle",
      "AWS",
      "Microservices",
      "Maven",
      "SVN",
    ],
  },
  {
    title: "Jr. Development Intern",
    company: "Aloyt - The Technology Company",
    location: "Mumbai, India",
    startDate: "Apr 2021",
    endDate: "Jul 2021",
    highlights: [
      "Developed a multilingual voice translation Flutter app with a Django backend; achieved real-time translation for numerous regional languages by integrating Google's Speech-to-Text and Text-to-Speech APIs.",
      "Reduced translation latency by 50% through optimizing API call sequences and implementing a Python-based language conversion module.",
    ],
    technologies: ["Flutter", "Python", "Django", "Google APIs"],
  },
  {
    title: "Python Intern",
    company: "Swabhav Techlabs",
    location: "Mumbai, India",
    startDate: "Jan 2021",
    endDate: "Mar 2021",
    highlights: [
      "Acquired a solid foundation in Python, Django, Flask and Git, applying these technologies to an application development project.",
      "Successfully developed a Django application as part of a team project, demonstrating hands-on expertise in full-stack development using MySQL and API Development.",
    ],
    technologies: ["Python", "SQL", "HTML", "Bootstrap 5", "Git", "Django", "Flask"],
  },
];

export interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Smart Crowdfunding Using Blockchain",
    description:
      "A transparent crowdfunding platform using Blockchain technology and Smart Contracts to enhance accountability and trust.",
    startDate: "Oct 2021",
    endDate: "Nov 2022",
    highlights: [
      "Developed a transparent crowdfunding platform using Blockchain technology and Smart Contracts to enhance accountability and trust. Addressed key issues in traditional crowdfunding platforms by introducing decentralized features that ensured secure and efficient transactions.",
      "Implemented the project using Ethereum Chain Nodes, Smart Contracts, and the MERN Framework for seamless front-end and back-end integration. Used Ganache for local Ethereum testing & debugging DApp.",
      "Designed a unique voting mechanism within the application where smart contract communication would ensure funds were released only upon achieving a majority vote, promoting contributor oversight.",
      "Engineered the product's architectural roadmap, overseeing the integration of Ethereum chain functionalities, creating product design documents like Use Case Diagrams, Sequence Diagrams etc., planning database & APIs schemas.",
    ],
    technologies: [
      "React JS",
      "Node JS",
      "NoSQL",
      "Blockchain",
      "Solidity",
      "Ganache",
      "Ethereum",
      "Bootstrap 5",
    ],
    githubUrl: "https://github.com/DimitriBelikov/smart-crowdfunding",
  },
  {
    title: "AniFinder - Animal Classification App",
    description:
      "A mobile application for animal classification using Flutter and Machine Learning with CNN.",
    startDate: "Apr 2021",
    endDate: "May 2021",
    highlights: [
      "Designed and developed AniFinder, a mobile application for animal classification, using Flutter for a seamless user experience.",
      "Enabled functionality for users (toddlers/kids) to upload or capture images directly through the application. Trained and integrated an ML model on a comprehensive animal dataset with an efficacy of 89.7%, ensuring accurate classification of animal species.",
      "Implemented end-to-end workflows, including image preprocessing, CNN model training, and result display within the app. Optimized performance by integrating the trained CNN model directly into the Flutter application, ensuring efficient and real-time classification.",
    ],
    technologies: [
      "Flutter",
      "Machine Learning",
      "Python",
      "Supervised Learning",
      "CNN",
    ],
    githubUrl: "https://github.com/DimitriBelikov/AniFinder",
  },
];

export const technicalSkills = {
  languages: [
    "Java",
    "C++",
    "Python",
    "HTML/CSS",
    "JavaScript",
    "SQL",
  ],
  frameworks: [
    "Spring Boot",
    "React JS",
    "Node JS",
    "MERN Stack",
    "FastAPI",
    "Django",
  ],
  tools: [
    "Bazel",
    "Gradle",
    "Maven",
    "Docker",
    "Jenkins",
    "Microservices",
    "SVN",
    "NoSQL Databases",
    "Git",
    "Amazon Web Services (AWS)",
  ],
};

// Leadership & Volunteering - currently empty, section hidden when empty
export interface LeadershipItem {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const leadership: LeadershipItem[] = [];

// Awards & Achievements - currently empty, section hidden when empty
export interface AwardItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const awards: AwardItem[] = [];

// Gallery - currently empty, section hidden when empty
export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export const gallery: GalleryItem[] = [];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
