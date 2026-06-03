import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Gram Altın Fiyatı Canlı | RESAT.NET",
  description:
    "Canlı Gram Altın fiyatı, alış satış fiyatları, güncel piyasa verileri, fiyat alarmı ve altın haberleri.",
};

export default function GramAltinPage() {
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
              Gram Altın Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Gram Altın güncel fiyatlarını canlı olarak takip edin.
              Gram Altın Türkiye'de en çok tercih edilen yatırım
              araçlarından biridir ve yatırımcılar tarafından
              yoğun şekilde takip edilmektedir.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Gram Altın Fiyatı Nasıl Hesaplanır?
            </h2>

            <p className="text-gray-700 leading-8">
              Gram Altın fiyatı; ons altın fiyatı, dolar kuru,
              arz-talep dengesi ve piyasa koşullarına göre
              değişiklik göstermektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">
          <h2 className="text-2xl font-bold mb-5">
            İlgili Altın Fiyatları
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <Link href="/resat-altin" className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition">
              Reşat Altın
            </Link>

            <Link href="/ceyrek-altin" className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition">
              Çeyrek Altın
            </Link>

            <Link href="/yarim-altin" className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition">
              Yarım Altın
            </Link>

            <Link href="/tam-altin" className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition">
              Tam Altın
            </Link>

            <Link href="/cumhuriyet-altini" className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition">
              Cumhuriyet Altını
            </Link>

            <Link href="/ons-altin" className="border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 transition">
              Ons Altın
            </Link>

          </div>

          <div className="mt-6">
            <Link
              href="/fiyat-alarmi"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
            >
              🔔 Fiyat Alarmı Oluştur
            </Link>
          </div>
        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}