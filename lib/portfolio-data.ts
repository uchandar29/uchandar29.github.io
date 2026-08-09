export const personalInfo = {
  name: "Urmil Chandarana",
  firstName: "Urmil Jatin",
  lastName: "Chandarana",
  fullName: "Urmil Jatin Chandarana",
  title: "Software Development Engineer",
  location: "Davis, California",
  phone: "+1 530-760-6834",
  phoneHref: "+15307606834",
  email: "urmilchandarana@gmail.com",
  bio: "I build resilient systems end to end — from core banking modules at Oracle to large-scale ML data pipelines and a community-first delivery platform. Currently a CS master's student at UC Davis, based in Davis, California.",
  links: {
    github: "https://github.com/uchandar29",
    githubHandle: "github.com/uchandar29",
    linkedin: "https://linkedin.com/in/urmilchandarana",
    linkedinHandle: "in/urmilchandarana",
    medium: "https://medium.com/@urmilchandarana",
    mediumHandle: "medium.com/@urmilchandarana",
  },
  resumeUrl: "/Resume_Urmil Jatin Chandarana.pdf",
  profileImage: "/images/profile.jpg",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export interface Highlight {
  icon: string;
  value: string;
  label: string;
}

export const highlights: Highlight[] = [
  { icon: "map-pin", value: "Davis, CA", label: "Based in California" },
  { icon: "briefcase", value: "3+ yrs", label: "Shipping production software" },
  { icon: "graduation-cap", value: "4.0 GPA", label: "MS Computer Science · UC Davis" },
  { icon: "database", value: "600K+", label: "Samples processed on HPC" },
];

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: "code-2",
    items: [
      { name: "Java", icon: "coffee" },
      { name: "C++", icon: "braces" },
      { name: "JavaScript", icon: "file-code" },
      { name: "Python", icon: "code" },
      { name: "SQL", icon: "database" },
      { name: "TypeScript", icon: "file-code-2" },
      { name: "HTML", icon: "code-xml" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: "boxes",
    items: [
      { name: "Spring Boot", icon: "leaf" },
      { name: "Node.js", icon: "hexagon" },
      { name: "Django", icon: "server" },
      { name: "FastAPI", icon: "zap" },
      { name: "Flutter", icon: "smartphone" },
      { name: "Next.js", icon: "panels-top-left" },
      { name: "React.js", icon: "atom" },
      { name: "Tailwind CSS", icon: "wind" },
    ],
  },
  {
    title: "ML / Data",
    icon: "brain-circuit",
    items: [
      { name: "PyTorch", icon: "flame" },
      { name: "HuggingFace", icon: "smile" },
      { name: "PyArrow", icon: "feather" },
      { name: "Ollama", icon: "bot" },
      { name: "vLLM", icon: "cpu" },
      { name: "Model Quantization", icon: "scaling" },
      { name: "Scikit-learn", icon: "scatter-chart" },
    ],
  },
  {
    title: "Tools / Cloud",
    icon: "wrench",
    items: [
      { name: "Docker", icon: "container" },
      { name: "Kubernetes", icon: "ship-wheel" },
      { name: "AWS", icon: "cloud" },
      { name: "Oracle Cloud", icon: "cloud-cog" },
      { name: "Redis", icon: "layers" },
      { name: "MongoDB", icon: "leaf" },
      { name: "DynamoDB", icon: "database" },
      { name: "Git", icon: "git-branch" },
      { name: "GitHub Actions", icon: "git-merge" },
      { name: "Bazel", icon: "box" },
    ],
  },
  {
    title: "AI Coding Tools",
    icon: "sparkles",
    items: [
      { name: "Claude Code", icon: "terminal" },
      { name: "Cursor", icon: "mouse-pointer-2" },
    ],
  },
];

export interface Experience {
  date: string;
  place: string;
  role: string;
  org: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    date: "Apr 2026 – Present",
    place: "Davis, CA",
    role: "Graduate Student Researcher",
    org: "PAIBL Lab · Project AgML, UC Davis",
    points: [
      "Built an automated VLM dataset ingestion pipeline that analyzes raw datasets, generates schema mappings, and converts outputs to Parquet for direct HuggingFace upload.",
      "Developed a benchmarking framework across structural quality, difficulty, diversity, and annotation reliability, producing a leaderboard for benchmark selection.",
      "Engineered large-scale (600K+ sample) processing on SLURM-managed HPC, resolving PyArrow/HuggingFace pipeline bottlenecks.",
    ],
  },
  {
    date: "Aug 2022 – Jun 2025",
    place: "Pune, India",
    role: "Associate Consultant · Software Development Engineer",
    org: "Oracle Financial Services Software",
    points: [
      "Engineered 10+ core banking modules on the OBDX platform using Spring Boot, Java 8, REST/SOAP APIs and microservices for a major European bank.",
      "Orchestrated migration to a containerized CI/CD environment with Docker, cutting setup and deployment time by 85% with 100% environment parity.",
      "Led 7 product patch-set upgrades and served as technical single point-of-contact for client stakeholders.",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  date: string;
  gpa: string;
  detail: string;
}

export const education: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "University of California, Davis",
    date: "Sep 2025 – Present",
    gpa: "GPA 4.0",
    detail: "Distributed Database Systems, Computer & Information Security, Computer Networks, Visual Analytics.",
  },
  {
    degree: "B.Tech Computer Engineering",
    school: "K.J. Somaiya College of Engineering, Mumbai",
    date: "Aug 2018 – Jun 2022",
    gpa: "GPA 9.4",
    detail: "Advanced Algorithms, Operating Systems, Full-Stack Development, Blockchain, Cloud Computing.",
  },
];

