import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Compass,
  DatabaseZap,
  FileCode2,
  Gauge,
  Globe2,
  Layers3,
  LayoutDashboard,
  LineChart,
  Network,
  Palette,
  Rocket,
  SearchCheck,
  ServerCog,
  ShoppingBag,
  Sparkles,
  Store,
} from "lucide-react";

export const brand = {
  name: "Devlentra",
  owner: "Devlentra Team",
  title: "Full-stack software and automation services",
  email: "devlentra@gmail.com",
  phone: "+91 7310886909",
  whatsapp: "+91 7310886909",
  linkedin: "Contact via email",
  github: "Project links available on request",
  portfolio: "Devlentra portfolio",
  location: "Hyderabad, Telangana",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "AI", href: "#showcase" },
  { label: "Data", href: "#showcase" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type FloatingCardItem = {
  title: string;
  detail: string;
  icon: LucideIcon;
  accent: string;
};

export const floatingCards: FloatingCardItem[] = [
  {
    title: "Shopify Store",
    detail: "Mobile checkout flow",
    icon: ShoppingBag,
    accent: "from-[#EAF3FF] to-[#ECFEFF]",
  },
  {
    title: "AI Chatbot",
    detail: "Answers and automations",
    icon: Bot,
    accent: "from-[#F4ECFF] to-[#EAF3FF]",
  },
  {
    title: "Analytics Dashboard",
    detail: "Decision-ready insights",
    icon: LayoutDashboard,
    accent: "from-[#ECFEFF] to-[#EAF3FF]",
  },
  {
    title: "Code Editor",
    detail: "Reusable product UI",
    icon: Code2,
    accent: "from-[#F7F7F8] to-[#E8E4DD]",
  },
  {
    title: "ML Insights",
    detail: "Prediction signals",
    icon: BrainCircuit,
    accent: "from-[#F4ECFF] to-[#ECFEFF]",
  },
  {
    title: "Backend API Node",
    detail: "Secure integrations",
    icon: Network,
    accent: "from-[#EAF3FF] to-[#FDFDFD]",
  },
];

export const trustBadges = [
  { label: "Websites", icon: Code2 },
  { label: "AI Automation", icon: Sparkles },
  { label: "Ecommerce", icon: ShoppingBag },
  { label: "Full-Stack Apps", icon: DatabaseZap },
  { label: "Data & ML", icon: ChartNoAxesCombined },
  { label: "Global Delivery", icon: Network },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const services: Service[] = [
  {
    title: "GenAI Projects",
    description:
      "AI assistants, RAG workflows, document tools, prompt engineering, and practical automation for teams.",
    icon: Bot,
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "Shopify Development",
    description:
      "Starter Shopify stores, product pages, collection setup, responsive sections, and checkout-focused polish.",
    icon: Store,
    accent: "from-emerald-300 to-cyan-500",
  },
  {
    title: "WordPress Development",
    description:
      "Business websites, landing pages, blogs, service pages, and SEO-ready WordPress setup.",
    icon: Globe2,
    accent: "from-sky-300 to-violet-400",
  },
  {
    title: "HTML/CSS Websites",
    description:
      "Fast, lightweight, responsive static websites with clean UI and optimized performance.",
    icon: FileCode2,
    accent: "from-cyan-200 to-teal-400",
  },
  {
    title: "React.js Development",
    description:
      "Interactive React interfaces with reusable components, responsive UI, and API integration.",
    icon: Code2,
    accent: "from-blue-300 to-indigo-500",
  },
  {
    title: "Next.js Development",
    description:
      "Fast portfolio, SaaS, landing, and product pages using modern routing and optimization.",
    icon: Rocket,
    accent: "from-violet-300 to-cyan-400",
  },
  {
    title: "Node.js Development",
    description:
      "Node.js APIs, auth flows, integrations, dashboards, and server-side application logic.",
    icon: ServerCog,
    accent: "from-lime-300 to-cyan-400",
  },
  {
    title: "Java Full Stack",
    description:
      "Spring Boot APIs, secure backend workflows, microservices, and React admin experiences.",
    icon: Layers3,
    accent: "from-orange-200 to-violet-400",
  },
  {
    title: "Data Science",
    description:
      "Dashboards, reports, data analysis, business insights, and decision-support systems.",
    icon: LineChart,
    accent: "from-cyan-300 to-emerald-400",
  },
  {
    title: "Machine Learning",
    description:
      "Prediction systems, classifiers, model pipelines, and intelligent data products.",
    icon: BrainCircuit,
    accent: "from-fuchsia-300 to-blue-500",
  },
];

export type ShowcaseStory = {
  eyebrow: string;
  title: string;
  story: string;
  description: string;
  framePath: string;
  visual: "commerce" | "ai" | "data";
};

export const showcaseStories: ShowcaseStory[] = [
  {
    eyebrow: "Ecommerce Transformation",
    title: "From Store Idea to Premium Ecommerce Experience.",
    story:
      "We transform product ideas into conversion-ready Shopify stores with clean design, mobile-first layouts, and optimized purchase flows.",
    description:
      "Wireframes become product storytelling, trust-led layouts, responsive sections, and checkout-focused conversion paths.",
    framePath: "public/frames/ecommerce/frame_0001.jpg",
    visual: "commerce",
  },
  {
    eyebrow: "AI Product Transformation",
    title: "From Manual Workflows to AI Automation.",
    story:
      "We build GenAI tools that answer questions, process documents, automate tasks, and help teams save time.",
    description:
      "Documents, messages, and repeated tasks become a useful assistant with automations, analytics, and clear handoffs.",
    framePath: "public/frames/ai-automation/frame_0001.jpg",
    visual: "ai",
  },
  {
    eyebrow: "Data & Full-Stack Transformation",
    title: "From Raw Data to Intelligent Platforms.",
    story:
      "We connect frontend, backend, data science, and machine learning to create useful business applications.",
    description:
      "Disconnected data sources become dashboards, APIs, predictions, and decision-ready business interfaces.",
    framePath: "public/frames/data-platform/frame_0001.jpg",
    visual: "data",
  },
];

export type Project = {
  title: string;
  tags: string[];
  description: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "AutoStack",
    tags: ["Spring Boot", "React", "AWS", "Terraform"],
    description:
      "Full-stack platform that generates project scaffolds, REST API structures, Dockerfiles, and CI/CD pipelines using LLM workflows.",
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "Knyo Cloud",
    tags: ["Golang", "MongoDB", "AWS", "PDM"],
    description:
      "Product Data Management SaaS for automotive and pharmaceutical domains, built with Go microservices and fault-tolerant APIs.",
    accent: "from-emerald-300 to-cyan-400",
  },
  {
    title: "Property10X",
    tags: ["React", "Node.js", "Firebase", "Real Estate"],
    description:
      "Real estate web platform for buy, sell, rent listings, project discovery, property updates, and market content.",
    accent: "from-sky-300 to-violet-400",
  },
  {
    title: "Superspace",
    tags: ["MERN", "Tailwind CSS", "Firebase", "Commerce"],
    description:
      "Location-aware market browsing app with dynamic product catalogs and a responsive shopping experience.",
    accent: "from-orange-200 to-blue-400",
  },
  {
    title: "GenAI Developer Assistant",
    tags: ["Python", "FastAPI", "RAG", "LLM"],
    description:
      "Productivity tool with multi-step LLM workflows and a RAG layer for code review, debugging, and documentation.",
    accent: "from-violet-300 to-fuchsia-400",
  },
  {
    title: "Wafer Fault Detection",
    tags: ["Machine Learning", "XGBoost", "Random Forest"],
    description:
      "ML system for detecting faulty wafers using clustering, validation pipelines, GridSearchCV, XGBoost, and Random Forest.",
    accent: "from-lime-300 to-cyan-400",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We understand your business, users, goals, and required features.",
    icon: SearchCheck,
  },
  {
    title: "Plan",
    description:
      "We define the right technology stack, pages, user flows, and delivery roadmap.",
    icon: Compass,
  },
  {
    title: "Design",
    description: "We create modern UI layouts focused on trust, clarity, and conversion.",
    icon: Palette,
  },
  {
    title: "Develop",
    description:
      "We build responsive, scalable, and production-ready websites or applications.",
    icon: Code2,
  },
  {
    title: "Optimize",
    description: "We improve performance, SEO, mobile experience, and usability.",
    icon: Gauge,
  },
  {
    title: "Launch & Support",
    description: "We deploy, test, hand over, and support future improvements.",
    icon: Rocket,
  },
];

export const whyPoints = [
  "Premium frontend design",
  "Full-stack engineering",
  "AI and data capability",
  "Ecommerce and business website expertise",
  "Scalable technology choices",
  "Clear communication",
  "India-based cost advantage",
  "Suitable for startups, agencies, creators, and businesses",
];

export const packages = [
  {
    title: "WordPress Starter - Rs 1,499+",
    bestFor: "Local businesses, service websites, blogs, and quick launches",
    includes: ["1-3 pages", "Responsive setup", "Contact form", "Basic SEO", "Speed cleanup"],
  },
  {
    title: "Shopify Starter - Rs 1,699+",
    bestFor: "Small product brands starting an online store",
    includes: [
      "Theme setup",
      "Product upload support",
      "Collection basics",
      "Essential store pages",
      "Payment readiness check",
      "Mobile storefront polish",
    ],
  },
  {
    title: "React Website - Rs 1,799+",
    bestFor: "Portfolios, landing pages, SaaS pages, and modern business sites",
    includes: [
      "React / Next.js frontend",
      "Responsive sections",
      "Reusable components",
      "Contact CTA",
      "Performance-minded build",
      "Deployment guidance",
    ],
  },
  {
    title: "Custom Product - Rs 4,999+",
    bestFor: "Founders and teams needing APIs, dashboards, AI, or full-stack systems",
    includes: [
      "React frontend",
      "Node.js / Java APIs",
      "Database integration",
      "AI automation options",
      "Data dashboards",
      "Deployment support",
    ],
  },
];

export const profileHighlights = [
  "Full-stack delivery across websites, APIs, ecommerce, dashboards, AI automation, and cloud-ready products.",
  "Java Spring Boot, React.js, Golang, Node.js, Python, AWS, Docker, Kubernetes, Kafka, Redis, and MongoDB.",
  "Performance-focused engineering for faster APIs, cleaner interfaces, reliable integrations, and scalable builds.",
  "Hands-on GenAI, LangChain, RAG, prompt engineering, support automation, and AI-assisted delivery workflows.",
  "Practical starter pricing for small launches, with scope-based quotes for custom products and automation.",
];

export const contactServiceOptions = [
  "WordPress Website - starts at Rs 1,499",
  "Shopify Store - starts at Rs 1,699",
  "React / Next.js Website - starts at Rs 1,799",
  "Portfolio / Landing Page - starts at Rs 999",
  "Node.js API - starts at Rs 2,499",
  "Java Spring Boot API - starts at Rs 2,999",
  "AI Automation / Chatbot - starts at Rs 2,999",
  "Data Dashboard / ML Project - starts at Rs 2,499",
  "Custom Full-Stack Product",
];

export const budgetOptions = [
  "Under Rs 2,000",
  "Rs 2,000 - Rs 5,000",
  "Rs 5,000 - Rs 15,000",
  "Rs 15,000 - Rs 50,000",
  "Rs 50,000+",
];

export const footerServices = [
  "WordPress from Rs 1,499",
  "Shopify from Rs 1,699",
  "React from Rs 1,799",
  "AI automation",
  "Full-stack products",
];
