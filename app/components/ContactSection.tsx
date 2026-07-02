import { ArrowRight, GitBranch, Mail, MapPin, MessageCircle, Network } from "lucide-react";
import { brand, budgetOptions, contactServiceOptions } from "../data/site";
import { GradientBlob } from "./GradientBlob";
import { SectionHeading } from "./SectionHeading";

const inputClass =
  "rounded-[18px] border border-[#D2D2D7] bg-white px-4 py-4 text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#0071E3] focus:ring-4 focus:ring-[#EAF3FF]";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5F5F7] px-4 py-24 sm:px-6 lg:px-8">
      <GradientBlob className="left-0 top-20 h-96 w-96 opacity-80" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <SectionHeading
              eyebrow="Start a conversation"
              title="Ready to Build a Website, AI Tool, or Digital Product?"
              description="Share your idea with us. We will help you choose the right technology and turn it into a polished, scalable product."
            />
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D1D1F] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full border border-[#D2D2D7] bg-white px-7 py-3.5 text-sm font-semibold text-[#1D1D1F] transition hover:bg-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-[#F5F5F7]"
              >
                Book a Free Consultation
              </a>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-[#6E6E73]">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                {brand.email}
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                {brand.whatsapp}
              </p>
              <p className="flex items-center gap-3">
                <Network className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                {brand.linkedin}
              </p>
              <p className="flex items-center gap-3">
                <GitBranch className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                {brand.github}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#0071E3]" aria-hidden="true" />
                {brand.location}
              </p>
            </div>
          </div>
          <form
            id="contact-form"
            className="apple-card relative grid gap-5 rounded-[36px] p-6 sm:p-8"
            aria-label="Project inquiry form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#1D1D1F]">
                Name
                <input className={inputClass} name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#1D1D1F]">
                Email
                <input className={inputClass} name="email" placeholder="you@example.com" type="email" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#1D1D1F]">
              Phone / WhatsApp
              <input className={inputClass} name="phone" placeholder="+91 00000 00000" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#1D1D1F]">
                Service
                <select className={inputClass} name="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {contactServiceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#1D1D1F]">
                Budget range
                <select className={inputClass} name="budget" defaultValue="">
                  <option value="" disabled>
                    Select budget
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-[#1D1D1F]">
              Message
              <textarea
                className={`${inputClass} min-h-40 resize-y`}
                name="message"
                placeholder="Tell us about the business goal, timeline, and product idea."
              />
            </label>
            <button
              type="submit"
              aria-label="Submit project inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(0,113,227,0.2)] transition hover:bg-[#0077ED] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:ring-offset-2 focus:ring-offset-white"
            >
              Submit Inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
