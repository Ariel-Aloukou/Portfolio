import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // TODO : remplacer par le domaine définitif du portfolio dès qu'il est connu.
  const baseUrl = "https://greengaz-jet-eta.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
