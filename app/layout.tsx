import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourTech Studio | Premium Websites, AI Solutions & Full-Stack Products",
  description:
    "Premium web, ecommerce, AI automation, data, machine learning, and full-stack product development for Indian and global clients.",
  keywords: [
    "web development agency India",
    "AI automation services",
    "Shopify development",
    "Next.js development",
    "full-stack development",
    "data science dashboards",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
