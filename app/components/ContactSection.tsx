import { ArrowRight, GitBranch, Mail, MapPin, MessageCircle, Network } from "lucide-react";
import { brand, budgetOptions, contactServiceOptions } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-cyan-200/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.09),rgba(15,23,42,0.72)_42%,rgba(124,58,237,0.11))] p-6 shadow-[0_30px_130px_rgba(14,165,233,0.16)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Start a conversation"
                title="Ready to Build a Website, AI Tool, or Digital Product?"
                description="Share your idea with us. We will help you choose the right technology and turn it into a polished, scalable product."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Book a Free Consultation
                </a>
              </div>
              <div className="mt-10 grid gap-4 text-sm text-slate-300">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {brand.email}
                </p>
                <p className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {brand.whatsapp}
                </p>
                <p className="flex items-center gap-3">
                  <Network className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {brand.linkedin}
                </p>
                <p className="flex items-center gap-3">
                  <GitBranch className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {brand.github}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                  {brand.location}
                </p>
              </div>
            </div>
            <form id="contact-form" className="grid gap-4" aria-label="Project inquiry form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Name
                  <input
                    className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
                    name="name"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Email
                  <input
                    className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Phone / WhatsApp
                <input
                  className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
                  name="phone"
                  placeholder="+91 00000 00000"
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Service
                  <select
                    className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-200"
                    name="service"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {contactServiceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Budget range
                  <select
                    className="rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-200"
                    name="budget"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select budget
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Message
                <textarea
                  className="min-h-36 resize-y rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200"
                  name="message"
                  placeholder="Tell us about the business goal, timeline, and product idea."
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Submit Inquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
