import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import GoldCard from "@/components/GoldCard";

export const metadata: Metadata = {
  title: "Reşat Altın Fiyatı Canlı, Güncel Alış Satış | RESAT.NET",
  description:
    "Canlı Reşat Altın fiyatı, güncel alış satış fiyatları, grafikler, yatırım rehberi ve fiyat alarm sistemi. Reşat Altın fiyatlarını anlık takip edin.",
  keywords: [
    "reşat altın",
    "reşat altın fiyatı",
    "canlı reşat altın",
    "reşat altın ne kadar",
    "reşat altın alış satış",
    "reşat altın fiyatları",
    "güncel reşat altın",
    "reşat altını",
  ],
};

export default function ResatAltinPage() {
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
              Reşat Altın Fiyatı
            </h1>

            <p className="text-gray-700 leading-8">
              Reşat Altın güncel fiyatlarını canlı olarak takip edin.
              Reşat Altın, Osmanlı Sultanı Mehmet Reşat döneminde basılan
              ve günümüzde yatırım amacıyla tercih edilen değerli altın
              türlerinden biridir.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Reşat Altın Fiyatı Nasıl Hesaplanır?
            </h2>

            <p className="text-gray-700 leading-8">
              Reşat Altın fiyatı; ons altın fiyatı, dolar kuru,
              arz-talep dengesi ve kuyumculuk piyasasındaki güncel
              fiyatlamalara göre değişiklik göstermektedir.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-4">
            Bugün Reşat Altın Ne Kadar?
          </h2>

          <p className="text-gray-700 leading-8">
            Reşat Altın fiyatı gün içerisinde sürekli değişebilmektedir.
            Güncel Reşat Altın alış ve satış fiyatlarını sayfanın üst
            bölümündeki canlı fiyat kartından takip edebilirsiniz.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Canlı Reşat Altın Fiyatları
          </h2>

          <p className="text-gray-700 leading-8">
            Canlı Reşat Altın fiyatları yatırımcılar tarafından yoğun
            şekilde takip edilmektedir. Altın piyasasında yaşanan
            gelişmeler fiyatlar üzerinde doğrudan etkili olmaktadır.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Reşat Altın Alış ve Satış Fiyatları
          </h2>

          <p className="text-gray-700 leading-8">
            Alış ve satış fiyatları piyasa koşullarına göre değişebilir.
            Yatırımcıların alış-satış farkını dikkate alarak işlem
            yapmaları önemlidir.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Reşat Altın Kaç Gramdır?
          </h2>

          <p className="text-gray-700 leading-8">
            Reşat Altın, Osmanlı döneminden günümüze ulaşan değerli
            altın türlerinden biridir. Gramaj ve saflık oranları,
            fiyat oluşumunda önemli rol oynamaktadır.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Reşat Altın ile Cumhuriyet Altını Arasındaki Farklar
          </h2>

          <p className="text-gray-700 leading-8">
            Reşat Altın ve Cumhuriyet Altını benzer yatırım araçları olsa da
            tarihsel geçmişleri ve tasarımları bakımından farklıdır.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Reşat Altın Yatırım İçin Mantıklı mı?
          </h2>

          <p className="text-gray-700 leading-8">
            Uzun vadeli yatırım düşünen yatırımcılar tarafından tercih
            edilen altın türlerinden biridir. Güvenli liman olarak
            değerlendirilmektedir.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-6">
            Sık Sorulan Sorular
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-bold">
                Reşat Altın ne kadar?
              </h3>

              <p className="text-gray-600 mt-2">
                Güncel Reşat Altın fiyatını sayfanın üst kısmındaki canlı fiyat kartından takip edebilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Reşat Altın yatırım için uygun mu?
              </h3>

              <p className="text-gray-600 mt-2">
                Uzun vadeli yatırımcılar tarafından sık tercih edilmektedir.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Reşat Altın ile Cumhuriyet Altını aynı mı?
              </h3>

              <p className="text-gray-600 mt-2">
                Hayır. Tarihsel kökenleri ve tasarımları farklıdır.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Reşat Altın fiyatı neden değişir?
              </h3>

              <p className="text-gray-600 mt-2">
                Ons altın, dolar kuru ve piyasa koşulları fiyat değişiminde etkili olmaktadır.
              </p>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            İlgili Altın Fiyatları
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <Link href="/gram-altin" className="border rounded-2xl p-4">
              Gram Altın
            </Link>

            <Link href="/ceyrek-altin" className="border rounded-2xl p-4">
              Çeyrek Altın
            </Link>

            <Link href="/yarim-altin" className="border rounded-2xl p-4">
              Yarım Altın
            </Link>

            <Link href="/tam-altin" className="border rounded-2xl p-4">
              Tam Altın
            </Link>

            <Link href="/cumhuriyet-altini" className="border rounded-2xl p-4">
              Cumhuriyet Altını
            </Link>

            <Link href="/ons-altin" className="border rounded-2xl p-4">
              Ons Altın
            </Link>

          </div>

        </div>

        <Footer />
        <BottomNav />

      </div>
    </main>
  );
}