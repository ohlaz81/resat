import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reşat Altın Fiyatı Canlı | RESAT.NET",
  description:
    "Canlı Reşat Altın fiyatı, alış satış fiyatları, güncel piyasa verileri, fiyat alarmı ve altın haberleri.",
};

export default function ResatAltinPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">
            Reşat Altın Fiyatı
          </h1>

          <p className="text-gray-600 text-lg">
            Reşat Altın güncel alış satış fiyatlarını canlı olarak takip edin.
          </p>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="text-gray-500 text-sm">
              Güncel Reşat Altın
            </div>

            <div className="text-5xl font-bold text-amber-600 mt-2">
              Canlı Veri
            </div>

            <div className="text-sm text-gray-500 mt-2">
              Ana sayfadaki fiyat verileri ile senkron çalışacaktır.
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/fiyat-alarmi"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              🔔 Fiyat Alarmı Oluştur
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Reşat Altın Nedir?
          </h2>

          <p className="text-gray-700 leading-8">
            Reşat Altın, Osmanlı Sultanı V. Mehmet Reşat döneminde basılan ve
            günümüzde yatırım amacıyla tercih edilen değerli altın türlerinden
            biridir. Türkiye'de yatırımcılar tarafından yoğun şekilde takip
            edilmektedir.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Reşat Altın Fiyatı Nasıl Hesaplanır?
          </h2>

          <p className="text-gray-700 leading-8">
            Reşat Altın fiyatı; ons altın fiyatı, dolar kuru, piyasa arz-talep
            dengesi ve kuyumculuk sektöründeki güncel fiyatlamalara göre
            değişiklik göstermektedir.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4">
            İlgili Altın Fiyatları
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <Link href="/gram-altin" className="p-4 rounded-xl border hover:border-amber-500">
              Gram Altın Fiyatı
            </Link>

            <Link href="/ceyrek-altin" className="p-4 rounded-xl border hover:border-amber-500">
              Çeyrek Altın Fiyatı
            </Link>

            <Link href="/yarim-altin" className="p-4 rounded-xl border hover:border-amber-500">
              Yarım Altın Fiyatı
            </Link>

            <Link href="/tam-altin" className="p-4 rounded-xl border hover:border-amber-500">
              Tam Altın Fiyatı
            </Link>

            <Link href="/cumhuriyet-altini" className="p-4 rounded-xl border hover:border-amber-500">
              Cumhuriyet Altını Fiyatı
            </Link>

            <Link href="/ons-altin" className="p-4 rounded-xl border hover:border-amber-500">
              Ons Altın Fiyatı
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}