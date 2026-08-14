import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Kariyer ve Eğitim Hayatım",
  description:
    "L'Oréal, English Home, Securitas Technology, Demirören Medya, Yemeksepeti ve Concentrix'teki kariyer yolculuğu. Anadolu Üniversitesi ve Namık Kemal Üniversitesi eğitim geçmişi.",
  alternates: { canonical: "/career" },
  openGraph: {
    title: "Kariyer ve Eğitim Hayatım | Altan Kaan Kaskan",
    description:
      "Türkiye'nin ilk fiziksel engelli İSG Uzmanı'nın kariyer ve eğitim yolculuğu.",
    url: "/career",
  },
};

const EXPERIENCE = [
  {
    role: "Kalite, Çevre, Sağlık ve Güvenlik Uzmanı",
    company: "L'Oréal",
    period: "Nis 2025 – Devam ediyor",
    note: "Türkiye'nin ilk fiziksel engelli KÇSG Uzmanı",
    logo: "/logos/loreal.jpg",
  },
  {
    role: "Müşteri İlişkileri Yönetimi Uzman Yardımcısı",
    company: "English Home",
    period: "Kas 2024 – Ara 2024",
    note: "Engelli Personel",
    logo: "/logos/english-home.jpg",
  },
  {
    role: "Dış Ticaret Uzman Yardımcısı",
    company: "Securitas Technology",
    period: "Ağu 2024 – Eyl 2024",
    note: "Engelli Personel",
    logo: "/logos/securitas.jpg",
  },
  {
    role: "Proje Satış Yönetimi Uzmanı",
    company: "Demirören Medya",
    period: "Şub 2023 – Ara 2023",
    note: "Engelli Personel",
    logo: "/logos/demiroren.jpg",
  },
  {
    role: "Lojistik Operasyon Sorumlusu",
    company: "Yemeksepeti",
    period: "Kas 2022 – Şub 2023",
    note: "Engelli Personel",
    logo: "/logos/yemeksepeti.png",
  },
  {
    role: "Sosyal Medya Müşteri Danışmanı",
    company: "Concentrix",
    period: "Ağu 2021 – Eki 2022",
    note: "Engelli Personel",
    logo: "/logos/concentrix.jpg",
  },
];

const EDUCATION = [
  {
    degree: "Ön Lisans — İş Sağlığı ve Güvenliği Teknolojisi",
    school: "Anadolu Üniversitesi Açıköğretim Fakültesi",
    period: "Ağu 2025 – Haz 2028",
    logo: "/logos/anadolu-uni.jpg",
  },
  {
    degree: "Ön Lisans — İşletme Yönetimi",
    school: "Namık Kemal Üniversitesi",
    period: "Eyl 2016 – Haz 2019",
    logo: "/logos/namik-kemal-uni.jpg",
  },
];

export default function CareerPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <SectionHeading
        label="Başarılarım"
        title="Önemli kilometre taşları"
        subtitle="Bu yolculuğun her adımı; tekerlekli sandalyeden milli takıma, tarihi bir kariyer ilkine kadar kararlılığın neye benzediğinin kanıtıdır."
      />

      {/* Experience */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Profesyonel Deneyim</h2>
        <div className="space-y-4">
          {EXPERIENCE.map((job) => (
            <div
              key={job.role + job.company}
              className="flex items-center gap-5 bg-white border border-blue-100 rounded-2xl px-6 py-5 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden border border-blue-100 bg-blue-50">
                <NextImage src={job.logo} alt={job.company} fill className="object-contain p-1.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-blue-900 font-bold text-sm">{job.role}</p>
                <p className="text-blue-500 text-sm mt-0.5">{job.company}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-blue-400 text-xs font-medium">{job.period}</p>
                {job.note && (
                  <span className="inline-block mt-1 text-xs bg-blue-50 text-blue-600 font-semibold px-2.5 py-0.5 rounded-full">
                    {job.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Eğitim</h2>
        <div className="space-y-4">
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="flex items-center gap-5 bg-white border border-blue-100 rounded-2xl px-6 py-5 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden border border-blue-100 bg-blue-50">
                <NextImage src={edu.logo} alt={edu.school} fill className="object-contain p-1.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-blue-900 font-bold text-sm">{edu.degree}</p>
                <p className="text-blue-500 text-sm mt-0.5">{edu.school}</p>
              </div>
              <p className="text-blue-400 text-xs font-medium flex-shrink-0">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-blue-600 rounded-3xl p-10 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">İş birliği yapmak veya iletişime geçmek mi istiyorsunuz?</h3>
        <p className="text-blue-100 mb-6 text-sm">
          Altan Kaan; konuşma fırsatlarına, mentorluğa ve işyerinde engelli kapsayıcılığı konusunda diğer insanlarla bağlantı kurmaya açık.
        </p>
        <Link href="/contact" className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-all inline-block">
          İletişime Geç
        </Link>
      </div>
    </div>
  );
}
