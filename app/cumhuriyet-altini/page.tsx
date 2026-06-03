import { Metadata } from "next";

export const metadata: Metadata = {
title: "Cumhuriyet Altını Fiyatı Canlı | RESAT.NET",
description:
"Canlı Cumhuriyet Altını fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function CumhuriyetAltiniPage() {
return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-6">
Cumhuriyet Altını Fiyatı </h1>

```
  <p className="text-lg text-gray-700 mb-4">
    Cumhuriyet Altını güncel fiyatlarını canlı olarak takip edin.
  </p>

  <div className="bg-white rounded-2xl shadow p-6">
    Buraya Cumhuriyet Altını bileşeni gelecek.
  </div>

  <section className="mt-8 space-y-4">
    <h2 className="text-2xl font-semibold">
      Cumhuriyet Altını Nedir?
    </h2>

    <p>
      Cumhuriyet Altını, Darphane tarafından üretilen ve yatırım amacıyla
      tercih edilen en değerli altın türlerinden biridir.
    </p>

    <h2 className="text-2xl font-semibold">
      Cumhuriyet Altını Fiyatı Nasıl Hesaplanır?
    </h2>

    <p>
      Cumhuriyet Altını fiyatı; gram altın fiyatı, ons altın değeri,
      döviz kuru ve piyasa koşullarına bağlı olarak değişiklik gösterir.
    </p>

    <h2 className="text-2xl font-semibold">
      Cumhuriyet Altını ile Reşat Altın Arasındaki Fark Nedir?
    </h2>

    <p>
      Cumhuriyet Altını ve Reşat Altın benzer yatırım araçları olsa da
      tarihsel kökenleri, tasarımları ve koleksiyon değerleri bakımından
      farklılık gösterebilir.
    </p>
  </section>
</main>
);
}
