"use client";

import { useState } from "react";
import { LinkedIn, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const SOCIAL = [
  {
    Icon: LinkedIn,
    label: "LinkedIn",
    sub: "/in/altan-kaan-kaskan-a2350a389",
    href: "https://www.linkedin.com/in/altan-kaan-kaskan-a2350a389/",
  },
  {
    Icon: Mail,
    label: "E-posta",
    sub: "altankaan@example.com",
    href: "mailto:altankaan@example.com",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <SectionHeading
        label="İletişim"
        title="Bağlantı kuralım"
        subtitle="Bir meslektaşım, tavsiye arayan engelli bir birey veya bir gazeteci olun — sizden haber almak isterim."
      />

      {status === "sent" ? (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-12 text-center">
          <span className="text-5xl block mb-4">✅</span>
          <h3 className="text-blue-900 font-bold text-xl mb-2">Mesaj gönderildi!</h3>
          <p className="text-blue-500 text-sm">
            Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede size dönüş yapacağım.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ name: "", email: "", subject: "", message: "" });
            }}
            className="mt-6 text-blue-600 text-sm font-medium underline"
          >
            Başka bir mesaj gönder
          </button>
        </div>
      ) : (
        <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">
                Ad Soyad *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Adınız ve soyadınız"
                className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">
                E-posta *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ornek@email.com"
                className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">
              Konu
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Bu mesaj ne hakkında?"
              className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-7">
            <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">
              Mesaj *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Mesajınızı buraya yazın..."
              className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm mb-4 text-center">
              Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md"
          >
            {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
          </button>
        </div>
      )}

      {/* Social links */}
      <div className="mt-10 grid sm:grid-cols-2 gap-4 text-center text-sm">
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.label === "LinkedIn" ? "_blank" : undefined}
            rel={s.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            className="bg-blue-50 border border-blue-100 rounded-xl p-5 hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
          >
            <s.Icon className="w-7 h-7 mx-auto mb-2 text-blue-600" strokeWidth={1.75} />
            <p className="font-semibold text-blue-800">{s.label}</p>
            <p className="text-blue-400 text-xs mt-1">{s.sub}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
