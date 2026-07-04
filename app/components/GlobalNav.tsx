"use client";

import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { packages } from "../data/packages";
import { services } from "../data/services";
import { brand } from "../data/site";
import { LogoMark } from "./LogoMark";

type NavPanel = "services" | "contact" | null;
type NavItem = {
  label: string;
  href: string;
  panel?: Exclude<NavPanel, null>;
};

const navItems: NavItem[] = [
  { label: "Services", href: "#services", panel: "services" },
  { label: "Work", href: "#work" },
  { label: "AI", href: "#showcase" },
  { label: "Data", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact", panel: "contact" },
];

const whatsappHref = "https://wa.me/7310886906";
const phoneHref = `tel:${brand.phone.replace(/[^\d+]/g, "")}`;
const emailHref = `mailto:${brand.email}`;
const servicePreview = services.slice(0, 8);
const mobileServicePreview = services.slice(0, 5);

function ServicesMegaMenu() {
  return (
    <div className="rounded-[28px] border border-white/70 bg-white/72 p-5 text-left shadow-[0_28px_90px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-[42px] backdrop-saturate-[180%]">
      <div className="grid gap-5 lg:grid-cols-[1.45fr_0.75fr]">
        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[12px] font-bold uppercase leading-none text-[#0071E3]">
                Website summary
              </p>
              <p className="mt-2 text-[22px] font-bold leading-tight text-[#1D1D1F]">
                Services Devlentra provides
              </p>
            </div>
            <span className="hidden rounded-full bg-[#EAF3FF] px-3 py-1.5 text-[12px] font-bold text-[#0066CC] sm:inline-flex">
              {services.length}+ build types
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {servicePreview.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.title}
                  href="#services"
                  className="apple-focus group/service rounded-[18px] bg-white/48 p-3 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.62),inset_0_0_0_2px_rgba(0,0,0,0.025)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#EAF3FF]/82 hover:shadow-[0_16px_32px_rgba(0,113,227,0.12),inset_0_0_0_1px_rgba(0,113,227,0.14)]"
                >
                  <span className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] transition group-hover/service:scale-105">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-bold">
                        {service.title}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-[12px] leading-4 text-[#6E6E73]">
                        {service.description}
                      </span>
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="rounded-[24px] bg-white/46 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.64),inset_0_0_0_2px_rgba(0,0,0,0.025)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[12px] font-semibold text-[#86868B]">
                Starter pricing
              </p>
              <p className="text-[15px] font-bold text-[#1D1D1F]">
                Low entry cost
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-2">
            {packages.map((item) => (
              <a
                key={item.title}
                href="#pricing"
                className="apple-focus flex items-center justify-between gap-3 rounded-[16px] bg-white/72 px-3 py-2.5 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)] backdrop-blur-md transition hover:bg-[#EAF3FF]"
              >
                <span className="min-w-0 truncate text-[13px] font-semibold">
                  {item.title}
                </span>
                <span className="shrink-0 rounded-full bg-[#EAF3FF] px-2.5 py-1 text-[12px] font-bold text-[#0066CC]">
                  {item.startingAt}
                </span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="apple-focus mt-4 flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0071E3] px-4 text-[15px] font-semibold text-white shadow-[0_14px_28px_rgba(0,113,227,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0077ED]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactMegaMenu() {
  return (
    <div className="ml-auto max-w-[340px] rounded-[24px] border border-white/70 bg-white/72 p-4 text-left shadow-[0_24px_80px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-[42px] backdrop-saturate-[180%]">
      <p className="text-[12px] font-semibold text-[#86868B]">
        Start faster with direct contact
      </p>
      <div className="mt-3 grid gap-2">
        <a
          href={phoneHref}
          className="apple-focus flex items-center gap-3 rounded-[16px] bg-white/52 px-3 py-3 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.64)] backdrop-blur-xl transition hover:bg-[#EAF3FF]/82"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[12px] text-[#86868B]">Phone</span>
            <span className="block text-[14px] font-semibold">{brand.phone}</span>
          </span>
        </a>
        <a
          href={emailHref}
          className="apple-focus flex items-center gap-3 rounded-[16px] bg-white/52 px-3 py-3 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.64)] backdrop-blur-xl transition hover:bg-[#EAF3FF]/82"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0071E3] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[12px] text-[#86868B]">Email</span>
            <span className="block text-[14px] font-semibold">{brand.email}</span>
          </span>
        </a>
      </div>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="apple-focus mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-[15px] font-semibold text-white shadow-[0_14px_28px_rgba(37,211,102,0.26)] transition hover:-translate-y-0.5 hover:bg-[#1FB85A]"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp on 7310886906
      </a>
    </div>
  );
}

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<NavPanel>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", activePanel !== null);

    return () => {
      document.body.classList.remove("nav-menu-open");
    };
  }, [activePanel]);

  function closeMenus() {
    setIsOpen(false);
    setActivePanel(null);
  }

  return (
    <header
      className="apple-nav sticky top-0 z-50"
      onMouseLeave={() => setActivePanel(null)}
    >
      <nav
        aria-label="Global"
        className="apple-wide-container flex min-h-[var(--apple-nav-height)] items-center justify-between"
      >
        <a
          href="#hero"
          className="apple-nav-link flex min-w-0 items-center text-[#1D1D1F]"
          aria-label="Devlentra home"
          onClick={closeMenus}
          onMouseEnter={() => setActivePanel(null)}
        >
          <LogoMark />
        </a>
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navItems.map((item) => {
            const panel = item.panel ?? null;
            const hasPanel = panel !== null;

            return (
              <a
                key={item.label}
                href={item.href}
                className="apple-nav-link inline-flex h-10 items-center gap-1.5"
                aria-haspopup={hasPanel ? "true" : undefined}
                aria-expanded={hasPanel ? activePanel === panel : undefined}
                onClick={() => setActivePanel(null)}
                onFocus={() => setActivePanel(panel)}
                onMouseEnter={() => setActivePanel(panel)}
              >
                {item.label}
                {hasPanel ? (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition ${
                      activePanel === panel ? "rotate-180 text-[#0071E3]" : ""
                    }`}
                    aria-hidden="true"
                  />
                ) : null}
              </a>
            );
          })}
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="apple-focus inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/74 text-[#1D1D1F] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] transition hover:bg-white md:hidden"
          onClick={() => {
            setIsOpen((current) => !current);
            setActivePanel(null);
          }}
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed bottom-0 left-0 right-0 top-[var(--apple-nav-height)] z-0 hidden bg-[#F5F5F7]/72 backdrop-blur-[36px] backdrop-saturate-[190%] transition duration-200 md:block ${
          activePanel ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute left-0 right-0 top-full z-10 hidden px-4 pb-4 transition duration-200 md:block ${
          activePanel
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onMouseEnter={() => setActivePanel(activePanel)}
      >
        <div className="apple-wide-container">
          {activePanel === "services" ? <ServicesMegaMenu /> : null}
          {activePanel === "contact" ? <ContactMegaMenu /> : null}
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/60 bg-[#FBFBFD]/78 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-[34px] backdrop-saturate-[180%] md:hidden">
          <div className="apple-wide-container grid py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="apple-focus rounded-[14px] px-3 py-3 text-[15px] font-semibold text-[#1D1D1F] transition hover:bg-[#F5F5F7]"
                onClick={closeMenus}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 rounded-[20px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)]">
              <p className="text-[13px] font-semibold text-[#1D1D1F]">
                Popular services
              </p>
              <div className="mt-3 grid gap-2">
                {mobileServicePreview.map((service) => {
                  const Icon = service.icon;

                  return (
                    <a
                      key={service.title}
                      href="#services"
                      className="apple-focus flex items-center gap-3 rounded-[14px] bg-[#F5F5F7] px-3 py-2.5 text-[#1D1D1F] transition hover:bg-[#EAF3FF]"
                      onClick={closeMenus}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0071E3]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-[14px] font-semibold">{service.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="mt-2 rounded-[20px] bg-white p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)]">
              <p className="text-[13px] font-semibold text-[#1D1D1F]">
                Contact Devlentra
              </p>
              <div className="mt-3 grid gap-2 text-[14px] text-[#6E6E73]">
                <a
                  href={phoneHref}
                  className="apple-focus flex items-center gap-2 rounded-[14px] px-2 py-2 transition hover:bg-[#F5F5F7]"
                  onClick={closeMenus}
                >
                  <Phone className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                  {brand.phone}
                </a>
                <a
                  href={emailHref}
                  className="apple-focus flex items-center gap-2 rounded-[14px] px-2 py-2 transition hover:bg-[#F5F5F7]"
                  onClick={closeMenus}
                >
                  <Mail className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                  {brand.email}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-focus mt-1 flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-[15px] font-semibold text-white transition hover:bg-[#1FB85A]"
                  onClick={closeMenus}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
