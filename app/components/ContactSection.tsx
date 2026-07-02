import { ArrowRight, GitBranch, Mail, MapPin, MessageCircle, Network } from "lucide-react";
import { brand, budgetOptions, contactServiceOptions } from "../data/site";
import { AppleButton } from "./AppleButton";

const inputClass =
  "rounded-[16px] border border-[#D2D2D7] bg-white px-4 py-4 text-[17px] text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#0071E3] focus:ring-4 focus:ring-[#EAF3FF]";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#F5F5F7] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="apple-wide-container">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="apple-eyebrow">Contact</p>
            <h2 id="contact-title" className="apple-section-title mt-3 text-balance">
              Tell us what you want to build.
            </h2>
            <p className="apple-body mt-5 max-w-[620px]">
              Share your idea and we will help you choose the right technology,
              product path, and first build scope.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <AppleButton href="#contact-form" variant="dark">
                Start a Project
              </AppleButton>
              <AppleButton href="#contact-form" variant="outline">
                Book a Free Consultation
              </AppleButton>
            </div>
            <div className="mt-10 grid gap-4 text-[14px] text-[#6E6E73]">
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
            className="apple-card grid gap-5 p-6 sm:p-8"
            aria-label="Project inquiry form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
                Name
                <input className={inputClass} name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
                Email
                <input className={inputClass} name="email" placeholder="you@example.com" type="email" />
              </label>
            </div>
            <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
              Phone / WhatsApp
              <input className={inputClass} name="phone" placeholder="+91 00000 00000" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
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
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
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
            <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
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
              className="apple-button apple-button-primary apple-focus w-full"
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
