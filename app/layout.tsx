import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devlentra | Full-Stack Software, Websites, AI & Automation",
  description:
    "Devlentra provides WordPress from Rs 1,499, Shopify from Rs 1,699, React websites from Rs 1,799, plus full-stack, AI, data, and cloud engineering services.",
  keywords: [
    "Devlentra",
    "WordPress development Rs 1499",
    "Shopify development Rs 1699",
    "React development Rs 1799",
    "full-stack software engineer",
    "AI automation services India",
  ],
  icons: {
    icon: "/images/brand/devlentra-favicon.png",
    shortcut: "/images/brand/devlentra-favicon.png",
    apple: "/images/brand/devlentra-favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
