import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Ons Altın Fiyatı Canlı, Güncel Alış Satış | RESAT.NET",
  description:
    "Canlı Ons Altın fiyatı, güncel alış satış değerleri, yatırım rehberi, altın haberleri ve fiyat alarm sistemi. Ons Altın fiyatlarını anlık takip edin.",

  keywords: [
    "ons altın",
    "ons altın fiyatı",
    "ons altın ne kadar",
    "canlı ons altın",
    "xau usd",
    "altın ons fiyatı",
    "uluslararası altın fiyatı",
    "ons altın grafiği",
    "altın fiyatları",
    "ons altın alarmı",
  ],
};

export default function OnsAltinPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto p-4">

        <Header />

        <div className="mt-4">
          <GoldCard />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-white rounded-3xl shadow p-6">
            <h1 className="text-3xl font-bold mb-4">
              Ons Altın Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Ons Altın fiyatlarını canlı olarak takip edin.
              Ons Altın, dünya genelinde altın fiyatlarının belirlenmesinde
              kullanılan en önemli referans değerlerden biridir.
              Uluslararası piyasalardaki hareketler doğrudan ons altın
              fiyatına yansımaktadır.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Ons Altın Fiyatı Nasıl Belirlenir?
            </h2>

            <p className="text-gray-700 leading-8">
              Ons Altın fiyatı; küresel ekonomik gelişmeler,
              merkez bankalarının faiz kararları, enflasyon beklentileri,
              jeopolitik riskler ve dolar endeksindeki değişimlere göre
              şekillenmektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-4">
            Ons Altın Nedir?
          </h2>

          <p className="text-gray-700 leading-8">
            Ons, değerli metallerin ölçümünde kullanılan uluslararası bir
            ağırlık birimidir. Bir ons yaklaşık 31,1035 gram altına eşittir.
            Dünya genelinde altın fiyatları ons bazında belirlenmekte ve
            yatırımcılar tarafından yakından takip edilmektedir.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Ons Altın Neden Önemlidir?
          </h2>

          <p className="text-gray-700 leading-8">
            Gram Altın, Çeyrek Altın, Yarım Altın, Tam Altın ve
            Cumhuriyet Altını gibi ürünlerin fiyatları büyük ölçüde
            Ons Altın ve dolar kuru üzerinden hesaplanmaktadır.
            Bu nedenle ons fiyatındaki değişimler tüm altın piyasasını
            doğrudan etkiler.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Ons Altın Yatırımı Mantıklı mı?
          </h2>

          <p className="text-gray-700 leading-8">
            Ons Altın, özellikle küresel ekonomik belirsizlik dönemlerinde
            yatırımcıların güvenli liman olarak yöneldiği yatırım araçlarından
            biridir. Uzun vadeli yatırım stratejilerinde önemli bir yere sahiptir.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            İlgili Altın Fiyatları
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <Link
              href="/resat-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              Reşat Altın
            </Link>

            <Link
              href="/gram-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              Gram Altın
            </Link>

            <Link
              href="/ceyrek-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              Çeyrek Altın
            </Link>

            <Link
              href="/yarim-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              Yarım Altın
            </Link>

            <Link
              href="/tam-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              Tam Altın
            </Link>

            <Link
              href="/cumhuriyet-altini"
              className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition"
            >
              Cumhuriyet Altını
            </Link>

          </div>

          <div className="mt-6">
            <Link
              href="/fiyat-alarmi"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
            >
              🔔 Ons Altın Alarmı Oluştur
            </Link>
          </div>

        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}