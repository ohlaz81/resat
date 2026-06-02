import { XMLParser } from "fast-xml-parser";

export async function GET() {
  try {
    const response = await fetch(
      "https://www.ekonomim.com/rss",
      {
        next: {
          revalidate: 900, // 15 dakika cache
        },
      }
    );

    const xml = await response.text();

    const parser = new XMLParser();
    const json = parser.parse(xml);

    const items = json?.rss?.channel?.item || [];

    const filtered = items
      .filter((item: any) => {
        const text = (item.title || "").toLowerCase();

        return (
          text.includes("altın") ||
          text.includes("gram") ||
          text.includes("ons") ||
          text.includes("fed") ||
          text.includes("faiz") ||
          text.includes("dolar") ||
          text.includes("merkez bankası") ||
          text.includes("enflasyon") ||
          text.includes("piyasa")
        );
      })
      .slice(0, 10)
      .map((item: any) => ({
        id: item.title
          .toLowerCase()
          .replace(/[^a-z0-9ğüşıöç\s]/gi, "")
          .replace(/\s+/g, "-"),

        title: item.title,
        link: item.link,
        date: item.pubDate,
        source: "Ekonomim",
      }));

    return Response.json(filtered);
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}