"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  GitBranch,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Network,
} from "lucide-react";
import { brand, budgetOptions, contactServiceOptions } from "../data/site";
import { AppleButton } from "./AppleButton";

const inputClass =
  "rounded-[16px] border border-[#D2D2D7] bg-white px-4 py-4 text-[17px] text-[#1D1D1F] outline-none transition placeholder:text-[#86868B] focus:border-[#0071E3] focus:ring-4 focus:ring-[#EAF3FF]";

export function ContactSection() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const isSubmitting = submitState === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmitState("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          result?.message ?? "The inquiry could not be submitted right now.",
        );
      }

      form.reset();
      setStatusMessage(
        "Your inquiry was submitted successfully. I will get it on email and get back to you soon.",
      );
      setSubmitState("success");
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "The inquiry could not be submitted right now.",
      );
      setSubmitState("error");
    }
  }

  function handleInput() {
    if (submitState === "success" || submitState === "error") {
      setSubmitState("idle");
      setStatusMessage("");
    }
  }

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
              Tell me what you want to build.
            </h2>
            <p className="apple-body mt-5 max-w-[620px]">
              Share your idea and I will help you choose the right technology,
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
                {brand.phone}
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
            onInput={handleInput}
            onSubmit={handleSubmit}
            className="apple-card grid gap-5 p-6 sm:p-8"
            aria-label="Project inquiry form"
            aria-busy={isSubmitting}
          >
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              name="companyWebsite"
              tabIndex={-1}
              type="text"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
                Name
                <input className={inputClass} name="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
                Email
                <input
                  className={inputClass}
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
            </div>
            <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
              Phone / WhatsApp
              <input className={inputClass} name="phone" placeholder={brand.phone} required />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-[14px] font-medium text-[#1D1D1F]">
                Service
                <select className={inputClass} name="service" defaultValue="" required>
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
                <select className={inputClass} name="budget" defaultValue="" required>
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
                required
              />
            </label>
            <button
              type="submit"
              aria-label="Submit project inquiry"
              className="apple-button apple-button-primary apple-focus w-full disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Sending inquiry
                  <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                </>
              ) : (
                <>
                  Submit Inquiry
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
            {submitState === "success" ? (
              <p
                className="flex items-start gap-2 rounded-[16px] bg-[#EAF8EF] px-4 py-3 text-[14px] font-medium leading-5 text-[#126B35] shadow-[inset_0_0_0_1px_rgba(18,107,53,0.12)]"
                role="status"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {statusMessage}
              </p>
            ) : null}
            {submitState === "error" ? (
              <p
                className="flex items-start gap-2 rounded-[16px] bg-[#FFF2F0] px-4 py-3 text-[14px] font-medium leading-5 text-[#B42318] shadow-[inset_0_0_0_1px_rgba(180,35,24,0.12)]"
                role="alert"
              >
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
