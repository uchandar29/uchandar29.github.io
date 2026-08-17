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
    bio: "I spent ~3 years at Oracle engineering core banking modules and CI/CD pipelines on Spring Boot microservices, and I'm now an MS Computer Science student at UC Davis strengthening my skills on Cloud Computing & Distributed Systems while experimenting with Vision-Language Models (VLMs) for agricultural applications and researching on dataset benchmarking for better evaluation models.",
    links: {
        github: "https://github.com/uchandar29",
        githubHandle: "github.com/uchandar29",
        linkedin: "https://linkedin.com/in/urmilchandarana",
        linkedinHandle: "in/urmilchandarana",
        medium: "https://medium.com/@urmilchandarana",
        mediumHandle: "medium.com/@urmilchandarana",
    },
    resumeUrl: "/Resume_Urmil Jatin Chandarana.pdf",
    profileImage: "/images/profile.jpeg",
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
    {
        icon: "map-pin",
        value: "Davis, California",
        label: "In close proximity from San Francisco",
    },
    {
        icon: "graduation-cap",
        value: "4.0 GPA",
        label: "MS Computer Science · UC Davis",
    },
    {
        icon: "sparkles",
        value: "Cloud · Distributed Systems · VLMs",
        label: "Current technical focus & research",
    },
    {
        icon: "briefcase",
        value: "~3 yrs",
        label: "Production software experience in industry",
    }
];

export interface WhyHireMePoint {
    icon: string;
    label: string;
    proof: string;
}

export const whyHireMe: WhyHireMePoint[] = [
    {
        icon: "rocket",
        label: "Ships production systems at scale",
        proof: "10+ core banking modules live at a major European bank, built on Spring Boot & Java microservices",
    },
    {
        icon: "gauge",
        label: "Cuts deployment friction",
        proof: "85% faster environment setup, 100% environment parity via Docker + CI/CD",
    },
    {
        icon: "shield-check",
        label: "Owns outcomes end-to-end",
        proof: "Sole technical point-of-contact for 7 client-facing product upgrades, near zero-error execution",
    },
    {
        icon: "sparkles",
        label: "Stays technically current",
        proof: "Now researching distributed systems & experimenting VLMs for agricultural use cases at UC Davis under Prof. Mason Earles",
    },
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
            { name: "Redis", icon: "layers" },
            { name: "MongoDB", icon: "leaf" },
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
    type: "Full-Time" | "Part-Time" | "Internship" | "Contract";
    points: string[];
}

