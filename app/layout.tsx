import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://akk10line.com"; // ← satın aldığınız domain ile değiştirin
const SITE_NAME = "Altan Kaan Kaskan";
const SITE_TITLE = "Altan Kaan Kaskan | Türkiye'nin İlk Fiziksel Engelli İSG Uzmanı";
const SITE_DESCRIPTION =
  "900 gram doğdu, 16 yıl tekerlekli sandalyede yaşadı, milli yüzme takımında 18 ülkede yarıştı ve L'Oréal'de Türkiye'nin ilk Fiziksel Engelli Kalite, Çevre, Sağlık ve Güvenlik Uzmanı oldu.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Altan Kaan Kaskan",
    "engelli iş sağlığı güvenliği",
    "engelli İSG uzmanı",
    "Türkiye ilk engelli İSG uzmanı",
    "L'Oréal engelli istihdam",
    "engelli rol model",
    "engelli sporcu türkiye",
    "fiziksel engelli kariyer",
    "disabled health and safety officer Turkey",
    "KÇSG uzmanı",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Altan Kaan Kaskan",
  jobTitle: "Kalite, Çevre, Sağlık ve Güvenlik Uzmanı",
  worksFor: { "@type": "Organization", name: "L'Oréal" },
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com/in/altan-kaan-kaskan-a2350a389/"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Anadolu Üniversitesi" },
    { "@type": "CollegeOrUniversity", name: "Namık Kemal Üniversitesi" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
