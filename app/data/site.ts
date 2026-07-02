import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
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
  name: "YourTech Studio",
  email: "hello@yourtechstudio.com",
  whatsapp: "+91 00000 00000",
  linkedin: "linkedin.com/company/yourtechstudio",
  github: "github.com/yourtechstudio",
  location: "India, serving clients globally",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
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
    title: "Shopify store",
    detail: "Conversion-ready commerce",
    icon: ShoppingBag,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "AI chatbot",
    detail: "Support and workflow answers",
    icon: Bot,
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Analytics dashboard",
    detail: "Business metrics in focus",
    icon: LayoutDashboard,
    accent: "from-sky-400 to-cyan-300",
  },
  {
    title: "React app",
    detail: "Fast interactive products",
    icon: Code2,
    accent: "from-blue-400 to-indigo-500",
  },
  {
    title: "WordPress website",
    detail: "CMS-led business pages",
    icon: Boxes,
    accent: "from-teal-300 to-cyan-500",
  },
  {
    title: "ML model",
    detail: "Prediction and automation",
    icon: BrainCircuit,
    accent: "from-purple-400 to-blue-400",
  },
  {
    title: "Backend API",
    detail: "Secure server logic",
    icon: Network,
    accent: "from-cyan-300 to-violet-400",
  },
  {
    title: "Next.js website",
    detail: "SEO and performance first",
    icon: Sparkles,
    accent: "from-blue-300 to-cyan-300",
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
      "Custom AI assistants, chatbots, workflow automation, document intelligence, and AI-powered business tools.",
    icon: Bot,
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify stores with custom sections, product pages, checkout optimization, and responsive design.",
    icon: Store,
    accent: "from-emerald-300 to-cyan-500",
  },
  {
    title: "WordPress Development",
    description:
      "Business websites, blogs, landing pages, CMS-powered websites, and custom WordPress solutions.",
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
      "Modern interactive frontend applications with reusable components and smooth user experiences.",
    icon: Code2,
    accent: "from-blue-300 to-indigo-500",
  },
  {
    title: "Next.js Development",
    description:
      "SEO-friendly, high-performance websites and web apps with modern routing, optimization, and production-ready architecture.",
    icon: Rocket,
    accent: "from-violet-300 to-cyan-400",
  },
  {
    title: "Node.js Development",
    description:
      "Backend APIs, authentication, dashboards, integrations, and server-side application logic.",
    icon: ServerCog,
    accent: "from-lime-300 to-cyan-400",
  },
  {
    title: "Java Full Stack",
    description:
      "Enterprise-grade full-stack applications using Java backend technologies and modern frontend interfaces.",
    icon: Layers3,
    accent: "from-orange-200 to-violet-400",
  },
  {
    title: "Data Science",
    description:
      "Data analysis, dashboards, insights, reporting systems, and business intelligence solutions.",
    icon: LineChart,
    accent: "from-cyan-300 to-emerald-400",
  },
  {
    title: "Machine Learning",
    description:
      "ML models, prediction systems, recommendation engines, classification, automation, and intelligent data products.",
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
    title: "From idea to revenue-ready Shopify store.",
    story:
      "We build ecommerce experiences that look premium, load fast, and guide customers from product discovery to checkout.",
    description:
      "Wireframes become product storytelling, trust-led layouts, responsive sections, and checkout-focused conversion paths.",
    framePath: "public/frames/shopify/frame_0001.jpg",
    visual: "commerce",
  },
  {
    eyebrow: "AI Product Transformation",
    title: "From manual workflow to AI-powered automation.",
    story:
      "We create GenAI tools that automate repetitive work, answer questions, process documents, and help teams move faster.",
    description:
      "Documents, messages, and repeated tasks become a useful assistant with automations, analytics, and clear handoffs.",
    framePath: "public/frames/ai/frame_0001.jpg",
    visual: "ai",
  },
  {
    eyebrow: "Data & Full-Stack Transformation",
    title: "From raw data to intelligent business platform.",
    story:
      "We combine frontend, backend, data science, and machine learning to build useful digital products.",
    description:
      "Disconnected data sources become dashboards, APIs, predictions, and decision-ready business interfaces.",
    framePath: "public/frames/data/frame_0001.jpg",
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
    title: "Premium Shopify Fashion Store",
    tags: ["Shopify", "Ecommerce", "UI Design"],
    description:
      "A polished storefront concept focused on product discovery, brand trust, and mobile-first conversion.",
    accent: "from-emerald-300 to-cyan-400",
  },
  {
    title: "AI Customer Support Assistant",
    tags: ["GenAI", "Chatbot", "Automation"],
    description:
      "A support assistant concept that answers FAQs, routes leads, and summarizes customer conversations.",
    accent: "from-violet-300 to-fuchsia-400",
  },
  {
    title: "SaaS Analytics Dashboard",
    tags: ["Next.js", "Data Science", "Dashboard"],
    description:
      "A product analytics interface for founders and operators who need clear metrics without clutter.",
    accent: "from-cyan-300 to-blue-500",
  },
  {
    title: "WordPress Business Website",
    tags: ["WordPress", "CMS", "SEO"],
    description:
      "A service-business website concept with editorial pages, lead capture, and CMS-ready structure.",
    accent: "from-sky-300 to-violet-400",
  },
  {
    title: "Java Full-Stack Management System",
    tags: ["Java", "Backend", "React"],
    description:
      "A management platform concept with secure workflows, role-based screens, and operational dashboards.",
    accent: "from-orange-200 to-blue-400",
  },
  {
    title: "Machine Learning Prediction App",
    tags: ["ML", "Python", "Dashboard"],
    description:
      "A prediction interface concept turning model outputs into understandable decisions and reports.",
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
  "Modern UI and premium frontend design",
  "Full-stack development capability",
  "AI, data, and automation expertise",
  "Ecommerce and business website experience",
  "Scalable technology choices",
  "Clear communication",
  "India-based delivery with global quality",
  "Flexible for startups, agencies, creators, and businesses",
];

