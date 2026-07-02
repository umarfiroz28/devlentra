import { brand, footerServices, navLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
              YT
            </span>
            <span className="font-semibold">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Premium websites, AI tools, ecommerce platforms, dashboards, and full-stack
            products built for Indian and global businesses.
          </p>
          <p className="mt-4 text-sm font-medium text-cyan-200">
            Built for Indian and global businesses
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-400">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className="transition hover:text-white">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Links</h2>
          <ul className="mt-4 grid gap-3 text-sm text-slate-400">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 {brand.name}. All rights reserved.</p>
        <p>LinkedIn · GitHub · Email</p>
      </div>
    </footer>
  );
}
