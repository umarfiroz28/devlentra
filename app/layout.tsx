import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devlentra by Umar Firoz | Full-Stack Software, Websites, AI & Automation",
  description:
    "Portfolio and services by Umar Firoz: WordPress from Rs 1,499, Shopify from Rs 1,699, React websites from Rs 1,799, plus full-stack, AI, data, and cloud engineering.",
  keywords: [
    "Umar Firoz",
    "Devlentra",
    "WordPress development Rs 1499",
    "Shopify development Rs 1699",
    "React development Rs 1799",
    "full-stack software engineer",
    "AI automation services India",
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