export const experiences: Experience[] = [
    {
        date: "Apr 2026 – Present",
        place: "Davis, California",
        role: "Graduate Student Researcher",
        org: "PAIBL Lab · Project AgML · Advisor: Prof. Mason Earles",
        type: "Part-Time",
        points: [
            "Designed and built an automated VLM dataset ingestion pipeline leveraging an open-source reasoning model that analyzes raw datasets, generates schema mappings, and convert outputs to Parquet format for direct upload to HuggingFace.",
            "Developed a dataset benchmarking framework across structural quality, content difficulty, diversity, and annotation reliability, producing a leaderboard to guide selection of future agricultural VLM benchmark datasets",
            "Building a prompt-translation module combining work on OFAT and combinatorial search over an LLM/VLM to auto-generate optimal per-dataset, per-model prompts, improving zero-shot object detection accuracy for agricultural VLMs",
            "Collaborating with dataset authors to formalize data-sharing agreements and integrate external agricultural datasets into the AgML ecosystem",
        ],
    },
    {
        date: "Aug 2022 – Jun 2025",
        place: "Pune, India",
        role: "Associate Consultant · Software Development Engineer",
        org: "Oracle Financial Services Software",
        type: "Full-Time",
        points: [
            "Engineered 10+ core banking modules for the Oracle Banking Digital Experience (OBDX) platform, using Spring Boot, Java 8, REST APIs/SOAP APIs & Microservices for a major European Bank",
            "Streamlined DevOps pipelines, reducing manual intervention by 30% using tools including Jenkins & Gradle and implemented automation guidelines to enhance team efficiency",
            "Orchestrated the migration from a frequent traditional application setup to a containerized environment using CI/CD pipelines & Docker, reducing environment setup and deployment time by 85% while achieving 100% environment parity across SDLC stages",
            "Led 7 product patch set upgrades, ensuring meticulous planning and error-free execution and acted as a technical SPC (Single point-of-contact) for client stakeholders",
            "Spearheaded the development and delivery of critical modules, including a Login system via CAS & Bill Payment Functionality, ensuring seamless integration under tight deadlines alongside collaborating with clients.",
        ],
    },
    {
        date: "Apr 2021 – Jul 2021",
        place: "Mumbai, India",
        role: "Jr. Technology Developer",
        org: "ALOYT - THE TECHNOLOGY COMPANY",
        type: "Internship",
        points: [
            "Architected and deployed a cross-platform mobile application using Flutter and Django, enabling real-time speech-to-speech translation for regional Indian dialects to bridge communication gaps for local farmers.",
            "Engineered a low-latency Python-based translation pipeline on the backend, integrating advanced speech-processing modules to handle complex linguistic nuances with 92% translation accuracy",
            "Optimized end-to-end latency by 40% through the implementation of asynchronous processing and efficient data streaming between the Flutter frontend and Django backend, ensuring a seamless walkie-talkie user experience",
            "Designed a scalable API infrastructure to manage concurrent audio streams, utilizing optimized request-handling to maintain system stability during peak usage hours.",
        ],
    },
    {
        date: "Jan 2021 – Mar 2021",
        place: "Mumbai, India",
        role: "Python Intern",
        org: "Swabhav Techlabs",
        type: "Internship",
        points: [
            "Acquired a solid foundation in Python, Django, Flask and Git, applying these technologies to an application development project.",
            "Successfully developed a Django application as part of a team project, demonstrating hands-on expertise in full-stack development using MySQL and API Development.",
        ],
    },
    {
        date: "May 2020 – Jun 2020",
        place: "Mumbai, India",
        role: "Student Research Intern",
        org: "KJ Somaiya College of Engineering · Advisor: Prof. Pradnya Gotmare",
        type: "Internship",
        points: [
            "Conducted in-depth research on advanced data extraction techniques, applying them to train neural models for Natural Language Processing (NLP) tasks under guidance of Prof. Pradnya Gotmare.",
            "Research aimed at implementing a neural model to extract answers to questions based on given prose. Reviewed various technical papers to get insights into different NLP methodologies.",
        ],
    },
];

export interface Education {
    degree: string;
    school: string;
    date: string;
    gpa: string;
    coursework: string[];
}

