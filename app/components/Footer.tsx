import { brand, footerServices } from "../data/site";
import { LogoMark } from "./LogoMark";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "AI", href: "#showcase" },
  { label: "Data", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="border-t border-[#D2D2D7] bg-[#F5F5F7] px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="apple-wide-container">
        <p className="max-w-[780px] border-b border-[#D2D2D7] pb-5 text-[12px] leading-5 text-[#6E6E73]">
          Devlentra is an independent technology services brand building
          affordable websites, ecommerce stores, AI tools, data products, and
          full-stack applications for businesses in India and worldwide.
        </p>
        <div className="grid gap-8 border-b border-[#D2D2D7] py-7 text-[12px] leading-5 md:grid-cols-4">
          <div>
            <LogoMark />
            <p className="mt-3 text-[#6E6E73]">{brand.owner}</p>
            <p className="mt-1 text-[#6E6E73]">{brand.title}</p>
            <p className="mt-3 text-[#6E6E73]">{brand.email}</p>
            <p className="mt-1 text-[#6E6E73]">{brand.phone}</p>
            <p className="mt-1 text-[#6E6E73]">{brand.location}</p>
          </div>
          <div>
            <p className="font-semibold text-[#1D1D1F]">Services</p>
            <ul className="mt-3 grid gap-2 text-[#6E6E73]">
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
            <p className="font-semibold text-[#1D1D1F]">Explore</p>
            <ul className="mt-3 grid gap-2 text-[#6E6E73]">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-[#1D1D1F]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#1D1D1F]">Connect</p>
            <ul className="mt-3 grid gap-2 text-[#6E6E73]">
              <li>{brand.linkedin}</li>
              <li>{brand.github}</li>
              <li>{brand.portfolio}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-5 text-[12px] text-[#86868B] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 {brand.name}. All rights reserved.</p>
          {/* <p>Independent studio. No affiliation with Apple Inc.</p> */}
        </div>
      </div>
    </footer>
  );
}