export const packages = [
  {
    title: "Starter Website",
    bestFor: "Personal brands, small businesses, local businesses",
    includes: ["3-5 pages", "Responsive design", "Contact form", "Basic SEO", "Fast loading"],
  },
  {
    title: "Business Website",
    bestFor: "Growing companies and service businesses",
    includes: [
      "5-10 pages",
      "CMS or admin-friendly structure",
      "Advanced sections",
      "Animations",
      "SEO setup",
      "Lead generation forms",
    ],
  },
  {
    title: "Ecommerce Website",
    bestFor: "Online stores and product brands",
    includes: [
      "Shopify setup",
      "Product pages",
      "Collection pages",
      "Payment setup",
      "Mobile optimization",
      "Conversion-focused design",
    ],
  },
  {
    title: "Custom Product / AI Solution",
    bestFor: "Startups, teams, and businesses with custom requirements",
    includes: [
      "React / Next.js frontend",
      "Node.js / Java backend",
      "GenAI integrations",
      "Data dashboards",
      "ML features",
      "APIs and deployment",
    ],
  },
];

export const teamRoles = [
  "Founder / Project Lead",
  "Frontend Developer",
  "Backend Developer",
  "AI / Data Specialist",
  "Designer",
];

export const contactServiceOptions = [
  "Website Development",
  "Shopify Store",
  "WordPress Website",
  "React / Next.js App",
  "Java Full-Stack Project",
  "GenAI Project",
  "Data Science / ML Project",
  "Custom Requirement",
];

export const budgetOptions = [
  "Under Rs 25,000",
  "Rs 25,000 - Rs 50,000",
  "Rs 50,000 - Rs 1,00,000",
  "Rs 1,00,000+",
  "International project budget",
];

export const footerServices = [
  "GenAI projects",
  "Shopify development",
  "Next.js apps",
  "Data dashboards",
  "Full-stack products",
];
