import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Altan Kaan Kaskan | İş Sağlığı ve Güvenliği Uzmanı",
  description:
    "İnsan Kaynakları İş Sağlığı ve Güvenliği Uzmanı olarak çalışan ilk engelli kişi. Savunucu, konuşmacı ve rol model.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
