import Link from "next/link";
import NextImage from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CardCarousel from "@/components/CardCarousel";
import HeroBackground from "@/components/HeroBackground";

const TEASER_CARDS = [
  {
    icon: "📖",
    title: "Hikayem",
    body: "Teşhisten ayrıcalığa — başkalarının imkânsız dediği bir kariyeri nasıl inşa ettim.",
    href: "/story",
  },
  {
    icon: "🏆",
    title: "Başarılarım",
    body: "Bu yolculuğa damga vuran sertifikalar, ödüller ve kilometre taşları.",
    href: "/career",
  },
  {
    icon: "✉️",
    title: "Bana Ulaşın",
    body: "İş birliği yapmak, beni bir konuşmaya davet etmek ya da sadece merhaba demek istiyorsanız.",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <HeroBackground />
        {/* Avatar — put your photo as altan.jpg inside the public/ folder */}
        <div className="w-72 h-72 rounded-full border-4 border-blue-200 mb-8 shadow-md overflow-hidden relative">
          <NextImage
            src="/altan.jpg"
            alt="Altan Kaan Kaskan"
            fill
            className="object-cover"
          />
        </div>

        <span className="inline-block bg-white-100 text-blue-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          Öncü · Sporcu · Profesyonel
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
          <span className="text-blue-300">Her Engel Aşılmak İçindir</span>, {" "}
           İşte benim hikayem
        </h1>

        <p className="text-lg text-blue-100 max-w-xl mb-10 leading-relaxed">
          Ben Altan Kaan Kaskan — 900 gram doğdum, 16 yıl tekerlekli sandalyede yaşadıktan sonra Doğu Avrupa'da
          yüzücü olarak yarıştım ve L&apos;Oréal&apos;de Türkiye&apos;nin ilk Fiziksel Engelli Kalite,
          Çevre, Sağlık ve Güvenlik Uzmanı olarak çalışmaya başladım. 
          Misyonum: Benimle aynı sıkıntıları yaşayan bireylerin yolculuğunda rehberlik etmek.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/story"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Hikayemi Oku
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all"
          >
            İletişime Geç
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/20 pt-12 w-full max-w-lg">
          {[
            { number: "15+", label: "Yıl Deneyim" },
            { number: "10+", label: "Konuşma" },
            { number: "1.", label: "Engelli İSG Uzmanı" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-white">{s.number}</p>
              <p className="text-xs text-blue-200 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote strip ─────────────────────────────────── */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-light leading-relaxed italic">
            &quot;Hayattaki amacım, fırsat verildiğinde engelli bireylerin neler başarabileceğini göstermek.&quot;
          </p>
          <p className="mt-4 text-blue-200 text-sm font-medium">— Altan Kaan Kaskan</p>
        </div>
      </section>

      {/* ── Carousel ────────────────────────────────────── */}
      <CardCarousel />

      {/* ── Teaser cards ────────────────────────────────── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <SectionHeading
          label="Keşfet"
          title="Bu site ne hakkında"
          subtitle="Yolculuğumu paylaştığım, kilometre taşlarımı kutladığım ve kendi yollarını çizen diğer insanlarla bağlantı kurduğum bir alan."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TEASER_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group text-left bg-white border border-blue-100 rounded-2xl p-7 hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="text-blue-900 font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-blue-500 text-sm leading-relaxed">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
