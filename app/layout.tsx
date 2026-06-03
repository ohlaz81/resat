import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resatnet.vercel.app"),

  title: {
    default: "RESAT.NET | Güncel Altın ve Döviz Fiyatları",
    template: "%s | RESAT.NET",
  },

  description:
    "Canlı altın fiyatları, Reşat Altın, Cumhuriyet Altını, Gram Altın, Çeyrek Altın, Ons Altın, döviz kurları ve değerli metaller. Güncel fiyatlar, grafikler ve fiyat alarm sistemi.",

  keywords: [
    "altın fiyatları",
    "canlı altın",
    "reşat altın",
    "gram altın",
    "çeyrek altın",
    "yarım altın",
    "tam altın",
    "cumhuriyet altını",
    "ons altın",
    "döviz",
    "usd",
    "euro",
    "gümüş",
    "altın alarmı",
    "altın grafikleri",
    "canlı döviz",
    "resat.net",
  ],

  authors: [{ name: "RESAT.NET" }],
  creator: "RESAT.NET",
  publisher: "RESAT.NET",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "RESAT.NET | Güncel Altın ve Döviz Fiyatları",
    description:
      "Canlı altın, döviz ve değerli metal fiyatlarını takip edin. Grafikler ve fiyat alarm sistemi ile anlık bildirim alın.",
    url: "https://resatnet.vercel.app",
    siteName: "RESAT.NET",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RESAT.NET",
    description:
      "Canlı altın ve döviz fiyatları, grafikler ve fiyat alarm sistemi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}