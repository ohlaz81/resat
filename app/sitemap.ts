import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://resatnet.vercel.app",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://resatnet.vercel.app/grafikler",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://resatnet.vercel.app/fiyat-alarmi",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}