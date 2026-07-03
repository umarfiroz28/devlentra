import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  Code2,
  DatabaseZap,
  Globe2,
  LayoutDashboard,
  LineChart,
  ShoppingBag,
} from "lucide-react";

export type Project = {
  title: string;
  tags: string[];
  description: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  tone: "blue" | "green" | "violet" | "orange" | "graphite" | "cyan";
};

export const projects: Project[] = [
  {
    title: "AutoStack",
    tags: ["Spring Boot", "React", "AWS", "Terraform"],
    description:
      "Full-stack platform that generates project scaffolding, REST API structures, Dockerfiles, and CI/CD pipelines through prompt-engineered LLM workflows.",
    meta: "Aug 2024 - Dec 2024",
    imageSrc: "/images/showcase-ai-automation.png",
    imageAlt:
      "Generated AI automation interface with code, workflow, and deployment panels.",
    icon: Code2,
    tone: "blue",
  },
  {
    title: "Knyo Cloud",
    tags: ["Golang", "MongoDB", "AWS", "PDM SaaS"],
    description:
      "Product Data Management SaaS for automotive and pharmaceutical domains, built with Go microservices, REST APIs, validation, and scalable integrations.",
    meta: "Product data SaaS",
    imageSrc: "/images/showcase-data-ml.png",
    imageAlt:
      "Generated data platform dashboard with API, database, and analytics panels.",
    icon: DatabaseZap,
    tone: "green",
  },
  {
    title: "Property10X",
    tags: ["React", "Node.js", "Firebase", "Real Estate"],
    description:
      "Real estate platform for buy, sell, and rent listings, project discovery, property updates, and market content with secure server-side flows.",
    meta: "Property10X Pvt. Ltd.",
    imageSrc: "/images/showcase-commerce-real-estate.png",
    imageAlt:
      "Generated real estate platform interface with listing cards and map search.",
    icon: Globe2,
    tone: "cyan",
  },
  {
    title: "Superspace",
    tags: ["MERN", "Tailwind CSS", "Firebase", "Commerce"],
    description:
      "Location-aware market browsing application with dynamic product catalogs, responsive UI, and an experience shaped around local discovery.",
    meta: "July 2022 - Present",
    imageSrc: "/images/showcase-commerce-real-estate.png",
    imageAlt:
      "Generated commerce interface with product catalog cards and mobile browsing.",
    icon: ShoppingBag,
    tone: "orange",
  },
  {
    title: "GenAI Developer Assistant",
    tags: ["Python", "FastAPI", "RAG", "LLM"],
    description:
      "Productivity assistant using multi-step LLM workflows and a RAG layer over codebases for context-aware review, debugging, and documentation.",
    meta: "2024",
    imageSrc: "/images/showcase-ai-automation.png",
    imageAlt:
      "Generated AI assistant interface with chatbot, code review, and workflow cards.",
    icon: Bot,
    tone: "violet",
  },
  {
    title: "Wafer Fault Detection",
    tags: ["ML", "XGBoost", "Random Forest", "KMeans++"],
    description:
      "Machine learning project that detects faulty wafers using data validation, clustering, GridSearchCV tuning, XGBoost, and Random Forest models.",
    meta: "Open Source - July 2021",
    imageSrc: "/images/showcase-data-ml.png",
    imageAlt:
      "Generated machine learning dashboard with model pipeline and prediction panels.",
    icon: BrainCircuit,
    tone: "graphite",
  },
  {
    title: "Cement Strength Prediction",
    tags: ["ML", "Regression", "Python", "Data Analysis"],
    description:
      "Predictive model for cement strength based on cement, slag, fly ash, water, superplasticizer, coarse aggregate, and fine aggregate components.",
    meta: "Open Source - September 2021",
    imageSrc: "/images/showcase-data-ml.png",
    imageAlt:
      "Generated analytics interface with charts, model signals, and data cards.",
    icon: LineChart,
    tone: "green",
  },
  {
    title: "AI Demo Platform",
    tags: ["React", "TypeScript", "Chrome Extension", "AI Voiceover"],
    description:
      "Interactive content platform with screen-recording conversion into demos, guides, Chrome extension workflows, captions, and AI-generated voiceovers.",
    meta: "AI product workflow",
    imageSrc: "/images/showcase-ai-automation.png",
    imageAlt:
      "Generated AI product interface with automation tiles, mobile preview, and workflow cards.",
    icon: LayoutDashboard,
    tone: "blue",
  },
];
