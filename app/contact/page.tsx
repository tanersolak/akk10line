import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Altan Kaan Kaskan ile iletişime geçin — iş birliği, konuşma daveti, mentorluk veya genel sorularınız için.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "İletişim | Altan Kaan Kaskan",
    description: "Altan Kaan Kaskan ile iletişime geçin.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
