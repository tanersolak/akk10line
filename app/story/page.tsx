import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Hikayem",
  description:
    "900 gram doğdu, 16 yıl tekerlekli sandalyede yaşadı, Prof. Dr. Ufuk Talu'nun ameliyatlarıyla ayağa kalktı ve Türkiye'nin ilk fiziksel engelli İSG Uzmanı oldu.",
  alternates: { canonical: "/story" },
  openGraph: {
    title: "Hikayem | Altan Kaan Kaskan",
    description: "Durmayı reddeden bir hayat — 900 gramdan Türkiye tarihine.",
    url: "/story",
  },
};

const TIMELINE = [
  {
    year: "Doğum",
    title: "İlk Günden Beri Bir Savaşçı",
    body: "Altan Kaan, altı aylıkken sadece 900 gram olarak dünyaya geldi. İlk nefesinden itibaren tüm olasılıklara karşı durdu ve bu savaşçı ruh onu hiçbir zaman terk etmedi.",
  },
  {
    year: "16 Yıl",
    title: "Tekerlekli Sandalyede Bir Hayat",
    body: "Hayatının ilk on altı yılında Altan Kaan tekerlekli sandalye kullandı. Bunun dünyasını sınırlamasına izin vermek yerine, çok az insanın sahip olduğu bir dayanıklılık, kararlılık ve hayat bakışı geliştirdi.",
  },
  {
    year: "Ameliyat",
    title: "Üç Ameliyat, Yeni Bir Başlangıç",
    body: "Prof. Dr. Ufuk Talu tarafından gerçekleştirilen, hayatını değiştiren üç ameliyatın ardından Altan Kaan ayağa kalkabildi ve hayata yeniden başladı. Bu sadece tıbbi bir dönüm noktası değil, bir yeniden doğuştu.",
  },
  {
    year: "Spor",
    title: "Hobiden Milli Takıma",
    body: "Sağlığı için yüzmeye başlayan Altan Kaan, kısa sürede bir tutku ve yetenek keşfetti. Türkiye'de 3., İstanbul'da 2. oldu, milli takıma girdi ve Doğu Avrupa'da 18 ülkede yarıştı.",
  },
  {
    year: "2021",
    title: "Engelli Personel Olarak İş Hayatına Adım",
    body: "Altan Kaan, profesyonel kariyerine net bir misyonla başladı: engelli bireylerin neler başarabileceğini kanıtlamak. Medya, lojistik, müşteri ilişkileri ve teknoloji gibi birçok sektörde, her zaman engelli personel havuzunun bir parçası olarak çalıştı.",
  },
  {
    year: "2025",
    title: "Türkiye'nin İlk Fiziksel Engelli KÇSG Uzmanı",
    body: "L'Oréal'in Çeşitlilik, Eşitlik, Adalet ve Kapsayıcılık ilkeleri doğrultusunda Engelli Personel Havuzu'ndan işe alınan Altan Kaan, sıfırdan eğitildi ve Türkiye'nin ilk Fiziksel Engelli Kalite, Çevre, Sağlık ve Güvenlik Uzmanı oldu, tarihi bir kilometre taşı.",
  },
];

export default function StoryPage() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <SectionHeading
        label="Hikayem"
        title="Durmayı reddeden bir hayat"
        subtitle="900 gram doğum. Bir tekerlekli sandalye. Üç ameliyat. Bir milli takım. Ve şimdi, Türkiye tarihinde bir ilk."
      />

      <div className="relative mt-16">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-blue-100 -translate-x-1/2" />
        <div className="space-y-12">
          {TIMELINE.map((item, i) => (
            <div
              key={item.year}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs text-center shadow-md z-10 px-1">
                {item.year}
              </div>
              <div
                className={`ml-16 md:ml-0 md:w-1/2 bg-white border border-blue-100 rounded-2xl p-6 shadow-sm ${
                  i % 2 === 0 ? "md:ml-auto md:pr-16" : "md:mr-auto md:pl-16"
                }`}
              >
                <h3 className="text-blue-900 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-blue-50 rounded-3xl p-10 text-center border border-blue-100">
        <p className="text-blue-800 text-lg leading-relaxed max-w-2xl mx-auto italic">
          &quot;Hayattaki amacım, fırsat verildiğinde engelli bireylerin neler başarabileceğini göstermek.&quot;
        </p>
        <p className="mt-4 text-blue-400 text-sm font-semibold">— Altan Kaan Kaskan</p>
      </div>
    </div>
  );
}
