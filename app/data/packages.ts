export type Package = {
  title: string;
  startingAt: string;
  bestFor: string;
  includes: string[];
  popular?: boolean;
};

export const packages: Package[] = [
  {
    title: "WordPress Starter",
    startingAt: "Rs 1,499",
    bestFor: "Local businesses, service pages, blogs, and quick launches",
    includes: ["1-3 pages", "Mobile responsive setup", "Contact form", "Basic SEO", "Speed cleanup"],
  },
  {
    title: "Shopify Starter",
    startingAt: "Rs 1,699",
    bestFor: "Small product brands starting an online store",
    popular: true,
    includes: [
      "Theme setup",
      "Product upload support",
      "Collection page basics",
      "Essential store pages",
      "Payment readiness check",
      "Mobile storefront polish",
    ],
  },
  {
    title: "React Website",
    startingAt: "Rs 1,799",
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
    title: "Custom Product",
    startingAt: "Rs 4,999",
    bestFor: "Founders and teams who need APIs, dashboards, AI, or full-stack systems",
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
