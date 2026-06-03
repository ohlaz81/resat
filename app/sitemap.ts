import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://resat.net";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },

    {
      url: `${baseUrl}/resat-altin`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.95,
    },

    {
      url: `${baseUrl}/gram-altin`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/ceyrek-altin`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/yarim-altin`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/tam-altin`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/cumhuriyet-altini`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/ons-altin`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/grafikler`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/fiyat-alarmi`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}