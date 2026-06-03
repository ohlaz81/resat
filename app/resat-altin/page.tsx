import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reşat Altın Fiyatı Canlı | RESAT.NET",
  description:
    "Canlı Reşat Altın fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function ResatAltinPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Reşat Altın Fiyatı
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        Reşat Altın güncel fiyatlarını canlı olarak takip edin.
      </p>

      <div className="bg-white rounded-2xl shadow p-6">
        Buraya Reşat Altın bileşeni gelecek.
      </div>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">
          Reşat Altın Nedir?
        </h2>

        <p>
          Reşat Altın Osmanlı döneminden günümüze ulaşan yatırım ve koleksiyon amaçlı kullanılan değerli altın türlerinden biridir.
        </p>

        <h2 className="text-2xl font-semibold">
          Reşat Altın Fiyatı Nasıl Hesaplanır?
        </h2>

        <p>
          Reşat Altın fiyatları altının ons fiyatı, dolar kuru ve piyasa koşullarına göre değişiklik gösterir.
        </p>
      </section>
    </main>
  );
}