export interface Project {
  title: string;
  category: string;
  period: string;
  icon: string;
  hasImage: boolean;
  slotId: string;
  blurb: string;
  stack: string[];
}

export const featured: Project[] = [
  {
    title: "Localbite",
    category: "Full-Stack",
    period: "Feb 2026 – Present",
    icon: "utensils-crossed",
    hasImage: true,
    slotId: "proj-localbite",
    blurb: "A community-first food-delivery platform cutting restaurant commissions from 30% to 8–12%, with a Redis + WebSocket phased dispatch engine and Stripe multi-party settlement.",
    stack: ["FastAPI", "Next.js", "Redis", "Kafka", "WebSocket", "Stripe"],
  },
  {
    title: "AgML VLM Data Pipeline",
    category: "AI / ML",
    period: "Apr 2026 – Present",
    icon: "brain-circuit",
    hasImage: true,
    slotId: "proj-agml",
    blurb: "Automated vision-language-model dataset ingestion and benchmarking for agricultural AI, at 600K+ sample scale on SLURM HPC infrastructure.",
    stack: ["PyTorch", "HuggingFace", "vLLM", "PyArrow", "SLURM"],
  },
  {
    title: "Oracle Banking (OBDX)",
    category: "Full-Stack",
    period: "Aug 2022 – Jun 2025",
    icon: "landmark",
    hasImage: false,
    slotId: "proj-obdx",
    blurb: "10+ core banking modules for a major European bank, plus DevOps automation and containerized delivery cutting deploy time 85%.",
    stack: ["Spring Boot", "Java 8", "REST/SOAP", "Docker", "Jenkins"],
  },
];

export interface GalleryItem {
  id: string;
  caption: string;
  note: string;
}

export const gallery: GalleryItem[] = [
  { id: "gallery-1", caption: "Caption one", note: "Where was this? Add a short note." },
  { id: "gallery-2", caption: "Caption two", note: "A favourite moment." },
  { id: "gallery-3", caption: "Caption three", note: "Add a short note." },
  { id: "gallery-4", caption: "Caption four", note: "Travels & talks." },
  { id: "gallery-5", caption: "Caption five", note: "The story here." },
];
