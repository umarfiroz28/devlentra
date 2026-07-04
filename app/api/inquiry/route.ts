import { NextResponse } from "next/server";

const recipientEmail = "devlentra@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

const requiredFields = [
  "name",
  "email",
  "phone",
  "service",
  "budget",
  "message",
] as const;

type InquiryField = (typeof requiredFields)[number];
type InquiryPayload = Record<string, unknown>;

function readString(payload: InquiryPayload, field: string) {
  const value = payload[field];

  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildInquiry(payload: InquiryPayload) {
  return requiredFields.reduce(
    (inquiry, field) => ({
      ...inquiry,
      [field]: readString(payload, field),
    }),
    {} as Record<InquiryField, string>,
  );
}

async function parseInquiryPayload(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = await request.text();

    return body ? (JSON.parse(body) as InquiryPayload) : {};
  }

  const formData = await request.formData();

  return Object.fromEntries(formData.entries()) as InquiryPayload;
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = await parseInquiryPayload(request);
  } catch {
    return NextResponse.json(
      { message: "Please refresh the page and submit the inquiry again." },
      { status: 400 },
    );
  }

  if (readString(payload, "companyWebsite")) {
    return NextResponse.json({
      message: "Inquiry received successfully.",
    });
  }

  const inquiry = buildInquiry(payload);
  const missingFields = requiredFields.filter((field) => !inquiry[field]);

  if (missingFields.length > 0) {
    return NextResponse.json(
      { message: "Please complete all required fields before submitting." },
      { status: 400 },
    );
  }

  if (!isValidEmail(inquiry.email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const emailForm = new FormData();
  emailForm.append("_subject", `New Devlentra inquiry: ${inquiry.service}`);
  emailForm.append("_template", "table");
  emailForm.append("_captcha", "false");
  emailForm.append("_replyto", inquiry.email);
  emailForm.append("Name", inquiry.name);
  emailForm.append("Email", inquiry.email);
  emailForm.append("Phone / WhatsApp", inquiry.phone);
  emailForm.append("Service", inquiry.service);
  emailForm.append("Budget", inquiry.budget);
  emailForm.append("Message", inquiry.message);
  emailForm.append("Submitted from", "Devlentra website contact form");
  emailForm.append("Received at", new Date().toISOString());

  try {
    const response = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: emailForm,
    });

    if (!response.ok) {
      const responseBody = await response.text();

      console.error("Inquiry email service failed", {
        status: response.status,
        responseBody,
      });

      return NextResponse.json(
        {
          message:
            "The inquiry could not be emailed right now. Please use WhatsApp or try again in a moment.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Inquiry email request failed", error);

    return NextResponse.json(
      {
        message:
          "The inquiry could not be emailed right now. Please use WhatsApp or try again in a moment.",
      },
      { status: 502 },
    );
  }
}
