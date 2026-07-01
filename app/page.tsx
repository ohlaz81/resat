import Image from "next/image";
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
    logo: "/images/yenidogan-logo.jpeg",
    logoClassName: "w-[68%]",
    href: "https://yenidogan.net",
  },
  {
    name: "Zurna.TR",
    logo: "/images/zurna-logo.png",
    logoClassName: "w-[75%]",
    href: "https://zurna.tr",
  },
  {
    name: "Sanalsohbet",
    logo: "/images/sanalsohbet-logo.png",
    logoClassName: "w-[75%]",
    href: "https://sanalsohbet.net",
  },
  {
    name: "Fantezi",
    logo: "/images/fantezisohbet-logo.png",
    logoClassName: "w-[75%]",
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
                className="flex h-28 items-center justify-center rounded-2xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={220}
                  height={90}
                  className={`${site.logoClassName} h-auto object-contain`}
                  priority={false}
                />
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
