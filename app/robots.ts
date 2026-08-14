import type { MetadataRoute } from "next";

const SITE_URL = "https://akk10line.com"; // ← satın aldığınız domain ile değiştirin

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
