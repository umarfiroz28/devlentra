import { brand, footerServices, navLinks } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8ED] bg-[#F5F5F7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3 text-[#1D1D1F]">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#D2D2D7] bg-white text-sm font-bold text-[#0071E3] shadow-sm">
              YT
            </span>
            <span className="font-semibold">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#6E6E73]">
            Premium websites, AI tools, ecommerce platforms, dashboards, and full-stack
            products built for Indian and global businesses.
          </p>
          <p className="mt-4 text-sm font-medium text-[#0071E3]">
            Built for Indian and global businesses
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[#1D1D1F]">Services</h2>
          <ul className="mt-4 grid gap-3 text-sm text-[#6E6E73]">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className="transition hover:text-[#1D1D1F]">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-[#1D1D1F]">Links</h2>
          <ul className="mt-4 grid gap-3 text-sm text-[#6E6E73]">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#1D1D1F]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-[#6E6E73]">{brand.email}</p>
          <p className="mt-2 text-sm text-[#6E6E73]">{brand.whatsapp}</p>
          <p className="mt-2 text-sm text-[#6E6E73]">{brand.location}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#E8E8ED] pt-6 text-sm text-[#86868B] sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 {brand.name}. All rights reserved.</p>
        <p>LinkedIn | GitHub | Email</p>
      </div>
    </footer>
  );
}
