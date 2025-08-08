"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  if (!phone) return null;
  const href = `https://wa.me/${phone}`;
  return (
    <Link
      href={href}
      target="_blank"
      className="fixed bottom-6 right-6 rounded-full bg-accent text-accent-foreground px-4 py-3 text-sm font-medium shadow-lg hover:opacity-90"
    >
      WhatsApp
    </Link>
  );
}


