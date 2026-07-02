export type Project = {
  title: string;
  tags: string[];
  description: string;
  meta: string;
  tone: "blue" | "green" | "violet" | "orange" | "graphite" | "cyan";
};

export const projects: Project[] = [
  {
    title: "AutoStack",
    tags: ["Spring Boot", "React", "AWS", "Terraform"],
    description:
      "Full-stack platform that generates project scaffolding, REST API structures, Dockerfiles, and CI/CD pipelines through prompt-engineered LLM workflows.",
    meta: "Aug 2024 - Dec 2024",
    tone: "blue",
  },
  {
    title: "Knyo Cloud",
    tags: ["Golang", "MongoDB", "AWS", "PDM SaaS"],
    description:
      "Product Data Management SaaS for automotive and pharmaceutical domains, built with Go microservices, REST APIs, validation, and scalable integrations.",
    meta: "Glabbr Technologies",
    tone: "green",
  },
  {
    title: "Property10X",
    tags: ["React", "Node.js", "Firebase", "Real Estate"],
    description:
      "Real estate platform for buy, sell, and rent listings, project discovery, property updates, and market content with secure server-side flows.",
    meta: "Property10X Pvt. Ltd.",
    tone: "cyan",
  },
  {
    title: "Superspace",
    tags: ["MERN", "Tailwind CSS", "Firebase", "Commerce"],
    description:
      "Location-aware market browsing application with dynamic product catalogs, responsive UI, and an experience shaped around local discovery.",
    meta: "July 2022 - Present",
    tone: "orange",
  },
  {
    title: "GenAI Developer Assistant",
    tags: ["Python", "FastAPI", "RAG", "LLM"],
    description:
      "Productivity assistant using multi-step LLM workflows and a RAG layer over codebases for context-aware review, debugging, and documentation.",
    meta: "2024",
    tone: "violet",
  },
  {
    title: "Wafer Fault Detection",
    tags: ["ML", "XGBoost", "Random Forest", "KMeans++"],
    description:
      "Machine learning project that detects faulty wafers using data validation, clustering, GridSearchCV tuning, XGBoost, and Random Forest models.",
    meta: "Open Source - July 2021",
    tone: "graphite",
  },
  {
    title: "Cement Strength Prediction",
    tags: ["ML", "Regression", "Python", "Data Analysis"],
    description:
      "Predictive model for cement strength based on cement, slag, fly ash, water, superplasticizer, coarse aggregate, and fine aggregate components.",
    meta: "Open Source - September 2021",
    tone: "green",
  },
  {
    title: "Leadzen AI Demo Platform",
    tags: ["React", "TypeScript", "Chrome Extension", "AI Voiceover"],
    description:
      "Interactive content platform with screen-recording conversion into demos, guides, Chrome extension workflows, captions, and AI-generated voiceovers.",
    meta: "Leadzen.ai / Hexus",
    tone: "blue",
  },
];
