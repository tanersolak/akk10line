"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const SOCIAL = [
  {
    label: "LinkedIn",
    sub: "Altan Kaan Kaskan",
    href: "https://www.linkedin.com/in/altan-kaan-kaskan-a2350a389/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mx-auto mb-2 text-blue-600">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    ),
  },
  {
    label: "E-posta",
    sub: "akk10line@gmail.com",
    href: "mailto:akk10line@gmail.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7 mx-auto mb-2 text-blue-600">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
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
          <p className="text-blue-500 text-sm">En kısa sürede size dönüş yapacağım.</p>
          <button
            onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
            className="mt-6 text-blue-600 text-sm font-medium underline"
          >
            Başka bir mesaj gönder
          </button>
        </div>
      ) : (
        <div className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">Ad Soyad *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Adınız ve soyadınız"
                className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">E-posta *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="ornek@email.com"
                className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">Konu</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Bu mesaj ne hakkında?"
              className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="mb-7">
            <label className="block text-xs font-semibold text-blue-700 mb-1.5 uppercase tracking-wider">Mesaj *</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Mesajınızı buraya yazın..."
              className="w-full border border-blue-200 rounded-xl px-4 py-3 text-sm text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
          </div>
          {status === "error" && (
            <p className="text-red-500 text-sm mb-4 text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
          )}
          <button onClick={handleSubmit} disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md">
            {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
          </button>
        </div>
      )}

      <div className="mt-10 grid sm:grid-cols-2 gap-4 text-center text-sm">
        {SOCIAL.map((s) => (
          <a key={s.label} href={s.href}
            target={s.label === "LinkedIn" ? "_blank" : undefined}
            rel={s.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            className="bg-blue-50 border border-blue-100 rounded-xl p-5 hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer">
            {s.svg}
            <p className="font-semibold text-blue-800">{s.label}</p>
            <p className="text-blue-400 text-xs mt-1">{s.sub}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
