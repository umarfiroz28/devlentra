export type Project = {
  title: string;
  tags: string[];
  description: string;
  tone: "blue" | "green" | "violet" | "orange" | "graphite" | "cyan";
};

export const projects: Project[] = [
  {
    title: "Premium Shopify Fashion Store",
    tags: ["Shopify", "Ecommerce", "UI Design"],
    description:
      "A polished storefront concept focused on product discovery, brand trust, and mobile-first conversion.",
    tone: "green",
  },
  {
    title: "AI Customer Support Assistant",
    tags: ["GenAI", "Chatbot", "Automation"],
    description:
      "A support assistant concept that answers FAQs, routes leads, and summarizes customer conversations.",
    tone: "violet",
  },
  {
    title: "SaaS Analytics Dashboard",
    tags: ["Next.js", "Data Science", "Dashboard"],
    description:
      "A product analytics interface for founders and operators who need clear metrics without clutter.",
    tone: "blue",
  },
  {
    title: "WordPress Business Website",
    tags: ["WordPress", "CMS", "SEO"],
    description:
      "A service-business website concept with editorial pages, lead capture, and CMS-ready structure.",
    tone: "cyan",
  },
  {
    title: "Java Full-Stack Management System",
    tags: ["Java", "Backend", "React"],
    description:
      "A management platform concept with secure workflows, role-based screens, and operational dashboards.",
    tone: "orange",
  },
  {
    title: "Machine Learning Prediction App",
    tags: ["ML", "Python", "Dashboard"],
    description:
      "A prediction interface concept turning model outputs into understandable decisions and reports.",
    tone: "graphite",
  },
];
