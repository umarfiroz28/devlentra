import { MessageCircle } from "lucide-react";

const whatsappHref = "https://wa.me/8077038844";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      className="apple-focus fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_42px_rgba(37,211,102,0.36)] transition hover:-translate-y-1 hover:bg-[#1FB85A] sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span
        className="absolute -right-0.5 -top-0.5 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-[#FF3B30] px-1 text-[12px] font-bold leading-none text-white shadow-[0_8px_18px_rgba(255,59,48,0.28)]"
        aria-label="1 unread message"
      >
        1
      </span>
    </a>
  );
}
