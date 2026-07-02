import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  DatabaseZap,
  FileCode2,
  Globe2,
  Layers3,
  ServerCog,
  Store,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "green" | "violet" | "orange" | "graphite";
};

export const services: Service[] = [
  {
    title: "GenAI Projects",
    description:
      "AI assistants, chatbots, workflow automation, document intelligence, and custom AI tools for business operations.",
    icon: Bot,
    tone: "blue",
  },
  {
    title: "Shopify Development",
    description:
      "Premium ecommerce stores designed for product discovery, mobile shopping, checkout flow, and conversions.",
    icon: Store,
    tone: "green",
  },
  {
    title: "WordPress Development",
    description:
      "Professional business websites, blogs, CMS pages, landing pages, and SEO-ready WordPress experiences.",
    icon: Globe2,
    tone: "violet",
  },
  {
    title: "React / Next.js Development",
    description:
      "Interactive, SEO-friendly frontend applications with reusable components, smooth UI, and scalable architecture.",
    icon: Code2,
    tone: "blue",
  },
  {
    title: "Node.js Development",
    description:
      "Backend APIs, authentication, dashboards, integrations, and server-side application logic.",
    icon: ServerCog,
    tone: "graphite",
  },
  {
    title: "Java Full Stack",
    description:
      "Enterprise-grade platforms with strong backend systems and modern frontend experiences.",
    icon: Layers3,
    tone: "orange",
  },
  {
    title: "Data Science",
    description:
      "Dashboards, data analysis, reports, business insights, and decision-support systems.",
    icon: ChartNoAxesCombined,
    tone: "green",
  },
  {
    title: "Machine Learning",
    description:
      "Prediction systems, recommendation engines, classification models, and intelligent data products.",
    icon: BrainCircuit,
    tone: "violet",
  },
  {
    title: "HTML/CSS Websites",
    description:
      "Fast, lightweight, responsive static websites with clean UI and optimized performance.",
    icon: FileCode2,
    tone: "graphite",
  },
  {
    title: "Custom Web Applications",
    description:
      "Full-stack product builds combining interfaces, databases, APIs, auth, dashboards, and deployment.",
    icon: DatabaseZap,
    tone: "blue",
  },
];
