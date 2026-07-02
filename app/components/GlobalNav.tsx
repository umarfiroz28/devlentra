import { LogoMark } from "./LogoMark";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "AI", href: "#showcase" },
  { label: "Data", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function GlobalNav() {
  return (
    <header className="apple-nav sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex h-full w-full max-w-[1024px] items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#hero"
          className="apple-nav-link min-w-0 truncate text-[#1D1D1F]"
          aria-label="Devlentra home"
        >
          <LogoMark />
        </a>
        <div className="ml-6 flex items-center gap-5 overflow-x-auto [scrollbar-width:none] sm:gap-8 [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="apple-nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
