import Link from "next/link";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hikayem", href: "/story" },
  { label: "Kariyer ve Eğitim Hayatım", href: "/career" },
  { label: "İletişim", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-200 py-12 px-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-white font-bold text-lg mb-1">Altan Kaan Kaskan</p>
          <p className="text-blue-400 text-sm">
            İş Sağlığı ve Güvenliği Uzmanı · Engelli Hakları Savunucusu
          </p>
        </div>

        <ul className="flex flex-col gap-2 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-blue-500 text-xs mt-4 md:mt-0 self-end">
          © {new Date().getFullYear()} Altan Kaan Kaskan. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
