import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Cumhuriyet Altını Fiyatı Canlı, Güncel Alış Satış | RESAT.NET",
  description:
    "Canlı Cumhuriyet Altını fiyatı, güncel alış satış değerleri, yatırım rehberi, altın haberleri ve fiyat alarm sistemi. Cumhuriyet Altını fiyatlarını anlık takip edin.",

  keywords: [
    "cumhuriyet altını",
    "cumhuriyet altını fiyatı",
    "cumhuriyet altını ne kadar",
    "canlı cumhuriyet altını",
    "cumhuriyet altını alış satış",
    "güncel cumhuriyet altını",
    "cumhuriyet altını yatırım",
    "ata altını",
    "altın fiyatları",
    "cumhuriyet altını alarmı",
  ],
};

export default function CumhuriyetAltiniPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto p-4">

        <Header />

        <div className="mt-4">
          <GoldCard
  type="cumhuriyet"
  title="CUMHURİYET ALTINI"
/>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-white rounded-3xl shadow p-6">
            <h1 className="text-3xl font-bold mb-4">
              Cumhuriyet Altını Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Cumhuriyet Altını fiyatlarını canlı olarak takip edin.
              Cumhuriyet Altını Türkiye'de yatırım amaçlı tercih edilen
              en değerli fiziki altın türlerinden biridir. Güncel alış ve
              satış fiyatlarını RESAT.NET üzerinden anlık takip edebilirsiniz.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Cumhuriyet Altını Fiyatı Nasıl Belirlenir?
            </h2>

            <p className="text-gray-700 leading-8">
              Cumhuriyet Altını fiyatı; ons altın fiyatı, dolar kuru,
              uluslararası piyasalardaki gelişmeler ve kuyumculuk
              sektöründeki fiyatlamalar dikkate alınarak belirlenmektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-4">
            Cumhuriyet Altını Yatırım İçin Uygun mu?
          </h2>

          <p className="text-gray-700 leading-8">
            Cumhuriyet Altını uzun vadeli yatırım yapmak isteyen
            yatırımcıların en çok tercih ettiği altın çeşitlerinden biridir.
            Yüksek saflık oranı ve güvenilirliği sayesinde güvenli liman
            olarak kabul edilmektedir.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Cumhuriyet Altını ile Reşat Altın Arasındaki Fark Nedir?
          </h2>

          <p className="text-gray-700 leading-8">
            Cumhuriyet Altını ve Reşat Altın yatırım amaçlı kullanılan
            değerli altın türleri olsa da tasarım, basım dönemi ve
            koleksiyon değeri açısından farklılık gösterebilir.
            Yatırımcılar genellikle güncel fiyat, likidite ve piyasa
            koşullarına göre tercih yapmaktadır.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Cumhuriyet Altını Alırken Nelere Dikkat Edilmeli?
          </h2>

          <p className="text-gray-700 leading-8">
            Güncel fiyatların takip edilmesi, güvenilir kuyumculardan
            alışveriş yapılması ve alış-satış farkının değerlendirilmesi
            önemlidir. Fiziki altın yatırımlarında sertifika ve güvenilir
            kaynaklar tercih edilmelidir.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            İlgili Altın Fiyatları
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <Link
              href="/resat-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500"
            >
              Reşat Altın
            </Link>

            <Link
              href="/gram-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500"
            >
              Gram Altın
            </Link>

            <Link
              href="/ceyrek-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500"
            >
              Çeyrek Altın
            </Link>

            <Link
              href="/yarim-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500"
            >
              Yarım Altın
            </Link>

            <Link
              href="/tam-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500"
            >
              Tam Altın
            </Link>

            <Link
              href="/ons-altin"
              className="border rounded-2xl p-4 hover:border-yellow-500"
            >
              Ons Altın
            </Link>

          </div>

          <div className="mt-6">
            <Link
              href="/fiyat-alarmi"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
            >
              🔔 Cumhuriyet Altını Alarmı Oluştur
            </Link>
          </div>

        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}