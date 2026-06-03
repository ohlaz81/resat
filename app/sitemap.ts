import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://resatnet.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/haberler`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/gram-altin`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/ceyrek-altin`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/yarim-altin`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/tam-altin`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/resat-altin`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/cumhuriyet-altini`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/ons-altin`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/grafikler`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/fiyat-alarmi`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}