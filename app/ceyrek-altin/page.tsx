import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Çeyrek Altın Fiyatı Canlı, Güncel Alış Satış | RESAT.NET",
  description:
    "Canlı Çeyrek Altın fiyatı, güncel alış satış fiyatları, yatırım rehberi, altın haberleri ve fiyat alarm sistemi. Çeyrek Altın fiyatlarını anlık takip edin.",
  keywords: [
    "çeyrek altın",
    "çeyrek altın fiyatı",
    "canlı çeyrek altın",
    "çeyrek altın alış satış",
    "güncel çeyrek altın",
    "altın fiyatları",
    "çeyrek altın ne kadar",
    "altın alarmı",
  ],
};

export default function CeyrekAltinPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto p-4">

        <Header />

        <div className="mt-4">
          <GoldCard
  type="ceyrek"
  title="ÇEYREK ALTIN"
/>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-white rounded-3xl shadow p-6">
            <h1 className="text-3xl font-bold mb-4">
              Çeyrek Altın Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Çeyrek Altın fiyatlarını canlı olarak takip edin.
              Türkiye'de düğün, yatırım ve hediye amaçlı en çok tercih edilen
              altın türlerinden biridir. Güncel alış satış fiyatlarını
              RESAT.NET üzerinden anlık görüntüleyebilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Çeyrek Altın Fiyatı Nasıl Hesaplanır?
            </h2>

            <p className="text-gray-700 leading-8">
              Çeyrek Altın fiyatı; ons altın fiyatı, dolar kuru,
              arz-talep dengesi ve kuyumcu piyasasındaki güncel
              fiyatlamalara göre belirlenmektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">
            Çeyrek Altın Yatırım İçin Mantıklı mı?
          </h2>

          <p className="text-gray-700 leading-8">
            Çeyrek Altın, uzun yıllardır yatırımcıların tercih ettiği
            güvenli yatırım araçlarından biridir. Fiziki olarak kolay
            saklanabilmesi ve yüksek likiditeye sahip olması nedeniyle
            yatırım amaçlı tercih edilmektedir.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">
          <h2 className="text-2xl font-bold mb-5">
            İlgili Altın Fiyatları
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <Link href="/resat-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Reşat Altın
            </Link>

            <Link href="/gram-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Gram Altın
            </Link>

            <Link href="/yarim-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Yarım Altın
            </Link>

            <Link href="/tam-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Tam Altın
            </Link>

            <Link href="/cumhuriyet-altini" className="border rounded-2xl p-4 hover:border-yellow-500">
              Cumhuriyet Altını
            </Link>

            <Link href="/ons-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Ons Altın
            </Link>

          </div>

          <div className="mt-6">
            <Link
              href="/fiyat-alarmi"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
            >
              🔔 Çeyrek Altın Alarmı Oluştur
            </Link>
          </div>
        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}