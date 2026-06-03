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
  metadataBase: new URL("https://resat.net"),

  title: {
    default: "RESAT.NET | Canlı Altın ve Döviz Fiyatları",
    template: "%s | RESAT.NET",
  },

  description:
    "Canlı Gram Altın, Çeyrek Altın, Yarım Altın, Tam Altın, Reşat Altın, Cumhuriyet Altını, Ons Altın ve döviz kurlarını takip edin. Grafikler, fiyat alarm sistemi ve güncel piyasa verileri RESAT.NET'te.",

  keywords: [
    "altın fiyatları",
    "canlı altın",
    "gram altın",
    "çeyrek altın",
    "yarım altın",
    "tam altın",
    "reşat altın",
    "resat altın",
    "cumhuriyet altını",
    "ons altın",
    "altın alarmı",
    "altın grafikleri",
    "dolar",
    "euro",
    "canlı döviz",
    "gümüş fiyatları",
    "resat.net",
  ],

  applicationName: "RESAT.NET",
  creator: "RESAT.NET",
  publisher: "RESAT.NET",
  authors: [{ name: "RESAT.NET" }],
  category: "Finance",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  verification: {
    google: "1O86xNx1iKqbbakXJAeNkKj9qxPsFg5i0Mk4AUUenD8",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://resat.net",
  },

  openGraph: {
    title: "RESAT.NET | Canlı Altın ve Döviz Fiyatları",
    description:
      "Canlı altın fiyatları, döviz kurları, grafikler ve fiyat alarm sistemi.",
    url: "https://resat.net",
    siteName: "RESAT.NET",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RESAT.NET | Canlı Altın ve Döviz Fiyatları",
    description:
      "Canlı altın fiyatları, döviz kurları, grafikler ve fiyat alarm sistemi.",
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}