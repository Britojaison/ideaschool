import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/wp-admin/",
        "/cgi-bin/",
        "/*?*sort=",
        "/*?*filter=",
      ],
    },
    sitemap: "https://www.ideaschool.pro/sitemap.xml",
  };
}
