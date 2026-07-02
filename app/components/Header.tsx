import { ArrowUpRight } from "lucide-react";
import { brand, navLinks } from "../data/site";
import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8E8ED]/80 bg-[#F5F5F7]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="flex items-center gap-3 text-[#1D1D1F]">
          <LogoMark compact />
          <span className="text-sm font-semibold sm:text-base">{brand.name}</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6E6E73] transition-colors hover:text-[#1D1D1F]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="apple-btn apple-btn-dark min-h-10 px-5 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
        >
          <span className="hidden sm:inline">Start a Project</span>
          <span className="sm:hidden">Start</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
