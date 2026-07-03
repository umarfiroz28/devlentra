type PackageFeature = {
  label: string;
  icon: PackageIcon;
};

type PackageStackItem = {
  label: string;
  icon: PackageIcon;
};

export type PackageIcon =
  | "ai"
  | "api"
  | "checkout"
  | "cms"
  | "code"
  | "component"
  | "dashboard"
  | "data"
  | "deploy"
  | "form"
  | "pages"
  | "payment"
  | "performance"
  | "products"
  | "responsive"
  | "seo"
  | "store"
  | "style"
  | "tags"
  | "speed";

export type Package = {
  title: string;
  startingAt: string;
  bestFor: string;
  imageSrc: string;
  imageAlt: string;
  stack: PackageStackItem[];
  includes: PackageFeature[];
  popular?: boolean;
};

export const packages: Package[] = [
  {
    title: "WordPress Starter",
    startingAt: "Rs 1,499",
    bestFor: "Local businesses, service pages, blogs, and quick launches",
    imageSrc: "/images/pricing-cms-starter.png",
    imageAlt: "3D CMS website setup with responsive pages, forms, SEO, and speed tools",
    stack: [
      { label: "CMS", icon: "cms" },
      { label: "Pages", icon: "pages" },
      { label: "SEO", icon: "seo" },
    ],
    includes: [
      { label: "1-3 pages", icon: "pages" },
      { label: "Mobile responsive setup", icon: "responsive" },
      { label: "Contact form", icon: "form" },
      { label: "Basic SEO", icon: "seo" },
      { label: "Speed cleanup", icon: "speed" },
    ],
  },
  {
    title: "Shopify Starter",
    startingAt: "Rs 1,699",
    bestFor: "Small product brands starting an online store",
    imageSrc: "/images/pricing-shopify-starter.png",
    imageAlt: "3D ecommerce storefront with products, collections, checkout, and mobile preview",
    popular: true,
    stack: [
      { label: "Storefront", icon: "store" },
      { label: "Products", icon: "products" },
      { label: "Checkout", icon: "checkout" },
    ],
    includes: [
      { label: "Theme setup", icon: "style" },
      { label: "Product upload support", icon: "products" },
      { label: "Collection page basics", icon: "tags" },
      { label: "Essential store pages", icon: "pages" },
      // { label: "Payment readiness check", icon: "payment" },
      // { label: "Mobile storefront polish", icon: "responsive" },
    ],
  },
  {
    title: "React Website",
    startingAt: "Rs 1,799",
    bestFor: "Portfolios, landing pages, SaaS pages, and modern business sites",
    imageSrc: "/images/pricing-react-website.png",
    imageAlt: "3D responsive React website interface with code, components, performance, and deployment",
    stack: [
      { label: "React", icon: "component" },
      { label: "Next.js", icon: "code" },
      { label: "Deploy", icon: "deploy" },
    ],
    includes: [
      { label: "React / Next.js frontend", icon: "component" },
      { label: "Responsive sections", icon: "responsive" },
      { label: "Reusable components", icon: "code" },
      { label: "Contact CTA", icon: "form" },
      { label: "Performance-minded build", icon: "performance" },
      { label: "Deployment guidance", icon: "deploy" },
    ],
  },
  {
    title: "Custom Product",
    startingAt: "Rs 4,999",
    bestFor: "Founders and teams who need APIs, dashboards, AI, or full-stack systems",
    imageSrc: "/images/pricing-custom-product.png",
    imageAlt: "3D full-stack product dashboard with API flow, database, AI bot, and cloud deployment",
    stack: [
      { label: "APIs", icon: "api" },
      { label: "Data", icon: "data" },
      { label: "AI", icon: "ai" },
    ],
    includes: [
      { label: "React frontend", icon: "component" },
      { label: "Node.js / Java APIs", icon: "api" },
      { label: "Database integration", icon: "data" },
      { label: "AI automation options", icon: "ai" },
      { label: "Data dashboards", icon: "dashboard" },
      { label: "Deployment support", icon: "deploy" },
    ],
  },
];