export const education: Education[] = [
    {
        degree: "Master of Science, Computer Science",
        school: "University of California - Davis",
        date: "Sep 2025 – Present",
        gpa: "GPA 4.0",
        coursework: [
            "ECS 265: Distributed Database Systems",
            "ECS 235A: Computer & Information Security",
            "ECS 252: Computer Networks",
            "ECS 273: Visual Analytics",
        ],
    },
    {
        degree: "Bachelor of Technology, Computer Engineering",
        school: "K.J. Somaiya College of Engineering",
        date: "Aug 2018 – Jun 2022",
        gpa: "GPA 9.4",
        coursework: [
            "Advanced Algorithms: Design and Analysis",
            "Relational Database Management Systems",
            "Operating System and System Software",
            "Computer Network",
            "Full-Stack Development Lab",
            "Blockchain",
            "Cloud Computing",
        ],
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
    /*
        Link to the GitHub repo for this project, if it's public. Leave unset
        to show a "Private repository" badge instead of a broken/missing link.
    */
    githubUrl?: string;
}

export const featured: Project[] = [
    {
        title: "AgML-Benchmarking: An Agricultural Dataset Benchmarking Pipeline",
        category: "AI / ML",
        period: "June 2026 – Present",
        icon: "wheat",
        hasImage: false,
        slotId: "proj-agml-benchmarking",
        blurb: "A benchmarking pipeline for computer vision datasets on HuggingFace. Evaluates dataset quality across structural, embedding-based, and diversity metrics — with UMAP visualizations of the embedding space. Designed to be task-agnostic, supporting image classification, object detection, segmentation, and VLM datasets. Built for reproducible evaluation with SLURM support for GPU clusters.",
        stack: [
            "Python",
            "HuggingFace",
            "DINOv2",
            "FAISS",
            "UMAP",
            "scikit-learn",
            "PyTorch",
            "SLURM",
            "Ollama.cpp",
            "vLLM"
        ],
        githubUrl: "https://github.com/uchandar29/agml-benchmarking"
    },
    {
        title: "Lily",
        category: "AI / ML",
        period: "May 2026 – Present",
        icon: "heart-handshake",
        hasImage: false,
        slotId: "proj-lily-hackathon",
        blurb: "A voice-first, AI-powered maternal health triage system designed to provide accessible prenatal and postpartum guidance, clinical screening, and doctor escalation via standard phone calls in maternal healthcare deserts.",
        stack: [
            "Python",
            "React.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Vector Databases",
            "Twilio",
            "Eleven Labs",
            "OpenBioLLM",
            "Claude Code"
        ],
        githubUrl: "https://github.com/localbite-davis/Lily"
    },
    {
        title: "Smart CrowdFunding Using Blockchain",
        category: "Blockchain",
        period: "Oct 2021 – Nov 2022",
        icon: "hand-coins",
        hasImage: false,
        slotId: "proj-smart-crowdfunding",
        blurb: "We have developed a Smart Crowdfunding application based on Blockchain technology i.e. a decentralized application that replaces a middle-man (like a Bank or a human) with a smart block of code ,or so we call it a smart contract, that handles all the functioning related to the donations. A smart contract helps to block the funds within the Blockchain until the campaign contributors agrees to release them to the organizing entity.",
        stack: [
            "Node.js",
            "React.js",
            "Bootstrap 5",
            "MongoDB",
            "Blockchain",
            "Ethereum",
            "Ganache",
            "Solidity",
            "Web3.js",
            "Metamask",
        ],
        githubUrl: "https://github.com/uchandar29/smart-crowdfunding"
    },
];

export interface GalleryItem {
    id: string;
    caption: string;
    note: string;
    /*
        Path to the photo, e.g. "/images/gallery/campus.jpg". Drop the file in
        public/images/gallery/ and set this field to show it instead of the
        placeholder. Leave unset to keep the "Add a photo" placeholder.
    */
    image?: string;
    /*
        "portrait" (default) or "landscape". Portrait photos are paired two
        per slide; landscape photos always get their own full-width slide so
        they display properly instead of being cropped into a tall box.
    */
    orientation?: "portrait" | "landscape";
}

export const gallery: GalleryItem[] = [
    {
        id: "image-rocky-mountain-1",
        caption: "Colorado Rocky Mountains",
        note: "A moment of relaxation and awe alongside brother from another mother, @harshmukeshsharma",
        image: "/images/gallery/rocky_mountains.jpeg",
        orientation: "portrait",
    },
    {
        id: "image-rocky-mountain-2",
        caption: "Rocky Mountains · Emerald Lake",
        note: "What a view! Emerald Lake was a highlight of the trip to the Rockies!!",
        image: "/images/gallery/rocky_mountains_emerald_lake.jpeg",
        orientation: "portrait",
    },
    {
        id: "image-mount-sky-blue",
        caption: "Mountains, Blue Sky, and Marmots",
        note: "Found this little guy while climbing my first 14er, Mount Sky Blue!!",
        image: "/images/gallery/mount_blue_sky_marmots.jpeg",
        orientation: "portrait",
    },
    {
        id: "image-rocky-mountain-3",
        caption: "Lake Haiyaha, Rocky Mountains",
        note: "Can you believe this view? 1.2 miles from Dream Lake Trailhead, almost took our breath away with the beauty of Lake Haiyaha in the Rocky Mountains.",
        image: "/images/gallery/rocky_mountains_lake_haiyaha.jpeg",
        orientation: "portrait",
    },
    {
        id: "image-laguna-beach-1",
        caption: "Laguna Beach Getaway",
        note: "Decided to stop by Laguna Beach on the way back after touching Mexico Border as part of the Boys Trip !!",
        image: "/images/gallery/laguna_beach.jpeg",
        orientation: "landscape",
    },
];
