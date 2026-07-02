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
  LayoutTemplate,
  ServerCog,
  Store,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  startingAt: string;
  icon: LucideIcon;
  tone: "blue" | "green" | "violet" | "orange" | "graphite";
};

export const services: Service[] = [
  {
    title: "WordPress Services",
    description:
      "Fast business websites, service pages, blogs, contact forms, basic SEO, and mobile-ready WordPress setup.",
    startingAt: "Starts at Rs 1,499",
    icon: Globe2,
    tone: "violet",
  },
  {
    title: "Shopify Store Setup",
    description:
      "Starter Shopify stores with product setup, collections, essential pages, theme polish, and checkout basics.",
    startingAt: "Starts at Rs 1,699",
    icon: Store,
    tone: "green",
  },
  {
    title: "React / Next.js Websites",
    description:
      "Premium portfolio, landing, SaaS, and business pages with clean UI, responsive layouts, and fast builds.",
    startingAt: "Starts at Rs 1,799",
    icon: Code2,
    tone: "blue",
  },
  {
    title: "Portfolio / Landing Pages",
    description:
      "One-page launches for founders, students, creators, and local businesses with polished conversion sections.",
    startingAt: "Starts at Rs 999",
    icon: LayoutTemplate,
    tone: "graphite",
  },
  {
    title: "Node.js API Development",
    description:
      "REST APIs, authentication, MongoDB/PostgreSQL integration, dashboards, and secure backend workflows.",
    startingAt: "Starts at Rs 2,499",
    icon: ServerCog,
    tone: "graphite",
  },
  {
    title: "Java Spring Boot APIs",
    description:
      "Spring Boot services, secure API flows, JPA/Hibernate, JWT/RBAC, and production-style backend structure.",
    startingAt: "Starts at Rs 2,999",
    icon: Layers3,
    tone: "orange",
  },
  {
    title: "AI Automation / Chatbots",
    description:
      "LLM workflows, support bots, document Q&A, prompt flows, and practical automations for repeated tasks.",
    startingAt: "Starts at Rs 2,999",
    icon: Bot,
    tone: "blue",
  },
  {
    title: "Data Dashboards",
    description:
      "Admin dashboards, business reports, chart views, metric cards, and decision-ready interfaces.",
    startingAt: "Starts at Rs 2,499",
    icon: ChartNoAxesCombined,
    tone: "green",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Prediction apps, classifiers, model evaluation, notebooks, APIs, and clean ML project reports.",
    startingAt: "Starts at Rs 3,499",
    icon: BrainCircuit,
    tone: "violet",
  },
  {
    title: "Custom Web Applications",
    description:
      "Full-stack products combining React, APIs, databases, auth, dashboards, deployment, and support.",
    startingAt: "Starts at Rs 4,999",
    icon: DatabaseZap,
    tone: "blue",
  },
  {
    title: "HTML / CSS Fixes",
    description:
      "Responsive fixes, page cleanup, section redesigns, form styling, and quick UI improvements.",
    startingAt: "Starts at Rs 799",
    icon: FileCode2,
    tone: "orange",
  },
];
