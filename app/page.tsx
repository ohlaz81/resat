import Header from "../components/Header";
import GoldCard from "../components/GoldCard";
import CurrencyCards from "../components/CurrencyCards";
import GoldList from "../components/GoldList";
import BottomNav from "../components/BottomNav";
import NewsList from "../components/NewsList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
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

        {/* SEO ALANI */}
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
            Çeyrek Altın kaç TL, Cumhuriyet Altını fiyatları ve canlı döviz
            kurları gibi en çok aranan verilere tek sayfadan ulaşabilirsiniz.
          </p>
        </section>

        <NewsList />

        <Footer />

        <BottomNav />
      </div>
    </main>
  );
}