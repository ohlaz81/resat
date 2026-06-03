import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Yarım Altın Fiyatı Canlı, Güncel Alış Satış | RESAT.NET",
  description:
    "Canlı Yarım Altın fiyatı, güncel alış satış değerleri, yatırım rehberi, altın haberleri ve fiyat alarm sistemi. Yarım Altın fiyatlarını anlık takip edin.",

  keywords: [
    "yarım altın",
    "yarım altın fiyatı",
    "yarım altın ne kadar",
    "canlı yarım altın",
    "yarım altın alış satış",
    "güncel yarım altın",
    "yarım altın yatırım",
    "altın fiyatları",
    "yarım altın alarmı",
  ],
};

export default function YarimAltinPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto p-4">

        <Header />

        <div className="mt-4">
          <GoldCard
  type="yarim"
  title="YARIM ALTIN"
/>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-white rounded-3xl shadow p-6">
            <h1 className="text-3xl font-bold mb-4">
              Yarım Altın Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Yarım Altın fiyatlarını canlı olarak takip edin.
              Yarım Altın, Türkiye'de yatırım ve tasarruf amacıyla
              tercih edilen en popüler altın türlerinden biridir.
              Güncel alış ve satış fiyatlarını RESAT.NET üzerinden
              anlık olarak görüntüleyebilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Yarım Altın Fiyatı Nasıl Belirlenir?
            </h2>

            <p className="text-gray-700 leading-8">
              Yarım Altın fiyatları; ons altın fiyatı, dolar kuru,
              uluslararası piyasalardaki gelişmeler ve kuyumcu
              piyasasındaki arz-talep dengesi dikkate alınarak
              belirlenmektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">
            Yarım Altın Yatırım İçin Uygun mu?
          </h2>

          <p className="text-gray-700 leading-8">
            Yarım Altın uzun vadeli yatırım düşünen yatırımcılar için
            güvenli liman olarak görülmektedir. Fiziki altın yatırımı
            yapmak isteyenler tarafından sık tercih edilir ve yüksek
            likidite avantajı sunar.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Yarım Altın Alırken Nelere Dikkat Edilmeli?
          </h2>

          <p className="text-gray-700 leading-8">
            Yarım Altın alırken güncel piyasa fiyatlarının takip edilmesi,
            güvenilir kuyumculardan alışveriş yapılması ve alış-satış
            makasının değerlendirilmesi önemlidir.
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

            <Link href="/ceyrek-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Çeyrek Altın
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
              🔔 Yarım Altın Alarmı Oluştur
            </Link>
          </div>
        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}