import { ArrowUpRight } from "lucide-react";
import { brand, navLinks } from "../data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8E8ED]/80 bg-[#F5F5F7]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="flex items-center gap-3 text-[#1D1D1F]">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#D2D2D7] bg-white text-sm font-bold text-[#0071E3] shadow-sm">
            YT
          </span>
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
          className="inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(29,29,31,0.16)] transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
        >
          <span className="hidden sm:inline">Start a Project</span>
          <span className="sm:hidden">Start</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
