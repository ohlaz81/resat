import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Tam Altın Fiyatı Canlı, Güncel Alış Satış | RESAT.NET",
  description:
    "Canlı Tam Altın fiyatı, güncel alış satış değerleri, yatırım rehberi, altın haberleri ve fiyat alarm sistemi. Tam Altın fiyatlarını anlık takip edin.",

  keywords: [
    "tam altın",
    "tam altın fiyatı",
    "tam altın ne kadar",
    "canlı tam altın",
    "tam altın alış satış",
    "güncel tam altın",
    "tam altın yatırım",
    "altın fiyatları",
    "tam altın alarmı",
  ],
};

export default function TamAltinPage() {
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
              Tam Altın Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Tam Altın fiyatlarını canlı olarak takip edin.
              Tam Altın, yüksek değerli yatırım araçlarından biri olup
              uzun vadeli birikim yapmak isteyen yatırımcılar tarafından
              tercih edilmektedir.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Tam Altın Fiyatı Nasıl Hesaplanır?
            </h2>

            <p className="text-gray-700 leading-8">
              Tam Altın fiyatı; ons altın fiyatı, döviz kuru,
              küresel piyasalardaki gelişmeler ve kuyumculuk sektöründeki
              güncel fiyatlamalar dikkate alınarak belirlenmektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">
            Tam Altın Yatırımı Mantıklı mı?
          </h2>

          <p className="text-gray-700 leading-8">
            Tam Altın, yüksek gramaja sahip olması nedeniyle özellikle
            uzun vadeli yatırım yapmak isteyen yatırımcılar tarafından
            tercih edilmektedir. Fiziki altın yatırımları arasında güvenli
            liman olarak kabul edilen seçeneklerden biridir.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Tam Altın Alırken Nelere Dikkat Edilmeli?
          </h2>

          <p className="text-gray-700 leading-8">
            Tam Altın alırken güncel fiyatların takip edilmesi,
            güvenilir satıcılardan alışveriş yapılması ve alış-satış
            farkının değerlendirilmesi önemlidir.
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

            <Link href="/yarim-altin" className="border rounded-2xl p-4 hover:border-yellow-500">
              Yarım Altın
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
              🔔 Tam Altın Alarmı Oluştur
            </Link>
          </div>
        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}