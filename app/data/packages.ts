export type Package = {
  title: string;
  bestFor: string;
  includes: string[];
  popular?: boolean;
};

export const packages: Package[] = [
  {
    title: "Starter Website",
    bestFor: "Personal brands, small businesses, local businesses",
    includes: ["3-5 pages", "Responsive design", "Contact form", "Basic SEO", "Fast loading"],
  },
  {
    title: "Business Website",
    bestFor: "Growing companies and service businesses",
    popular: true,
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
