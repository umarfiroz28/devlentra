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
  clientName: string;
  deliveryStatus: string;
  demandSignal: string;
  problem: string;
  whatItDoes: string;
  outcome: string;
  meta: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  tone: "blue" | "green" | "violet" | "orange" | "graphite" | "cyan";
};

export const projects: Project[] = [
  {
    title: "Leadzen.ai",
    tags: ["AI SDR", "Buyer Intelligence", "B2B Data", "Lead Generation"],
    description:
      "AI-powered B2B lead generation and buyer intelligence platform for verified prospects, intent signals, outreach, and confirmed meeting workflows.",
    clientName: "Leadzen.ai",
    deliveryStatus: "Live client delivery",
    demandSignal: "High-demand AI sales product",
    problem:
      "Sales teams lose pipeline time on outdated data, low-fit prospects, and manual follow-ups.",
    whatItDoes:
      "Finds verified buyers, scores intent, supports AI SDR outreach, and moves qualified accounts toward meetings.",
    outcome:
      "Reduced prospecting friction and made outreach feel more targeted, timely, and measurable.",
    meta: "AI B2B lead generation SaaS",
    imageSrc: "/images/project-leadzen-ai.png",
    imageAlt:
      "Generated AI lead generation platform with prospect cards, buyer intent signals, outreach flows, and meeting confirmation UI.",
    icon: LineChart,
    tone: "cyan",
  },
  {
    title: "Hexus / Olto",
    tags: ["AI Demos", "GTM Content", "Product Education", "Analytics"],
    description:
      "AI product-content platform that turns recordings and prompts into interactive demos, videos, guides, walkthroughs, and GTM assets.",
    clientName: "Olto / Hexus",
    deliveryStatus: "Live client delivery",
    demandSignal: "GTM teams need this now",
    problem:
      "Product, marketing, and success teams spend days recreating demos, launch videos, and help content.",
    whatItDoes:
      "Repurposes product recordings into demos, guides, videos, support assets, and analytics-backed content.",
    outcome:
      "Helped teams ship product stories faster and reuse content across sales, onboarding, and education.",
    meta: "AI product storytelling platform",
    imageSrc: "/images/project-hexus-olto.png",
    imageAlt:
      "Generated AI product demo platform with video editor, interactive walkthrough cards, guide outputs, and analytics modules.",
    icon: LayoutDashboard,
    tone: "violet",
  },
  {
    title: "AI Demo Platform",
    tags: ["React", "TypeScript", "Chrome Extension", "AI Voiceover"],
    description:
      "Interactive content platform with screen-recording conversion into demos, guides, extension workflows, captions, and AI voiceovers.",
    clientName: "AI product workflow client",
    deliveryStatus: "Live delivered build",
    demandSignal: "AI content automation",
    problem:
      "Teams need product demos and training content quickly, but manual recording, editing, and documentation slows launches.",
    whatItDoes:
      "Converts recordings into interactive demos, step guides, captions, extension flows, and AI voiceover assets.",
    outcome:
      "Shortened demo production cycles and made product education easier to reuse across channels.",
    meta: "AI product workflow",
    imageSrc: "/images/showcase-ai-automation.png",
    imageAlt:
      "Generated AI product interface with automation tiles, mobile preview, and workflow cards.",
    icon: LayoutDashboard,
    tone: "blue",
  },
  {
    title: "Knyo Cloud",
    tags: ["Golang", "MongoDB", "AWS", "PDM SaaS"],
    description:
      "Product Data Management SaaS for automotive and pharmaceutical domains, built with Go microservices, REST APIs, validation, and scalable integrations.",
    clientName: "Knyo Cloud",
    deliveryStatus: "Live client delivery",
    demandSignal: "Enterprise data SaaS",
    problem:
      "Product data teams need accurate, validated, and centralized records across complex catalog workflows.",
    whatItDoes:
      "Manages product data through scalable Go services, MongoDB storage, REST APIs, validations, and integrations.",
    outcome:
      "Improved product-data reliability and created a stronger foundation for enterprise catalog operations.",
    meta: "Product data SaaS",
    imageSrc: "/images/showcase-data-ml.png",
    imageAlt:
      "Generated data platform dashboard with API, database, and analytics panels.",
    icon: DatabaseZap,
    tone: "green",
  },
  {
    title: "AutoStack",
    tags: ["Spring Boot", "React", "AWS", "Terraform"],
    description:
      "Full-stack platform that generates project scaffolding, REST API structures, Dockerfiles, and CI/CD pipelines through prompt-engineered LLM workflows.",
    clientName: "AutoStack",
    deliveryStatus: "Live delivered build",
    demandSignal: "Developer productivity",
    problem:
      "Engineering teams repeat setup work across APIs, CI/CD, Docker, infrastructure, and project boilerplate.",
    whatItDoes:
      "Generates backend structures, deployment files, pipelines, and starter code from guided LLM workflows.",
    outcome:
      "Reduced repetitive setup time and gave developers a faster path from idea to working project structure.",
    meta: "Aug 2024 - Dec 2024",
    imageSrc: "/images/showcase-ai-automation.png",
    imageAlt:
      "Generated AI automation interface with code, workflow, and deployment panels.",
    icon: Code2,
    tone: "blue",
  },
  {
    title: "Property10X",
    tags: ["React", "Node.js", "Firebase", "Real Estate"],
    description:
      "Real estate platform for buy, sell, and rent listings, project discovery, property updates, and market content with secure server-side flows.",
    clientName: "Property10X Pvt. Ltd.",
    deliveryStatus: "Live client delivery",
    demandSignal: "Marketplace-grade UX",
    problem:
      "Real-estate buyers and sellers need trusted listings, project discovery, location context, and secure browsing flows.",
    whatItDoes:
      "Presents property listings, discovery pages, content updates, and user-friendly browsing across responsive interfaces.",
    outcome:
      "Created a clearer real-estate discovery experience for customers comparing properties and market content.",
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
    clientName: "Superspace",
    deliveryStatus: "Live client delivery",
    demandSignal: "Commerce discovery",
    problem:
      "Local commerce users need quick product discovery without losing context around location, catalog, and browsing flow.",
    whatItDoes:
      "Combines product catalogs, Firebase-backed flows, responsive browsing, and local market discovery patterns.",
    outcome:
      "Delivered a business-friendly commerce experience for browsing products and location-aware inventory.",
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
    clientName: "Developer productivity client",
    deliveryStatus: "Delivered AI workflow",
    demandSignal: "RAG + code intelligence",
    problem:
      "Developers need codebase-aware help, but generic assistants miss project context and produce shallow guidance.",
    whatItDoes:
      "Uses RAG, FastAPI, and LLM workflows to review code, debug issues, generate docs, and answer contextual questions.",
    outcome:
      "Improved developer support quality by grounding AI answers in codebase-specific context.",
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
    clientName: "ML quality-control showcase",
    deliveryStatus: "Delivered ML project",
    demandSignal: "Industrial ML use case",
    problem:
      "Manufacturing data can hide failure patterns that are hard to detect manually at scale.",
    whatItDoes:
      "Validates wafer data, clusters patterns, tunes models, and predicts faulty wafers with ensemble ML.",
    outcome:
      "Showcased an end-to-end ML workflow for early defect detection and quality-control decision support.",
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
    clientName: "ML regression showcase",
    deliveryStatus: "Delivered ML project",
    demandSignal: "Predictive analytics",
    problem:
      "Material-strength decisions need data-backed estimates before teams commit to costly physical testing cycles.",
    whatItDoes:
      "Analyzes mix ingredients, trains regression models, and predicts concrete strength from material composition.",
    outcome:
      "Demonstrated practical predictive analytics for construction-material planning and model evaluation.",
    meta: "Open Source - September 2021",
    imageSrc: "/images/showcase-data-ml.png",
    imageAlt:
      "Generated analytics interface with charts, model signals, and data cards.",
    icon: LineChart,
    tone: "green",
  },
];
