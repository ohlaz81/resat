import Header from "../components/Header";
import GoldCard from "../components/GoldCard";
import CurrencyCards from "../components/CurrencyCards";
import GoldList from "../components/GoldList";
import BottomNav from "../components/BottomNav";
import NewsList from "../components/NewsList";
import Footer from "@/components/Footer";

const otherSites = [
  {
    name: "Yenidoğan",
    icon: "❤️",
    href: "https://yenidogan.net",
  },
  {
    name: "Zurna.TR",
    icon: "🎺",
    href: "https://zurna.tr",
  },
  {
    name: "Sanalsohbet",
    icon: "💬",
    href: "https://sanalsohbet.net",
  },
  {
    name: "Fantezi",
    icon: "💜",
    href: "https://fantezisohbet.com",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "RESAT.NET",
    url: "https://resatnet.vercel.app",
    description:
      "Canlı altın fiyatları, döviz kurları, fiyat alarmı ve altın grafikleri.",
    areaServed: "TR",
  };

  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto p-4">
        <Header />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GoldCard />
          </div>

          <div>
            <CurrencyCards />
          </div>
        </div>

        <GoldList />

        <section className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Canlı Altın ve Döviz Fiyatları
          </h1>

          <p className="text-gray-700 leading-7 mb-4">
            RESAT.NET üzerinden Gram Altın, Çeyrek Altın, Yarım Altın,
            Tam Altın, Cumhuriyet Altını, Reşat Altın ve döviz kurlarını
            anlık olarak takip edebilirsiniz.
          </p>

          <p className="text-gray-700 leading-7 mb-4">
            Güncel alış ve satış fiyatları, fiyat grafikleri ve fiyat alarm
            sistemi sayesinde altın ve döviz piyasalarındaki değişimleri
            anında öğrenebilirsiniz.
          </p>

          <p className="text-gray-700 leading-7">
            Reşat Altın fiyatı, Resat Altın fiyatı, Gram Altın ne kadar,
            Çeyrek Altın kaç TL, Yarım Altın kaç TL, Tam Altın kaç TL,
            Cumhuriyet Altını fiyatları ve canlı döviz kurları gibi en çok
            aranan verilere tek sayfadan ulaşabilirsiniz.
          </p>
        </section>

        <NewsList />

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Diğer Sitelerimiz
          </h2>

          <div className="grid grid-cols-4 gap-2">
            {otherSites.map((site) => (
              <a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} sitesini aç`}
                className="flex h-24 flex-col items-center justify-center rounded-2xl bg-white p-3 text-gray-900 shadow-sm transition-all md:h-28 md:p-5 md:hover:scale-[1.02] md:hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center text-3xl"
                >
                  {site.icon}
                </span>
                <span className="mt-2 text-center text-[11px] font-semibold leading-tight">
                  {site.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        <Footer />

        <BottomNav />
      </div>
    </main>
  );
}
